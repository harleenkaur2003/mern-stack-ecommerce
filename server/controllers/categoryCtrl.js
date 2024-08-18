
const Category = require("../models/categoryModel")

const categoryCtrl= {
    getCategories: async (req,res)=>{
        try{
            const categories= await Category.find()
            res.json(categories)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
        res.json('category Test Ctrl')
    },
    createCategory:async (req,res) =>{
        try{

            const {name} =req.body;
            const category= await category.findOne({name})
            if(category) return res.status(400).json({msg:"category already exists"})
                
            const newCategory = new Category({name})
            
            await newCategory.save()
            res.json({msg:"created a category"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deleteCategory: async(req,res) =>{
        try{
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:"deleted a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateCategory: async(req,res)=>{
        try{
            const {name} = req.body
            await Category.findByIdAndUpdate({_id:req.params.id},{name})

            res.json({msg:"updated"})
        }catch(err){
            return res.status(500).json({msg:err.message })
        }
    }
}

module.exports= categoryCtrl