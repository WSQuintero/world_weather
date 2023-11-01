import { createContext } from 'react'
import { useGetInformation } from '../customHooks/useGetInformation'

const MyContext = createContext()

function ContextProvider({ children }) {
  const { final, errorData, finalData, setFinal, setErrorData } =
    useGetInformation()

  return (
    <MyContext.Provider
      value={{ finalData, final, errorData, setFinal, setErrorData }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, ContextProvider }
