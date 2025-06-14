const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const cookieParser= require('cookie-parser')
const path = require('path')

const app=express();
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:'This is Example'})
})


app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))

app.use('/api',require('./routes/productRouter'))
const uploadRouter = require('./routes/uploadRouter');
app.use('/api/upload', uploadRouter);


const URI= process.env.MONGODB_URL;

mongoose.connect(URI,{
    
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongodb connected")
}).catch(err =>{
    console.log(err);
})
app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING")
})