import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>R O U P E R A</h1> 
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;