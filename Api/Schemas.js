const mongoose = require('mongoose');

//Esquemas

function isValidAge(value) {
    const currentDate = new Date();
    const userDate = new Date(value);
    return (currentDate.getFullYear() - userDate.getFullYear() >= 18);
}

function isValidPassword(value) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(value);
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    lastname: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, unique: true, minlength: 3, maxlength: 50},
    birthdate: { type: Date, required: true, validate: [isValidAge] },
    password: { type: String, required: true, minlength: 8, maxlength: 50, validate: [isValidPassword] },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const ProductsSchema = new mongoose.Schema({
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

const productSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  cantidad: { type: Number, required: true, min: 1 },
});

const saleSchema = new mongoose.Schema({
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },z
    productos: { type: [productSchema], required: true },
    precioSinIva: { type: Number, required: true, min: 0 },
    precioConIva: { type: Number, required: true, min: 0 },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
});


module.exports = {
  userSchema,
  ProductsSchema,
  saleSchema
};

