import { API } from "@/config/api"
import axios from "axios"


class UserService {
  async getUserAllUsers() {
    return await axios.get(`${API}/users`)
  }

  async getUserByEmail(email) {
    return await axios.get(`${API}/users/${email}`)
  }

  async createUser(userData) {
    return await axios.post(`${API}/users`, userData)
  }

  async updateUser({ email, userData }) {
    return await axios.put(`${API}/users/${email}`, userData)
  }

  async deleteUser(userID) {
    return await axios.delete(`${API}/users/${userID}`)
  }
}

export default new UserService()