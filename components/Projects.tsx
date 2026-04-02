'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'Medical Appointment Platform',
      description: 'Full-stack appointment management system enabling efficient scheduling between patients and doctors.',
      tech: ['React', 'Django', 'PostgreSQL', 'Google Cloud', 'Docker'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.inDevelopment'),
    },
    {
      title: 'ERP Logistics System',
      description: 'Enterprise resource planning system for logistics and inventory management with real-time tracking.',
      tech: ['GeneXus', 'SQL', 'API Design'],
      link: '#',
      status: t('proj.deployed'),
    },
    {
      title: 'Community Management Platform',
      description: 'Internal platform for communication, complaint management, and workflow automation.',
      tech: ['Django', 'React', 'PostgreSQL'],
      link: '#',
      status: t('proj.deployed'),
    },
    {
      title: 'Production Monitoring System',
      description: 'Real-time monitoring of production efficiency, quality control, and shop-floor operations.',
      tech: ['Django', 'SQL Server'],
      link: '#',
      status: t('proj.deployed'),
    },
  ]

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{t('section.projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white flex-1">{project.title}</h3>
                <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full whitespace-nowrap ml-2">
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-accent hover:text-blue-400 transition-colors inline-flex items-center">
                {t('proj.viewProject')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
