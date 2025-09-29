import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  liveUrl, 
  githubUrl,
  imageUrl 
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h3 className="text-3xl font-black text-white">{title}</h3>
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard. Built for scalability with microservices architecture.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      title: 'Weather Analytics',
      description: 'Data visualization platform that analyzes weather patterns and provides predictive insights using machine learning algorithms.',
      technologies: ['Python', 'Django', 'D3.js', 'TensorFlow', 'Docker'],
      githubUrl: 'https://github.com/example',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media management tool with post scheduling, analytics, and multi-platform integration.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool that helps users generate high-quality articles, social media posts, and marketing copy.',
      technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'Supabase'],
      liveUrl: 'https://example.com',
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracking with advanced charting, alerts, and market analysis features.',
      technologies: ['React', 'GraphQL', 'Apollo', 'CoinGecko API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 text-center">
            FEATURED
            <span className="text-blue-600"> PROJECTS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300"
            >
              <Github size={24} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;