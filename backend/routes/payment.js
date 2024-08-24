const  express  = require("express");
const paymentRouter = express.Router();

const {capturePayment, verifySignature} = require("../controllers/Payment");

// payment from the razorpay , fetching the data
paymentRouter.post("/capturePayment", capturePayment);
// payment done successfully  after the payment is done and checking process 
paymentRouter.get("/verifySignature", verifySignature);


module.exports = paymentRouter;