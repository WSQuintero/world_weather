import { createContext } from 'react'
import { useGetInformation } from '../customHooks/useGetInformation'

const MyContext = createContext()

function ContextProvider({ children }) {
  const { data, errorData, finalData } = useGetInformation()

  return (
    <MyContext.Provider value={{ finalData, data, errorData }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, ContextProvider }
