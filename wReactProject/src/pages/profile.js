import profilePic from '../images/steve.jpg'

export default function Profile() {
    return (
    <div class="wrapperTwo">
        <div class="left">
            <img src={profilePic} 
            alt="user" width="100"/>
            <h4>Minerz4lifes</h4>
            <p>Steve Stonecutter</p>
            

        </div>
        <div class="right">
            <div class="info">
                <h3>Information</h3>
                <div class="info_data">
                     <div class="data">
                        <h4>Email</h4>
                        <p>steveMine@gmail.com</p>
                     </div>
                     <div class="data">
                       <h4>Accounts</h4>
                        <p>###-###-####</p>
                  </div>
                  <div class="data">
                       <h4>Status</h4>
                        <p>Online</p>
                  </div>
                </div>
            </div>
          
          <div class="projects">
                <h3>Interests</h3>
                <div class="projects_data">
                     <div class="data">
                        <h4>Games</h4>
                        <p>Son of the Forest</p>
                        <p>Minecraft</p>
                        <p>Modern Warfare</p>
                     </div>
                     <div class="data">
                       <h4>Playstyle</h4>
                        <p>causal</p>
                    </div>
                     <div class="data">
                       <h4>Genres</h4>
                        <p>role-play-game</p>
                        <p>survival</p>
                        <p>FPS</p>
                    </div>
                    
                </div>
                <h3>Schedule</h3>
                <div class="projects_data">
                     <div class="data">
                        <h4>availability</h4>
                        <p>day and time</p>
                     </div>
                </div>
            </div>
            <button className="editProfile" onclick="">Edit Profile</button>
        </div>
    </div>
    
    );
}