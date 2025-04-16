import SearchBar from "./Components/SearchBar"
import TemperatureBox from "./Components/TemperatureBox"
import useWeatherAPI from "./Hooks/useWeatherAPI"
import { useEffect, useState } from "react"

function App() {
  const [city,setCity] = useState("Mumbai");
  // const [error, setError] = useState(null);

  // if(error){
  //   alert(error);
  // }

  const bgImages = {
    Clouds : "url('https://images.unsplash.com/photo-1599806112354-67f8b5425a06?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D')",
    Rain : "url('https://media.istockphoto.com/id/522795232/photo/rain-water-drop-falling-to-the-floor-in-rainy-season.jpg?s=612x612&w=0&k=20&c=R2gpzwbF9bqZI_vDMQqz3Je22ZH94D1uPYlgty7Hf6s=')",
    Drizzle : "url('https://img.pikbest.com/ai/illus_our/20230421/ec960ea2b489883dd9d5f4e6738cedac.jpg!w700wp')",
    Haze : "url('https://mrwallpaper.com/images/hd/fog-forest-aesthetic-dark-blue-hd-ng2mal7zhug0cclx.jpg')",
    Clear : "url('https://static.vecteezy.com/system/resources/previews/011/780/268/large_2x/blue-sky-with-white-clouds-on-a-clear-day-free-photo.jpg')",
    Mist : "url('https://e0.pxfuel.com/wallpapers/634/322/desktop-wallpaper-dark-summer-aesthetic.jpg')",
    Snow : "url('https://t4.ftcdn.net/jpg/05/45/38/81/360_F_545388190_ET3Cyc17paqouXtNU4EgG2kxt9p209nw.jpg')",
    Default : "url('https://static.vecteezy.com/system/resources/previews/011/780/268/large_2x/blue-sky-with-white-clouds-on-a-clear-day-free-photo.jpg')"
  }


  const[info,setInfo] = useState({
    city : "Mumbai",
    temperature : 0,
    country : "",
    pressure : 0,
    visibility : 0,
    humidity : 0,
    weatherName : "",
    wind : 0,
    bgImage : "",
  });

  const weatherInfo = useWeatherAPI(city);
  // console.log("Weather Info : ",weatherInfo);


  useEffect(()=>{
    if (weatherInfo && weatherInfo.main && weatherInfo.sys && weatherInfo.wind) {
      setInfo(
        {
          city : weatherInfo.name,
          temperature : (weatherInfo.main.temp -273).toFixed(),
          country : weatherInfo.sys.country,
          pressure : weatherInfo.main.pressure,
          humidity : weatherInfo.main.humidity,
          visibility : weatherInfo.visibility,
          weatherName : weatherInfo.weather.main,
          wind : weatherInfo.wind.speed,
          bgImage : bgImages[weatherInfo.weather[0].main] || bgImages.Default,
        }
      )
    }
    else{
      if(city!="Mumbai")
        alert("City Not Found !!");
    }
  },[weatherInfo]);


  return (
     <div className="w-full min-h-screen bg-no-repeat bg-center bg-cover z-0 justify-center flex items-center" style={{backgroundImage: info.bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full min-h-screen flex justify-center items-center backdrop-blur-lg sm:p-4 p-0 ">
        <div className="md:w-9/12 sm:w-full md:h-5/6 h-full sm:border-2 sm:border-white border-none sm:rounded-3xl rounded-none">
        <div className="w-full h-full sm:rounded-3xl sm:border-2   sm:border-white" style={{backgroundImage: info.bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>

          <div className="w-full h-full  flex flex-col items-center p-6 rounded-3xl backdrop-blur-none ">
            <SearchBar 
              setCity = {setCity}
            />
            <div className="flex justify-center w-full h-full items-center mt-4">
              
            <div className="bg-no-repeat bg-cover bg-center md:w-3/5 sm:w-4/5 sm:h-fit h-5/6 w-11/12 rounded-3xl sm:border-none border-2" style={{backgroundImage: info.bgImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TemperatureBox 
                temperature = {info.temperature}
                weatherName = {info.weatherName}
                city = {info.city}
                country = {info.country}
                humidity = {info.humidity}
                wind = {info.wind}
                visibility = {info.visibility}
                pressure = {info.pressure}
              />
            </div> 
              
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default App

