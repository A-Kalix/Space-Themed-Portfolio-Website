"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, scaleIn } from "@/utils/motion";

const ContactSection = () => (
    <section id="contact" className="contact-section">
        <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(0)}
        >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
                Have a project in mind or just want to say hi? My inbox is always open.
            </p>
        </motion.div>

        <div className="contact-content">
            <motion.div
                className="contact-card"
                initial="hidden"
                animate="visible"
                variants={scaleIn(0.2)}
            >
                <p className="contact-description">
                    I&apos;m currently looking for new opportunities and my door is always
                    open. Whether you have a question or just want to say hi, I&apos;ll try
                    my best to get back to you!
                </p>
                <a href="mailto:a.khalil4075@gmail.com" className="btn-primary">
                    Say Hello
                </a>
            </motion.div>
        </div>
    </section>
);

export default ContactSection;
