// src/components/ProjectsSection.jsx
import React from 'react';

export default function ProjectsSection({ projects }) {
    return (
        <section className="pt-32 pb-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    My Projects
                </h2>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    These are some of my recent projects that showcase my skills and experience
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden fade-in-up"
                        >
                            <div className="h-48 overflow-hidden"> 
                            <img 
                                src={project.imageUrl}
                                alt={`${project.title} screenshot`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map(tech => (
                                        <span 
                                            key={tech}
                                            className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                                    <a 
                                        href={project.github}
                                        className="flex-1 text-center bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-3 rounded-lg transition-all duration-300 text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Code
                                    </a>
                                    <a 
                                        href={project.demo}
                                        className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}