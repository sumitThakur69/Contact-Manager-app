import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config({
    path: './env'
})

const app = express();

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});