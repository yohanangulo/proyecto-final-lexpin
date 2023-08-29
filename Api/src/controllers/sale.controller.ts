import { Request, Response } from 'express'
import Sale from '../schemas/sale.schema'

export const getAllSales = async (req: Request, res: Response) => {
  try {
    const sales = await Sale.find()
    res.send(sales)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al obtener las ventas')
  }
}

export const createSale = async (req: Request, res: Response) => {
  try {
    const sales = new Sale({
      // userId: mongoose.Types.ObjectId(),
      productos: [{ cantidad: 2 }, { cantidad: 3 }],
      precioSinIva: 500,
      precioConIva: 600,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    })

    await sales.save()
    res.send('venta correcta')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al crear la venta')
  }
}

export const updateSale = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const updatedVenta = await Sale.updateOne({ _id: id }, req.body)
    if (!updatedVenta) {
      return res.status(404).send('Venta no existe')
    }
    res.send(updatedVenta)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al actualizar la venta')
  }
}

export const deleteSale = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const deleteSale = await Sale.deleteOne({ _id: id })
    if (!deleteSale) {
      return res.status(404).send('Venta no existe')
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al eliminar la venta')
  }
}
