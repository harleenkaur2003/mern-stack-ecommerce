const jwt=require('jsonwebtoken')

const auth= (req,res)=>{
    try{
        const token= req.header("authorization")
        console.log(token)
        if(!token) return res.status(400).json({masg:"Invalid Authentication"})
        
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.status(400).json({msg:"Inavalid authentication"})
            
            req.user = user
            next()
        })
        }
    catch(err){
        return res.status(500).json({msg:err.message})
    }
}
module.exports = auth