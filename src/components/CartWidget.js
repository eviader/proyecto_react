import './CartWidget.css';
import carrito from './img/carros.png';

function CartWidget() {
    return (
        <div class="carrito">
        <img id="carrito" src={carrito} alt=""></img>
        </div> 
    );
  }

export default CartWidget;