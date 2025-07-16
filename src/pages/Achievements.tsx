import React from 'react';
import { FaTrophy, FaAward, FaCertificate } from 'react-icons/fa';

const Achievements: React.FC = () => {
    const achievements = [
        {
            icon: <FaTrophy className="text-yellow-500 text-2xl" />,
            title: "ISTQB Certified",
            description: "Software Testing Foundation – 2022",
            highlight: true
        },
        {
            icon: <FaAward className="text-blue-500 text-2xl" />,
            title: "Engineering IQ",
            description: "SDET Beginner Level 1 & 2 – 2022"
        },
        {
            icon: <FaCertificate className="text-purple-500 text-2xl" />,
            title: "British Council",
            description: "Certificate Course – 2017"
        }
    ];

    return (
        <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
                My Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg border ${achievement.highlight ? 'border-yellow-300 bg-yellow-50' : 'border-gray-200 bg-gray-50'} hover:shadow-md transition-all`}
                    >
                        <div className="flex items-center mb-4">
                            <div className="mr-4">
                                {achievement.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                        </div>
                        <p className="text-gray-700">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;