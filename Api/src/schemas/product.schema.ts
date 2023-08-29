import { model, Schema } from 'mongoose'

const ProductsSchema = new Schema({
  name: { type: String, required: false, minlength: 3, maxlength: 100 },
  description: { type: String, required: false, minlength: 3, maxlength: 500 },
  price: { type: Number, required: false, min: 0, max: 1000000 },
  stock: { type: Number, required: false, min: 0 },
  category: { type: String, required: false, enum: [
    "shirts for man",
    "jens for man",
    "accesories for man",
    "shoes for man",
    "dresses for woman",
    "coats for woman",
    "accesories for woman",
    "sandals for woman",
    "wallets of accesories",
    "watches of accesories",
    "belts of accesories",
    "scarfs of accesories",
    "leather of bags",
    "sports of bags",
    "street style of bags",
    "creative of bags"
  ] },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

export default model('Product', ProductsSchema)