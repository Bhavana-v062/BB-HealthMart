const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");  // Added bcrypt for password hashing

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 3001;

// MongoDB Connection
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log("DB Connection Error:", err));

// -----------------------
// User Schema
// -----------------------
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { type: String, required: true },
  image: String,
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// -----------------------
//  Product Schema
// -----------------------
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  image: String,
  price: { type: Number, required: true },
  description: String,
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

// -----------------------
// API Endpoints
// -----------------------

app.get("/", (req, res) => {
  res.send("Server is running");
});

// -----------------------
//  Sign Up Route
// -----------------------
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, image } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered", alert: false });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image
    });

    await newUser.save();

    res.status(201).json({ message: "Successfully signed up", alert: true });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal server error", alert: false });
  }
});

// -----------------------
//  Login Route
// -----------------------
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up.", alert: false });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials", alert: false });
    }

    // Send user data (excluding password)
    const dataSend = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
    };

    res.status(200).json({
      message: "Login successful",
      alert: true,
      data: dataSend,
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error", alert: false });
  }
});

// -----------------------
//  Upload Product Route
// -----------------------
app.post("/uploadProduct", async (req, res) => {
  const { name, category, image, price, description } = req.body;

  try {
    const newProduct = new Product({
      name,
      category,
      image,
      price,
      description
    });

    await newProduct.save();

    res.status(201).json({ message: "Product uploaded successfully" });

  } catch (error) {
    console.error("Upload Product Error:", error);
    res.status(500).json({ message: "Failed to upload product" });
  }
});

// -----------------------
//  Get All Products Route
// -----------------------
app.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);

  } catch (error) {
    console.error("Fetch Product Error:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// -----------------------
//Start Server
// -----------------------
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
