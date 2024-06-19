import cn from 'classnames';
import {useState} from 'react';
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
const App = () =>{
  const [currentState, setCurrentState] =  useState(CURRENT_WEATHER_STATE_TODAY);
  const isToday = currentState===CURRENT_WEATHER_STATE_TODAY;
  const isThreeDays = currentState===CURRENT_WEATHER_STATE_THREE_DAYS;
  const isWeek = currentState===CURRENT_WEATHER_STATE_WEEK;
  const isTwoWeeks = currentState===CURRENT_WEATHER_STATE_TWO_WEEKS;

  return (
    <div className="p-[50px]">
      <div className="w-full flex gap-[40px] justify-end mb-[100px]">
        <button className={cn("w-[150px]", {"font-bold": isToday})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_TODAY)}}>Today</button>
        <button className={cn("w-[150px]", {"font-bold": isThreeDays})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_THREE_DAYS)}}>Three Days</button>
        <button className={cn("w-[150px]", {"font-bold": isWeek})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_WEEK)}}>Week</button>
        <button className={cn("w-[150px]", {"font-bold": isTwoWeeks})} onClick={()=>{setCurrentState(CURRENT_WEATHER_STATE_TWO_WEEKS)}}>Two Weeks</button>
      </div>
      {currentState===CURRENT_WEATHER_STATE_TODAY&&<Today/>}
      {currentState===CURRENT_WEATHER_STATE_THREE_DAYS&&<ThreeDays/>}
      {currentState===CURRENT_WEATHER_STATE_WEEK&&<Week/>}
      {currentState===CURRENT_WEATHER_STATE_TWO_WEEKS&&<TwoWeeks/>}
    </div>
  )
}

export default App
