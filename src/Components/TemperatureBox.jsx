import WeatherProperties from "./WeatherProperties";
import windLogo from "../Assets/wind.png"
import humidityLogo from "../Assets/humidity.png"
import visibilityLogo from "../Assets/visibility.png"
import pressureLogo from "../Assets/presssure.png"

function TemperatureBox(
    {
        temperature,weatherName,city,country,humidity,wind,visibility,pressure
    }
)
{
    return(
        <div className="w-full h-full backdrop-blur-lg flex flex-col justify-center items-center text-white p-5 rounded-3xl">
         <div className="sm:flex-col flex-row flex justify-center items-center w-full h-full ">
            <h2 className="sm:text-8xl text-6xl font-thin mx-3">
            {temperature}°C
            </h2>
            <div className="flex h-full flex-col sm:justify-center sm:items-center ">
                <p className="sm:p-2 font-thin sm:self-center ">
                {weatherName}
                </p>
                <p className="self-center text-md sm:text-xl font-thin ">
                    {city}, <b>{country}</b>
                </p>
            </div>
            
         </div>
         
         <div className="flex w-full h-full items-center justify-center flex-wrap mt-2">
            <WeatherProperties logo={humidityLogo} name="Humidity" value = {humidity+"%"}/>
            <WeatherProperties logo={windLogo} name="Wind Speed" value = {wind+" Km/h"}/>
            <WeatherProperties logo={visibilityLogo} name="Visibility" value = {visibility+" mi"}/>
            <WeatherProperties logo={pressureLogo} name="Pressure" value = {pressure+' "Hg'}/>
         </div>

        </div>
    )
}
export default TemperatureBox;