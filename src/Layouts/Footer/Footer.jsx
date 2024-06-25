import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const navItems = [
    { navitem: "Home", LinkTo: "home", className: "nav-item me-3" },
    { navitem: "About", LinkTo: "aboutMe", className: "nav-item me-3" },
    { navitem: "Project", LinkTo: "projects", className: "nav-item me-3" },
    { navitem: "Contact", LinkTo: "contact", className: "nav-item me-3" },
    { navitem: "Blog", LinkTo: "/blog", className: "nav-item me-3" },
  ];

  return (
    <>
      <footer className="footer_bg" id="footer">
        <div className="container">
          <div className="">
            <div className="row justify-content-center">
              {navItems.map((item, index) => (
                <div className="col-2 col-md-2 col-lg-1" key={index}>
                  <span className={item.className}>
                    <ScrollLink
                      to={item.LinkTo}
                      smooth={true}
                      duration={500}
                      spy={true}
                      className="nav-link text-center"
                    >
                      {item.navitem}
                    </ScrollLink>
                  </span>
                </div>
              ))}
            </div>
            <hr />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
