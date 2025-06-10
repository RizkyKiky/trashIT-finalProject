import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-header-bg fixed top-0 left-0 right-0 z-50 py-5">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-header-title">Trash-It</h1>
          <nav className="flex gap-5">
            <Link
              to="/"
              className="text-header-link hover:text-header-link-hover font-medium text-base transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-header-link hover:text-header-link-hover font-medium text-base transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-header-link hover:text-header-link-hover font-medium text-base transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-header-link hover:text-header-link-hover font-medium text-base transition-colors"
            >
              Contact
            </a>
            <Link
              to="/signin"
              className="text-header-link hover:text-header-link-hover font-medium text-base transition-colors"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
