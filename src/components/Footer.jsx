import React from 'react';

const Footer = () => {
    return (
        <footer className='w-fill bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-8'>
            <div className='max-w-7xl mx-auto px-4 text-center'>
                <p className='text-sm'>
                    &copy; {new Date().getFullYear()} Kelvin Mwarano. All rights reserved.
                </p>
                <p className='text-xs mt-1'>
                    Built with React &amp; 💖
                </p>
            </div>
        </footer>
    );
};

export default footer;