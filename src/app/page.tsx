"use client"; // Ensure this is at the top

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For navigation

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter(); // Initialize router for navigation

  const toggleStartPause = () => {
    setIsStarted((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark", !isDarkMode);
    setIsDarkMode((prevState) => !prevState);
  };

  const goToTodoList = () => {
    router.push("todo"); // Navigate to the Todo page
  };

  const goToBlog = () => {
    router.push("blog"); // Navigate to the Blog page
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="w-full py-4 flex items-center justify-between px-6 rounded-sm bg-gray-200 dark:bg-gray-800">
        <h1 className="text-xl font-bold">Amri</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition flex items-center gap-2"
        >
          <Image
            src={isDarkMode ? "/mode-light.svg" : "/mode-dark.svg"} // Switch icons based on dark mode state
            alt="Mode Icon"
            width={20}
            height={20}
            className="invert" // Ensures the icons are always white
          />
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="self-center"
          src="/amri.jpeg"
          alt="Amri foto"
          width={180}
          height={38}
          priority
        />
        <div className="text-center font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2">Amri Zadi Hudaya</h2>
          <p>Student of Muhammadiyah University of Surakarta</p>
        </div>
        <div className="flex gap-6">
          <button
            onClick={toggleStartPause}
            className={`px-6 py-3 text-lg font-semibold rounded-md shadow-md 
              ${isStarted ? "bg-blue-500 text-white" : "bg-green-500 text-white"} 
              hover:opacity-90`}
          >
            {isStarted ? "Pause" : "Start"}
          </button>
          <button
            onClick={goToTodoList}
            className="px-6 py-3 text-lg font-semibold rounded-md shadow-md bg-yellow-500 text-white hover:opacity-90"
          >
            To Do List
          </button>
          <button
            onClick={goToBlog}
            className="px-6 py-3 text-lg font-semibold rounded-md shadow-md bg-purple-500 text-white hover:opacity-90"
          >
            Go to Blog
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-gray-200 dark:bg-gray-800">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/AMRIZH/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Visit my github →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Documentation →
        </a>
      </footer>
    </div>
  );
}
