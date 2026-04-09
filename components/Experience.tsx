'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('exp.founder'),
      company: t('exp.startup'),
      period: t('exp.period1'),
      description: t('exp.desc1'),
      highlights: ['React', 'Django', 'PostgreSQL', 'Google Cloud', 'Docker'],
    },
    {
      title: t('exp.analyst'),
      company: t('exp.periferia'),
      period: t('exp.period2'),
      description: t('exp.desc2'),
      highlights: ['GeneXus', 'GitLab', 'Jenkins', 'SVT'],
    },
    {
      title: t('exp.analyst'),
      company: t('exp.sonda'),
      period: t('exp.period3'),
      description: t('exp.desc3'),
      highlights: ['GeneXus', 'SQL', 'API Design'],
    },
    {
      title: t('exp.engineer'),
      company: t('exp.incalpaca'),
      period: t('exp.period4'),
      description: t('exp.desc4'),
      highlights: ['ERP', 'Django', 'System Design'],
    },
  ]

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{t('section.experience')}</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-accent pl-6 py-4 hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-bold text-heading">{exp.title}</h3>
              <p className="text-accent font-semibold">{exp.company}</p>
              <p className="text-muted text-sm mb-3">{exp.period}</p>
              <p className="text-body mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
