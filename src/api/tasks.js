/**
 * Sample tasks data for the task manager app
 */

const tasks = [
    {
        id: 1,
        title: "Complete React Assignment",
        descriprion: "Finish the week 3 React JS assignment with all requirements.",
        completed: false,
        dueDate: "2025-08-10",
        priority: "High",
    },
    {
        id: 2,
        title: "Review pull requests",
        descriprion: "Review and merge pending pull requests on GitHub.",
        completed: false,
        dueDate: "2025-08-07",
        priority: "Medium",
    },
    {
        id :3,
        title: "Plan nect Sprint",
        descriprion: "Organize tasks and goals for the next development sprint.",
        completed: false,
        dueDate: "2025-08-12",
        priority: "Low",
    },
    {
        id: 4,
        title: "Team Meeting",
        descriprion: "Discuss project progress and blockers with the team.",
        completed: true,
        dueDate: "2025-08-05",
        priority: "Meduim",
    },
];

/**
 * Fetch all tasks
 * @returns {Promise<Array>}
 */
export function fetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 500); // Simulate network delay
    });
}

/**
 * Toggle Tasks Completion status by id
 * @param {number} id
 * @returns {Promise<Object>}
 */
export function toggleTaskCompletion(id) {
    return new Promise((resolve, reject) => {
        const task = tasks.find((t) => t.id === id);
        if (!task) {
            reject(new Error('Task not found'));
            return;
        }
        task.completed = !task.completed;
        setTimeout(() => resolve(tasks), 300);
    });
}

export default tasks;