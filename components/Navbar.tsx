'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-secondary/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-accent">
          JGZ
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 bg-secondary/50 rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition-colors ${language === 'en' ? 'bg-accent text-white' : 'text-gray-400 hover:text-accent'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded transition-colors ${language === 'es' ? 'bg-accent text-white' : 'text-gray-400 hover:text-accent'}`}
            >
              ES
            </button>
          </div>
          <a href="#contact" className="btn-primary hidden md:block">
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </nav>
  )
}
