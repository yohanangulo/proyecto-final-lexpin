import { API } from '@/config/api'
import axios from 'axios'

class ProductService {
  async getAllSales() {
    return await axios.get(`${API}/sales`)
  }

  async getSalesChart() {
    const res = await axios.get(`${API}/sales`)

    const monthlyRevenue = {}

    const sales = res.data
    for (const sale of sales) {
      const createdAt = new Date(sale.fechaCreacion)
      const month = createdAt.getMonth()

      monthlyRevenue[month] = (monthlyRevenue[month] || 0) + sale.precioConIva
    }

    const graphData = [
      { name: 'Jan', total: 0 },
      { name: 'Feb', total: 0 },
      { name: 'Mar', total: 0 },
      { name: 'Apr', total: 0 },
      { name: 'May', total: 0 },
      { name: 'Jun', total: 0 },
      { name: 'Jul', total: 0 },
      { name: 'Aug', total: 0 },
      { name: 'Sep', total: 0 },
      { name: 'Oct', total: 0 },
      { name: 'Nov', total: 0 },
      { name: 'Dec', total: 0 },
    ]

    for (const month in monthlyRevenue) {
      graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)]
    }

    return graphData
  }

  // async getUserByEmail(email) {
  //   return await axios.get(`${API}/users/${email}`)
  // }

  // async createUser(userData) {
  //   return await axios.post(`${API}/users`, userData)
  // }

  // async updateUser({ userId, userData }) {
  //   return await axios.put(`${API}/users/${userId}`, userData)
  // }

  // async deleteUser(userID) {
  //   return await axios.delete(`${API}/users/${userID}`)
  // }
}

const productService = new ProductService()

export default productService
