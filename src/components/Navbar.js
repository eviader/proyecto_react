import logo from './img/logo.png';
import './Navbar.css';
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <div class="Navbar">
        <nav class="nav-barra container-fluid">
            <div class="img-logo">
              <img id="logo" src={logo} alt=""></img> 
            </div>
            <div class="nav">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              <a class="nav-link active" aria-current="page" href="#">Productos</a>
              <a class="nav-link active" aria-current="page" href="#">Quienes somos</a>
              <a class="nav-link active" aria-current="page" href="#">Contactanos</a>
            </div>
            <div class="carrito">
              <CartWidget/>
            </div> 
        </nav>
    </div>
  );
}

export default Navbar;