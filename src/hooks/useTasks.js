import { useState, useEffect } from 'react';
import { fetchTasks, toggleTaskCompletion } from '../api/tasks';

/**
 * Custom hook to manage tasks state and actions
 * @returns {Object} - { tasks, loading, error, toggleCompletion }
 */
function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch tasks');
        setLoading(false);
      });
  }, []);

  /**
   * Toggle completion status of a task by id
   * @param {number} id - Task ID
   */
  const toggleCompletion = (id) => {
    toggleTaskCompletion(id)
      .then((updatedTask) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      })
      .catch((err) => {
        setError(err.message || 'Failed to update task');
      });
  };

  return {
    tasks,
    loading,
    error,
    toggleCompletion,
  };
}

export default useTasks;