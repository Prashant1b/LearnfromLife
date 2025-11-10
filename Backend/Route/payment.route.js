import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";

const router = express.Router();

// ✅ Load Razorpay keys safely
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_test_yourTestKeyHere";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "yourTestSecretHere";

// ✅ Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

// 🧾 Route: Create Razorpay Order
router.post("/order", async (req, res) => {
  try {
    const { amount } = req.body;
    console.log("📦 Payment Request:", req.body);

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ success: false, message: "Invalid amount provided" });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay expects paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    console.log("🟢 Creating Razorpay order:", options);

    const order = await razorpay.orders.create(options);
    console.log("✅ Razorpay order created:", order);

    return res.status(200).json({
      success: true,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("❌ Error creating Razorpay order:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
});

// 🔒 Route: Verify Razorpay Payment
router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    console.log("🔍 Verifying payment:", req.body);

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment verification fields",
      });
    }

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      console.log("✅ Payment verified successfully");
      return res.json({ success: true, message: "Payment verified successfully" });
    } else {
      console.warn("⚠️ Invalid payment signature");
      return res.json({ success: false, message: "Invalid payment signature" });
    }
  } catch (error) {
    console.error("❌ Error verifying payment:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: error.message,
    });
  }
});

export default router;
