import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Isuri Amarasekara
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <ul className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Experience', 'Education', 'Skills', 'Achievements', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl px-6 py-4 space-y-4 animate-fadeIn">
                    {['Home', 'About', 'Experience', 'Education', 'Skills', 'Achievements', 'Contact'].map((item) => (
                        <a
                            key={item}
                            onClick={closeMenu}
                            href={`#${item.toLowerCase()}`}
                            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium border-b border-gray-100"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;