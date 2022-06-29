import logo from './assets/logo.png';
import './Navbar.css';
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <div className="Navbar">
        <nav className="nav-barra container-fluid">
            <div className="img-logo">
              <img id="logo" src={logo} alt=""></img> 
            </div>
            <div className="nav">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              <a className="nav-link active" aria-current="page" href="#">Productos</a>
              <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
              <a className="nav-link active" aria-current="page" href="#">Contactanos</a>
            </div>
            <div className="carrito">
              <CartWidget/>
            </div> 
        </nav>
    </div>
  );
}

export default Navbar;