import { API } from "@/config/api"
import axios from "axios"


class CartService {
  async addToCart(payload) {
    return await axios.post(`${API}/cart`, payload)
  }

  async deleteItem({payload, userId}) {
    return await axios.put(`${API}/cart/${userId}`, payload)
  }

  async getUserCart(userId) {
    return await axios.get(`${API}/cart/${userId}`)
  }
}

const cartService = new CartService()

export default cartService