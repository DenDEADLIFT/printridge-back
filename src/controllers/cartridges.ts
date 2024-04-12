import {
    Response,
    NextFunction,
} from 'express';
import CartridgesModel from '../models/cartridges';
import { RequestCustom } from '../utils/types';
import { NotFoundError } from '../utils/not-found-error-class'
import { BadRequestError } from '../utils/bad-request-error-class'

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

export const getCartridgeById = (req: RequestCustom, res: Response, next: NextFunction) => {
    const cartridgeId = req.params.cartridgeId;
    
    CartridgesModel.findById(cartridgeId)
        .then((cartridge) => {
            if (!cartridge) {
                throw new NotFoundError('Картридж не найден');
            }
            
            res.status(200).send({
                status: 'success',
                data: cartridge,
            });
        })
        .catch((error) => {
            if (error.name === 'CastError') {
                next(new BadRequestError('Некорректный id'));
            } else {
                next(new Error('Произошла ошибка при получении информации о картридже'));
            }
        });
};

export const postCartridge = (req: RequestCustom, res: Response, next: NextFunction) => {
    const { modelCart, resource, chip, vendor, devices, refill_price, recovery_price } = req.body;
    CartridgesModel.create({ modelCart, resource, chip, vendor, devices, refill_price, recovery_price })
        .then((data) => res.status(201).send({
            status: 'success',
            data,
        }))
        .catch((err) => {
            if (err.name === 'ValidationError') {
                next(new BadRequestError('Некорректные данные'));
            } else {
                next(err);
            }
        });
}; 

export const removeCartridge = (req: RequestCustom, res: Response, next: NextFunction) => {
    CartridgesModel.deleteOne({ _id: req.params.cartridgeId })
      .then((data) => {
        if (data.deletedCount === 0) {
          throw new NotFoundError('Картридж не найден');
        }
        res.status(200).send({
          status: 'success',
          message: 'Картридж удалён',
        });
      })
      .catch((err) => {
        if (err.name === 'CastError') {
          next(new BadRequestError('Некорректный id'));
        } else {
          next(err);
        }
      });
  };