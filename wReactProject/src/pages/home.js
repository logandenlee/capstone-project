import profilePic from '../images/mockProfile.jpg'
import puppyPic from '../images/puppy.jpg'

export default function Home() {
    return (
        <div className="homePage">
            <div className="homeTitle">
            WELCOME TO GAME CHANGER
            </div>
            <div className="wrapperTwo">
                <div className="leftHome">
                <img src={profilePic} 
            alt="user" width="100"/>
                    <p>Admin</p>
                </div>
                <div className="rightHome">
                    
                    <p>Welcome to our Home Page! Here you will find plenty of information of our website. Admins will make comments on what's going on 
                        to keep the community up-to-date on what's worth participating in!
                    </p>
                    <p>
                        <p>While you're stopping by, have a puppy while we begin our event catalog!</p>
                    </p>
                    <img src={puppyPic} 
            alt="user" width="300"/>
                </div>
            </div>
        </div>
        
    );
}

