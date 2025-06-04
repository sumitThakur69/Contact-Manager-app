import express from 'express';

const Router = express.Router();

Router.get("/" , (req, res) => {
  res.status(200).json({ message : "Get All constacts"});
})

Router.post("/" , (req, res) => {
  res.status(200).json({ message : "Get All constacts"});
})

Router.get("/:id" , (req, res) => {
  res.status(200).json({ message : `Get contact with id ${req.params.id}`});
})

Router.put("/:id" , (req, res) => {
  res.status(200).json({ message : `Update contact with id ${req.params.id}`});
})

Router.delete("/:id" , (req, res) => {
  res.status(200).json({ message : `Delete contact with id ${req.params.id}`});
})

export default Router