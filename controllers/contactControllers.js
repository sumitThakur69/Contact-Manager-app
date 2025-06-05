//@decs of all contact
//@access public
//@route GET/api/contacts
export const getContacts = (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
}

//@decs of crearte new contact
//@access public 
//@route POST/api/contacts
export const createContacts = (req , res) => {
  console.log("The request of Body :",req.body);
  const {name , email , phone} = req.body;
  if(!name || !email || !phone){
    return res.status(400).json({message: "Please fill all the fields"});
    throw new Error("Please fill all the fields");
  }
  res.status(201).json({ message: "Create a contact" });
}

//@decs of GET single contact
//@access public 
//@route GET/api/contacts/":id"
export const getContact = (req, res) => {
  res.status(201).json({ message: `Get contact with id ${req.params.id}` });
}

//@decs of update a contact
//@access public 
//@route PUT/api/contacts
export const updateContact = (req , res) => {
  res.status(201).json({ message: `Upadte Contact with id ${req.params.id}` });
}

//@decs of delete a contact
//@access public 
//@route DELETE/api/contacts/":id"
export const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
}



