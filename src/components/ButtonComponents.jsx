const ButtonComponent = (props) => {
    const saludar = () => {
        alert("Hola desde react");
    };
    return (
        <button style={{ backgroundColor: props.color, padding: "10px 20px", width: "90px", height: "90px", border: "solid", cursor: "pointer" }} className="mi-boton" onClick={saludar}> {props.texto} </button>
    );
};

export default ButtonComponent;