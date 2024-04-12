import {
    Schema,
    model,
  } from 'mongoose';
  import { ICartridges } from '../utils/types';
  
  const cartridgesSchema = new Schema<ICartridges>({
    modelCart: {
      type: String,
      required: true,
    },
    resource: {        
      type: Number,
      required: true,
    },
    chip: {
      type: Boolean,
      required: true,
    },
    vendor: {
        type: String,
        required: true,
    },
    devices: {
        type: String,
        required: true,
    },
    refill_price: {
        type: String,
        required: true,
    },
    recovery_price: {
        type: String,
        required: true,
    },
  });
  
  const CartridgesModel = model<ICartridges>('cartridge', cartridgesSchema);
  
  export default CartridgesModel; 