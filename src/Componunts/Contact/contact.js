import React, { useRef } from "react";
import'./contact.css';
import linkedinIcon from '../../Sources/linkedin.png';
import noukariIcon from '../../Sources/Naukri.png';
import githubIcon from '../../Sources/github.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        emailjs.sendForm('service_4ttn31f', 'template_aydee57', form.current, { publicKey: 'By67y-v_zUyhjaBE2',
        })
        .then( (result) => {
            console.log("Email sent successfully:", result.text);
            alert('Message sent successfully!');
        },
        (error) => {
            console.error("Error sending email:", error.text);
            alert(`Failed to send email. Error: ${error.text}`);
        });
    };

    return (
        <section id="contactPage">
            <div id="contacts">
                <h1 className="contactPagetitle">Contact Me</h1>
                <span className="contactDes">
                    Please fill the below form to discuss any work opportunity.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required />
                    <textarea className="msg" name="message" rows="5" placeholder="Your message" required></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                    <a href="https://www.linkedin.com/in/mahesh-jamadade-7371a6199" target="_blank" rel="noreferrer" ><img src={linkedinIcon} alt="LinkedIn"className="link"/></a>
                    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noreferrer" ><img src={noukariIcon} alt="Nokari"className="link"/></a>
                    <a href="https://github.com/maheshjamadade" target="_blank" rel="noreferrer" > <img src={githubIcon} alt="GitHub"className="link"/></a>

                </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
