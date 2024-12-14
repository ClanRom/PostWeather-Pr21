export default function WeatherInfo({weather, isCityReady}){
    const src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return(
        <div className="weather-info">
            <h2>{weather.name}</h2>
            <img src={src} alt="Картинка" />
            <p>Температура: {weather.main.temp}K</p>
            <p>Температура: {Math.round(weather.main.temp - 273)}&deg;C</p>
            <p>{weather.weather[0].description}</p>
        </div>
    )
}