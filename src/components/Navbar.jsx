import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/daacad-ict logo.png";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  // Active / inactive nav link styles
  const linkClass = ({ isActive }) =>
    `cursor-pointer font-medium ${
      isActive ? "text-[#df5f0f]" : "text-[#7a7a7a] hover:text-[#df5f0f]"
    }`;

  return (
    <header>
      <nav className="w-[80%] mx-auto flex items-center justify-between py-4">
        {/* Brand */}
        <img src={Logo} alt="Daacad ICT" className="h-10" />

        {/* Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={linkClass}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/seminars" className={linkClass}>
              Seminars
            </NavLink>
          </li>
        </ul>

        {/* Call to action */}
        <NavLink to="/contact">
          <button className="inline-flex items-center justify-center gap-1 bg-[#df5f0f] text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            <span>Contact</span>
            <ArrowRight className="size-4 relative top-1px" />
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
