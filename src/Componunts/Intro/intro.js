import React from "react";
import './intro.css';
import introImg from '../../Sources/mahesh1.png';
import {Link} from 'react-scroll';
import hireImg from '../../Sources/hireicon.jpeg';

const Intro = ()=>{
    return(
        <section id="intro">
            <div className="introContent">

                <span className="hello">Hello,</span>
                <span className="introText">I am <span className="introName">Mahesh</span> <br/>
                Full Stack Web Developer</span>
                <p className="introPara">I am Skilled Web Developer with experience in 
                    creating UI based and user friendly <br/>Web sites.</p>
                    
                <Link><button className="introBtn" onClick={()=>{
                    document.getElementById('contactPage').scrollIntoView({behavior:'smooth'})
                }}><img src={hireImg} alt="Hire me"className="hireimg"/> Hire Me</button></Link>


            </div>
            <img src={introImg} alt="Profile" className="introImg"/>
        </section>
    )
}
export default Intro;