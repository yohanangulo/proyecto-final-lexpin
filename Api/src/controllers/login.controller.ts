import { Request, Response } from 'express'
import User from '../schemas/user.schema'

export const loginUser = () => async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ email, password })

    if (user && user.password === password) {
      const { name, lastname, email, birthdate, fechaCreacion } = user
      // const claveSecreta = 'miClaveSecreta';
      // Generar un token
      // const token = jwt.sign({
      //     email: user.email,
      //     name: user.name,
      // }, claveSecreta, { expiresIn: '1h' });

      // res.cookie('token', token);
      // res.cookie('user', user.email);

      return res.json({
        name,
        lastname,
        email,
        birthdate,
        fechaCreacion,
      })
    }

    return res.status(401).json({ error: 'Invalid email or password' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'An error occurred' })
  }
}
