import React from 'react';
import { Sword, Star, Trophy, Crown } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Awakening",
      description: "First line of code written, beginning the journey into the digital realm",
      icon: Star,
      rank: "Novice",
      color: "blue"
    },
    {
      year: "2020",
      title: "First Blade Forged",
      description: "Completed first full-stack application, mastering the art of frontend and backend",
      icon: Sword,
      rank: "Apprentice",
      color: "green"
    },
    {
      year: "2021",
      title: "Guild Recognition",
      description: "Joined first development team, contributing to production applications",
      icon: Trophy,
      rank: "Journeyman",
      color: "purple"
    },
    {
      year: "2022",
      title: "Cloud Ascension",
      description: "Mastered cloud technologies and DevOps practices, reaching new heights",
      icon: Crown,
      rank: "Expert",
      color: "yellow"
    },
    {
      year: "2023",
      title: "Elder Status",
      description: "Leading projects and mentoring other wanderers on their coding journey",
      icon: Crown,
      rank: "Master",
      color: "red"
    },
    {
      year: "2024",
      title: "Legendary Path",
      description: "Pioneering new technologies and pushing the boundaries of possibility",
      icon: Crown,
      rank: "Legend",
      color: "cyan"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-animate opacity-0 translate-y-20">
          <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Path of Cultivation
          </h2>
          <p className="text-center text-gray-400 mb-16">
            The journey of a thousand miles begins with a single commit
          </p>
        </div>

        <div className="relative">
          {/* Central Path Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 timeline-glow"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`scroll-animate opacity-0 translate-y-20 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="timeline-card group">
                    <div className="timeline-card-glow"></div>
                    <div className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50">
                      <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${milestone.color}-500/20 text-${milestone.color}-400 border border-${milestone.color}-500/30 mr-3`}>
                          {milestone.rank}
                        </span>
                        <span className="text-2xl font-bold text-purple-400">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className={`timeline-icon bg-${milestone.color}-500/20 border-2 border-${milestone.color}-500 group`}>
                    <milestone.icon className={`w-6 h-6 text-${milestone.color}-400`} />
                    <div className={`timeline-icon-glow bg-${milestone.color}-400/30`}></div>
                  </div>
                </div>

                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;