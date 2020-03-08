import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
  console.error(`Error!: ${err.message}`);
});

mongoose.connection.on('disconnected', (err) => { 
  console.log('Connection Error!:', err);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});