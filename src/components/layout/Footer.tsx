"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Logo.
            </Link>
            <p className="mt-2 text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mb-6 md:mb-0">
            <Link
              href="#home"
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Divider and attribution */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>Designed and built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
