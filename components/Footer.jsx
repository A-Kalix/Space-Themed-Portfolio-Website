import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                
                <div className="footer-grid">
                    
                    {/* Social Media */}
                    <div className="footer-column">
                        <h3 className="footer-title">Social Media</h3>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">
                            <RxGithubLogo className="w-5 h-5" />
                            <span className="footer-link-text">Github</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
                            <RxLinkedinLogo className="w-5 h-5" />
                            <span className="footer-link-text">Linkedin</span>
                        </a>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h3 className="footer-title">Contact</h3>
                        <div className="footer-contact">
                            <a href="mailto:a.khalil4075@gmail.com" className="footer-contact-link">
                                a.khalil4075@gmail.com
                            </a>
                        </div>
                        <div className="footer-contact">
                            <span>+90 537 678 3953</span>
                        </div>
                    </div>
                </div>

                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Ahmed Khalil. All rights reserved.
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
