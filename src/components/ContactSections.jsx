// src/components/ContactSection.jsx
import React from 'react';

export default function ContactSection() {
    const RESUME_PATH = "/assets/resume_Dela Cruz, Bryan R..pdf";
    
    return (
        <section className="pt-32 pb-20 px-4 bg-white">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Get In Touch
                </h2>
                
                <div className="space-y-8 bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                    
                    <div className="space-y-4">
                        <p className="text-xl text-gray-800 font-semibold">
                            Ready to connect? Find me here:
                        </p>
                        
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-600">Phone Number:</span> 0969-291-4229
                        </p>
                        
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-green-600">Email:</span> 
                            <a 
                                href="mailto:bryrdelacruz03@gmail.com" 
                                className="text-green-600 hover:text-green-800 transition-colors ml-1"
                            >
                                bryrdelacruz03@gmail.com
                            </a>
                        </p>
                    </div>
                    
                    {/* DOWNLOAD RESUME BUTTON */}
                    <a 
                        href={RESUME_PATH}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-6"
                    >
                        Download Resume (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
}