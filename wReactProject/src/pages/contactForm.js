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
<h3>Gamer Changer Information Request Form</h3>
<h4>Please fill out as much of the form as possible.</h4>
    </div>
  <form id="form2">
  <div class="form-control">
            <label for="name" id="label-name">
                Please enter your preferred Name
            </label>
            <input type="text"
                   id="name"
                   placeholder=" Enter your name" 
                   onChange={(e) => setContactName(e.target.value)}/>
        </div>

        <div class="form-control">
            <label for="email" id="label-email">
                What is an email we can continue contact with?
            </label>
            <input type="email"
                   id="email"
                   placeholder=" Enter your email" 
                   onChange={(e) => setContactEmail(e.target.value)}/>
        </div>
  
        <div class="form-control">
            <label for="role" id="label-role">
                What are your intentions with this form?
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
                Any comments or suggestions that may help us assist you further
            </label>
 
            <textarea name="comment" id="comment"
                placeholder="Enter your comment here"
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

<li class=""><a href=""><i class=""></i>Ignore this :)</a></li>
  
        </>
    );
}