import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {carts} = props;

    let total = 0;
    let shipping = 0;
    
  for (const product of carts){
    total = total + product.price;
    shipping = shipping + product.shipping;
}
const tax = (total * 0.1).toFixed(2);
const totalCost = +total + +shipping + +tax;

    return (
        <div className='cart'>
            <h1>Order lists</h1>
            <p>Selected items: {carts.length}</p>
            <p>price: ${total}</p>
            <p>Shipping: ${shipping} </p>
            <p>tax : {tax} </p>
            <h2>total :$ {totalCost} </h2>
        </div>
    );
};

export default Cart;