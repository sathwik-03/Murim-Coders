import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import SacredProjects from './components/SacredProjects';
import AncientScrolls from './components/AncientScrolls';
import ContactRealm from './components/ContactRealm';
import ParticleSystem from './components/ParticleSystem';
import FloatingElements from './components/FloatingElements';
import './styles/murim.css';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={appRef} className="relative min-h-screen bg-cosmic-gradient overflow-x-hidden">
      <ParticleSystem />
      <FloatingElements />
      
      {/* Mystical Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-red-400 font-oxanium"
            >
              道 MurimCoders
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Sacred Projects', 'Ancient Scrolls', 'Contact Realm'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-purple-400 transition-all duration-300 relative group font-satoshi"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        <Hero />
        <SacredProjects />
        <AncientScrolls />
        <ContactRealm />
      </main>

      {/* Team Credit Footer */}
      <footer className="text-center text-sm text-purple-300 mt-10 pb-6 font-satoshi">
        Built with honor by MurimCoders:
        <br />
        Akula Sathwik · Sahithya Vardhaman · Allam Venkat Sai
      </footer>
    </div>
  );
}

export default App;
