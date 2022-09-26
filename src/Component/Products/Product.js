import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart } = props
    
    const {id, name, price, stock, ratings, seller, img, category} = props.product

    return (
        <div className='product'>
            <img src={img} alt=""></img>
           <div className="product-info">
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <p>Stock: {stock} </p>
                <p>Seller: {seller} </p>
                <p>Ratings: {ratings} </p>
           </div>
    
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
               <p>Add To cart</p>
               <FontAwesomeIcon icon={faShoppingCart}>

               </FontAwesomeIcon>
               </button>
           
        </div>
    );
};

export default Product;