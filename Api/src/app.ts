import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.routes'
import loginRoutes from './routes/login.routes'
import productRoutes from './routes/product.routes'
import saleRoutes from './routes/sale.routes'

const app = express()

// routes
app.use(userRoutes)
app.use(loginRoutes)
app.use(productRoutes)
app.use(saleRoutes)
// ---

// app

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

export default app