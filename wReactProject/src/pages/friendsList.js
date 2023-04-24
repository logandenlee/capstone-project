import { useState } from 'react';
import React from 'react';
import friendsData from '../data/friends.json';

export default function InventoryMotor(props) {
    const [typeSelected, setTypeSelected] = useState("");
    const [genereSelected, setGenereSelected] = useState("");
    const [bikeOfInterest, setBikeOfInterest] = useState("");

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
                <button value='Friend' onClickCapture={(e) => setTypeSelected(e.target.value)}>All Friends</button>
                <button onClick={handleValue}>Game Changer</button>
                <select onChange={handleChange}>
                    <option value='other'>RPG</option>
                    <option value='other'>Survival</option>
                    <option>MMO</option>
                    <option>FPS</option>
                    <option>Strategy</option>
                    <option>Racing</option>
                    <option>Puzzle</option>
                    <option>Tactical</option>
                    <option>Open World</option>
                    <option>Music</option>
                    <option>Simulation</option>
                </select>
            </div>


            <h2></h2>
            <div className="bikeList2">
                {friendsData.filter(friendsData => friendsData.type.includes(typeSelected)).map(bike => {
                    return (
                        <>
                            <div key={bike.id} className="bikeBox">
                                
                                <img src={bike.img} className="bikeImage" alt={bike.name} />
                                <div className='bikeName'> {bike.name}</div>
                                <div className="bikeList2Des">
                                    <div className="interestButton"><a href="/buyerForm" target="_blank"><button value={bike.name} onClickCapture={(e) => setBikeOfInterest(e.target.value)}>Message</button></a></div>
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