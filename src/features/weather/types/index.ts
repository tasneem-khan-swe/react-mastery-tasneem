interface Weather{
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50n"
        }
        interface Main{
            "temp": number,
            "feels_like": number,
            "temp_min": number,
            "temp_max": number,
            "pressure": number,
            "humidity": number,
            "sea_level": number,
            "grnd_level": number
        }
        interface Sys{
        "type": 1,
        "id": 9052,
        "country": "IN",
        "sunrise": 1761959290,
        "sunset": 1762000484
    }
interface WeatherData{
    weather: Weather[],
    main: Main,
    sys: Sys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}
export type {WeatherData}