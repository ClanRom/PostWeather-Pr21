import Input from '../../../shared/ui/input'

export default function CitySelector({city, setCity}){
    return(
        <>
            <Input
                type = 'text'
                value = {city}
                placeholder = 'Город'
                onChange = {(e) => setCity(e.target.value)}
            />
        </>
    )
}