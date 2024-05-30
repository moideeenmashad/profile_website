import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import ContactButton from "../../Components/Buttons/ContactButton";
import Profile_img from "../../Assets/img/profile.jpg";
import NavbarToggler from "../../Components/Buttons/NavbarToggler";
import DarkModeToggle from "../../Components/Dark_Mode/DarkModeToggle";

const Navbar = () => {
  const navItems = [
    { navitem: "Home", LinkTo: "/", className: "nav-item" },
    { navitem: "About", LinkTo: "aboutMe", className: "nav-item" },
    { navitem: "Projects", LinkTo: "projects", className: "nav-item" },
    { navitem: "Blog", LinkTo: "/blog", className: "nav-item" },
    { navitem: "contact", LinkTo: "/contact", className: "nav-item d-lg-none" },
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
                  {item.navitem === "About" || item.navitem === "Projects" ? (
                    <Link
                      to={item.LinkTo}
                      smooth={true}
                      duration={100}
                      className="nav-link text-center"
                    >
                      {item.navitem}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.LinkTo}
                      className="nav-link text-center"
                      activeClassName="active"
                      exact
                    >
                      {item.navitem}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="d-none d-lg-block">
              <DarkModeToggle />
            </div>
            <ul className="navbar-nav  d-none d-lg-flex">
              <li className="nav-item">
                <ContactButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
