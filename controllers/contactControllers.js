import expressAsyncHandler from "express-async-handler";
import  Contact  from "../models/contact.Model.js";
//@decs of all contact
//@access public
//@route GET/api/contacts
export const getContacts = expressAsyncHandler ( async (req, res) => {
  const contacts = await Contact.find({userId: req.user.id});
  res.status(200).json(contacts);
})

//@decs of crearte new contact
//@access public 
//@route POST/api/contacts
export const createContacts =  expressAsyncHandler (async (req , res) => {
  console.log("The request of Body :",req.body);
  const {name , email , phone} = req.body;
  if(!name || !email || !phone){
    return res.status(400).json({message: "Please fill all the fields"});
    throw new Error("Please fill all the fields");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    userId: req.user.id
  });
  res.status(201).json(contact);
});

//@decs of GET single contact
//@access public 
//@route GET/api/contacts/":id"
export const getContact = expressAsyncHandler (async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    return res.status(404).json({message: "Contact not found"});
    throw new Error("Contact not found");
  }
  res.status(201).json(contact);
});

//@decs of update a contact
//@access public 
//@route PUT/api/contacts
export const updateContact = expressAsyncHandler (async (req , res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    return res.status(404).json({message: "Contact not found"});
    throw new Error("Contact not found");
  }
  if(contact.userId.toString() !== req.user.id){
    return res.status(403).json({message: "User not authorized"});
    throw new Error("User not authorized");
  }

  const updatedcontact = await Contact.findByIdAndUpdate(req.params.id, req.body
    , { new: true, runValidators: true }
  )
  res.status(201).json(updatedcontact);
});

//@desc Delete a contact
//@access private
//@route DELETE /api/contacts/:id
export const deleteContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User not authorized");
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Deleted contact with id ${req.params.id}` });
});




