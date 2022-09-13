import React from 'react'

const CityWeather = ({ cityWeather }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={cityWeather.current.condition.icon} alt={cityWeather.current.condition.text} />
            </div>

            <div className='card-content'>
                <h1 className="card-name">
                    {cityWeather.location.name}
                </h1>
                <h3 className="card-name">
                    Temperatura: {cityWeather.current.temp_c} C°
                </h3>
                <h4 className="card-name">
                    {cityWeather.current.condition.text}
                </h4>
                <p>Sensación térmica: <span> {cityWeather.current.feelslike_c}</span></p>
                <p>Humedad: <span>{cityWeather.current.humidity}</span>%</p>
            </div>
        </div>
    )
}

export default CityWeather