import React from 'react';
import { tateContent } from '../data/content';
import { Briefcase, DollarSign, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const businessProjects = tateContent.filter(content => content.category === 'business');

  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Business <span className="text-amber-500">Ventures</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          The Tate brothers have built multiple successful businesses and educational platforms. 
          Here are some of their most notable ventures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Multiple Businesses</h3>
            </div>
            <p className="text-gray-300">
              The Tate brothers have built and operated numerous successful businesses across various industries, from online education to casinos.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <DollarSign className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Wealth Creation</h3>
            </div>
            <p className="text-gray-300">
              Their educational platforms focus on teaching practical wealth creation strategies that they've personally used to build their fortune.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Global Community</h3>
            </div>
            <p className="text-gray-300">
              Their business ventures have created a global community of entrepreneurs and students learning to build wealth and freedom.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessProjects.slice(0, 4).map(project => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600 transition-colors"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
