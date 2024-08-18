const Users=require('../models/userModel')
const jwt=require('jsonwebtoken')
const bcrypt= require('bcrypt')

const userCtrl={
    resgister :async(req,res)=>{
        try{
            const {name,email, password}=req.body;
            const user=await Users.findOne({email})
            if(user) return res.status(400).json({msg:"Email Already registered"})

            if(password.length <6)
                return res.status(400).json({msg: "Password is atleast 6 character long"})

            const passwordHash=await bcrypt.hash(password,10)

            const newUser= new Users({
                name,email,password:passwordHash
            })
            //save mongodb
            await newUser.save()

            //create jwt to authenticate
            const accesstoken= createAccessToken({id:newUser._id})
            const refreshtoken= createRefreshToken({id: newUser._id})
            
            res.cookie('refreshtoken', refreshtoken,{
                httpOnly:true,
                path:'/user/refresh_token'
            })
            res.json({accesstoken})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }    
    },
    refreshtoken: async(req,res)=>{

        try{
            const rf_token= req.cookies.refreshtoken; 

            if(!rf_token) return res.status(400).json({msg: " Please login or Register"})

            jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
                if(err) return res.status(400).json({msg: "Please login or Register"})
                const accesstoken=createAccessToken({id:user.id}) 
            res.json({accesstoken})  
        })
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        } 
    },


    login: async(req,res)=>{
        try{
            const{email,password}=req.body;
            
            const user=await Users.findOne({email})

            if(!user) return res.status(400).json({msg:"user does not exist"})

            const isMatch= await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({msg:"incorrect password"});

            const accesstoken= createAccessToken({id: newUser._id})
            const refreshtoken= createRefreshToken({id: newUser._id })

            res.cookie('refreshtoken',refreshtoken),{
                httpOnly:true,
                path: '/user/refresh_token'
            }

           res.json({accesstoken})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    logout:async(req,res)=>{
        try{
            res.clearCookie('refreshtoken',{path:'/user/refressh_token'})
            return res.json({msg:'Log out'})
        }
        catch(err){
            
        }
    },
    getUser: async(req,res)=>{
        try{
            const user=await Users.findById(req.user.id).select('-password')

            if(!user) return res.status(400).json({msg:"user not found"})
            res.json(user)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

const createAccessToken =(payLoad)=>{
    return jwt.sign(payLoad,process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1d'}) 
}

const createRefreshToken =(payLoad)=>{
    return jwt.sign(payLoad,process.env.REFRESH_TOKEN_SECRET, {expiresIn:'7d'}) 
}
module.exports= userCtrl