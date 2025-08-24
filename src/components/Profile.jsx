import '../styles/Profile.css';
import { useAuth } from "../context/Authentication";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/education');
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
                            <p> 3rd Year B.Sc student at Stellenbosch</p>
                        </div>

                        <div className="subsection">
                            <h3>Interests</h3>
                            <ul>
                                <li>Machine Learning and AI</li>
                                <li>Gaming and Sports</li>
                                <li>Day Trading</li>
                                <li>Gym and Fitness</li>
                            </ul>
                        </div>

                        <div className="subsection">
                            <h3>The Future</h3>
                            <p>In the future I hope to further improve my skill in trading, aswell as find a software job in the data/finance fields and build up a career path to become a full stack data engineer in a foreign country if possible</p>
                        </div>
                    </div>
                </div> 
                <div className="sidebar-footer">
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