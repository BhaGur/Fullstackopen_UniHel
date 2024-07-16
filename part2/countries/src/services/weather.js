import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const weatherApi = import.meta.env.VITE_OPEN_WEATHER_API;

const getWeather = (capital) => 
    axios
        .get(`${weatherUrl}?q=${capital}&appid=${weatherApi}&units=metric`)
        .then((res) => res.data);

export default {getWeather};