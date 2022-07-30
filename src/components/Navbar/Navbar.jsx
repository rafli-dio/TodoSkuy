import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <p className='title'>Todo<span>Skuy</span></p>
            <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/todo">Todo</Link>
            </li>
            <li>
                <Link to="/article">Article</Link>
            </li>
            </nav>
        </div>
    )
}

export default Navbar;