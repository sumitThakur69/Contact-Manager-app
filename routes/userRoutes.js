import express from 'express';
import { loginUser, registerUser, Userprofile } from '../controllers/userControllers.js';
import validateToken from '../middlewares/validationToken.js';

const Router = express.Router();

// Import user controllers

Router.post('/register', registerUser);

Router.post('/login', loginUser);

Router.get('/profile', validateToken , Userprofile);

export default Router;