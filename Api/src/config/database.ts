import { connect } from 'mongoose'
import config from './config'

export async function connectDB() {
  try {
    const db = await connect(config.MONGODB_URI)
    console.log('Base de datos conectado a', db.connection.name)
  } catch (error) {
    console.log('Error al conecta a la base de datos:', error)
  }
}
