import bikeData from '../data/friends.json'

export function itemCard(props) {
    //const items = props.items;
    return (
        <div className="card">
            
        </div>
    );
}
export default function Home() {
    return (
        <div className="homePage">
            <h3>Home</h3>
            <h4>This home page will be filled with public posts</h4>
            <div className="homeList">
                {bikeData.map(items => {
                    return (
                        <>
                            
                        </>
                    )
                })}*/
            </div>
        </div>
    );
}