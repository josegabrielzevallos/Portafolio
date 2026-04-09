'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Universidad Católica San Pablo',
      location: 'Arequipa, Peru',
      year: '2023',
    },
    {
      degree: 'Diploma in Computer Vision (Machine Learning & Deep Learning)',
      school: 'Universidad Católica San Pablo',
      location: 'Arequipa, Peru',
      year: '2023',
    },
    {
      degree: 'Diploma in Web Development',
      school: 'Tamwood College',
      location: 'Vancouver, Canada',
      year: '2024',
    },
    {
      degree: 'English: ILAC Pathway 3.2',
      school: 'ILAC International College',
      location: 'Remote',
      year: '2024',
    },
  ]

  const certifications = [
    {
      title: 'Machine Learning in Python and its Applications',
      issuer: 'Universidad Católica San Pablo',
    },
    {
      title: 'Genexus Gx de Accion Point',
      issuer: 'Genexus',
    },
  ]

  return (
    <section id="education" className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{t('section.education')}</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-heading mb-6">{t('edu.education')}</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-secondary/50 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="text-lg font-bold text-heading">{edu.degree}</h4>
                <p className="text-accent">{edu.school}</p>
                <div className="flex justify-between text-muted text-sm">
                  <span>{edu.location}</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-heading mb-6">{t('edu.certifications')}</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-secondary/50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-heading">{cert.title}</h4>
                <p className="text-muted">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
