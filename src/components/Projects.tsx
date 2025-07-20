import React from 'react';
import { ExternalLink, Github, Sword } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Dragon's Hoard Tracker",
      description: "A mystical inventory system that tracks digital assets with the precision of an ancient dragon guarding its treasure.",
      tech: ["React", "Node.js", "MongoDB", "Three.js"],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Legendary"
    },
    {
      title: "Code Kata Dojo",
      description: "An immersive platform where developers train their coding skills through gamified challenges inspired by martial arts.",
      tech: ["Vue.js", "Firebase", "WebGL", "Socket.io"],
      image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Epic"
    },
    {
      title: "Quantum Portal",
      description: "A revolutionary data visualization tool that transforms complex datasets into interactive 3D universes.",
      tech: ["React", "D3.js", "WebGL", "Python"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Mythical"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-animate opacity-0 translate-y-20">
          <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Sacred Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="scroll-animate opacity-0 translate-y-20 project-card group">
              <div className="project-glow"></div>
              
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    project.status === 'Epic' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-b-lg border-t border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Source</span>
                  </button>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;