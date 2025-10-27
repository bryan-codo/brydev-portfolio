// src/components/AboutSection.jsx
import React from 'react';

export default function AboutSection({ skills }) {
    return (
        <section className="pt-32 pb-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* ... The rest of the AboutSection JSX ... */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
                    About Me
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 border border-green-100">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                I'm a passionate full-stack developer freshly out of college. I specialize in modern technologies like React, PHP, Node.js, 
                                and Tailwind CSS.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I believe in writing clean, maintainable code and creating user experiences 
                                that are both beautiful and functional. Thus, to benefit the clients and my employer.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                            Technical Skills
                        </h3>
                        <div className="space-y-6">
                            {skills.map(skill => (
                                <div key={skill.name} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700 text-lg">{skill.name}</span>
                                        <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div 
                                            className="skill-progress bg-gradient-to-r from-green-600 to-green-500 h-3 rounded-full shadow-inner"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}