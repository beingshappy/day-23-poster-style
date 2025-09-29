import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, category }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold text-slate-900">{name}</span>
        <span className="text-sm font-semibold text-blue-600">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-sm text-slate-500 font-medium">{category}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 88, category: 'Language' },
    { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'AWS', level: 78, category: 'Cloud' },
    { name: 'Docker', level: 80, category: 'DevOps' },
    { name: 'GraphQL', level: 75, category: 'API' },
    { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 text-center">
            TECHNICAL
            <span className="text-blue-600"> SKILLS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Skill 
                key={index}
                name={skill.name}
                level={skill.level}
                category={skill.category}
              />
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Always Learning</h3>
            <p className="text-xl opacity-90">
              Currently exploring AI/ML integration, Web3 technologies, and advanced cloud architectures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;