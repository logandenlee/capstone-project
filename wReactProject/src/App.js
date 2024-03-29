import React from 'react'; //import React library
import Navbar from './Navbar';
import Home from './pages/home';
import Profile from './pages/profile';
import AboutT from './pages/aboutTeam';
import FriendList from './pages/friendsList'
import FormC from './pages/contactForm';
import FormY from './pages/thankYou';
import logo from './images/logo.jpg';
import Edit from './pages/editProfile';


export function App() {

    let component 
    switch(window.location.pathname) {
        case "/":
            component = <Home />;
            break
        case "/home":
            component = <Home />;
            break
        case "/profile":
            component = <Profile />;
            break
        case "/friendsList":
            component = <FriendList />;
            break
        case "/aboutTeam":
            component = <AboutT />;
            break
        case "/contactForm":
            component = <FormC />;
            break
        case "/thankYou":
            component = <FormY />;
            break
        case "/editProfile":
            component = <Edit />;
            break
        default:
            component = <Home />;
    }
    return (
        <>
            <section className="title">
                <h1><div className="logoPic"><img  src={logo} alt="logo_picture"/></div>Gamer Changer</h1>
                <br />
            </section>
            
            <section className="pageBody">
            {component}
            </section>
            <Navbar />
        </>
    );
}


export default App;