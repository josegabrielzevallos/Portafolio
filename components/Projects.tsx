'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'Medical Appointment Platform',
      description: 'Full-stack appointment management system enabling efficient scheduling between patients and doctors. Real-time notifications and integrated calendar system.',
      tech: ['React', 'Django', 'PostgreSQL', 'Google Cloud', 'Docker'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.inDevelopment'),
      gradient: 'from-blue-600 to-cyan-500',
      icon: '🏥',
    },
    {
      title: 'ERP Logistics System',
      description: 'Enterprise resource planning system for logistics and inventory management. Features real-time tracking, automated workflows, and comprehensive reporting.',
      tech: ['GeneXus', 'SQL', 'API Design'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.deployed'),
      gradient: 'from-orange-600 to-red-500',
      icon: '📦',
    },
    {
      title: 'Community Management Platform',
      description: 'Internal platform for communication, complaint management, and workflow automation. Streamlines processes and improves team collaboration.',
      tech: ['Django', 'React', 'PostgreSQL'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.deployed'),
      gradient: 'from-purple-600 to-pink-500',
      icon: '👥',
    },
    {
      title: 'Production Monitoring System',
      description: 'Real-time monitoring of production efficiency, quality control, and shop-floor operations. Dashboard with analytics and automated alerts.',
      tech: ['Django', 'SQL Server'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.deployed'),
      gradient: 'from-green-600 to-emerald-500',
      icon: '⚙️',
    },
  ]

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{t('section.projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-secondary border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20 h-full flex flex-col">
              {/* Image Preview */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <span className="text-white drop-shadow-lg group-hover:scale-110 transition-transform">{project.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white flex-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full whitespace-nowrap ml-2">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded hover:bg-accent hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-blue-300 transition-colors font-semibold group/link"
                >
                  {t('proj.viewProject')}
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
