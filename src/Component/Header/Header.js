import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;