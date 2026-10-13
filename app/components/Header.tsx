"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="logo">
          Hassan<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="hire-btn">
          Hire Me <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #252525;
        }

        .navbar {
          max-width: 1200px;
          height: 76px;
          margin: auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: -1px;
        }

        .logo span {
          color: #a3e635;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: #b3b3b3;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.25s ease;
        }

        .nav-links a:hover {
          color: #a3e635;
        }

        .hire-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: #a3e635;
          color: #111;
          border-radius: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.25s ease;
        }

        .hire-btn:hover {
          transform: translateY(-2px);
        }

        .menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 27px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .navbar {
            height: 68px;
            padding: 0 20px;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 68px;
            left: 0;
            right: 0;
            padding: 24px;
            background: #111;
            border-bottom: 1px solid #252525;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .nav-links.active {
            display: flex;
          }

          .hire-btn {
            margin-left: auto;
            margin-right: 16px;
            padding: 10px 13px;
          }

          .menu-toggle {
            display: block;
          }
        }

        @media (max-width: 380px) {
          .navbar {
            padding: 0 12px;
          }

          .hire-btn {
            margin-right: 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
}