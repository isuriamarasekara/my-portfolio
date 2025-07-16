import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        I'm a dedicated QA Automation Engineer with expertise in testing, automating, and ensuring the quality of web-based applications.
                        My ISTQB certification underscores my commitment to professional excellence in software quality assurance.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        I thrive on learning new technologies and solving complex problems to deliver software that's not just functional, but also
                        reliable, scalable, and provides an exceptional user experience. My approach combines technical skills with a keen eye for detail
                        and a passion for continuous improvement.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Attributes</h3>
                    <ul className="space-y-3">
                        {[
                            "ISTQB Certified Tester",
                            "Automation Specialist",
                            "Agile Methodology Practitioner",
                            "Problem Solver",
                            "Continuous Learner",
                            "Team Collaborator"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;