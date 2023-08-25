import React from 'react';
import './Cart.css'
import { useCart } from 'react-use-cart';
import {Link, useNavigate} from 'react-router-dom';

const Cart = () => {

    const makePayments = (totals) =>{
        window.location ='#home'
    }
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart()
    if (isEmpty) return (<h1 className='empty'> MakePayments</h1>)
    return (
        <div className='book' id='cart'>
            <table border='0' cellPadding='0' cellspacing='0'>
                <tbody>
                    <tr>
                        <th colSpan='2'>Product</th>
                        <th>price</th>
                        <th colSpan='2'>quantity</th>
                    </tr>
                    {
                        items.map( (item, index) =>(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} alt='' style={{height:'40px',width:'50px'}}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td className='buttons'>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                    <button onClick={() => removeItem(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <div className='totals'>
                    <p>NB: All amount is in Ksh!! </p>
                    <h2> Amount: {cartTotal}</h2>
                    <button className='reset' onClick={()=> emptyCart()}>Clear Cart</button>
                    <Link to = '/mpesa'>
                        <button onClick={() => makePayments({cartTotal})}>M-PESA</button>
                    </Link>
                    <Link to = '/cardpayment'>
                        <button onClick={() => makePayments({cartTotal})}>DEBIT-CARD</button>
                    </Link>                    
                </div>
            </table>

        </div>
    );
};

export default Cart;