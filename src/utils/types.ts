//import { ObjectId } from 'mongoose';
import { Request } from 'express';

export interface RequestCustom extends Request {
  user?: {
    _id: string;
  };
}

export interface ICartridges {
  modelCart: string;
  resource: number;
  chip: boolean;
  vendor: string;
  devices: string;
  refill_price: string;
  recovery_price: string;
}