import React from 'react';
import { Code, Database, Cloud, Palette, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Arts",
      icon: Code,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"],
      color: "cyan",
      level: 9
    },
    {
      title: "Backend Mastery",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "purple",
      level: 8
    },
    {
      title: "Cloud Dao",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      color: "blue",
      level: 7
    },
    {
      title: "Design Harmony",
      icon: Palette,
      skills: ["UI/UX", "Figma", "Adobe Suite", "Animation", "3D Modeling", "Blender"],
      color: "pink",
      level: 8
    },
    {
      title: "Security Ward",
      icon: Shield,
      skills: ["Auth0", "JWT", "OAuth", "Encryption", "Penetration Testing", "OWASP"],
      color: "red",
      level: 7
    },
    {
      title: "Performance Qi",
      icon: Zap,
      skills: ["Optimization", "Caching", "CDN", "Lazy Loading", "Bundle Analysis", "Profiling"],
      color: "yellow",
      level: 8
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-animate opacity-0 translate-y-20">
          <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Ancient Scrolls of Mastery
          </h2>
          <p className="text-center text-gray-400 mb-16">
            Knowledge gathered through countless battles in the digital realm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="scroll-animate opacity-0 translate-y-20 skill-scroll group">
              <div className="scroll-glow"></div>
              
              <div className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50 h-full">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}-500/20 border border-${category.color}-500/30 mr-4`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex space-x-1 mr-2">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < category.level 
                                ? `bg-${category.color}-400` 
                                : 'bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className={`text-sm text-${category.color}-400 font-semibold`}>
                        Lv.{category.level}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="skill-tag group-hover:translate-x-1 transition-transform duration-300"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <span className="text-gray-300 text-sm">{skill}</span>
                      <div className={`skill-energy bg-${category.color}-400/20`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;