import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Change to your Vercel URL after deployment
        axios.get('http://localhost:5000/api/projects')
            .then(response => {
                setProjects(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div style={{ textAlign: 'center', color: 'white', padding: '50px' }}>Loading Projects...</div>;

    return (
        <section className="projects-section" id="projects">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project._id || index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.2)" }}
                    >
                        <div className="card-content">
                            <span className="project-tag">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Source Code →
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;