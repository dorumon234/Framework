"use client"; // Ensure this is at the top

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For navigation

export default function Home() {
  const [running, setRunning] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const navigation = useRouter(); // Initialize router for navigation

  const handleStartStop = () => {
    setRunning((prevStatus) => !prevStatus);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark", !darkTheme);
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const navigateToTodo = () => {
    navigation.push("/todo"); // Navigate to the Todo page
  };

  const navigateToBlog = () => {
    navigation.push("/blog"); // Navigate to the Blog page
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-16 gap-8 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <header className="w-full py-4 flex items-center justify-between px-5 rounded bg-gray-300 dark:bg-gray-700">
        <h1 className="text-xl font-bold">Pradipta</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition flex items-center gap-2"
        >
          <Image
            src={darkTheme ? "/mode-light.svg" : "/mode-dark.svg"}
            alt="Theme Icon"
            width={20}
            height={20}
          />
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="rounded-full"
          src="/picture.jpg"
          alt="Profile Picture"
          width={160}
          height={160}
          priority
        />
        <div className="text-center">
          <h2 className="text-lg font-bold">Pradipta Aulia Fairuzqalbi</h2>
          <p className="text-sm">Student of Muhammadiyah University of Surakarta</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleStartStop}
            className={`px-5 py-2 text-lg font-semibold rounded shadow ${
              running ? "bg-blue-500 text-white" : "bg-green-500 text-white"
            } hover:opacity-80`}
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={navigateToTodo}
            className="px-5 py-2 text-lg font-semibold rounded shadow bg-yellow-500 text-white hover:opacity-80"
          >
            Todo List
          </button>
          <button
            onClick={navigateToBlog}
            className="px-5 py-2 text-lg font-semibold rounded shadow bg-purple-500 text-white hover:opacity-80"
          >
            Blog
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 flex gap-4 justify-center bg-gray-300 dark:bg-gray-700">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://github.com/AMRIZH/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/window.svg" alt="GitHub Icon" width={16} height={16} />
          GitHub →
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/globe.svg" alt="Docs Icon" width={16} height={16} />
          Next.js Docs →
        </a>
      </footer>
    </div>
  );
}
