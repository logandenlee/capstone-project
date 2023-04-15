import React, { useState } from "react";

export default function ContactForm(){
    const[contactName, setContactName] = useState("");
    const[contactEmail, setContactEmail] = useState("");
    const[contactSelection, setContactSelection] = useState("");
    const[contactComment, setContactComment] = useState("");
    const[contactGamertag, setContactGamertag] = useState("");
    localStorage.setItem("contactNameStorage", contactName);
    localStorage.setItem("contactEmailStorage", contactEmail);
    localStorage.setItem("contactSelectionStorage", contactSelection);
    localStorage.setItem("contactCommentStorage", contactComment);
    localStorage.setItem("contactGamertagStorage", contactGamertag);
    return(
        <>
    
<body>
<div className="aboutUsPage">
<h3>Edit Profile</h3>
    </div>
  <form id="form3">
  <div class="form-control">
            <label for="name" id="label-name">
                Name:
            </label>
            <input type="text"
                   id="name"
                   placeholder=" Enter your name" 
                   onChange={(e) => setContactName(e.target.value)}/>
        </div>

        <div class="form-control">
            <label for="name" id="label-name">
                Gamer Tag:
            </label>
            <input type="text"
                   id="name"
                   placeholder=" Enter your Gamer Tag" 
                   onChange={(e) => setContactGamertag(e.target.value)}/>
        </div>

        <div class="form-control">
            <label for="email" id="label-email">
                Email:
            </label>
            <input type="email"
                   id="email"
                   placeholder=" Enter your email" 
                   onChange={(e) => setContactEmail(e.target.value)}/>
        </div>

        <div class="form-control">
                        <label for="comment">
                            Time availabitiy
                        </label>
                        <p>Start Time</p>
                        <input type="time"
                            id="time"
                            placeholder=" Enter a convenient time for playing" />
                        <p>end Time</p>
                        <input type="time"
                            id="time"
                            placeholder=" Enter a convenient time for playing" />
                    </div>
  
        <div class="form-control">
            <label for="role" id="label-role">
                Games Genres
            </label>
             

            <div className="genresSelection" name="role" id="role" onChange={(e) => setContactSelection(e.target.value)}>
            <input type="radio" value="Male" name="gender" /> Role-play
            <input type="radio" value="Female" name="gender" /> Survival
            <input type="radio" value="Other" name="gender" /> FPS
            <input type="radio" value="Other" name="gender" /> Stragrgy
            <input type="radio" value="Other" name="gender" /> Racing
            <input type="radio" value="Other" name="gender" /> Puzzle
            <input type="radio" value="Other" name="gender" /> MMO
            <input type="radio" value="Other" name="gender" /> Tactical
            <input type="radio" value="Other" name="gender" /> Open-World
            <input type="radio" value="Other" name="gender" /> Music
            <input type="radio" value="Other" name="gender" /> Puzzle
            <input type="radio" value="Other" name="gender" /> Simulation
            </div>
        </div>
  
        <div class="form-control">
            <label for="comment">
                Games played
            </label>
 
            <textarea name="comment" id="comment"
                placeholder="Enter your games here"
                onChange={(e) => setContactComment(e.target.value)}>
            </textarea>
        </div>
        
        <nav className="submit-bar">
            <ol>
        <li class="active"><a href="/profile"><i class=""></i>Submit</a></li>
        <li class="active"><a href="/profile"><i class=""></i>Cancel</a></li>
        </ol>        
        </nav>
        
        
  </form>
</body>

<li class=""><a href=""><i class=""></i>:</a></li>
  
        </>
    );
}