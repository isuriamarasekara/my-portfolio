import React from 'react';
import { FaEnvelope, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                Get In Touch
            </h2>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-blue-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                        <a
                            href="mailto:isuriamarasekara97@gmail.com"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            isuriamarasekara97@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaLinkedin className="text-blue-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">LinkedIn</h3>
                        <a
                            href="https://www.linkedin.com/in/isuriamarasekara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            linkedin.com/in/isuriamarasekara
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaFileAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Resume</h3>
                        <button
                            onClick={() => window.location.href = "mailto:isuriamarasekara97@gmail.com?subject=Requesting Resume"}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            Request my resume via email
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;