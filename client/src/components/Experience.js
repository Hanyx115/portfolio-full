import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
            <div className="border-l-2 border-blue-500 ml-4 space-y-12">

                {/* Item 1 */}
                <div className="relative pl-8">
                    <div className="absolute -left-2.5 bg-blue-500 h-5 w-5 rounded-full"></div>
                    <h3 className="text-xl font-bold">AI & Cyber Security Intern</h3>
                    <p className="text-gray-400 italic">Universitat Autònoma de Barcelona | July 2025</p>
                    <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm">
                        <li>Integrative workshop on LLMs, NLP, and Threat Detection.</li>
                        <li>Collaborated with international peers on Secure AI deployment.</li>
                    </ul>
                </div>

                {/* Item 2 */}
                <div className="relative pl-8">
                    <div className="absolute -left-2.5 bg-gray-600 h-5 w-5 rounded-full"></div>
                    <h3 className="text-xl font-bold">Computer Engineering Trainee</h3>
                    <p className="text-gray-400 italic">UCLAN University, UK | Sept 2024</p>
                    <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm">
                        <li>2nd Place Winner: Developed "Rescue Dawn," a water rescue drone.</li>
                        <li>Hands-on sensor integration with Arduino and thermal imaging.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;