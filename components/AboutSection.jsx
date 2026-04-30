"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";

const AboutSection = () => (
    <section id="about" className="about-section">
        <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(0)}
        >
            <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
            <motion.div
                className="about-text"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.2)}
            >
                <p>
                    I am a highly motivated Full Stack Developer based in Turkey, with a
                    strong foundation in building modern web applications. My journey
                    started with a curiosity for how things work on the web, which led me
                    to master technologies like React, Next.js, and Django.
                </p>
                <p>
                    I thrive on solving complex problems and turning ideas into functional,
                    user-friendly realities. Whether it&apos;s crafting responsive front-end
                    interfaces or architecting robust back-end systems, I am committed to
                    delivering high-quality code and exceptional user experiences.
                </p>
                <p>
                    Beyond coding, I am constantly learning and exploring new technologies
                     to stay at the forefront of the industry. I believe in the power of
                    collaboration and am always eager to contribute to meaningful projects.
                </p>
            </motion.div>
        </div>
    </section>
);

export default AboutSection;
