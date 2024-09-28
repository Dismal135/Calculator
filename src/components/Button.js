const Button = ({handleClick, value, id}) => {
    return <button id={id} onClick={handleClick}>
        {value}
    </button>
}

export default Button