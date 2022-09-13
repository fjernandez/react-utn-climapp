import React from 'react'

const LocalWeather = ({ weather }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
            </div>

            <div className='card-content'>
                <h1 className="card-name">
                    {weather.location.name}
                </h1>
                <h3 className="card-name">
                    Temperatura: {weather.current.temp_c} C°
                </h3>
                <h4 className="card-name">
                    {weather.current.condition.text}
                </h4>
                <p>Sensación térmica: <span> {weather.current.feelslike_c}</span></p>
                <p>Humedad: <span>{weather.current.humidity}</span>%</p>
            </div>
        </div>
    )
}

export default LocalWeather