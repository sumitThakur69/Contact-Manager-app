import express from 'express';
import { createContacts, getContacts , getContact , updateContact , deleteContact } from '../controllers/contactControllers.js';
const Router = express.Router();

Router.get("/" , (getContacts));

Router.post("/" , (createContacts))

Router.get("/:id" , (getContact));

Router.put("/:id" , (updateContact))

Router.delete("/:id" , (deleteContact))

export default Router