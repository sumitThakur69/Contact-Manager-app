import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from '../Contact manager app/routes/contactRoutes.js';

dotenv.config({
    path: './env'
})

const app = express();

app.use("/api/contacts", contactRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});