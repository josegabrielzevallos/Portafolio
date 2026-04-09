'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import ResumeModal from '@/components/ResumeModal'

export default function Hero() {
  const { t } = useLanguage()
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top section: Info + Photo side by side */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl shadow-accent/10">
              <img
                src="/perfil.jpg"
                alt="Jose Gabriel Zevallos Delgado de la Flor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-heading">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-accent mb-4">
              {t('hero.subtitle')}
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a href="#contact" className="btn-primary">
            {t('hero.getInTouch')}
          </a>
          <a href="https://github.com/josegabrielzevallos" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {t('hero.viewGithub')}
          </a>
          <a href="https://www.linkedin.com/in/jose-gabriel-zevallos-delgado-de-la-flor-a82307250" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            LinkedIn
          </a>
        </div>

        <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-accent">5+</div>
            <div className="text-muted">{t('hero.yearsExp')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">20+</div>
            <div className="text-muted">{t('hero.projects')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">3+</div>
            <div className="text-muted">{t('hero.companies')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
