import { useState } from 'react';
import React from 'react';
import friendsData from '../data/friends.json';

export default function InventoryMotor(props) {
    const [typeSelected, setTypeSelected] = useState("");
    const [bikeOfInterest, setBikeOfInterest] = useState("");

    console.log(bikeOfInterest);
    localStorage.setItem("bikeOfInterestStorage", bikeOfInterest);
    console.log(typeSelected);
    return (
        <div className="FriendsListPage" >
            <div className="filter-container">
                <button value='other' onClickCapture={(e) => setTypeSelected(e.target.value)}>All Friends</button>
                <button value='friends' onClickCapture={(e) => setTypeSelected(e.target.value)}>Game Changer</button>
            </div>


            <h2>Friends List:</h2>
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