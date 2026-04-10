'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import ProjectGallery from '@/components/ProjectGallery'

export default function Projects() {
  const { t } = useLanguage()
  const [galleryOpen, setGalleryOpen] = useState(false)

  const medicFamilyImages = Array.from({ length: 9 }, (_, i) => `/media/Medic/${i + 1}m.png`)

  const projects = [
    {
      title: 'MedicFamily - Medical Appointment Platform',
      description: 'Full-stack platform that solves the inefficiency of traditional medical scheduling by enabling patients to search for specialists, book appointments, and manage their healthcare needs online. Features include real-time availability, Google Maps integration, role-based dashboards for doctors and patients, and secure authentication.',
      tech: ['React', 'Django', 'PostgreSQL', 'Google Cloud', 'Docker'],
      link: 'https://github.com/josegabrielzevallos/medicfamily',
      demo: 'https://medicfamily-frontend-42291566189.europe-west1.run.app/',
      status: t('proj.inDevelopment'),
      gradient: 'from-blue-600 to-cyan-500',
      icon: '🏥',
      images: medicFamilyImages,
    },
    {
      title: 'ERP Logistics & Purchasing System',
      description: 'Redesigned enterprise logistics workflows at Incalpaca TPX to improve purchase authorization, inventory traceability, and audit control. Automated approval chains and integrated with existing accounting processes, reducing manual errors and improving operational efficiency across the supply chain.',
      tech: ['GeneXus', 'SQL Server', 'API Design', 'ERP'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.deployed'),
      gradient: 'from-orange-600 to-red-500',
      icon: '📦',
    },
    {
      title: 'Enterprise Surveillance & Access Control',
      description: 'Built a comprehensive security system for visitor tracking, vehicle authorization, and personnel monitoring with automated reporting. Integrated with existing infrastructure to provide real-time alerts and dashboard analytics for security operations management.',
      tech: ['Django', 'React', 'PostgreSQL', 'REST APIs'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.deployed'),
      gradient: 'from-purple-600 to-pink-500',
      icon: '🔒',
    },
    {
      title: 'Production Monitoring & Quality Control',
      description: 'Real-time monitoring system for production efficiency, quality control, and shop-floor operations at a textile manufacturing company. Features automated alerts, KPI dashboards, and data-driven decision support to enable continuous optimization through operational data analysis.',
      tech: ['Django', 'SQL Server', 'Dashboard', 'Analytics'],
      link: 'https://github.com/josegabrielzevallos',
      status: t('proj.deployed'),
      gradient: 'from-green-600 to-emerald-500',
      icon: '⚙️',
    },
  ]

  return (
    <section id="projects" aria-label="Featured Projects" className="section bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">{t('section.projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-secondary border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/20 h-full flex flex-col ${project.images ? 'cursor-pointer' : ''}`}
              onClick={() => project.images && setGalleryOpen(true)}
            >
              {/* Image Preview */}
              <div className={`h-40 ${project.images ? '' : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center text-6xl relative overflow-hidden`}>
                {project.images ? (
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                    <span className="text-white drop-shadow-lg group-hover:scale-110 transition-transform">{project.icon}</span>
                  </>
                )}
                {project.images && (
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    📷 {project.images.length} fotos
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-heading flex-1 group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full whitespace-nowrap ml-2">
                    {project.status}
                  </span>
                </div>
                <p className="text-muted mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded hover:bg-accent hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-accent hover:text-blue-300 transition-colors font-semibold group/link"
                  >
                    {t('proj.viewProject')}
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold group/demo"
                    >
                      {t('proj.viewDemo')}
                      <span className="group-hover/demo:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectGallery
          images={medicFamilyImages}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          title="MedicFamily - Medical Appointment Platform"
        />
      </div>
    </section>
  )
}
