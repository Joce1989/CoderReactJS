import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import de componentes
import ButtonComponent from './components/ButtonComponents';
import BotonMultiUso from './examples/BotonMultiUso';
import NavBar from"./components/NavBar"
import NavBarBS from "./components/NavBarBS"
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
function App() {
  // la funcion por prop, no se define en la etiqueda del componente, se debe declarar por afuera
 {/* const saludar = ()=>{
    alert ("Hola")
  }
  const despedir = ()=>{
    alert("Chau Chau")
  }*/}
  return (
    <>
   {/* <BotonMultiUso texto = "Hola" color ="red" onClickFunction={saludar}/>
    <BotonMultiUso texto = "Chau" color= 'green'onClickFunction={despedir}/>
    
    <ButtonComponent texto = "Boton Ract con Props" color = "yellow"/>*/}
   {/*<NavBar/>*/}
   <NavBarBS/>
   <ItemListContainer mensaje = "Bienvenidos a mi App"/>
   <ItemCount/>
    </>
  )
}

export default App
