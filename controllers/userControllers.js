import expressAsyncHandler from "express-async-handler";
import User from "../models/user.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
//@decs register a user
//@access public
//@route post/api/users/register 
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword :", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`user Created : ${user}`);
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@decs login a user
//@access public
//@route post/api/users/login
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );

    res.status(200).json({
      message: "User logged in successfully",
      accessToken,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");                              
  }
});

//@decs login a user
//@access public
//@route post/api/users/profile
export const Userprofile = expressAsyncHandler(async (req, res) => {
  res.json(req.user); // ✅ Return user info from the request object
});
