'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'
import { useTheme } from '@/app/ThemeContext'
import ResumeModal from '@/components/ResumeModal'

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-secondary/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-accent">
          JGZ
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="px-3 py-1 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-sm"
          >
            {t('hero.downloadResume')}
          </button>
        </div>
        <div className="flex gap-4 items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 bg-secondary rounded-full p-1 transition-colors border border-accent/20 hover:border-accent/50"
            aria-label="Toggle theme"
          >
            <div className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center text-sm ${
              theme === 'dark' 
                ? 'translate-x-7 bg-indigo-900 shadow-lg shadow-indigo-500/30' 
                : 'translate-x-0 bg-amber-400 shadow-lg shadow-amber-400/30'
            }`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </button>

          <div className="flex gap-2 bg-secondary/50 rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition-colors ${language === 'en' ? 'bg-accent text-white' : 'text-muted hover:text-accent'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded transition-colors ${language === 'es' ? 'bg-accent text-white' : 'text-muted hover:text-accent'}`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
    <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  )
}
