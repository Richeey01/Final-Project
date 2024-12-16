import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="" />
            </div>

            <nav className="nav">
                <Link className='nav-button' to='/'>Главная </Link>
                <Link className='nav-button' to='/about'>О нас </Link>
                <Link className='nav-button' to='/teachers'>Преподаватели</Link>
                <Link className='nav-button' to='/rules'>Правила </Link>
            </nav>

        </header>
    );
}

export default Header;
