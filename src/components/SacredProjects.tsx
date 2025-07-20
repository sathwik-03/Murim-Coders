import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Eye, TrendingUp } from 'lucide-react';

const SacredProjects = () => {
  const projects = [
    {
      title: "BloodGuard AI",
      subtitle: "Smart Blood Bank Inventory System",
      description: "An intelligent guardian system that monitors and predicts blood bank inventory needs using advanced AI algorithms, ensuring life-saving resources are always available.",
      tech: ["React", "Python", "TensorFlow", "Flask", "PostgreSQL"],
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Legendary",
      icon: Shield,
      color: "red"
    },
    {
      title: "EndoNerve Oracle",
      subtitle: "AI for Endoscopic Nerve Visualization",
      description: "A mystical oracle that reveals hidden nerve pathways during endoscopic procedures, using deep learning to enhance surgical precision and patient outcomes.",
      tech: ["Python", "OpenCV", "PyTorch", "FastAPI", "React"],
      image: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Epic",
      icon: Eye,
      color: "cyan"
    },
    {
      title: "Sensei Charts",
      subtitle: "Stock Market Prediction System",
      description: "A wise sensei that reads the ancient patterns of market movements, providing real-time predictions and insights for strategic trading decisions.",
      tech: ["React", "Node.js", "Python", "MongoDB", "WebSocket"],
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Mythical",
      icon: TrendingUp,
      color: "purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.3
      }
    }
  };

  return (
    <section id="sacred-projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-red-400 font-oxanium relative">
            <span className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full relative"
              >
                <div className="absolute -right-2 top-0 w-3 h-1 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded"></div>
                <div className="absolute inset-0 bg-cyan-400/40 blur-sm rounded-full"></div>
              </motion.div>
            </span>
            Sacred Projects
            <span className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-8 h-1 bg-gradient-to-r from-red-400 to-purple-400 rounded-full relative"
              >
                <div className="absolute -right-2 top-0 w-3 h-1 bg-gradient-to-r from-red-600 to-red-800 rounded"></div>
                <div className="absolute inset-0 bg-red-400/40 blur-sm rounded-full"></div>
              </motion.div>
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-satoshi">
            Legendary artifacts forged in the digital realm
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="sacred-card group"
            >
              <div className={`card-aura aura-${project.color}`}></div>
              
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <span className={`status-badge status-${project.color}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className={`project-icon icon-${project.color}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-b-xl border-t border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors font-oxanium">
                  {project.title}
                </h3>
                
                <p className="text-sm text-cyan-400 mb-3 font-satoshi font-medium">
                  {project.subtitle}
                </p>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed font-satoshi">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tech-rune"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="action-button demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="action-button source"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SacredProjects;