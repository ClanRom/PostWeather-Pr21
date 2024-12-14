import ButtonUpdate from '../../features/WeatherPost/ui/ButtonUpdate';
import CitySelector from '../../features/WeatherPost/ui/CitySelector';
import { useState, useEffect } from 'react';
import {UpdateWeather} from '../../features/WeatherPost/model/UpdateWeather';
import WeatherInfo from '../../features/WeatherPost/ui/WeatherInfo';
import './WeatherPage.css'

function WeatherPage(){

    const [city, setCity] = useState(localStorage.getItem('city') || 'Москва')
    const [weather, setWeather] = useState(null);
    const [isCityReady, setIsCityReady] = useState(true)

    useEffect(() => {
        UpdateWeather(city, setWeather, setIsCityReady)
        localStorage.setItem('city', city)
    }, [city])

    useEffect(() => {
        const interval = setInterval(() => {
            UpdateWeather(city, setWeather, setIsCityReady);
        }, 1000 * 60 * 10)

        return () => clearInterval(interval)
    }, [city])

    return(
        <>
            <CitySelector
            city = {city}
            setCity = {setCity}
            />
            <ButtonUpdate 
            funcBtn = {() => UpdateWeather(city, setWeather, setIsCityReady)} 
            isDisabled = {!isCityReady}
            />
            {!isCityReady ? (
                <p className='info'>Загрузка...</p>
            ) : weather ? (
                <WeatherInfo
                weather={weather}
                isCityReady={isCityReady}
                />
            ) : (
                <p className='info'>Нет данных о погоде</p>
            )}
        </>
    )
}

export default WeatherPage;