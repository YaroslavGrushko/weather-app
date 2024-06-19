import {useState, useEffect} from "react"
import getWeather from "../src/services/getWeather";
import {Weather} from "../src/types/Weather";

function App() {

  const [weather, setWeather] = useState<Weather>();
  const current_temp = weather?.current?.temp_c;

  useEffect(() => {
    const init = async () => {
      const data = await getWeather();
      setWeather(data);
    };
    init();
  }, []);

  return (
    <div className="w-full h-full flex justify-center align-items">
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p>Current Temp: <span className="font-bold">{current_temp}</span></p>
      </div>
    </div>
  )
}

export default App
