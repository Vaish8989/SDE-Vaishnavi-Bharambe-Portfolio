import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] py-8 border-t border-[#915EFF]/30 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} Vaishnavi Bharambe. All rights reserved.
        </p>
        <div className="flex space-x-6 text-[24px]">
          <a
            href="https://www.linkedin.com/in/vaishnavi-bharambe-b61303343/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#915EFF] transition-colors duration-300 purple-glow hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Vaish8989"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#915EFF] transition-colors duration-300 purple-glow hover:scale-110"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:vaishnavibharambe88@gmail.com"
            className="text-gray-400 hover:text-[#915EFF] transition-colors duration-300 purple-glow hover:scale-110"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:9309775906"
            className="text-gray-400 hover:text-[#915EFF] transition-colors duration-300 purple-glow hover:scale-110"
            title="Phone"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
