import { CartProvider } from 'react-use-cart';
import Card from './Card';
import Cart from './Cart';
const ShowCart = () =>{
    return(
        <div>
            <CartProvider>
                <Card/>
                <Cart/>
            </CartProvider>
        </div>
    )
}
export default ShowCart;