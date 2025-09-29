import React from 'react';
import { Code, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 text-center">
            ABOUT
            <span className="text-blue-600"> ME</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
                With over 5 years of experience, I specialize in building scalable web applications and 
                user-centered designs that make a real impact.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="bg-slate-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Location</span>
                  <span className="text-slate-900">San Francisco, CA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Experience</span>
                  <span className="text-slate-900">5+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Focus</span>
                  <span className="text-slate-900">Full-Stack Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 font-semibold">Availability</span>
                  <span className="text-green-600 font-semibold">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:bg-blue-50 p-8 rounded-2xl transition-colors duration-300">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Code size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Clean Code</h3>
              <p className="text-slate-600">
                Writing maintainable, scalable code that follows best practices and industry standards.
              </p>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-8 rounded-2xl transition-colors duration-300">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Lightbulb size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation</h3>
              <p className="text-slate-600">
                Always exploring new technologies and creative solutions to solve complex problems.
              </p>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-8 rounded-2xl transition-colors duration-300">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Target size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Results</h3>
              <p className="text-slate-600">
                Focused on delivering high-quality solutions that exceed expectations and drive success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;