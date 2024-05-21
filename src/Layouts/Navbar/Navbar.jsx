import React, { useState } from "react";
import "./Navbar.css";
import ContactButton from "../../Components/Buttons/ContactButton";
import Profile_img from "../../Assets/img/profile.jpg";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
    const [email, setEmail] = useState("mailto:your-email@example.com")
    let navItems = [
        { navitem: "Home", LinkTo: "#", className: "nav-item" },
        { navitem: "Item 2", LinkTo: "#", className: "nav-item" },
        { navitem: "Item 3", LinkTo: "#", className: "nav-item" },
        { navitem: "Item 4", LinkTo: "#", className: "nav-item" },
        { navitem: "Item 5", LinkTo: "#", className: "nav-item d-lg-none" }
    ];
    return (
        <>
            <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <div className="profile_section">
                        <img src={Profile_img} class="img-fluid rounded-circle profile-image" alt="Profile Image" />
                        <a class="navbar-brand" href="#">
                            Moideen Mashad
                        </a>
                    </div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <HiMenuAlt2 />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            {navItems.map((item, index) => {
                                return <li class={item.className}>
                                    <a class="nav-link text-center" href={item.LinkTo}>
                                        {item.navitem}
                                    </a>
                                </li>
                            })}
                        </ul>
                        <ul class="navbar-nav ms-auto d-none d-lg-flex" >
                            <li class="nav-item">
                                <ContactButton/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
