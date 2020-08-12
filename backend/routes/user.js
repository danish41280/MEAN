//password hashing : please first install (npm i bcryptjs and then code here!)
const bcrypt= require("bcryptjs");
//web token : please first install (npm i jsonwebtoken and the code here!)
const jwt = require("jsonwebtoken");

const router = require('express').Router();

const User = require('../model/User');

router.post("/register",async (req,res)=>{
//if email already exist in the database
const emailExit= await User.findOne({
    email : req.body.email
});
if(emailExit)return res.status(400).send("Email is already exist please try different email.!")


//hash password 
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password,salt);
const hashed2Password = await bcrypt.hash(req.body.cpass,salt);



//create new user
    const user = new User({
        username : req.body.username,
        email :  req.body.email,
        password :  hashedPassword,
        cpass :  hashed2Password
    });
    try{
        if(user.password!=user.cpass)
        {
            res.send("Password & Confirmed Password not match!");
        }
        else
        {
        const saveUser = await user.save();
        res.send("User Registered! by this id "+saveUser.email);
        }

    }
    catch(error){
        res.status(400).send(error);

    }
});



//user login


router.post("/login",async(req,res)=>{
    
    //checking user email id in database
    const user= await User.findOne({
        email : req.body.email
    })
    if(!user)return res.status(400).send("Email does'nt Exist in database (Email Wrong!)");
    
    //checking password
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass)return res.status(400).send("Invalid Password!");

    //All information is correct then
    //create and assign a token
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header("auth-token",token).send({token:token});

});

module.exports = router