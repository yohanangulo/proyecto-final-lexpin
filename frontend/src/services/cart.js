import { API } from "@/config/api"
import axios from "axios"


class CartService {
  async addToCart(payload) {
    return await axios.post(`${API}/cart`, payload)
  }

  async deleteItem({payload, userId}) {
    return await axios.put(`${API}/cart/${userId}`, payload)
  }
}

const cartService = new CartService()

export default cartService