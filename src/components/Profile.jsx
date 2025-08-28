import React, { useState } from "react";
import '../styles/Profile.css';
import { useAuth } from "../context/Authentication.jsx";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const [about, setAbout] = useState("3rd Year B.Sc student at Stellenbosch");
    const [interests, setInterests] = useState([
        "Machine Learning and AI",
        "Gaming and Sports",
        "Day Trading",
        "Gym and Fitness"
    ]);
    const [future, setFuture] = useState("In the future I hope to further improve my skill in trading, aswell as find a software job in the data/finance fields and build up a career path to become a full stack data engineer in a foreign country if possible");

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/education');
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleInterestChange = (index, value) => {
        const newInterests = [...interests];
        newInterests[index] = value;
        setInterests(newInterests);
    };

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
                            {isEditing ? (
                                <input
                                    type="text"
                                    className="edit-input"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                />
                            ) : (
                                <p>{about}</p>
                            )}
                        </div>

                        <div className="subsection">
                            <h3>Interests</h3>
                            {isEditing ? (
                                <ul className="edit-interest-list">
                                    {interests.map((interest, index) => (
                                        <li key={index}>
                                            <input
                                                type="text"
                                                className="edit-input"
                                                value={interest}
                                                onChange={(e) => handleInterestChange(index, e.target.value)}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul>
                                    {interests.map((interest, index) => (
                                        <li key={index}>{interest}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="subsection">
                            <h3>The Future</h3>
                            {isEditing ? (
                                <textarea
                                    className="edit-textarea"
                                    value={future}
                                    onChange={(e) => setFuture(e.target.value)}
                                />
                            ) : (
                                <p>{future}</p>
                            )}
                        </div>
                    </div>
                </div> 
                <div className="sidebar-footer">
                    {isAuthenticated && (
                        <button onClick={handleEditClick} className="edit-button">
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                    )}
                    {isAuthenticated ? (
                        <button onClick={handleLogoutClick} className="login-button">Logout</button>
                    ) : (
                        <button onClick={handleLoginClick} className="login-button">Login</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;