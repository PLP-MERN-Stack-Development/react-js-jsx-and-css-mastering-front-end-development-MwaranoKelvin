// src/api/api.js
import axios from 'axios';
import { register, login, logout, getCurrentUser } from 'auth';
import { fetchTasks, toggleTaskCompletion, } from '.tasks';
import { fetchUsers, fetchUserById } from './users';

const JSONPLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches a list of posts from JSONPlaceholder.
 * @returns {Promise<Array>} Array of post objects.
 */
export async function fetchPosts() {
    const response = await axios.get(`${JSONPLACEHOLDER_BASE_URL}/posts`);
    return response.data;
}

/**
 * Fetches a single post by ID from JSONPlaceholder.
 * @param {number} id - Post ID.
 * @returns {Promise<Object>} Post object.
 */
export async function fetchPostById(id) {
  const response = await axios.get(`${JSONPLACEHOLDER_BASE_URL}/posts/${id}`);
  return response.data;
}

/**
 * Fetches comments for a specific post from JSONPlaceholder.
 * @param {number} postId - Post ID.
 * @returns {Promise<Array>} Array of comment objects.
 */
export async function fetchCommentsByPostId(postId) {
    const response = await axios.get(`${JSONPLACEHOLDER_BASE_URL}/posts/${postId}/comments`);
    return response.data;
}

/**
 * Creates a new post on JSONPlaceholder.
 * @param {Object} postData Data for the new post
 * @returns {Promise<object>} Created post object
 */
export async function createPost(postData) {
    const response = await axios.post(`${JSONPLACEHOLDER_BASE_URL}/posts`, postData);
    return response.data;
}

/**
 * Updates an existing post on JSONPlaceholder.
 * @param {numbder} id -post Id
 * @param {Object} postData
 * @returns {Promise<Object>}
 */
export async function updatePost(id, postData) {
    const response = await axios.put(`${JSONPLACEHOLDER_BASE_URL}/posts/${id}`, postData);
    return response.data;
}

/**
 * Deletes a post from JSONPlaceholder
 * @param {number} id
 * @returns {Promise<void>}
 */
export async function deletePost(id) {
    await axios.delete(`${JSONPLACEHOLDER_BASE_URL} /posts/${id}`);
}

/**
 * Centralized API export for easier imports
 */
export const api = {
    auth: {
        register,
        login,
        logout,
        getCurrentUser,
    },
    tasks: {
        fetchTasks,
        toggleTaskCompletion,
    },
    users: {
        fetchUsers,
        fetchUserById,
    },
    posts: {
        fetchPosts,
        fetchPostById,
        fetchCommentsByPostId,
        createPost,
        updatePost,
        deletePost,
    },
};


export default api;