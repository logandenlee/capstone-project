import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function ContactForm(){
    const[contactName, setContactName] = useState("");
    const[contactEmail, setContactEmail] = useState("");
    const[contactGamertag, setContactGamertag] = useState("");

    const[image, setImage] = useState("");
    const[status,setStatus] = useState("")

    const[contactSelection, setContactSelection] = useState("");
    const[contactComment, setContactComment] = useState("");

    
    useEffect(()=>{
        const data = window.localStorage.getItem("contactNameStorage");
       if(data !== null) setContactName(data);
    }, [])
    useEffect(()=>{
        window.localStorage.setItem("contactNameStorage", contactName);
    },[contactName])

    useEffect(()=>{
        const data = window.localStorage.getItem("contactEmailStorage");
       if(data !== null) setContactEmail(data);
    },[])
    useEffect(()=>{
        window.localStorage.setItem("contactEmailStorage", contactEmail);
    },[contactEmail])

    useEffect(()=>{
        const data = window.localStorage.getItem("contactGamertagsStorage");
       if(data !== null) setContactGamertag(data);
    },[])
    useEffect(()=>{
        window.localStorage.setItem("contactGamertagStorage", contactGamertag);
    },[contactGamertag])


    let statusOptions = ["Online", "Offline"];
    useEffect(()=>{
        const data = window.localStorage.getItem("statusStorage");
       if(data !== null) setStatus(data);
    },[])
    useEffect(()=>{
        window.localStorage.setItem("statusStorage", status);
    },[status])


    function handleImage(e) {
        setImage(e.target.files[0])
    }

    function handleApi () {
        const formData = new FormData()
        formData.append('imageStorage', image)
        axios.post('url',formData).then((res)=> {
            console.log(res)
        })
    }

    useEffect(()=>{
        const data = window.localStorage.getItem("imageStorage");
       if(data !== null) setImage(data);
    },[])
    useEffect(()=>{
        window.localStorage.setItem("imageStorage", image);
    },[image])

    
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
            <label for="profilePic" id="label-profilePic">
                Profile Image:
            </label>
            <input type="file"
                   id="profilepic"
                   placeholder=" Pick profile image" 
                   onChange={handleImage}/>
        </div>

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
            <label for="role" id="label-role">
                Status:
            </label>

            <div className="statusSelection" name="role" id="role">
            {statusOptions.map(results =>(
                <>
                <input type="radio"  value={results} name="radiovalues" onChange={(e) => setStatus(e.target.value)}/>
                <p>{results}</p>
                </>
            ))}
            
            
            
            </div>
        </div>

        <div class="form-control">
                        <label for="comment">
                            Time availabitiy:
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
                Games Genres:
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
            <input type="radio" value="Other"  /> Open-World
            <input type="radio" value="Other"  /> Music
            <input type="radio" value="Other"  /> Puzzle
            <input type="radio" value="Other"  /> Simulation
            </div>
        </div>
  
        <div class="form-control">
            <label for="comment">
                Games played:
            </label>
 
            <textarea name="comment" id="comment"
                placeholder="Enter your games here"
                onChange={(e) => setContactComment(e.target.value)}>
            </textarea>
        </div>
        
        <nav className="submit-bar">
            <ol>
        <li class="active"><a href="/profile"><i class="" onClick={handleApi}></i>Submit</a></li>
        <li class="active"><a href="/profile"><i class=""></i>Cancel</a></li>
        </ol>        
        </nav>
        
        
  </form>
</body>

<li class=""><a href=""><i class=""></i>:</a></li>
  
        </>
    );
}