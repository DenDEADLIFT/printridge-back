import {
    Response,
    NextFunction,
} from 'express';
import CartridgesModel from '../models/cartridges';
import { RequestCustom } from '../utils/types';
import NotFoundError from '../utils/not-found-error-class'

export const getAllCartridges = (req: RequestCustom, res: Response, next: NextFunction) => {
    CartridgesModel.find({})
        .then((data) => {
            if (!data.length) {
                throw new NotFoundError('Не найдено ни одного картриджа');
            }
            res.status(200).send({
                status: 'success',
                data,
            });
        })
        .catch((error) => {
            next(new Error('Произошла ошибка при получении картриджей'));
        });
}; 