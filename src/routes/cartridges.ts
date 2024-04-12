import { Router } from 'express';
import { getAllCartridges, postCartridge, removeCartridge, getCartridgeById } from '../controllers/cartridges';

const cartridges = Router();

cartridges.get('/', getAllCartridges);
cartridges.post('/', postCartridge);
cartridges.delete('/:cartridgeId', removeCartridge)
cartridges.get('/:cartridgeId', getCartridgeById);

export default cartridges; 