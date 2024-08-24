const express = require("express");
const app = express();

// cors for the  connectivity between frontend and backend

// fetching data from  .env
require("dotenv").config();
const port = process.env.PORT || 4000;

// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// body parser
app.use(express.json());

// cloudinary
const connectCloudinary  =  require("./config/cloudinary");
connectCloudinary();

// database
const dbConnect = require("./config/database");
dbConnect();

// ********************************razorpay auth pending*************************
const paymentConnect = require("./config/razorpayAuth");
paymentConnect();

// routers for user
const userRouter = require("./routes/user");
app.use("/api/v1/userRouter", userRouter);

// routers for courses
const courseRouter = require("./routes/course");
app.use("/api/v1/courseRouter", courseRouter);

// routers for contact us
const contactUs = require("./routes/contactUs");
app.use("/api/v1/contactUs", contactUs);

// routers for payment ********** router is pending**********
const paymentRouter = require("./routes/payment");
app.use("/api/v1/paymentRouter", paymentRouter);

// listen to server
app.listen(port, ()=>{
    console.log(`server is live at port number ${port}`)
})

// default page
app.get("/", (req,res)=>{

    res.send(`<h1>Home page.........</h1>`)
})

