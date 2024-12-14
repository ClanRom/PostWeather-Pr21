import Button from '../../../shared/ui/button'


export default function ButtonUpdate ({funcBtn, isDisabled}){
    return (
    <Button
        textBtn = {!isDisabled ? 'Обновить' : 'Обновление...'}
        funcBtn = {funcBtn}
        isDisabled = {isDisabled}
    />
    )
}