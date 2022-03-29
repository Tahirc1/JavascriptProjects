const Button = ({color , text , onClic }) => { 
    return(
        <div>
        <button onClick={onClic} style = {{backgroundColor:color}}className="btn">{text} </button>
        </div>
    )
}

Button.defaultProps = {
    color:'steelblue '
}

export default Button