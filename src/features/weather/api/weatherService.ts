const API_KEY="c2713ac53d197b4aa236f55c2c73b6dc";
const BASE_URL="https://api.openweathermap.org/data/2.5/weather";
const getWeatherDataByCity=async(city:string)=>{
    const response=await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    // if(!response.ok){
    //     throw new Error("Failed to fetch weather data");
    // }
    return await response.json();    
}
export {getWeatherDataByCity};