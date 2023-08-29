import app from './app'
import config from './config/config'
import { connectDB } from './config/database'

(async function() {
  await connectDB()
  app.listen(config.PORT)
  console.log('servidor conectado en el puerto', config.PORT, '🚀🚀🚀')

  app.get('/', (req, res) => {
    res.send('Hola Mundo');
  });
})()