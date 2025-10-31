import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '10vh' }}>
            <FaExclamationTriangle size={60} color="#ff4d4f" style={{ marginBottom: 20 }} />
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
                <button
                    style={{
                        marginTop: 20,
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontSize: 16,
                    }}
                >
                    Go back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;