"use client";

import { Projects } from "@/constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const ProjectsSection = () => (
    <section id="projects" className="projects-section">
        <motion.div
            className="section-header"
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(0)}
        >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
                A selection of things I have built — from full-stack apps to side experiments.
            </p>
        </motion.div>

        <div className="projects-grid">
            {Projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    </section>
);

export default ProjectsSection;
