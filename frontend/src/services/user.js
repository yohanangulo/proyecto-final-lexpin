import { API } from "@/config/api"
import axios from "axios"


class UserService {
  async getUserAllUsers() {
    return await axios.get(`${API}/users`)
  }

  async getUser(userId) {
    return await axios.get(`${API}/users/${userId}`)
  }

  async createUser(userData) {
    return await axios.post(`${API}/users`, userData)
  }

  async updateUser({ userId, userData }) {
    return await axios.put(`${API}/users/${userId}`, userData)
  }

  async deleteUser(userID) {
    return await axios.delete(`${API}/users/${userID}`)
  }
}

export default new UserService()