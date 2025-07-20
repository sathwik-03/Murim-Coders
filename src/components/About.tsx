import React from 'react';
import { Brain, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-animate opacity-0 translate-y-20">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            About the Wanderer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate opacity-0 translate-x-[-50px]">
            <div className="relative">
              <div className="avatar-container">
                <div className="avatar-glow"></div>
                <div className="avatar-silhouette"></div>
              </div>
            </div>
          </div>

          <div className="scroll-animate opacity-0 translate-x-[50px]">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                In the mystical realm where code meets consciousness, I journey as a 
                <span className="text-purple-400 font-semibold"> digital wanderer</span>, 
                seeking perfect harmony between ancient wisdom and modern technology.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My path began in the sacred temples of learning, where I mastered the 
                <span className="text-cyan-400 font-semibold"> three pillars of creation</span>: 
                Frontend Arts, Backend Mastery, and the Cloud Dao.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="philosophy-card group">
                  <div className="card-glow"></div>
                  <Brain className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Logic</h3>
                  <p className="text-gray-400 text-sm">Clean, efficient code that speaks truth</p>
                </div>
                
                <div className="philosophy-card group">
                  <div className="card-glow"></div>
                  <Heart className="w-8 h-8 text-red-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Passion</h3>
                  <p className="text-gray-400 text-sm">Every project is a work of digital art</p>
                </div>
                
                <div className="philosophy-card group">
                  <div className="card-glow"></div>
                  <Lightbulb className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">Pushing boundaries of what's possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;