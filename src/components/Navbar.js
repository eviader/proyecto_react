import logo from './assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom'
import CartWidget from './card-widget/CartWidget';


function Navbar() {
  return (
    <div className="Navbar">
        <nav className="nav-barra container-fluid">
            <div className="img-logo">
              <Link to="/"><img id="logo" src={logo} alt=""></img> </Link>  
            </div>
            <div className="nav">
              <Link to='/inicio'><a className="nav-link active" aria-current="page" href="#">Inicio</a></Link>
              <a className="nav-link active" aria-current="page" href="#">Productos</a>
              <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
              <a className="nav-link active" aria-current="page" href="#">Contactanos</a>
            </div>
            <div className="carrito">
              <Link to='/items-carrito'><a className="nav-link active" aria-current="page" href="#"><CartWidget /></a></Link>
            </div> 
        </nav>
    </div>
  );
}

export default Navbar;