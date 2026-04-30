"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/utils/motion";

const ProjectCard = ({ src, title, description }) => {
    return (
        <motion.div
            className="project-card"
            initial="hidden"
            animate="visible"
            variants={scaleIn(0.2)}
        >
            <div className="project-image-wrapper">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="project-image"
                />
            </div>
            
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
