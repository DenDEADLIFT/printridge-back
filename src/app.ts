import express from 'express';
import mongoose from 'mongoose';
import cartridges from './routes/cartridges';
import errorMdlwr from './middlewares/error';
import cors from 'cors';

const PORT = 3002;

const MONGO_URL = 'mongodb://127.0.0.1:27017/printridgedb';

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URL);


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(cors({
  origin: 'https://printridge.ru',
  methods: 'GET, POST'
}));

app.use('/404', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use('/cartridges', cartridges);   



app.use(errorMdlwr); 

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});