import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Main Page</Link>
                    </li>
                    <li>
                        <Link to="/emissions-info">Calculator Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;