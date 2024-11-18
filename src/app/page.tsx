import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <nav className="w-full py-4 bg-slate-50 flex items-center justify-between px-6 rounded-sm">
        <h1 className="text-xl font-bold">Amri</h1>
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
          Login
        </button>
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert self-center"
          src="/amri.jpeg"
          alt="Amri foto"
          width={180}
          height={38}
          priority
        />
        <span className="list-inside text-sm text-center  font-[family-name:var(--font-geist-mono)]">
          <h2 className="mb-2">
            Amri Zadi Hudaya
          </h2>
          <p>Student of Muhammadiyah University of Surakarta</p>
        </span>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
