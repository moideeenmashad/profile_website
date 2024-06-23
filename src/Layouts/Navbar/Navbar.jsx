import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import Profile_img from "@/Assets/img/profile.jpg";
import NavbarToggler from "@/Components/Buttons/NavbarToggler";
import DarkModeToggle from "@/Components/Dark_Mode/DarkModeToggle";

const Navbar = () => {
  const navItems = [
    { navitem: "Home", LinkTo: "home", className: "nav-item" },
    { navitem: "About", LinkTo: "aboutMe", className: "nav-item" },
    { navitem: "Project", LinkTo: "projects", className: "nav-item" },
    { navitem: "Contact", LinkTo: "contact", className: "nav-item" },
    { navitem: "Blog", LinkTo: "/blog", className: "nav-item" },
  ];

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="profile_section">
            <img
              src={Profile_img}
              className="img-fluid rounded-circle profile-image"
              alt="Profile Image"
            />
            <a className="navbar-brand" href="#">
              Moideen Mashad
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <div className="d-md-block d-lg-none">
              <DarkModeToggle />
            </div>
            <NavbarToggler />
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li key={index} className={item.className}>
                  <ScrollLink
                    to={item.LinkTo}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="nav-link text-center"
                  >
                    {item.navitem}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div className="d-none d-lg-block">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
