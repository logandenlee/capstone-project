import profilePic from '../images/steve.jpg'

export default function Profile() {
    var profileAge = localStorage.getItem("contactEmailStorage");
    var profileNamePrint = localStorage.getItem("contactNameStorage");
    var profileAlias = localStorage.getItem("aliasStorage");
    var profileGamertagPrint = localStorage.getItem("contactGamertagStorage");
    var profileGames = localStorage.getItem("gamesStorage");
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
                        <p>{profileAlias}</p>

                  </div>
                  <div class="data">
                       <h4>Status</h4>
                        <p>{profileStatus}</p>
                  </div>
                  <div class="data">
                        <h4>Age</h4>
                        <p>{profileAge}</p>
                     </div>
                </div>
            </div>
          
          <div class="projects">
                <h3>Interests</h3>
                <div class="projects_data">
                     <div class="data">
                        <h4>Games</h4>
                        <p>{profileGames}</p>

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
                        <p>Monday 18:30 - 22:30</p>
                        <p>Wednesday 17:30 - 22:30</p>
                        <p>Saturday 20:00 - 00:00</p>
                     </div>
                </div>
            </div>
                <a href='/editProfile'><button className="editProfile">Edit Profile</button></a>
        </div>
    </div>
    
    );
}