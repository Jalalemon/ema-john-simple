import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
const {products, initialCart} =  useLoaderData();
const [cart, setCart ] = useState(initialCart);

const handleRemoveItem = (id)=>{
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining);
    removeFromDb(id);
}

const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
}
    return (
        <div className='shope-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id} 
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                         ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Item for review please,
                      <Link to = '/' >Shop more</Link>
                    </h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} carts ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;