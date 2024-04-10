import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/printridgedb');

app.listen(3000); 