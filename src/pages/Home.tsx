import React from 'react';
import profile from "../assets/profile.jpeg";

const Home: React.FC = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="mb-8">
                {/* <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img src={profile}  alt="" />
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                            IA
                        </div>
                    </div>
                </div> */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                        <img
                            src={profile}
                            alt="Isuri Amarasekara"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Isuri Amarasekara</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    QA Automation Engineer passionate about building reliable, scalable, and user-friendly software solutions.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="mailto:isuriamarasekara97@gmail.com?subject=Requesting Resume"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                    Request Resume
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default Home;