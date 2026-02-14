//IMPORT DEL CSS
import"../assets/Style/NavBar.css"
//IMAGENES DEPENDEN DE DONDE ESTAN
import logoReact from "../assets/react.svg"
import CartWidget from"./CartWidget"

const NavBar = () => {
    return (
        <nav className="nav-container">
          <a className="anchor-nav" href="">Coder shop</a>
          <img src={logoReact} alt="logo"/>
          <a className="anchor-nav" href="">Nuevos</a>
          {/*IMAGEN PUBLIC- SE UTILIZA PARA LOS PRODUCTOS*/}
          <img src={"../vite.svg"} alt="" />
          <a className="anchor-nav" href="">Ofertas</a>
          <a className="anchor-nav" href="">Mas Vendidos</a>
          <CartWidget/>     
        </nav>
    )
}

export default NavBar