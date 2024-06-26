import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedinIn, FaStackOverflow, FaInstagram } from "react-icons/fa";
import { IoLogoGithub, IoMail } from "react-icons/io5";
import userSocialProfile from "@/Utils/user_social_media_link.json";
import userData from "@/Utils/user_data.json";

const Footer = () => {
  const socialMediaIcons = {
    linkedin: <FaLinkedinIn />,
    github: <IoLogoGithub />,
    email: <IoMail />,
    stack_overflow: <FaStackOverflow />,
    instagram: <FaInstagram />,
  };
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
          <div className="footer_body">
            {/* sections */}
            <div className="row justify-content-center align-items-center">
              {navItems.map((item, index) => (
                <div
                  className="col-2 col-md-2 col-lg-1 d-flex align-items-center"
                  key={index}
                >
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
            {/* social links */}
            <div className="d-flex justify-content-center align-items-center mb-24">
              {userSocialProfile &&
                userSocialProfile.map((item, index) => (
                  <a
                    key={index}
                    href={item.LinkTo}
                    className="social_media_icon text_color me-3"
                    target="_blank"
                    data-toggle="tooltip"
                    title={item.title}
                  >
                    {socialMediaIcons[item.iconId]}
                  </a>
                ))}
            </div>
            {/* credits */}
            <p className="text-center">
              &copy; {new Date().getFullYear()} {userData && userData.name}. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
