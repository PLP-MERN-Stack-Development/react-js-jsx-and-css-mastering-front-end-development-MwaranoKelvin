import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches tasks from the API
 * @param {number} page - Page number for pagination
 * @param {number} limit - Number of items per page
 * @returns {Promise<{data: Array, total: number}>} Tasks data and total count
 * @throws {Error} API error
 */
export const fetchTasks = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    
    return {
      data: response.data,
      total: parseInt(response.headers['x-total-count'] || '0', 10),
    };
  } catch (error) {
    throw new Error('Failed to fetch tasks: ' + error.message);
  }
};

/**
 * Searches tasks based on title
 * @param {string} query - Search query
 * @returns {Promise<Array>} Filtered tasks
 * @throws {Error} API error
 */
export const searchTasks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`, {
      params: {
        q: query,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to search tasks: ' + error.message);
  }
};

/**
 * Toggles task completion status
 * @param {number} id - Task ID
 * @param {boolean} completed - New completion status
 * @returns {Promise<Object>} Updated task
 * @throws {Error} API error
 */
export const toggleTaskCompletion = async (id, completed) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/todos/${id}`, {
      completed,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update task: ' + error.message);
  }
};