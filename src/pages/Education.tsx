import React from 'react';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education: React.FC = () => {
    const educationItems = [
        {
            icon: <FaGraduationCap className="text-blue-500 text-xl" />,
            degree: "BSc (Hons) Management Information System",
            institution: "NSBM / University College Dublin",
            period: "2018 – 2021",
            details: "Second Class Upper Division",
            type: "university"
        },
        {
            icon: <FaUniversity className="text-purple-500 text-xl" />,
            degree: "Diploma in Information Technology",
            institution: "Esoft Metro Campus",
            period: "2017",
            type: "college"
        },
        {
            icon: <FaSchool className="text-green-500 text-xl" />,
            degree: "GCE Advanced Level",
            institution: "Anuradhapura Central College",
            type: "school"
        }
    ];

    return (
        <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                Education
            </h2>

            <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-6 before:w-1 before:bg-gray-200">
                {educationItems.map((item, index) => (
                    <div key={index} className="relative pl-10">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
                            {item.icon}
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
                            <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                                <p className="text-gray-600 font-medium">{item.institution}</p>
                                {item.period && (
                                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                        {item.period}
                                    </span>
                                )}
                            </div>
                            {item.details && (
                                <p className="mt-2 text-gray-700">{item.details}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;