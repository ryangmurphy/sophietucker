import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-4xl mx-auto py-3 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-800">Sophie Tucker</h2>
            <p className="text-pink-600">Marketing Professional</p>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="text-pink-700 hover:text-pink-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-pink-700 hover:text-pink-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="#work"
              className="text-pink-700 hover:text-pink-900 transition-colors"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="text-pink-700 hover:text-pink-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/sophie-tucker/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6 border-pink-300 hover:scale-110" />
          </a>
          <a
            href="mailto:sophieqtucker@gmail.com"
            className="text-pink-600 hover:text-pink-800"
          >
            <span className="sr-only">Email</span>
            <FaEnvelope className="h-6 w-6 hover:scale-110" />
          </a>
        </div>
        <p className="mt-8 text-center text-pink-600 text-sm">
          &copy; {new Date().getFullYear()} Sophie Tucker. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
