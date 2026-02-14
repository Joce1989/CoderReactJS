
const BotonMultiUso = (props)=> {
console.log(props, "props");

    return (
        <button style={{backgroundColor:props.color}}
        onClick={props.onClickFunction}
        >{props.texto}</button>
    )
}

export default BotonMultiUso
