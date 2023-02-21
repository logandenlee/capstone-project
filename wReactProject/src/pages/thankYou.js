import bikeData from '../data/bikes.json'
export default function thankYou() {
    var BOI = localStorage.getItem("bikeOfInterestStorage");
    var buyerNamePrint = localStorage.getItem("buyerNameStorage");
    var buyerEmailPrint = localStorage.getItem("buyerEmailStorage");
    var buyerCommentPrint = localStorage.getItem("buyerCommentStorage");
    
    return (

        <body>


            <form id="form">


                <div class="">
                    <label for="name" id="label-name">
                        Thank you {buyerNamePrint} for taking an interest in Biker Boyz! One of our specialists will contact you shortly about your interest in our
                        {bikeData.filter(bikeData => bikeData.name.includes(BOI)).map(bike => {
                                return (
                                    <>
                                        <div key={bike.id} className="bikeBox">  
                                            <div className='bikeName'><p>{bike.name}</p></div>
                                        </div>
                                    </>
                                )
                            }
                            )}
                            through your email, "{buyerEmailPrint}".
                        <div>
                            <p>If you left any comments, they will appear below and be addressed in our contact as well:
                            </p>
                            <p> 
                                "{buyerCommentPrint}"
                                </p>
                            <p>
                            -----------------------------------------------------------------------
                            </p>
                        </div>
                        <div>
                            Thank you and ride safe!
                        </div>

                    </label>
                </div>


                <nav className="submit-bar">
                    <ol>
                        <li class="active"><a href="/home"><i class=""></i>Home</a></li>
                    </ol>
                </nav>
            </form>
            <li class="active"><a href="/home"><i class=""></i>Ignore Me</a></li>
        </body>
        

    );
}