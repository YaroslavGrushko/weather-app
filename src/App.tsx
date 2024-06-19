import {useState} from 'react';
import Today from '../src/components/Today';
import {
  CURRENT_WEATHER_STATE_TODAY, 
  CURRENT_WEATHER_STATE_THREE_DAYS, 
  CURRENT_WEATHER_STATE_WEEK,
  CURRENT_WEATHER_STATE_TWO_WEEKS} 
  from '../src/consts/currentWeatherState'; ;
function App() {
const [currentState, setCurrentState] =  useState(CURRENT_WEATHER_STATE_TODAY);
  

  return (
    <div className="p-[50px]">
      {currentState===CURRENT_WEATHER_STATE_TODAY&&<Today/>}
    </div>
  )
}

export default App
