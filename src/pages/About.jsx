import React from 'react';

const About = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
            <section className="max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10">
                <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-lg leading-relaxed mb-4">
                    Welcome to our Task Manager application! This app is designed to help you organize your daily tasks efficiently and boost your productivity.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Built with React and modern web technologies, our goal is to provide a clean, intuitive interface that makes task management simple and enjoyable.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Whether you're managing personal projects or collaborating with a team, our app offers the flexibility and features you need to stay on top of your work.
                </p>
                <p className="text-lg leading-relaxed">
                    Thank you for choosing our app. We hope it helps you achieve your goals!
                </p>
            </section>
        </main>
    );
};

export default About;