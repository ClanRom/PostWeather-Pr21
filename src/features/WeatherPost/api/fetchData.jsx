import axios from "axios";

export default async function fetchData(city, API_key){
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&lang=ru`);
        const data = response.data;
        return data;
    } catch(error){
        console.error('Ошибка: ', error);
        return null
    }
}

