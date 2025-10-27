// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSections';
import { projects, skills } from './data/portfoliodata'; // Import data

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setNavbarScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="App">
            <Navigation 
                activeSection={activeSection} 
                setActiveSection={setActiveSection}
                scrolled={navbarScrolled}
            />
            
            {/* Conditional rendering based on activeSection state */}
            {activeSection === 'home' && <HeroSection setActiveSection={setActiveSection} />}
            {activeSection === 'about' && <AboutSection skills={skills} />}
            {activeSection === 'projects' && <ProjectsSection projects={projects} />}
            {activeSection === 'contact' && <ContactSection />}
        </div>
    );
}