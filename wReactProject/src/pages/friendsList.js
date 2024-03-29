import { useState } from 'react';
import React from 'react';
import friendsData from '../data/friends.json';

export default function InventoryMotor(props) {
    const [typeSelected, setTypeSelected] = useState('friend');
    const [genereSelected, setGenereSelected] = useState('friend');
    const [bikeOfInterest, setBikeOfInterest] = useState("");

    var profileAge = localStorage.getItem("contactEmailStorage");

    console.log(bikeOfInterest);
    localStorage.setItem("bikeOfInterestStorage", bikeOfInterest);
    console.log(typeSelected);

    function handleChange(e) {
        setGenereSelected(e.target.value);
    };

    function handleValue() {
        setTypeSelected(genereSelected);
    };


    return (
        <div className="FriendsListPage" >
            <div className="filter-container">
                <button value='friend' onClickCapture={(e) => setTypeSelected(e.target.value)}>All Friends</button>
                <button onClick={handleValue}>Game Changer</button>
                <select onChange={handleChange}>
                    <option value=''></option>
                    <option value='rpg'>RPG</option>
                    <option value='survival'>Survival</option>
                    <option value='mmo'>MMO</option>
                    <option value='fps'>FPS</option>
                    <option value='strategy'>Strategy</option>
                    <option value='racing'>Racing</option>
                    <option value='puzzle'>Puzzle</option>
                    <option value='tactical'>Tactical</option>
                    <option value='openWorld'>Open World</option>
                    <option value='music'>Music</option>
                    <option value='simulation'>Simulation</option>
                </select>
            </div>


            <h2></h2>
            <div className="bikeList2" value='friend'>
                {friendsData.filter(friendsData => friendsData.type.includes(typeSelected)).map(bike => {
                    return (
                        <>
                            <div className="card">
                            <div key={bike.id} className="bikeBox">
                            <div className='text-card'>
                                <img src={bike.img} className="bikeImage" alt={bike.name} />
                                <div className='bikeName'> {bike.name}</div>
                                <p>{bike.friendStatus}</p>
                                <p>Interested in {bike.gen}</p>
                                <p>Age: {bike.age} </p>
                                </div>
                                <div className="bikeList2Des">
                                    <div className="interestButton"><a href="/buyerForm" target="_blank"><button value={bike.name} onClickCapture={(e) => setBikeOfInterest(e.target.value)}>Message</button></a></div>
                                </div>
                            </div>
                            </div>
                        </>
                    )
                }
                )}
            </div>
        </div>

    );
}