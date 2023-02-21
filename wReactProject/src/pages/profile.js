import profilePic from '../images/profilepic.jpg'

export default function Profile() {
    return (
        <div className="container emp-profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <image src={profilePic} alt="profilepic" />
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>user display name</h5>
                            <h6>user title</h6>

                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a claname="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                </li>
                                <li className="nav-item">
                                    <a claname="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Interest</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-links">
                                <p>Links</p>
                            </div>
                        </div>

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <lp>TBA</lp>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <lp>TBA</lp>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        
                                    </div>
                                </div>
                        </div>

                    </div>


                </div>
            </form>
        </div>
    );
}