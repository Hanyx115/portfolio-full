import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './components/Projects'; // Import the new component
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Home />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;