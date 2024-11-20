import React from "react";
import './skills.css';
import WebDevelopment from '../../Sources/Web-development.jpg';
import Softwaretesting from '../../Sources/software-testing.png';

const Skills = () =>{
    return (
        <section id="skills">
            <span className="skilltitle">What I Do</span>
            <span className="skillDescription">Associate with over 3 years of Experience in “Manual Testing,
                 Backend Testing, Pega Testing and
                Automation Testing” In Cognizant. 
                Collaborates with Software Team in continues built and deployment
                process. Excels at learning new software tools and 
                best practice in Software Quality Assurance</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDevelopment} alt="WebDevelopment" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Development:</h2>
                        <p>I have completed Total "Coding Ninja's" Web Development boot camp successfully.<br/>
                            As Part of the course i have obtained following skills and technology: <br/>
                            <ol className="listItemST">
                             <li>Front-End using HTML/CSS/JavScript/BootStrap</li>
                             <li>React,  DBMS, SQL</li>
                             <li>Spring Boot</li>
                             <li>FrontEnd Projects Using React and JavaScript</li>
                             <li>Backen Projects Using Spring Boot and DSA</li>
                             </ol>
                         </p>

                    </div>
                </div>

                <div className="skillBar">
                    <img src={Softwaretesting} alt="SoftwareTesting" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Software Testing:</h2>
                        <p>As an Associate i am having 3+ years of Exprience in Software 
                            Testing in Cognizant.<br/>I am having good knowledge of
                             manual Testing, Automation Testing and Pega testing.<br/>
                            As part of testing i have worked in following things:<br/>
                            <ol className="listItemST">
                             <li>Manual Testing</li>
                             <li>Automation Testing(Selenium)</li>
                             <li>BDD/Cucumber</li>
                             <li>Pega Testing</li>
                             <li>Backend Testing</li>
                            </ol>

                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;