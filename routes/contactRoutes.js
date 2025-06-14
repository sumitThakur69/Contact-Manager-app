import express from 'express';
import { createContacts, getContacts , getContact , updateContact , deleteContact } from '../controllers/contactControllers.js';
import validateToken from '../middlewares/validationToken.js';
const Router = express.Router();

Router.use(validateToken);

Router.get("/" , (getContacts));

Router.post("/" , (createContacts))

Router.get("/:id" , (getContact));

Router.put("/:id" , (updateContact))

Router.delete("/:id" , (deleteContact))

export default Router