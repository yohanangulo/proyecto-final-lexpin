import {model, Schema} from 'mongoose'

const productSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  cantidad: { type: Number, required: true, min: 1 },
});

const saleSchema = new Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },z
  productos: { type: [productSchema], required: true },
  precioSinIva: { type: Number, required: true, min: 0 },
  precioConIva: { type: Number, required: true, min: 0 },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

export default model('Sale', saleSchema)