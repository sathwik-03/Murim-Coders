import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const ContactRealm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSpellCasting, setIsSpellCasting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSpellCasting(true);
    
    // Simulate spell casting
    setTimeout(() => {
      setIsSpellCasting(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact-realm" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-red-400 font-oxanium relative">
            <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full relative"
              >
                <div className="absolute -right-1 top-0 w-1.5 h-0.5 bg-gradient-to-r from-pink-600 to-pink-800 rounded"></div>
                <div className="absolute inset-0 bg-pink-400/60 blur-sm rounded-full"></div>
              </motion.div>
            </span>
            Contact Realm
            <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ 
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full relative"
              >
                <div className="absolute -right-1 top-0 w-1.5 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded"></div>
                <div className="absolute inset-0 bg-cyan-400/60 blur-sm rounded-full"></div>
              </motion.div>
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-satoshi">
            Establish connection across the digital dimensions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="contact-scroll"
          >
            <div className="scroll-seal-aura"></div>
            <div className="scroll-container">
              <div className="scroll-header">
                <h3 className="text-2xl font-bold text-white mb-2 font-oxanium">Send a Message Scroll</h3>
                <p className="text-gray-400 font-satoshi">Cast your words into the digital void</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="input-realm">
                  <label className="realm-label">
                    Warrior Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="mystical-input"
                    placeholder="Enter your cultivation name"
                    required
                  />
                  <div className="input-energy"></div>
                </div>

                <div className="input-realm">
                  <label className="realm-label">
                    Sacred Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="mystical-input"
                    placeholder="your.email@realm.com"
                    required
                  />
                  <div className="input-energy"></div>
                </div>

                <div className="input-realm">
                  <label className="realm-label">
                    Message Scroll
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="mystical-input h-32 resize-none"
                    placeholder="Share your quest or collaboration ideas..."
                    required
                  ></textarea>
                  <div className="input-energy"></div>
                </div>

                <motion.button 
                  type="submit" 
                  disabled={isSpellCasting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="spell-button w-full group"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSpellCasting ? (
                      <>
                        <Sparkles className="w-5 h-5 animate-spin" />
                        <span>Casting Spell...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Cast Message Spell</span>
                      </>
                    )}
                  </span>
                  <div className="spell-energy"></div>
                  {isSpellCasting && <div className="spell-particles"></div>}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="contact-portal group">
              <div className="portal-energy"></div>
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-oxanium">Direct Transmission</h3>
              <p className="text-gray-300 font-satoshi">sathwik@digitalrealm.dev</p>
            </div>

            <div className="contact-portal group">
              <div className="portal-energy"></div>
              <MessageCircle className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-oxanium">Guild Channels</h3>
              <p className="text-gray-300 font-satoshi">Available for collaborative quests and knowledge sharing</p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4 font-oxanium">Follow the Cultivation Path</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-portal group"
                >
                  <Github className="w-6 h-6" />
                  <div className="portal-glow bg-purple-400/20"></div>
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-portal group"
                >
                  <Linkedin className="w-6 h-6" />
                  <div className="portal-glow bg-blue-400/20"></div>
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-portal group"
                >
                  <Twitter className="w-6 h-6" />
                  <div className="portal-glow bg-cyan-400/20"></div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactRealm;