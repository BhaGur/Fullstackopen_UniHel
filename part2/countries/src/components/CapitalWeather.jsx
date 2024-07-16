import { useState, useEffect } from "react";
import weatherService from '../services/weather';

const CapitalWeather = ({ capital }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        weatherService.getWeather(capital).then((weatherCapital => {
            setWeather(weatherCapital);
        })
    )
    }, [capital]);
    if (!weather) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature {weather.main.temp} Celcius</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather icon"
            />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
};

export default CapitalWeather;
