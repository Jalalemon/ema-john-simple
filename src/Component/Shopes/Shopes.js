import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Products/Product';
import './Shopes.css'

const Shopes = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

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
        <Cart carts = {carts}></Cart>
            </div>
        </div>
    );
};

export default Shopes;