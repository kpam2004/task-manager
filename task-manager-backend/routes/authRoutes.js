const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req,res)=>{
  const {name,email,password} = req.body;

  const existingUser = await User.findOne({email});
  if(existingUser) return res.status(400).json({msg:"User already exists"});

  const hashed = await bcrypt.hash(password,10);

  const user = new User({name,email,password:hashed});
  await user.save();

  res.json({msg:"User registered"});
});

// Login
router.post("/login", async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user) return res.status(400).json({msg:"User not found"});

  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({msg:"Wrong password"});

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

  res.json({token,user});
});

module.exports = router;
