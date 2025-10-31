import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { fetchTasks, searchTasks, toggleTaskCompletion } from '../api/tasks';
import localTasks from '../pages/Tasks';
import debounce from '../utils/debounce';

const TaskContext = createContext();

/**
 * Custom hook for using the task context
 * @returns {Object} Task context value
 */
export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}

/**
 * Task Provider component that wraps the app with task management functionality
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export function TaskProvider({ children }) {
  // Initialize tasks from local static list if available, otherwise start empty and fetch from API
  const [tasks, setTasks] = useState(() => (Array.isArray(localTasks) && localTasks.length ? localTasks : []));
  const useLocal = Array.isArray(localTasks) && localTasks.length > 0;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // Fetch tasks from API
  const loadTasks = useCallback(async (pageNum = 1) => {
    try {
      setLoading(true);
      setError(null);
      const { data, total } = await fetchTasks(pageNum);
      setTasks(prev => pageNum === 1 ? data : [...prev, ...data]);
      setHasMore(tasks.length < total);
    } catch (err) {
      setError('Failed to load tasks. Please try again.');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  }, [tasks.length]);

  // Search tasks with debouncing
  const handleSearch = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        loadTasks(1);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const data = await searchTasks(query);
        setTasks(data);
        setHasMore(false);
      } catch (err) {
        setError('Failed to search tasks. Please try again.');
        console.error('Error searching tasks:', err);
      } finally {
        setLoading(false);
      }
    }, 300),
    [loadTasks]
  );

  // Toggle task completion status
  const toggleTask = async (id) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      setLoading(true);
      if (useLocal) {
        // Update locally
        setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
      } else {
        const updatedTask = await toggleTaskCompletion(id, !task.completed);
        setTasks(prevTasks => prevTasks.map(t => t.id === id ? updatedTask : t));
      }
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new task (local by default)
  const addTask = async ({ title, description = '', dueDate = null, priority = 'Low' }) => {
    if (!title || !title.trim()) return;
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description,
      completed: false,
      dueDate,
      priority,
    };

    // If using local tasks, just update state. Otherwise, optimistically update and (optionally) call API.
    setTasks(prev => [newTask, ...prev]);
  };

  // Delete a task (local)
  const deleteTaskLocal = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Load more tasks for pagination
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
      loadTasks(page + 1);
    }
  }, [loading, hasMore, page, loadTasks]);

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Initial load: only fetch from API if we don't have local tasks
  useEffect(() => {
    if (!Array.isArray(localTasks) || localTasks.length === 0) {
      loadTasks(1);
    }
  }, [loadTasks]);

  // Context value
  const value = {
    tasks: filteredTasks,
    loading,
    error,
    hasMore,
    searchQuery,
    filter,
    setSearchQuery,
    setFilter,
    handleSearch,
    toggleTask,
    loadMore,
    addTask,
    deleteTask: deleteTaskLocal,
    refreshTasks: () => loadTasks(1)
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}