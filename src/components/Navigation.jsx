// src/components/Navigation.jsx
import React, { useState } from 'react';

export default function Navigation({ activeSection, setActiveSection, scrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 edgy-nav ${
                scrolled ? 'py-3' : 'py-5'
            }`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="text-2xl font-black text-white logo-text tracking-wider" style={{fontFamily: 'monospace'}}>
                        {'BryDev'}
                    </div>
                    
                    <button 
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`block w-7 h-0.5 bg-green-400 transition-all duration-300 ${
                            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}></span>
                        <span className={`block w-7 h-0.5 bg-green-400 transition-opacity duration-300 ${
                            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                        <span className={`block w-7 h-0.5 bg-green-400 transition-all duration-300 ${
                            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}></span>
                    </button>
                    
                    <div className="hidden md:flex space-x-1">
                        {['home', 'about', 'projects', 'contact'].map(section => (
                            <button
                                key={section}
                                className={`nav-btn px-6 py-2.5 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
                                    activeSection === section
                                        ? 'nav-btn-active text-black'
                                        : 'text-green-400 hover:text-white border border-green-500 hover:border-green-400'
                                }`}
                                style={{
                                    clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                                    fontFamily: 'monospace'
                                }}
                                onClick={() => handleNavClick(section)}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className={`md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-md shadow-2xl border-t-2 border-green-500 transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                }`}>
                    <div className="container mx-auto px-4 py-2">
                        {['home', 'about', 'projects', 'contact'].map(section => (
                            <button
                                key={section}
                                className={`w-full text-left px-4 py-4 border-b border-green-900 last:border-b-0 transition-all duration-200 font-bold uppercase tracking-wider text-sm ${
                                    activeSection === section
                                        ? 'bg-green-600 text-black border-green-400'
                                        : 'text-green-400 hover:bg-green-900 hover:text-white'
                                }`}
                                style={{fontFamily: 'monospace'}}
                                onClick={() => handleNavClick(section)}
                            >
                                {'> '}{section}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}