import React, { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleTrigger = () => setIsOpen(!isOpen);
    return <nav className="menu-bar">
        <div className="wrapper">
            <div className="page">
                <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <div className="trigger" onClick={handleTrigger}>
                        <a href="#">
                            <i class="fas fa-bars"></i>
                        </a>
                    </div>

                    <div className="sidebar-position">
                        <span><a href="/home"><i class="fa fa-home"></i>Home</a></span>
                    </div>
                    <div className="sidebar-position">
                     
                        <span><a href="/profile"><i class="fa fa-user"></i>Profile</a></span>
                    </div>
                    <div className="sidebar-position">
                      
                        <span><a href="/friendsList"><i class="fa fa-list"></i>Friends List</a></span>
                    </div>

                    <div className="sidebar-position">
                      
                        <span><a href="/contactForm"><i class="fa fa-phone"></i>Support</a></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}
