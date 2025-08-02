import React from "react";
import '../styles/Profile.css';

function Profile() {
    return (
        <div className="profile_container">
            <div className="sidebar">
               <div className="sidebar-content">
                    <div className="pfp_container">
                        <img src="{}" alt="Profile Picture" className="profile_photo" />
                    </div>

                    <div className="profile_section">
                        <h2>Marnich J Steyn</h2>
                        
                        <div className="about_intro">
                            <p></p>
                        </div>

                        <div className="subsection">
                            <h3>Interests</h3>
                            <ul>
                                <li>Interest 1</li>
                                <li>Interest 2</li>
                                <li>Interest 3</li>
                                <li>Interest 4</li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <h3>The Future</h3>
                            <p></p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Profile;