import React from 'react';

const Navbar = () => {
    return (
        <nav>
            {/*Portfolio*/}
            <h1>Ahmed<span style={{ color: '#3b82f6' }}> H. AlHady</span></h1>
            {/* Navigation Links */}
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a> {/* We'll add this section later */}
            </div>
        </nav>
    );
};

export default Navbar;