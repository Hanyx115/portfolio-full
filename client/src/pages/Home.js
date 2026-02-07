import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    // Animation settings
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
            <section className="hero-container" id="home">
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Ahmed Hany <span style={{ color: '#3b82f6' }}>AlHady</span>
                </motion.h1>

                {/* UPDATED TITLE HERE */}
                <motion.h2 className="hero-subtitle" variants={itemVariants}>
                    Computer Engineering Student | Software Engineering & AI
                </motion.h2>

                <motion.p className="hero-text" variants={itemVariants}>
                    Dual degree student (University of Northampton & AASTMT) with a passion for building
                    intelligent machines and scalable web applications. From award-winning
                    autonomous drones to real-time collaborative platforms.
                </motion.p>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <motion.div className="skills-grid" variants={itemVariants}>

                    {/* Card 1: Software & Data */}
                    <motion.div className="skill-card" whileHover={{ y: -10 }}>
                        <h3>Software & Big Data</h3>
                        <ul>
                            <li><strong>MERN Stack:</strong> MongoDB, Express, React, Node.js</li>
                            <li><strong>Mobile Dev:</strong> React Native, Firebase, IoT Integration</li>
                            <li><strong>Big Data:</strong> Apache Spark, Hadoop, Pandas, SQL</li>
                            <li><strong>Languages:</strong> C/C++, C#, Python, Java, JavaScript</li>
                        </ul>
                    </motion.div>

                    {/* Card 2: Engineering & Security */}
                    <motion.div className="skill-card" whileHover={{ y: -10 }}>
                        <h3>Engineering & AI Security</h3>
                        <ul>
                            <li><strong>AI/ML:</strong> TensorFlow, PyTorch, ResNet, Computer Vision</li>
                            <li><strong>Cybersecurity:</strong> Penetration Testing, Nmap, Burp Suite, Web Security</li>
                            <li><strong>Embedded:</strong> Arduino, Sensor Integration, Logic Circuits</li>
                            <li><strong>Tools:</strong> MATLAB, Git, VS Code, Linux</li>
                        </ul>
                    </motion.div>

                </motion.div>
            </section>
        </motion.div>
    );
};

export default Home;