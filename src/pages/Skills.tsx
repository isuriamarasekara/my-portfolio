import React from 'react';

const Skills: React.FC = () => {
    const technicalSkills = [
        { name: "Selenium", level: 90 },
        { name: "Java", level: 85 },
        { name: "JMeter", level: 80 },
        { name: "Postman", level: 85 },
        { name: "TestNG", level: 75 },
        { name: "Appium", level: 70 },
        { name: "Cucumber", level: 75 }
    ];

    const personalSkills = [
        { name: "Communication", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Problem Solving", level: 88 },
        { name: "Leadership", level: 80 }
    ];

    return (
        <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                My Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Technical Skills
                    </h3>
                    <div className="space-y-4">
                        {technicalSkills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-700 font-medium">{skill.name}</span>
                                    <span className="text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        Personal Skills
                    </h3>
                    <div className="space-y-4">
                        {personalSkills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-700 font-medium">{skill.name}</span>
                                    <span className="text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-purple-600 h-2.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;