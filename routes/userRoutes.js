import express from 'express';

const Router = express.Router();

// Import user controllers

Router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully' });
});

Router.post('/login', (req, res) => {
  res.json({ message: 'User logged in successfully' });
});

Router.get('/profile', (req, res) => {
  res.json({ message: 'User profile data' });
});

export default Router;