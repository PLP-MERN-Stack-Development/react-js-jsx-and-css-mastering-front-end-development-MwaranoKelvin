import React from 'react';
import TaskManager from '../components/TaskManager';

const Home = () => {
  return (
    <main className="min-h-screen flex items-start justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <section className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow rounded-lg p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Task Manager Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Organize your day and stay productive.</p>
        </header>

        <TaskManager />
      </section>
    </main>
  );
};

export default Home;
