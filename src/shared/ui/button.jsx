const Button = ({textBtn, funcBtn, isDisabled}) => {
    return (
        <button onClick={funcBtn} disabled={isDisabled}>
            {textBtn}
        </button>
    )
}

export default Button;