import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import  connectDB from "./config/dbconnection.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config(); 

const app = express();

app.use(express.json()); // encoded json formate readable 
app.use("/api/contacts", contactRoutes); //constact save
app.use("/api/users", userRoutes); // user 
app.use(errorHandler); // 

connectDB() 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});
