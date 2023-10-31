import { RouterProvider } from 'react-router-dom'
import { router } from './AppRouter/AppRouter'
import { ContextProvider } from './MyContext/MyContext'
import './App.css'

function App() {
  return (
    <main>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </main>
  )
}

export default App
