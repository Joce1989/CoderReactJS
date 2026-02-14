import { useEffect, useState } from "react"

const ItemCount = ()=>{
    //const [variableDeEstado, funcionModificadora]= useState(valorInicial)
    const [count, setCount] = useState(0)
    const [compra, setCompra] = useState(false)
    const sumar = ()=>{setCount(count+1)}
    const restar =()=>{
        if(count>0){
        setCount(count-1)}}
        const comprar=()=>{
            setCompra(!compra)
        }
        useEffect(()=>{
            console.log("se agrego al carrito")
        },[compra])


    return(
        <div>
            <h1>REMERAS</h1>
            <button onClick={restar}className="btn btn-danger">-</button>
            <span className="btn">{count}</span>
            <button onClick={sumar}className="btn btn-success">+</button>
            <button className="btn btn-primary" onClick={comprar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount