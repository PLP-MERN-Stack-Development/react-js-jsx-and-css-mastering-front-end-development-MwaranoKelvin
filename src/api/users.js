

/**
 * Sample users data for demonstration
 */
const users = [
    {
        id: 1,
        username: "Kelvin Mwarano",
        email: "kelvin@example.com",
        role: "admin",
    },
    {
        id: 2,
        username: "Jane Kuria",
        email: "jane.kuria@example.com",
        role: "user",
    },
    {
        id: 3,
        username: "Felix Otieno",
        email: "felix.otieno@example.com",
        role: "user",
    },
];

/**
 * Fetch all users
 * @returns {Promise<Array>}
 */
export function fetchusers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 500);
    });
}

/**
 * Fetch user by ID
 * @param {number} id 
 * @returns {Promise<Object>}
 */
export function fetchUserById(id) {
    return new Promise((resolve, reject) => {
        const user =users.find((u) => u.id === id);
        if (!user) {
            reject(new Error('User not found!!!❗'));
            return;
        }
        setTimeout(() => resolve(user), 300);
    });
}
export default users;