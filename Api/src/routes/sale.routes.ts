import { Router } from 'express'
import * as saleController from '../controllers/sale.controller'
const router = Router()

router.get('/sales', saleController.getAllSales)
router.post('/sales', saleController.createSale)
router.put('/sales/:id', saleController.updateSale)
router.delete('/sales/:id', saleController.deleteSale)

export default router