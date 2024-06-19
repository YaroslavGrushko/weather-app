export type Weather = {
    current: {
      temp_c: number,
    };
  };

export type WheaterPerHour = {
  last_updated: string,
  time: string,
  temp_c: number,
  feelslike_c: number,
  pressure_mb: number,
  humidity: number,
  wind_kph: number,
  condition: {
    text: string,
    icon: string,
  }
};

export type WheaterPerDay = {
  date: string,
  day: {
    maxtemp_c: number,
    maxwind_kph: number,
    daily_chance_of_rain: number,
    condition:{
      text: string,
      icon: string,
    }
  },
  hour: WheaterPerHour[],
};

export type WeatherToday = {
  location: {
    name: string,
    region: string,
    country: string,
  },
  current: WheaterPerHour,
  forecast: {
    forecastday: WheaterPerDay[]
  }
};