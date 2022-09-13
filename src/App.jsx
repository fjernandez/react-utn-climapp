import "./App.css"
import { useState, useEffect } from 'react';
import { API_KEY } from "./api_key";
import LocalWeather from './components/LocalWeather';
import SevenDayWeather from "./components/SevenDayWeather";

function App() {

  const [localWeather, setLocalWeather] = useState([]);
  const [forecastDays, setForecastDays] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL = "https://api.weatherapi.com/v1/"

  useEffect(() => {
    // Traigo la data de clima usando Geolocalización por IP.
    fetch(API_BASE_URL + `forecast.json?key=${API_KEY}&q=auto:ip&days=7&lang=es`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then(
        (weather) => {
          setIsLoading(true);
          setLocalWeather(weather);
          setForecastDays(weather.forecast.forecastday);
        }, (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }, []);

  const days = Object.values(forecastDays);
  console.log(days);

  if (error) {
    return <> {error.message} </>
  } else if (!isLoading) {
    return <> Cargando... </>
  } else {
    return (
      <div className='wrapper'>
        <div className="wrapper-inner">
          <h1>ClimApp</h1>
          <section className="card-grid">
            <LocalWeather weather={localWeather}></LocalWeather>
          </section>
        </div>
        <div className="wrapper-inner">
          <h1>Pronostico para los próximos 7 días</h1>
        </div>
        <section className="card-grid">
            { days.map((items) => (
              <SevenDayWeather key={items.date} days={items}></SevenDayWeather>
            ))}
          </section>
      </div>
    )
  }
}

export default App;