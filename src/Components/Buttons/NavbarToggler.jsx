import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <HiMenuAlt2 />
    </button>
  );
};

export default NavbarToggler;
