import { useState, useEffect, useCallback } from 'react';

/**
 * custom hook to manage authentication state
 * @returns {Object}
 */
function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulate fetching current user from localStorage or API
    useEffect(() => {
        setLoading(true);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    /**
 * Login Function
 * @param {Object} userData
 */
    const login = useCallback((userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    }, []);

    /**
     * Logout function
     */
    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
    }, []);

    return {
        user,
        loading,
        error,
        login,
        logout,
    };
}
export default useAuth;
