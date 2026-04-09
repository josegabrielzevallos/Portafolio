'use client'

import { useLanguage } from '@/app/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary border-t border-accent/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-muted">
              <li><a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">{t('nav.experience')}</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">{t('footer.social')}</h3>
            <ul className="space-y-2 text-muted">
              <li><a href="https://github.com/josegabrielzevallos" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/jose-gabriel-zevallos-delgado-de-la-flor-a82307250" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="email:jose.zevallos.delgadolaflor@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">{t('footer.location')}</h3>
            <p className="text-muted">Vancouver, BC, Canada</p>
            <p className="text-subtle text-sm mt-2">Open to remote opportunities</p>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-subtle">
          <p>{t('footer.copyright')}</p>
          <p className="text-sm mt-2">{t('footer.crafted')}</p>
        </div>
      </div>
    </footer>
  )
}
