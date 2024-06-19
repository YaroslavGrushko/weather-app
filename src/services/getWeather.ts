import get from "./http";
import {Weather} from '../types/Weather'

const url = "https://api.weatherapi.com/v1/forecast.json";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = () => {
  return get<Weather>(`${url}?key=${apiKey}&q=Kyiv&days=1&dt=2024-06-20`);
};

export default getWeather;