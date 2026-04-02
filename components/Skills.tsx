'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const skills = {
    'Languages': ['Python', 'C/C++', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    'Frameworks': ['Django', 'React', 'Flutter', 'Unity', 'Next.js'],
    'Databases': ['PostgreSQL', 'SQL Server', 'MySQL', 'Db2 for i SQL'],
    'Tools & Platforms': ['GeneXus', 'GitLab', 'Jenkins', 'Docker', 'AWS', 'Google Cloud', 'Git'],
    'Specialties': ['Machine Learning', 'Deep Learning', 'Computer Vision', 'ERP Systems', 'API Design', 'Agile/Scrum'],
  }

  return (
    <section id="skills" className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{t('section.skills')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-secondary/50 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
              <h3 className="text-lg font-bold text-accent mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-accent/10 text-gray-200 rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    {skill}
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
