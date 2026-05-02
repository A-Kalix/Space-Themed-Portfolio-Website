"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { slideInFromLeft, scaleIn } from "@/utils/motion";

const orbitSkills = [
    { name: "React", icon: "/react.png", radius: 120, angle: 0 },
    { name: "JavaScript", icon: "/js.png", radius: 120, angle: 72 },
    { name: "TypeScript", icon: "/ts.png", radius: 120, angle: 144 },
    { name: "Firebase", icon: "/Firebase.png", radius: 120, angle: 216 },
    { name: "GitHub", icon: "/gitwhite.png", radius: 120, angle: 288 },
    { name: "Next.js", type: "icon", icon: <SiNextdotjs className="w-full h-full text-white" />, radius: 200, angle: 36 },
    { name: "Tailwind", icon: "/tailwind.png", radius: 200, angle: 108 },
    { name: "Docker", icon: "/docker.webp", radius: 200, angle: 180 },
    { name: "AWS", type: "icon", icon: <FaAws className="w-full h-full text-[#FF9900]" />, radius: 200, angle: 252 },
    { name: "Figma", icon: "/figma.png", radius: 200, angle: 324 },
    { name: "PostgreSQL", icon: "/postger.png", radius: 280, angle: 0 },
    { name: "Node.js", type: "icon", icon: <FaNodeJs className="w-full h-full text-[#339933]" />, radius: 280, angle: 90 },
    { name: "Django", icon: "/django.svg", radius: 280, angle: 180 },
    { name: "MySQL", icon: "/mysql.png", radius: 280, angle: 270 },
];

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-video-container">
                <video autoPlay muted loop className="hero-video">
                    <source src="/blackhole.webm" type="video/webm" />
                </video>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-left"
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromLeft(0)}
                >
                    <div className="hero-badge">
                        <span>Full Stack Developer Portfolio</span>
                    </div>

                    <h1 className="hero-heading-split">
                        Providing <span className="hero-heading-accent">the best</span> project experience
                    </h1>

                    <p className="hero-subtext-split">
                        I&apos;m a Full Stack Software Engineer with experience in Website, Mobile,
                        and Software development. Check out my projects and skills.
                    </p>

                    <div className="hero-actions-split">
                        <a href="#projects" className="btn-primary">
                            Learn More!
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-right"
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn(0)}
                >
                    <div className="hero-orbit-wrapper-large">
                        <div className="orbit-grid-line orbit-grid-h" />
                        <div className="orbit-grid-line orbit-grid-v" />

                        <div className="orbit-ring orbit-ring-1" />
                        <div className="orbit-ring orbit-ring-2" />
                        <div className="orbit-ring orbit-ring-3" />
                        <div className="orbit-ring orbit-ring-4" />
                        
                        <motion.div
                            className="orbit-wrapper"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            {orbitSkills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="orbit-skill-node"
                                    style={{
                                        left: `calc(50% - 24px + ${Math.cos((skill.angle * Math.PI) / 180) * skill.radius}px)`,
                                        top: `calc(50% - 24px + ${Math.sin((skill.angle * Math.PI) / 180) * skill.radius}px)`,
                                    }}
                                >
                                    <motion.div
                                        className="orbit-icon-box-advanced"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    >
                                        {skill.type === "icon" ? (
                                            <div className="orbit-icon-container">
                                                {skill.icon}
                                            </div>
                                        ) : (
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                width={28}
                                                height={28}
                                                className="orbit-icon"
                                            />
                                        )}
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
