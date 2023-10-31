import { useContext } from 'react'
import { MyContext } from '../../MyContext/MyContext'
import { useNavigate } from 'react-router'
import './Weather.css'

function Weather() {
  const { data, errorData } = useContext(MyContext)
  const navigate = useNavigate()
  return (
    <div className='weather__background'>
      <section className='weather__image'>
        <figure className='weather__image--bg'>
          <img src='' alt='' />
        </figure>
      </section>
      <section className='weather__flag'>
        <div className='weather__flag--one'>
          <h1 className='weather__flag--one-title'>Bogotá</h1>
          <img src='' alt='' />
        </div>
        <p className='weather__flag--two'>35°</p>
      </section>
      <section className='weather__information'></section>
    </div>
  )
}

export { Weather }
