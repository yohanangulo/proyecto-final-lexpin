import { model, Schema } from 'mongoose'

function isValidAge(value: string) {
  const currentDate = new Date();
  const userDate = new Date(value);
  return (currentDate.getFullYear() - userDate.getFullYear() >= 18);
}

function isValidPassword(value: string) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(value);
}

const User = new Schema(
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

export default model('User', User)