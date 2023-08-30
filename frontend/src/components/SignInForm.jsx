'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function SignInForm() {

  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loggedIn, setLoggedIn] = useState(false)
  
  // Manejador para actualizar el estado cuando cambian los campos del formulario
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  // Función para manejar el envío del formulario de inicio de sesión
  const handleLoginSubmit = async (event) => {
    event.preventDefault()

    // await SignIn

   signIn('credentials', formData)


    return
    try {
      const response = await axios.post('http://localhost:3003/login', formData)

      if (response.status === 200) {
        const token = response.data.token // Obtener el token de la respuesta
        localStorage.setItem('token', token) // Guardar el token en el localStorage

        // Obtener los datos del usuario
        const userResponse = await axios.get('http://localhost:3003/user', {
          headers: {
            Authorization: token,
          },
        })

        // Guardar los datos del usuario en el localStorage
        localStorage.setItem('user', JSON.stringify(userResponse.data))

        setLoggedIn(true)
        router.push('/')
        alert('Inicio de sesión exitoso')
      } else {
        alert('Error de inicio de sesión: Datos incorrectos')
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error)

      if (error.response && error.response.status === 401) {
        alert('Error de inicio de sesión: Usuario no encontrado')
      }
    }
  }


  return (
    <form onSubmit={handleLoginSubmit}>
      <p className="form-row form-row-wide">
        <label>
          email
          <abbr className="required" title="required">
            *
          </abbr>
        </label>
        <input
          type="email"
          className="input-text"
          placeholder=""
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </p>
      <div className="form-row form-row-wide">
        <label>
          password
          <abbr className="required" title="required">
            *
          </abbr>
        </label>
        <input
          type="password"
          className="input-text"
          placeholder=""
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <input type="submit" defaultValue="Login" className="btn" />
      <input
        type="checkbox"
        className="input-checkbox"
        id="remember"
        name="remember"
        defaultValue={1}
      />
      <label htmlFor="remember" className="checkbox">
        Remember me
      </label>
      <a href="#">Lost Password?</a>
    </form>
  )
}
