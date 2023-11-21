import cart from './assets/carrito.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <nav>

            <div>
                <img src={cart} alt="cart-widget" className='cart-img'/>
                0
            </div>
        </nav>
    )
    }
    
    export default CartWidget