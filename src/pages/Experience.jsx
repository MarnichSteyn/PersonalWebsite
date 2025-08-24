import React from 'react';
import '../styles/Experience.css';

function Experience() {
    return (
        <div className="experience-page">
            <h1>Experience</h1>
            
            <div className="experience-container">
                <div className="experience-item">
                    <div className="experience-header">
                        <h2>Academic Projects</h2>
                        <span className="experience-year">2023 - Present</span>
                    </div>
                    <h3 className="organization">Stellenbosch University</h3>
                    <p className="location">Computer Science Projects</p>
                    
                    <div className="experience-details">
                        <div className="projects-section">
                            <h4>Notable Projects:</h4>
                            <ul className="projects-list">
                                <li>Obstacle Chess and Air Race</li>
                                <li>Braille Translator</li>
                                <li>Othello Game Engine</li>
                                <li>Personal Portfolio Website</li>
                                <li>Online Groupchat Application</li>
                                <li>Fraud Detection Website</li>
                            </ul>
                        </div>
                        
                        <div className="skills-section">
                            <h4>Technical Skills Developed:</h4>
                            <ul className="skills-list">
                                <li>React & JavaScript</li>
                                <li>Python Programming</li>
                                <li>Java & Object-Oriented Programming</li>
                                <li>SQL & Database Design</li>
                                <li>Git Version Control</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <h2>Personal Development</h2>
                        <span className="experience-year">2022 - Present</span>
                    </div>
                    <h3 className="organization">Self-Directed Learning</h3>
                    <p className="location">Online & Personal Projects</p>
                    
                    <div className="experience-details">
                        <div className="learning-section">
                            <h4>Self-Learning Initiatives:</h4>
                            <ul className="learning-list">
                                <li>Built personal coding projects on GitHub</li>
                                <li>Participated in coding challenges and hackathons</li>
                                <li>Studied trading strategies and market analysis</li>
                                <li>Developed fitness and nutrition programs</li>
                            </ul>
                        </div>
                        
                        <div className="certifications-section">
                            <h4>Certifications & Achievements:</h4>
                            <ul className="certifications-list">
                                <li>Online JavaScript Fundamentals Course</li>
                                <li>HTML/CSS Responsive Design Certificate</li>
                                <li>Python Programming Bootcamp</li>
                                <li>Git & GitHub Mastery Course</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <h2>Career Objectives</h2>
                        <span className="experience-year">2025 - Future</span>
                    </div>
                    <h3 className="organization">Professional Goals</h3>
                    <p className="location">Seeking Opportunities</p>
                    
                    <div className="experience-details">
                        <div className="goals-section">
                            <h4>Short-term Goals:</h4>
                            <ul className="goals-list">
                                <li>Secure software development internship for 2025</li>
                                <li>Complete advanced courses in data science</li>
                                <li>Build portfolio of full-stack web applications</li>
                                <li>Contribute to open-source projects</li>
                            </ul>
                        </div>
                        
                        <div className="longterm-section">
                            <h4>Long-term Vision:</h4>
                            <ul className="longterm-list">
                                <li>Full-stack data engineer role in international company</li>
                                <li>Expertise in machine learning and AI applications</li>
                                <li>Combination of trading knowledge with tech skills</li>
                                <li>Leadership position in innovative tech solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;