import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate opacity-0 translate-y-20">
          <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Sacred Communication Seal
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Establish connection across the digital realm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-animate opacity-0 translate-x-[-50px]">
            <div className="contact-scroll">
              <div className="scroll-seal-glow"></div>
              <div className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="mystical-input w-full"
                      placeholder="Enter your warrior name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Sacred Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="mystical-input w-full"
                      placeholder="your.email@realm.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Message Scroll
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="mystical-input w-full h-32 resize-none"
                      placeholder="Share your quest or collaboration ideas..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="mystical-button w-full group">
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </span>
                    <div className="button-energy"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-animate opacity-0 translate-x-[50px]">
            <div className="space-y-8">
              <div className="contact-info-card group">
                <div className="card-glow"></div>
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Direct Transmission</h3>
                <p className="text-gray-300">codewarrior@digitalrealm.dev</p>
              </div>

              <div className="contact-info-card group">
                <div className="card-glow"></div>
                <MessageCircle className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Guild Channels</h3>
                <p className="text-gray-300">Available for collaborative quests and knowledge sharing</p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow the Path</h4>
                <div className="flex space-x-4">
                  <a href="#" className="social-link group">
                    <Github className="w-6 h-6" />
                    <div className="social-glow bg-purple-400/20"></div>
                  </a>
                  <a href="#" className="social-link group">
                    <Linkedin className="w-6 h-6" />
                    <div className="social-glow bg-blue-400/20"></div>
                  </a>
                  <a href="#" className="social-link group">
                    <Twitter className="w-6 h-6" />
                    <div className="social-glow bg-cyan-400/20"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;