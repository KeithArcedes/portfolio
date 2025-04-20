"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-5 w-full z-50">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex justify-between items-center bg-gray-800 text-white rounded-lg shadow-lg py-4 px-8">
          <Link href="/" className="text-2xl font-bold text-purple-400">
            Logo.
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
