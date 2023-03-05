export default function Navbar() {
    return <nav className="menu-bar">
        <div className="sidebar">
        <div className="logoPic">
                    <img src="" alt="logo_picture" />
                </div>

        <ul>
            <li class="active"><a href="/home"><i class="fa fa-home"></i>Home</a></li>
            <li><a href="/profile"><i class="fa fa-user"></i>Profile</a>
                <div class="sub-menu-about">
                    
                </div>
            </li>
            <li><a href="/contactForm"><i class="fa fa-phone"></i>Support</a></li>
            <li class="active"><a href="/aboutCompany"><i class="fa fa-square"></i>About</a></li>
        </ul>
        </div>
        <div class="section">
            <div class="top_navbar">
                    <div class="hamburger">
                        <button onClick={document.querySelector("body").classList.toggle("active")}><i class="fa fa-bars"></i></button>
                    </div>
            </div>
        </div>
    </nav>
}
