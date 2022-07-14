import './CartWidget.css';
import carrito from '../assets/carros.png';

function CartWidget() {
    return (
        <div className="carrito">
        <img id="carrito" src={carrito} alt=""></img>
        </div> 
    );
  }

export default CartWidget;