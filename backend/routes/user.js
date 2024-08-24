const express = require("express");
const userRouter = express.Router();

// fetch the login and signup function
const {sendOtp, signUp, logIn, changePassword} = require("../controllers/AuthController");
const {isAuth, isStudent, isInstructor} = require("../middleware/Auth");
const {updateProfile, deleteProfile} = require("../controllers/Profile");
const {resetPasswordToken, resetPassword} = require("../controllers/ResetPassword");

// login
userRouter.post("/login",logIn);
// sendotp and signup page
userRouter.post("/sendOtp", sendOtp);
userRouter.post("/sign-up",signUp);
// forget password
userRouter.post("/resetPasswordToken",resetPasswordToken);
userRouter.post("/resetPassword",resetPassword)
// profile change password
userRouter.post("/changePassword", changePassword);

// profile change using update function
userRouter.put("/updateProfile", updateProfile);

// profile deleteing using delete function 
userRouter.delete("/deletProfile", deleteProfile);

userRouter.get("/student",isAuth,isStudent, (req,res)=>{

    return  res.status(200).json({
        success:true,
        message:"Student logged in successfully"
    })
});
userRouter.get("instructor", isAuth, isInstructor, (req,res)=>{

    return  res.status(200).json({
        success:true,
        message:"Instructor logged in successfully"
    })
})



module.exports = userRouter

