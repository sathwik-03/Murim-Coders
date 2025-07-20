import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Shield, Zap } from 'lucide-react';

const AncientScrolls = () => {
  const scrollCategories = [
    {
      title: "Frontend Arts",
      icon: Code,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
      color: "cyan",
      level: 9,
      emoji: "🧙‍♂️"
    },
    {
      title: "Backend Mastery",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "purple",
      level: 8,
      emoji: "🛡️"
    },
    {
      title: "Cloud Dao",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      color: "blue",
      level: 7,
      emoji: "☁️"
    },
    {
      title: "Design Harmony",
      icon: Palette,
      skills: ["UI/UX", "Figma", "Adobe Suite", "Animation", "3D Modeling", "Blender"],
      color: "pink",
      level: 8,
      emoji: "🎨"
    },
    {
      title: "Security Ward",
      icon: Shield,
      skills: ["Auth0", "JWT", "OAuth", "Encryption", "Penetration Testing", "OWASP"],
      color: "red",
      level: 7,
      emoji: "🔐"
    },
    {
      title: "Performance Qi",
      icon: Zap,
      skills: ["Optimization", "Caching", "CDN", "Lazy Loading", "Bundle Analysis", "Profiling"],
      color: "yellow",
      level: 8,
      emoji: "⚙️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <section id="ancient-scrolls" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-red-400 font-oxanium relative">
            <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 10, 0] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full relative"
              >
                <div className="absolute -right-1.5 top-0 w-2 h-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded"></div>
                <div className="absolute inset-0 bg-yellow-400/50 blur-sm rounded-full"></div>
              </motion.div>
            </span>
            Ancient Scrolls of Mastery
            <span className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  rotate: [0, -8, 0] 
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="w-6 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full relative"
              >
                <div className="absolute -right-1.5 top-0 w-2 h-1 bg-gradient-to-r from-green-600 to-green-800 rounded"></div>
                <div className="absolute inset-0 bg-green-400/50 blur-sm rounded-full"></div>
              </motion.div>
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-satoshi">
            Knowledge gathered through countless battles in the digital realm
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {scrollCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={scrollVariants}
              whileHover={{ 
                y: -15, 
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="ancient-scroll group"
            >
              <div className={`scroll-aura aura-${category.color}`}></div>
              
              <div className="scroll-header">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`realm-icon icon-${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl">{category.emoji}</span>
                  </div>
                  <div className="cultivation-level">
                    <span className={`level-text text-${category.color}-400`}>Lv.{category.level}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-oxanium">{category.title}</h3>
                
                <div className="power-meter mb-4">
                  <div className="meter-track">
                    <motion.div 
                      className={`meter-fill fill-${category.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level * 10}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <div className="power-orbs">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`power-orb ${i < category.level ? `orb-active orb-${category.color}` : 'orb-inactive'}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="scroll-content">
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="skill-rune group-hover:translate-x-1 transition-transform duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="rune-text">{skill}</span>
                      <div className={`rune-energy energy-${category.color}`}></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AncientScrolls;