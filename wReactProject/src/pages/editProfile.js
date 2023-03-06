import React, { useState } from "react";

export default function ContactForm(){
    const[contactName, setContactName] = useState("");
    const[contactEmail, setContactEmail] = useState("");
    const[contactSelection, setContactSelection] = useState("");
    const[contactComment, setContactComment] = useState("");
    localStorage.setItem("contactNameStorage", contactName);
    localStorage.setItem("contactEmailStorage", contactEmail);
    localStorage.setItem("contactSelectionStorage", contactSelection);
    localStorage.setItem("contactCommentStorage", contactComment);

    return(
        <>
    
<body>
<div className="aboutUsPage">
<h3>Edit Profile</h3>
    </div>
  <form id="form3">
  <div class="form-control">
            <label for="name" id="label-name">
                Gamer Tag:
            </label>
            <input type="text"
                   id="name"
                   placeholder=" Enter your name" 
                   onChange={(e) => setContactName(e.target.value)}/>
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
            <label for="role" id="label-role">
                Games Genres
            </label>
             

            <select name="role" id="role" onChange={(e) => setContactSelection(e.target.value)}>
                <option value=""></option>
                <option value="purchasing">buying</option>
                <option value="selling">selling</option>
                <option value="other">
                    more information on Biker Boyz
                </option>
            </select>
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
        <li class="active"><a href="/thankYouContact"><i class=""></i>Submit</a></li>
        <li class="active"><a href="/home"><i class=""></i>Cancel</a></li>
        </ol>        
        </nav>
        
        
  </form>
</body>

<li class=""><a href=""><i class=""></i>:</a></li>
  
        </>
    );
}