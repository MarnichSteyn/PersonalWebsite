import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    const location = useLocation();
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

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
                <button
                    onClick={() => setDarkMode(dm => !dm)}
                    style={{
                        marginLeft: 'auto',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        background: darkMode ? '#444950' : '#0366D6',
                        color: '#fff',
                        cursor: 'pointer',
                        fontWeight: 600
                    }}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
}

export default Navigation;