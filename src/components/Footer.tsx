import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Isuri Amarasekara. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="mailto:isuriamarasekara97@gmail.com"
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/isuriamarasekara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;