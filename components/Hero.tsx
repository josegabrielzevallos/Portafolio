'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl text-accent mb-4">
          {t('hero.subtitle')}
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary">
            {t('hero.getInTouch')}
          </a>
          <a href="https://github.com/josegabrielzevallos" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {t('hero.viewGithub')}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-accent">5+</div>
            <div className="text-gray-400">{t('hero.yearsExp')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">20+</div>
            <div className="text-gray-400">{t('hero.projects')}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">3+</div>
            <div className="text-gray-400">{t('hero.companies')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
