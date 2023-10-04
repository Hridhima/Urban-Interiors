const express= require('express')
const app = express()
const mongoose = require("mongoose")
var jwt = require('jsonwebtoken');
const bodyParser = require("body-parser")
const bcrypt = require('bcryptjs');
const Contactmodel = require("./models/Contactus")
const UserRegmodel = require("./models/UserReg")
const cors = require('cors')
var multer = require('multer')

// .......................mongodb connect database............
mongoose.connect("mongodb+srv://admin7888:admin7888@cluster0.eyspn2p.mongodb.net/arkitecture?retryWrites=true&w=majority",{
    useNewUrlParser:true,
})

//............................................................

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("this is home page")
})
// ................contact data.................
app.post("/contactdata",async(req,res)=>{
    var name=req.body.username;
    var email=req.body.email;
    var phone=req.body.phone;
    var subject=req.body.subject;
    var message=req.body.message;

    const contact=new Contactmodel({
        userName:name,
        userEmail:email,
        userPhone:phone,
        userSubject:subject,
        userMessage:message
    });

    try{
        await contact.save()
        res.status(200).send("data save succesfully");
    }catch(err){
        console.log(err);
    res.status(200).send('Email Already exits');
    }
})
// ...................................user registration form...........

app.post("/userdata",async(req,res)=>{
    var name=req.body.username;
    var email=req.body.email;
    var phone=req.body.phone;
    var password=req.body.password;
    var city=req.body.city;
    var state=req.body.state;
    var message=req.body.message;

    var erptPassword=await bcrypt.hash(password,10);
    const user=new UserRegmodel({
        userName:name,
        userEmail:email,
        userPhone:phone,
        userPassword:erptPassword,
        userCity:city,
        userState:state,
        userMessage:message
    });

    try{
        await user.save()
        res.status(200).send("Registration Succesfully Please Login");
    }catch(err){
        console.log(err);
    res.status(200).send('Email Already exits');
    }
})

// .....................user Login Now.........
const JWT_SECRET="thisismynmefdvnnbascaglkbrmprgbpmrt|2123[]ibonswgugykippkpukpku";
app.post("/loginnow",async(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    const user =await UserRegmodel.findOne({userEmail:email})

    if(!user){
        return res.send("user does not exits")
    }
   if(await bcrypt.compare(password,user.userPassword)){
        const token=jwt.sign({},JWT_SECRET)
        if(res.status(201)){
            return res.json({status:"success",token:token,usermail:email})
        }
        else{
            return res.json({status:"error"})
        }
   }
    res.json({status:"Invalid User Name and Password"})
})
// ..................login end..............
//........................................
app.listen(3001,()=>{
    console.log('http://localhost:3001/')
})