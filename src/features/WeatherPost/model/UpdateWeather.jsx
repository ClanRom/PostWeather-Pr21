import fetchData from '../api/fetchData'

export const UpdateWeather = async(city, setWeather, setIsCityReady) => {
    const API_key = '24f246d079655b17050f8b185f170612';
    setIsCityReady(false)

    const data = await fetchData(city, API_key);
    
    setIsCityReady(true)
    setWeather(data);
}
