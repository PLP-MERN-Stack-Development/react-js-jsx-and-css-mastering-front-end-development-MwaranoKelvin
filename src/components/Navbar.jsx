import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav className='bg-white dark:bg-gray-800 shadow-md relative'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    <div className='flex-shrink-0'>
                        <Link to="/" className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                            TaskManager
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <Link to="/" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 rounded-md text-sm font-medium'>
                            Home
                        </Link>
                        <Link to='/about' className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 rounded-md text-sm font-medium'>
                            About
                        </Link>
                        <Link to="/tasks" className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 rounded-md text-sm font-medium'>
                            Tasks
                        </Link>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? 'Light' : 'Dark'}
                        </button>
                        {isAuthenticated ? (
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-700 dark:text-gray-300">{user?.name || user?.email || 'Me'}</span>
                                <button onClick={logout} className="px-3 py-1 text-sm bg-red-500 text-white rounded">Logout</button>
                            </div>
                        ) : (
                            <Link to="/login" className='px-3 py-1 bg-blue-600 text-white rounded text-sm'>Login</Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center gap-2'>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? 'Light' : 'Dark'}
                        </button>
                        {isAuthenticated ? (
                            <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Logout</button>
                        ) : (
                            <Link to="/login" className='px-3 py-1 bg-blue-600 text-white rounded text-sm'>Login</Link>
                        )}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-lg z-50`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/tasks"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tasks
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;