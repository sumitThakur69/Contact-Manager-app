import express from 'express';
import { loginUser, registerUser, Userprofile } from '../controllers/userControllers.js';

const Router = express.Router();

// Import user controllers

Router.post('/register', registerUser);

Router.post('/login', loginUser);

Router.get('/profile', Userprofile);

export default Router;