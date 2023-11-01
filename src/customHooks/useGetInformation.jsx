import axios from 'axios'
const apiKey = import.meta.env.VITE_APY_KEY
import { useState } from 'react'

function useGetInformation() {
  const [final, setFinal] = useState(undefined)
  const [errorData, setErrorData] = useState(undefined)

  const finalData = async ({ city, country }) => {
    setFinal(undefined)
    setErrorData(undefined)
    const params = {
      q: `${city},${country}`,
      appid: apiKey,
      units: 'metric',
      lang: 'es'
    }

    try {
      const request = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params
        }
      )
      setFinal(request.data)
    } catch (error) {
      setFinal(undefined)
      setErrorData({ Error: error })
    }
  }
  return { final, finalData, errorData, setFinal, setErrorData }
}

export { useGetInformation }
