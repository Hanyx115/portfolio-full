import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="contact-content">
                <h2>Get In Touch</h2>
                <p>
                    I'm currently looking for new opportunities in Full-Stack Development and Embedded Systems.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div className="contact-links">
                    <a href="mailto:ahmedhanyx115@gmail.com" className="contact-btn">
                        Say Hello 👋
                    </a>

                    <div className="social-links">
                        <a href="https://github.com/Hanyx115" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/ahmedhanyx115/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>© 2026 Ahmed Hany AlHady. Built with MERN Stack.</p>
            </div>
        </footer>
    );
};

export default Footer;