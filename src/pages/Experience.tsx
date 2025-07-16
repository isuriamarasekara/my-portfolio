import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: "QA Automation Engineer – Intrepid Travel",
            period: "Dec 2024 – Present",
            description: "Worked with global teams to automate workflows, API testing using ACCELQ, and performance testing using k6. Collaborated in an Agile environment to ensure high-quality software delivery.",
            skills: ["ACCELQ", "k6", "API Testing", "Agile"]
        },
        {
            title: "Associate QA Engineer – Virtusa Pvt Ltd",
            period: "Mar 2022 – Sep 2024",
            description: "Developed and executed test scripts using Selenium & Java, conducted performance testing, API testing, and collaborated with cross-functional Agile teams to deliver quality software solutions.",
            skills: ["Selenium", "Java", "JMeter", "Postman", "Agile"]
        }
    ];

    return (
        <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                Work Experience
            </h2>
            <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-6 before:w-1 before:bg-gray-200 md:before:left-1/2 md:before:-ml-1">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`relative pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                    >
                        <div className={`p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 relative ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                            <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-white md:left-1/2 md:-ml-2"></div>
                            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                            <p className="text-gray-700 mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;