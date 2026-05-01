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
                
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-xl font-bold text-gray-200">Ahmed Khalil</h3>
                        <div className="flex items-center gap-4">
                            {Socials.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="hover:scale-110 transition-transform duration-300"
                                >
                                    <Image 
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        className="opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 text-gray-400">
                        <a href="mailto:a.khalil4075@gmail.com" className="hover:text-purple-400 transition-colors">
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
