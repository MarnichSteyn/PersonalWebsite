import React from 'react';
import '../styles/Education.css';

function Education() {
    return (
        <div className="education-page">
            <h1>Education</h1>
            
            <div className="education-container">
                <div className="education-item">
                    <div className="education-header">
                        <h2>High School</h2>
                        <span className="education-year">2018 - 2022</span>
                    </div>
                    <h3 className="institution">Point Highchool</h3>
                    <p className="location">Mossel Bay, Western Cape</p>
                    
                    <div className="education-details">
                        <div className="grade-section">
                            <h4>Grade 12 Results:</h4>
                            <div className="grade-achievement">
                                <span className="average">Average: 88%</span>
                                <span className="distinctions">8 Distinctions</span>
                            </div>
                        </div>

                        <div className="subjects-section">
                            <h4>School Subjects & Marks:</h4>
                            <ul className="subjects-list">
                                <li>Mathematics: <span className="subject-mark">84%</span></li>
                                <li>Computer Application Technology: <span className="subject-mark">96%</span></li>
                                <li>Information Technology: <span className="subject-mark">86%</span></li>
                                <li>English First Additional Language: <span className="subject-mark">88%</span></li>
                                <li>Afrikaans Home Language: <span className="subject-mark">82%</span></li>
                                <li>Life Orientation: <span className="subject-mark">80%</span></li>
                                <li>Accounting: <span className="subject-mark">90%</span></li>
                                <li>Business Studies: <span className="subject-mark">98%</span></li>
                            </ul>
                        </div>
                        
                        <div className="activities-section">
                            <h4>Activities</h4>
                            <ul className="activities-list">
                                <li>First Team Hockey [2022]</li>
                                <li>First Team RL Esports [2021-2022]</li>
                                <li>SRC [2022]</li>
                            </ul>
                        </div>

                        <div className="achievements-section">
                            <h4>Achievements</h4>
                            <ul className="achievements-list">
                                <li>Western Cape NAPTOSA Top Candidate [2022]</li>
                                <li>Top Student (Business [98%] CAT [96%]) [2022]</li>
                                <li>Esports Player of the Year [2022]</li>  
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="education-item">
                    <div className="education-header">
                        <h2>Bachelor of Science in Computer Science</h2>
                        <span className="education-year">2022 - Present</span>
                    </div>
                    <h3 className="institution">Stellenbosch University</h3>
                    <p className="location">Stellenbosch, Western Cape</p>
                    
                    <div className="education-details">
                        <div className="university-averages">
                            <h4>Academic Performance:</h4>
                            <div className="yearly-averages">
                                <div className="year-item">
                                    <span className="year-label">First Year (2023):</span>
                                    <span className="year-average">68,7%</span>
                                </div>
                                <div className="year-item">
                                    <span className="year-label">Second Year (2024):</span>
                                    <span className="year-average">65,5%</span>
                                </div>
                                <div className="year-item">
                                    <span className="year-label">Third Year(thus far) (2025):</span>
                                    <span className="year-average">66%</span>
                                </div>
                            </div>
                        </div>

                        <div className="university-subjects">
                            <h4>University Subjects:</h4>
                            
                            <div className="semester-section">
                                <h5>Semester 1 (2023):</h5>
                                <ul className="subjects-list">
                                    <li>Computer Science 114: <span className="subject-mark">77%</span></li>
                                    <li>Mathematics 114: <span className="subject-mark">71%</span></li>
                                    <li>Probability and Statistics 114: <span className="subject-mark">73%</span></li>
                                    <li>Science in Context 174: <span className="subject-mark">69%</span></li>
                                </ul>
                            </div>

                            <div className="semester-section">
                                <h5>Semester 2 (2023):</h5>
                                <ul className="subjects-list">
                                    <li>Computer Science 144: <span className="subject-mark">75%</span></li>
                                    <li>Mathematics 144: <span className="subject-mark">60%</span></li>
                                    <li>Applied Mathematics 144: <span className="subject-mark">56%</span></li>
                                    <li>Science in Context 174: <span className="subject-mark">69%</span></li>
                                </ul>
                            </div>

                            <div className="semester-section">
                                <h5>Semester 3 (2024):</h5>
                                <ul className="subjects-list">
                                    <li>Computer Science 214: <span className="subject-mark">71%</span></li>
                                    <li>Mathematics 214: <span className="subject-mark">53%</span></li>
                                    <li>Applied Mathematics 214: <span className="subject-mark">77%</span></li>
                                    <li>Operations Research 214: <span className="subject-mark">64%</span></li>
                                </ul>
                            </div>

                            <div className="semester-section">
                                <h5>Semester 4 (2024):</h5>
                                <ul className="subjects-list">
                                    <li>Computer Science 244: <span className="subject-mark">58%</span></li>
                                    <li>Mathematics 244: <span className="subject-mark">51%</span></li>
                                    <li>Applied Mathematics 244: <span className="subject-mark">80%</span></li>
                                    <li>Operations Research 244: <span className="subject-mark">70%</span></li>
                                </ul>
                            </div>

                            <div className="semester-section">
                                <h5>Semester 5 (2025):</h5>
                                <ul className="subjects-list">
                                    <li>Computer Science 314: <span className="subject-mark">56%</span></li>
                                    <li>Computer Science 313: <span className="subject-mark">81%</span></li>
                                    <li>Applied Mathematics 314: <span className="subject-mark">66%</span></li>
                                    <li>Applied Mathematics 324: <span className="subject-mark">61%</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;