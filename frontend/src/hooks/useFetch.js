import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(service) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setError(undefined)
    setData(undefined)
    async function getData() {
      try {
        const res = await service
        setData(res.data)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}
