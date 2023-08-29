import { CorsOptions } from 'cors'

const whitelist = ['http://localhost:3000', 'http://localhost:3001']
export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.some((dominio) => dominio === origin)
    if (existe || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  },
}