import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='bg-white dark:bg-gray-800 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='flex-shrink-0'>
                        <Link to="/" className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                            TaskManager
                        </Link>
                    </div>
                    <div className='hidden md:flex space-x-8'>
                        <Link to="/" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 rounded-md text-sm font-medium'>
                            Home
                        </Link>
                        <Link to='/about' className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 rounded-md text-sm font-medium'>
                            About
                        </Link>
                        <Link to="/tasks" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 rounded-md text-sm font-medium'>
                            Tasks
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};
export default Navbar;