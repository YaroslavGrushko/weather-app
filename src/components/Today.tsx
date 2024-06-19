import {useState, useEffect} from "react"
import getWeather from "../../src/services/getWeather";
import {WeatherToday, WheaterPerDay, WheaterPerHour} from "../../src/types/Weather";
import { useAppSelector } from '../hooks/useAppDispatchSelector'

const DAYS = 1;

const Today=()=> {
    const latitude = useAppSelector(state => state.geolocation.currentLatitude)
    const longitude = useAppSelector(state => state.geolocation.currentLongitude)
    const [weather, setWeather] = useState<WeatherToday>();

    const {location} = weather || {};
    const {current} = weather || {};
    const forecastday: WheaterPerDay[] = weather?.forecast?.forecastday || [];
    const todayHours = forecastday[0]?.hour;
    // location
    const placeName = location?.name;
    const placeRegion = location?.region;
    const placeCountry = location?.country;

    // current
    const currentTime = current?.last_updated;
    const currentTemp = current?.temp_c;
    const currentText = current?.condition?.text;
    const currentIcon = current?.condition?.icon;

    useEffect(() => {
        if(!(typeof latitude === 'number' && typeof longitude === 'number')) return;
        
        const init = async () => {
        const days = DAYS;
        const data:WeatherToday = await getWeather({latitude, longitude, days});
        setWeather(data);
        };
        init();
    }, [latitude, longitude]);

    if(!todayHours) return;

    return (
        <div className="w-full h-full flex justify-center align-items">
            <div className="w-full h-full">
                <h1 className="text-3xl pb-[50px]">
                    Wheather for <span className="font-bold">{placeName}</span>, {placeRegion}, {placeCountry}
                </h1>
                <div className="flex flex-row w-full">
                    <div className="w-[20%] mr-[50px]">
                        <p>Weather for today: <span className="font-bold">{currentTime}</span></p>
                        <p>Current temperature: <span className="font-bold">{currentTemp} °C</span></p>
                        <img src={currentIcon}/>
                        <p className="font-bold">{currentText}</p>
                    </div>
                    <div className="w-[80%] flex flex-row overflow-x-auto">
                        <div className="w-fit pr-[20px]">
                            <div>Time:</div>
                            <div>Temp:</div>
                            <div>Feels:</div>
                            <div>Pressure:</div>
                            <div>Humidity:</div>
                            <div>Wind:</div>
                        </div>
                        {todayHours.map((value: WheaterPerHour)=>{
                            const {time, temp_c, feelslike_c, pressure_mb, humidity, wind_kph} =value;
                            const dayTime = time.split(' ')[1]; // Розділяємо рядок за пробілом і беремо другу частину (індекс 1)

                            return (
                                <div className="pr-[20px]" key={dayTime}>
                                    <div>{dayTime}</div>
                                    <div>{temp_c}</div>
                                    <div>{feelslike_c}</div>
                                    <div>{pressure_mb}</div>
                                    <div>{humidity}</div>
                                    <div>{wind_kph}</div>
                                </div>
                            );
                        })}
                        <></>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today
