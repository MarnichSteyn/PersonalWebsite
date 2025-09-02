import { useState, useEffect } from "react";
import '../styles/Profile.css';
import pfp from '../assets/pfp1.jpeg'
import { useAuth } from "../context/Authentication.jsx";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const [profilePhoto, setProfilePhoto] = useState(() => {
    const stored = localStorage.getItem('profilePhoto');
    if (!stored || stored.startsWith('blob:') || stored === 'undefined' || stored === 'null') {
        return pfp;
    }
    return stored;
});

    const [about, setAbout] = useState(() => {
        return localStorage.getItem('about') || "3rd Year B.Sc student at Stellenbosch";
    });

    const [interests, setInterests] = useState(() => {
        const savedInterests = localStorage.getItem('interests');
        return savedInterests ? JSON.parse(savedInterests) : [
            "Machine Learning and AI",
            "Gaming and Sports",
            "Day Trading",
            "Gym and Fitness"
        ];
    });
    const [future, setFuture] = useState(() => {
        return localStorage.getItem('future') || "In the future I hope to further improve my skill in trading, aswell as find a software job in the data/finance fields and build up a career path to become a full stack data engineer in a foreign country if possible";
    });

    useEffect(() => {
        localStorage.setItem('profilePhoto', profilePhoto);
    }, [profilePhoto]);

    useEffect(() => {
        localStorage.setItem('about', about);
    }, [about]);

    useEffect(() => {
        localStorage.setItem('interests', JSON.stringify(interests));
    }, [interests]);

    useEffect(() => {
        localStorage.setItem('future', future);
    }, [future]);
    
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/education');
    };

    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfilePhoto(URL.createObjectURL(file));
        }
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
                        <img src={profilePhoto} alt="Profile Picture" className="profile_photo" />
                        {isEditing && (
                            <label htmlFor="photo-upload" className="pfp-edit-overlay">
                                <div className="pfp-edit-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                        <circle cx="12" cy="13" r="4"></circle>
                                    </svg>
                                </div>
                                <input
                                    id="photo-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                />
                            </label>
                        )}
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