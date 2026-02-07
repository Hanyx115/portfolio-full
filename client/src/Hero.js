import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.div
            className="home-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Section */}
            <section className="hero-container">
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Ahmed Hany AlHady
                </motion.h1>
                <motion.h2 className="hero-subtitle" variants={itemVariants}>
                    Computer Engineering Student
                </motion.h2>
                <motion.p className="hero-text" variants={itemVariants}>
                    Final-year student specializing in Full-Stack Development and Embedded Systems.
                    Passionate about building intelligent machines, securing web applications,
                    [cite_start]and creating real-time collaborative platforms[cite: 7].
                </motion.p>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <motion.div className="skills-grid" variants={itemVariants}>
                    {/* Software Card */}
                    <motion.div className="skill-card" whileHover={{ y: -10 }}>
                        <h3>Software Development</h3>
                        <ul>
                            <li>MERN Stack (MongoDB, Express, React, Node)</li>
                            [cite_start]<li>Languages: C/C++, Python, Java, C# [cite: 64]</li>
                            <li>Real-Time: Socket.io, REST APIs</li>
                        </ul>
                    </motion.div>

                    {/* Engineering Card */}
                    <motion.div className="skill-card" whileHover={{ y: -10 }}>
                        <h3>Engineering & AI</h3>
                        <ul>
                            [cite_start]<li>Embedded Systems: Arduino, Sensors [cite: 66]</li>
                            [cite_start]<li>AI: Supervised Machine Learning [cite: 67]</li>
                            <li>Cybersecurity: Penetration Testing & Web Security</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Home;