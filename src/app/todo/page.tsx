"use client"; // Ensure this is at the top

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask(""); // Reset input field after adding task
    }
  };

  const handleDeleteTask = (taskToDelete: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== taskToDelete));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="w-full py-4 flex items-center justify-between px-6 rounded-sm bg-gray-200 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Amri</h1>
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition flex items-center gap-2">
          <Image
            src="/mode-light.svg"
            alt="Mode Icon"
            width={20}
            height={20}
            className="invert" // Ensures the icon is always white
          />
          Home
        </Link>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-md mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">My To Do List</h2>

        {/* Input Section */}
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {tasks.map((taskItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
            >
              <span>{taskItem}</span>
              <button
                onClick={() => handleDeleteTask(taskItem)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
