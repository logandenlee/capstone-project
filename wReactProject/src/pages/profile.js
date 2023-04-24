import profilePic from '../images/steve.jpg'

export default function Profile() {
    var profileEmailPrint = localStorage.getItem("contactEmailStorage");
    var profileNamePrint = localStorage.getItem("contactNameStorage");
    var profileGamertagPrint = localStorage.getItem("contactGamertagStorage");
    var profileStatus = localStorage.getItem("statusStorage");
    var profilePlaystyle = localStorage.getItem("playstyleStorage");
    var gameGeneres = localStorage.getItem("generesStorage");
    var gameGeneresTwo = localStorage.getItem("generesTwoStorage");
    var gameGeneresThree = localStorage.getItem("generesThreeStorage");
    return (
    <div class="wrapperTwo">
        <div class="left">
            <img src={profilePic} 
            alt="user" width="100"/>
            <h4>{profileGamertagPrint}</h4>
            <p>{profileNamePrint}</p>
            

        </div>
        <div class="right">
            <div class="info">
                <h3>Information</h3>
                <div class="info_data">
                     <div class="data">
                       <h4>Accounts</h4>
                        <p>Discord:</p>
                        <p>Battle.net:</p>
                  </div>
                  <div class="data">
                       <h4>Status</h4>
                        <p>{profileStatus}</p>
                  </div>
                  <div class="data">
                        <h4>Age</h4>
                        <p>{profileEmailPrint}</p>
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
                        <p>{profilePlaystyle}</p>
                    </div>
                     <div class="data">
                       <h4>Genres</h4>
                        <p>{gameGeneres}</p>
                        <p>{gameGeneresTwo}</p>
                        <p>{gameGeneresThree}</p>
                    </div>
                    
                </div>
                <h3>Schedule</h3>
                <div class="projects_data">
                     <div class="data">
                        <h4>Availability</h4>
                        <p>day and time</p>
                     </div>
                </div>
            </div>
                <a href='/editProfile'><button className="editProfile">Edit Profile</button></a>
        </div>
    </div>
    
    );
}