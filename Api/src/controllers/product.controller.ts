import { Request, Response } from 'express'
import Product from '../schemas/product.schema'

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    res.status(500).send('Error al obtener Producto')
    console.log(error)
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const producto = new Product(req.body)
    //   const producto = new Product({
    //     name: "Dorian Mos",
    //     description: "Hol",
    //     price: 134,
    //     stock: 4,
    //     category: "Accesories for Woman",  // Note that the category should match one of the valid categories in your schema
    //     idUsuario: new mongoose.Types.ObjectId(),  // Replace this with an actual user ObjectId
    //     fechaCreacion: new Date(),
    //     fechaActualizacion: new Date(),
    //   });

    await producto.save()
    res.status(201).json(producto)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al crear el producto')
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const updatedProduct = await Product.updateOne({ _id: id }, req.body)
    if (!updatedProduct) {
      return res.status(404).send('Producto no encontrado')
    }
    res.send(updatedProduct)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al actualizar el producto')
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const deleteProduct = await Product.deleteOne({ _id: id })
    if (!deleteProduct) {
      return res.status(404).send('Producto no encontrado')
    }
    res.send('Producto eliminado correctamente')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al eliminar el producto')
  }
}