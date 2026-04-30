"use client";

import { Skill_data } from "@/constants";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { slideInFromTop, scaleIn } from "@/utils/motion";

const SkillsSection = () => (
    <section id="skills" className="skills-section">
        <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(0)}
        >
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
                A collection of tools and technologies I work with on a regular basis.
            </p>
        </motion.div>

        <motion.div
            className="skills-grid"
            initial="hidden"
            animate="visible"
            variants={scaleIn(0.2)}
        >
            {Skill_data.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
        </motion.div>
    </section>
);

export default SkillsSection;
