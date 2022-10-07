import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'
const ReviewItem = ({ product, handleRemoveItem }) => {
    const {name, price, img, quantity, id, shipping }= product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <h2>{name} </h2>
                    <p><small>Price: ${price} </small></p>
                    <p><small>Shipping: ${shipping} </small></p>
                    <p><small>Quantity: {quantity} </small></p>
                </div>
            </div>
            <div className="delete-container">
                <button onClick={() => handleRemoveItem (id)} className='button-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}>

                    </FontAwesomeIcon>
                </button>
            </div>

        </div>
       
    );
};

export default ReviewItem;