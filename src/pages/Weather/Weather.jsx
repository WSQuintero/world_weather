import { useContext } from 'react'
import { MyContext } from '../../MyContext/MyContext'
import { useNavigate } from 'react-router'
import './Weather.css'
import { icons } from '../../DB/iconsDb'

function Weather() {
  const { final } = useContext(MyContext)
  const navigate = useNavigate()

  return (
    <div className='weather__background'>
      {final ? (
        <>
          <section className='weather__image'>
            <figure className='weather__image--bg'>
              <img
                src={
                  icons.find((icon) => icon[final?.weather[0]?.icon])[
                    final?.weather[0]?.icon
                  ]
                }
                alt='clouds'
              />
            </figure>
          </section>
          <div className='weather__container'>
            <section className='weather__flag'>
              <div className='weather__flag--one'>
                <h1 className='weather__flag--one-title'>{final?.name}</h1>
                <img
                  src={`https://flagcdn.com/${final?.sys?.country?.toLowerCase()}.svg`}
                  alt='bandera'
                />
              </div>
              <p className='weather__flag--two'>
                {Math.round(final?.main?.temp)}°C
              </p>
            </section>
            <section className='weather__information'>
              <p>
                Latitud: <span>{final?.coord?.lat}</span>
              </p>
              <p>
                longitud: <span>{final?.coord?.lon}</span>
              </p>
              <p>
                Pronóstico <span>{final?.weather[0]?.description}</span>
              </p>
              <p>
                Velocidad del viento <span>{final?.wind.speed} km/h</span>
              </p>
              <p>
                Humedad <span>{final?.main.humidity} %</span>
              </p>
              <p>
                Temperatura mínima{' '}
                <span className='temp-min'>
                  {Math.round(final?.main.temp_min)}°C
                </span>
              </p>
              <p>
                Temperatura máxima{' '}
                <span className='temp-max'>
                  {Math.round(final?.main.temp_max)}°C
                </span>
              </p>
              <p>
                Presión atmosférica <span>{final?.main.pressure} mb</span>
              </p>
              <button
                className='weather__information--button'
                onClick={() => navigate('/')}>
                Volver
              </button>
            </section>
          </div>
        </>
      ) : (
        <section className='weather__image'>
          <div className='weather__image--error'>
            <p>Por favor introduce un país y una ciudad correctos</p>
            <button
              className='weather__information--button'
              onClick={() => navigate('/')}>
              Volver
            </button>
          </div>
        </section>
      )}
    </div>
  )
}

export { Weather }
