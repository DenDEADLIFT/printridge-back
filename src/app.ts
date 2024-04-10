import express from 'express';
import {
    Response,
    NextFunction,
} from 'express';
import { RequestCustom } from '../utils/types';

const { PORT = 3002 } = process.env;

const app = express();

// Здесь данные
const users = [
    { name: 'Мария', age: 22 },
    { name: 'Виктор', age: 30 },
    { name: 'Анастасия', age: 48 },
    { name: 'Алексей', age: 51 }
];

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

app.get('/users/:id/albums/:album/:photo', (req: RequestCustom, res: Response) => {
    const { id, album, photo } = req.params;
    res.send(`Мы на странице пользователя с id ${id}, смотрим альбом №${album} и фотографию №${photo}`);
}); 