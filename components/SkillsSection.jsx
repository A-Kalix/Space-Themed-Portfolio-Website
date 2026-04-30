"use client";

import { Skill_data } from "@/constants";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const SkillsSection = () => (
    <section id="skills" className="skills-section">
        <motion.div
            className="section-header"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
                A collection of tools and technologies I work with on a regular basis.
            </p>
        </motion.div>

        <motion.div
            className="skills-grid"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
            {Skill_data.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
        </motion.div>
    </section>
);

export default SkillsSection;
