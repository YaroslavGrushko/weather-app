import cn from 'classnames';
import {useState, useEffect} from 'react';
import ThemeSwitcher from '../src/components/ThemeSwitcher';
import Today from '../src/components/Today';
import ThreeDays from '../src/components/ThreeDays';
import Week from '../src/components/Week';
import TwoWeeks from '../src/components/TwoWeeks';
import {
  CURRENT_WEATHER_STATE_TODAY, 
  CURRENT_WEATHER_STATE_THREE_DAYS, 
  CURRENT_WEATHER_STATE_WEEK,
  CURRENT_WEATHER_STATE_TWO_WEEKS} 
  from '../src/consts/currentWeatherState'; ;

import { useAppDispatch } from '../src/hooks/useAppDispatchSelector'
import { getGeolocation } from './services/getGeolocation';

const App = () =>{
  const dispatch = useAppDispatch();
  const [currentState, setCurrentState] =  useState(CURRENT_WEATHER_STATE_TODAY);
  const isToday = currentState===CURRENT_WEATHER_STATE_TODAY;
  const isThreeDays = currentState===CURRENT_WEATHER_STATE_THREE_DAYS;
  const isWeek = currentState===CURRENT_WEATHER_STATE_WEEK;
  const isTwoWeeks = currentState===CURRENT_WEATHER_STATE_TWO_WEEKS;

  useEffect(()=>{
    getGeolocation(dispatch);
  },[])

  return (
    <div className="w-full h-full p-[50px] bg-[#FFFFFF] text-[#242424] dark:bg-[#242424] dark:text-[#FFFFFF]">
      <div className="w-full flex justify-between mb-[100px]">
          <ThemeSwitcher/>
        <div className="gap-[40px]">
          <button className={cn("w-[150px]", {"font-bold": isToday})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_TODAY)}}>Today</button>
          <button className={cn("w-[150px]", {"font-bold": isThreeDays})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_THREE_DAYS)}}>Three Days</button>
          <button className={cn("w-[150px]", {"font-bold": isWeek})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_WEEK)}}>Week</button>
          <button className={cn("w-[150px]", {"font-bold": isTwoWeeks})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_TWO_WEEKS)}}>Two Weeks</button>
        </div>
      </div>
      {currentState===CURRENT_WEATHER_STATE_TODAY&&<Today/>}
      {currentState===CURRENT_WEATHER_STATE_THREE_DAYS&&<ThreeDays/>}
      {currentState===CURRENT_WEATHER_STATE_WEEK&&<Week/>}
      {currentState===CURRENT_WEATHER_STATE_TWO_WEEKS&&<TwoWeeks/>}
    </div>
  )
}

export default App
