import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 md:space-y-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;