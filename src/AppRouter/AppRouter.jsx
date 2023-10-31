import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Weather } from '../pages/Weather/Weather'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'weather',
    element: <Weather />
  }
])


export { router }