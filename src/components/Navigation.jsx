import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link 
                    to="/education" 
                    className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`}
                >
                    Education
                </Link>
                <Link 
                    to="/experience" 
                    className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}
                >
                    Experience
                </Link>
                <Link 
                    to="/blog" 
                    className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                >
                    Blog
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;