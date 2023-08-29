import { Response, Request } from 'express'
import User from '../schemas/user.schema'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al obtener los usuarios')
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body)
    // const user = new User({
    //     name: "dorian",
    //     lastname: "matos",
    //     email: "dorianmatos75@gmail.com",
    //     birthdate: "1997-06-25T00:00:00.000Z",
    //     password: "Programador19.",

    // })

    await user.save()
    res.send('Usuario creado')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al crear el usuario')
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const updatedUser = await User.updateOne({ _id: id }, req.body)
    if (!updatedUser) {
      return res.status(404).send('usuario no encontrado')
    }
    res.send(updateUser)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al actualizar usuario')
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const userDelete = await User.deleteOne({ _id: id })
    if (!userDelete) {
      return res.status(404).send('Usuario no encontrado')
    }
    res.send('Usuario eliminado correctamente')
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al eliminar usuario')
  }
}


