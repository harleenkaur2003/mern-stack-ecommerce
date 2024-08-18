const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const cookieParser= require('cookie-parser')

const app=express();

app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:'This is Example'})
})

app.listen(PORT,()=>{
    console.log("SEREVR IS RUNNING")
})

app.use('/users',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))



const URI= process.env.MONGODB_URL;

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongodb connected")
}).catch(err =>{
    console.log(err);
})