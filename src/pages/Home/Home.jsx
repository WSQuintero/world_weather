import { useContext } from 'react'
import { MyContext } from '../../MyContext/MyContext'
import { useNavigate } from 'react-router'
import './Home.css'
import { countries } from '../../DB/countriesCode'

function Home() {
  const { finalData, setFinal, setErrorData } = useContext(MyContext)
  const navigate = useNavigate()

  const sendForm = (event) => {
    event.preventDefault()
    setFinal(undefined)
    setErrorData(undefined)
    
    for (let i in countries) {
      if (
        i.toLocaleLowerCase() ===
        String(event.target.country.value.toLocaleLowerCase())
      ) {
        const city = event.target.city.value
        finalData({
          city: city.toLocaleLowerCase(),
          country: countries[i][0] + countries[i][1].toLocaleLowerCase()
        })
      }
    }

    navigate('weather')
  }

  return (
    <div className='background-home'>
      <div className='background-home__medium'>
        <div className='background-home__small'>
          <section className='section-home__one'>
            <article className='section-home__one--bg'>
              <h1 className='section-home__one--title'>
                World <br />
                <span className='section-home__one--title-two'>Weather</span>
              </h1>
            </article>
          </section>
          <section className='section-home__two'>
            <form className='section-home__two--form' onSubmit={sendForm}>
              <label htmlFor='country'>País</label>
              <input type='text' name='country' id='country' required />
              <label htmlFor='city'>Ciudad</label>
              <input type='text' name='city' id='city' required />
              <button className='section-home__two--button'>Enviar</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export { Home }
