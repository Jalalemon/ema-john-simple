import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Product from '../Products/Product';
import './Shopes.css'
import { useLoaderData } from 'react-router-dom';

const Shopes = () => {
    const products = useLoaderData()
    const [carts, setCarts] = useState([])
   
    const clearCart = () => {
        setCarts([])
        deleteShoppingCart()
    }
    const handleAddToCart = (product) => {
        const newCart = [...carts, product]
        setCarts(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shope-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    product = {product}
                    key = {product.id}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts} clearCart={clearCart} ></Cart>
            </div>
        </div>
    );
};

export default Shopes;