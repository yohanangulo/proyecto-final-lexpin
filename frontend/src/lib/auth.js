import axios from 'axios'
import { getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials

        try {
          const res = await axios.post('http://localhost:3003/login', {
            email,
            password,
          })

          if (res.status === 200) {
            return res.data
          }

          throw new Error("Invalid email or password")
          
        } catch (error) {
          console.error(error)
        }
      },
    }),
  ],
  callbacks: {
    async session({token, session}) {
      if (token) {
        session.user._id = token._id
        session.user.lastname = token.lastname
        session.user.birthdate = token.birthdate
        session.user.fechaCreacion = token.fechaCreacion
      }
      return session
    },
    jwt(params) {
      if (params.user) {
        params.token._id = params.user._id
        params.token.lastname = params.user.lastname
        params.token.birthdate = params.user.birthdate
        params.token.fechaCreacion = params.user.fechaCreacion
      }
      return params.token
    },
    redirect() {
      return '/'
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)