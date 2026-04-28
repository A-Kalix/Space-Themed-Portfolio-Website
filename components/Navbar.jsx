import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        
        <a href="#home" className="navbar-brand">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className="navbar-logo"
          />
          <span className="navbar-title">Ahmed Khalil</span>
        </a>

        <div className="navbar-links">
          <a href="#about" className="navbar-link">About me</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>

        <div className="navbar-socials">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
