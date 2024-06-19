import get from "./http";
import { QueryParams } from "../types/Query";

const url = "https://api.weatherapi.com/v1/forecast.json";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;



const getWeather = <T>(params: QueryParams) => {
  const {latitude, longitude, days} = params;
  return get<T>(`${url}?key=${apiKey}&q=${latitude},${longitude}&days=${days}`);
};

export default getWeather;