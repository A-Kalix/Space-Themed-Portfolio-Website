"use client";

import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";

const Footer = () => {
    return (
        <motion.footer 
            className="footer-wrapper"
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(0)}
        >
            <div className="footer-container">
                
                <div className="footer-content-split">
                    
                    <div className="footer-left">
                        <h3 className="footer-name">Ahmed Khalil</h3>
                        <div className="footer-socials">
                            {Socials.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="footer-social-link"
                                >
                                    <Image 
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        className="footer-social-icon"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-right">
                        <a href="mailto:a.khalil4075@gmail.com" className="footer-email">
                            a.khalil4075@gmail.com
                        </a>
                        <span>+90 537 678 3953</span>
                    </div>

                </div>

                <div className="footer-copy mt-8 text-center border-t border-purple-900/30 pt-6 w-full">
                    &copy; {new Date().getFullYear()} Ahmed Khalil. All rights reserved.
                </div>
                
            </div>
        </motion.footer>
    );
};

export default Footer;
