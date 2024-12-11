const express=require('express');
const app=express();
const userModel=require('./model/users')
const dbConnection=require('./config/db')
const bcrypt=require('bcrypt');


app.use(express.json()); // by using this the form data show in backend
app.use(express.urlencoded({extended: true})) // 3rd middleware 

app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/get-user',(req,res)=>{
    userModel.find().then((user)=>{
        res.send(user);
    })
})

app.post('/sign-in',async(req,res)=>{
    console.log(req.body);
    const {FirstName,LastName,Email,Password}=req.body
    const newUser = await userModel.create({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password
        
    });
    
    res.send(newUser);
})
app.listen(4500,function(){
    console.log("-------server start-------")
})