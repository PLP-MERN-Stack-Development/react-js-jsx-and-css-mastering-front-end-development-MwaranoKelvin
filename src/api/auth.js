const API_BASE_URL = 'https://your-api-domain.com/api/auth';

/**
 * Register a new user
 * @param {Object} userData
 * @returns {Promise<Object>} - Response data
 */
export async function register(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message|| 'Registration failed');
        }
        return await response.json();
    } catch (error) {
        throw error;        
    }
}

/**
 * Login a user
 * @param {Object} credentials
 * @returns {Promise<Object>}
 */
export async function login(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}

/** 
 * Logout a user
 * Clears any stored tokens or session data
*/
export function logout() {
    localStorage.removeItem('authToken');
}

/**
 * Get current authenticated user info
 * @param {string} token 
 * @returns {Promise<Object>}
 */
export async function getCurrentUser(token) {
    try {
        const response = await fetch(`${API_BASE_URL}/me`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch user');
        }
        return await response.jsob();
    } catch (error) {
        throw error;        
    }
}
