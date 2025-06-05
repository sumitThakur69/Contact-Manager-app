import expressAsyncHandler from "express-async-handler";
//@decs register a user
//@access public
//@route post/api/users/register
export const registerUser = expressAsyncHandler ( async (req, res) => {
  res.json({ message: 'User registered successfully' });
});

//@decs login a user
//@access public
//@route post/api/users/login
export const loginUser = expressAsyncHandler ( async (req, res) => {
  res.json({ message: 'User logged in successfully' });
});

//@decs login a user
//@access public
//@route post/api/users/profile
export const Userprofile = expressAsyncHandler ( async (req, res) => {
  res.json({ message: 'User profile data' });
});
