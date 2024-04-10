import { Router } from 'express';
import { getAllCartridges } from '../controllers/cartridges';

const cartridges = Router();

cartridges.get('/', getAllCartridges);

export default cartridges; 