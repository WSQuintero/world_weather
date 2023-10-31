import axios from 'axios'
const apiKey = import.meta.env.VITE_APY_KEY
import { useState } from 'react'

function useGetInformation() {
  const [data, setData] = useState({})
  const [errorData, setErrorData] = useState({})

  const finalData = async ({ city, country }) => {
    const params = {
      q: `${city},${country}`,
      appid: apiKey
    }
    // Realizar una solicitud GET usando Axios con la API key en el encabezado

    try {
      const request = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params
        }
      )
      const data = request.data
      setData(data) // Trabaja con los datos aquí
    } catch (error) {
      setErrorData({ Error: error })
    }
  }

  return { data, errorData, finalData }
}

export { useGetInformation }
