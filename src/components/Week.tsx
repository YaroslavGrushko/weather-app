import {useState, useEffect} from "react"
import getWeather from "../services/getWeather";
import {WeatherToday, WheaterPerDay} from "../types/Weather";
import { useAppSelector } from '../hooks/useAppDispatchSelector'

const DAYS = 7;

const Week=()=> {
    const [weather, setWeather] = useState<WeatherToday>();
    const latitude = useAppSelector(state => state.geolocation.currentLatitude)
    const longitude = useAppSelector(state => state.geolocation.currentLongitude)
    
    const {location} = weather || {};
    const {current} = weather || {};
    const forecastday: WheaterPerDay[] = weather?.forecast?.forecastday || [];
    const days = forecastday;

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
    }, []);

    if(!forecastday) return;

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
                            <div>Date:</div>
                            <div>Max Temp:</div>
                            <div>Max Wind:</div>
                            <div>Rain (%):</div>
                            <div>Icon:</div>
                            <div>Summary:</div>
                        </div>
                        {days.map((value: WheaterPerDay)=>{
                            const {date, day} =value;
                            const {maxtemp_c, maxwind_kph, daily_chance_of_rain, condition} = day;
                            const {text, icon} = condition;
                            
                            return (
                                <div className="pr-[20px]" key={date}>
                                    <div>{date}</div>
                                    <div>{maxtemp_c}</div>
                                    <div>{maxwind_kph}</div>
                                    <div>{daily_chance_of_rain}</div>
                                    <div><img src={icon} /></div>
                                    <div>{text}</div>
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

export default Week
