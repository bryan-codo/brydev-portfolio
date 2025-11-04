// src/components/HeroSection.jsx
import React from 'react';
import SilkBackground from './SilkBackground';
import TextType from './TextType';

export default function HeroSection({ setActiveSection }) {
    return (
        <section className="min-h-screen flex items-center justify-center text-white px-4 pt-16 relative overflow-hidden">
            <SilkBackground />
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Hi, I'm <span className="text-green-300">Bryan Dela Cruz</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl mb-6 opacity-90 font-light h-8 drop-shadow-md">
                    <TextType 
                        text={["Full-Stack Developer", "UI/UX Enthusiast", "React Enthusiast", "Problem Solver"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="▊"
                    />
                </h2>
                
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Creating beautiful, functional web applications using modern technologies since day one. I also aspire to be a full-pledged full stack developer.
                </p>
                
                <button 
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                    onClick={() => setActiveSection('projects')}
                >
                    View My Work
                </button>
            </div>
        </section>
    );
}