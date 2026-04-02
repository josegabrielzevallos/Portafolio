'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact Me',
    'hero.title': 'Jose Gabriel Zevallos',
    'hero.subtitle': 'Software Engineer | Web & ERP Developer',
    'hero.description': "Bachelor's in Computer Science with expertise in web development, artificial intelligence, and enterprise systems. Passionate about building scalable solutions using React, Django, and modern cloud technologies.",
    'hero.getInTouch': 'Get In Touch',
    'hero.viewGithub': 'View GitHub',
    'hero.yearsExp': 'Years Experience',
    'hero.projects': 'Projects Completed',
    'hero.companies': 'Companies',
    'section.experience': 'Experience',
    'section.projects': 'Featured Projects',
    'section.skills': 'Technical Skills',
    'section.education': 'Education & Certifications',
    'section.contact': 'Get In Touch',
    'exp.founder': 'Founder & Developer',
    'exp.startup': 'Medical Appointment Startup',
    'exp.period1': '11/2025 – Present',
    'exp.desc1': 'Designed and developed a medical appointment management platform using React, Django, and PostgreSQL. Managed cloud infrastructure on Google Cloud with Docker.',
    'exp.analyst': 'Developer Analyst',
    'exp.periferia': 'Periferia IT Group (Bancamía)',
    'exp.period2': '04/2024 – Present',
    'exp.desc2': 'Administered GeneXus source control, managed SVT workflows, and coordinated CI/CD readiness with GitLab and Jenkins.',
    'exp.sonda': 'Sonda del Perú',
    'exp.period3': '03/2024 – 07/2025',
    'exp.desc3': 'Developed core investment maintainers using hybrid architecture with stored procedures and GeneXus. Implemented dual-control approval models.',
    'exp.engineer': 'Software Engineer',
    'exp.incalpaca': 'Incalpaca TPX',
    'exp.period4': '02/2022 – 03/2024',
    'exp.desc4': 'Engineered enterprise surveillance and access-control systems. Redesigned ERP logistics workflows improving operational efficiency.',
    'proj.inDevelopment': 'In Development',
    'proj.deployed': 'Deployed',
    'proj.viewProject': 'View Project →',
    'edu.education': 'Education',
    'edu.certifications': 'Certifications',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.send': 'Send Message',
    'form.success': '✓ Message sent! I\'ll get back to you soon.',
    'footer.quickLinks': 'Quick Links',
    'footer.social': 'Social',
    'footer.location': 'Location',
    'footer.copyright': '© 2026 Jose Gabriel Zevallos. All rights reserved.',
    'footer.crafted': 'Crafted with React, Next.js & Tailwind CSS',
  },
  es: {
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educación',
    'nav.contact': 'Contactar',
    'hero.title': 'Jose Gabriel Zevallos',
    'hero.subtitle': 'Ingeniero de Software | Desarrollador Web & ERP',
    'hero.description': 'Licenciado en Informática con experiencia en desarrollo web, inteligencia artificial y sistemas empresariales. Apasionado por construir soluciones escalables usando React, Django y tecnologías cloud modernas.',
    'hero.getInTouch': 'Contáctame',
    'hero.viewGithub': 'Ver GitHub',
    'hero.yearsExp': 'Años de Experiencia',
    'hero.projects': 'Proyectos Completados',
    'hero.companies': 'Empresas',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos Destacados',
    'section.skills': 'Habilidades Técnicas',
    'section.education': 'Educación y Certificaciones',
    'section.contact': 'Ponte en Contacto',
    'exp.founder': 'Fundador y Desarrollador',
    'exp.startup': 'Startup de Citas Médicas',
    'exp.period1': '11/2025 – Presente',
    'exp.desc1': 'Diseñé y desarrollé una plataforma de gestión de citas médicas usando React, Django y PostgreSQL. Administré infraestructura en Google Cloud con Docker.',
    'exp.analyst': 'Analista Desarrollador',
    'exp.periferia': 'Periferia IT Group (Bancamía)',
    'exp.period2': '04/2024 – Presente',
    'exp.desc2': 'Administré control de código GeneXus, gestiones de flujos SVT y coordiné disponibilidad CI/CD con GitLab y Jenkins.',
    'exp.sonda': 'Sonda del Perú',
    'exp.period3': '03/2024 – 07/2025',
    'exp.desc3': 'Desarrollé mantenedores de inversión usando arquitectura híbrida con procedimientos almacenados y GeneXus. Implementé modelos de aprobación dual.',
    'exp.engineer': 'Ingeniero de Software',
    'exp.incalpaca': 'Incalpaca TPX',
    'exp.period4': '02/2022 – 03/2024',
    'exp.desc4': 'Ingenieré sistemas de vigilancia y control de acceso empresarial. Rediseñé flujos logísticos ERP mejorando eficiencia operacional.',
    'proj.inDevelopment': 'En Desarrollo',
    'proj.deployed': 'Desplegado',
    'proj.viewProject': 'Ver Proyecto →',
    'edu.education': 'Educación',
    'edu.certifications': 'Certificaciones',
    'form.name': 'Nombre',
    'form.email': 'Correo',
    'form.message': 'Mensaje',
    'form.send': 'Enviar Mensaje',
    'form.success': '✓ ¡Mensaje enviado! Te responderé pronto.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.social': 'Redes Sociales',
    'footer.location': 'Ubicación',
    'footer.copyright': '© 2026 Jose Gabriel Zevallos. Todos los derechos reservados.',
    'footer.crafted': 'Creado con React, Next.js & Tailwind CSS',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'es')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return default English context during server-side rendering
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: (key: string) => translations.en[key] || key,
    }
  }
  return context
}
