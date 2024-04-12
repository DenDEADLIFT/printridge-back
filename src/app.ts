import express from 'express';
import mongoose from 'mongoose';
import cartridges from './routes/cartridges';
import errorMdlwr from './middlewares/error';

const PORT = 3002;

const MONGO_URL = 'mongodb://127.0.0.1:27017/printridgedb';

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URL);


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/cartridges', cartridges);   



app.use(errorMdlwr); 

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});