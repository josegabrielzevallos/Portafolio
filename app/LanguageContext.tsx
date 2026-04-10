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
    'hero.title': 'Jose Gabriel Zevallos Delgado de la Flor',
    'hero.subtitle': 'Software Engineer | Web & ERP Developer',
    'hero.description': "Software Engineer with 4+ years of experience in software development across the banking, investment, and textile industries. Specialized in building web applications, ERP systems, and cloud-based solutions using Python, Django, React, PostgreSQL, and GeneXus. Holds a B.Sc. in Computer Science with diplomas in Computer Vision (Machine Learning & Deep Learning) and Web Development. Founder of a healthcare startup focused on medical appointment management. Currently based in Vancouver, Canada, open to new opportunities.",
    'hero.getInTouch': 'Get In Touch',
    'hero.viewGithub': 'View GitHub',
    'hero.downloadResume': 'Download Resume',
    'resume.selectLanguage': 'Select your preferred language:',
    'resume.close': 'Close',
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
    'exp.desc1': 'Designed and developed a medical appointment management platform enabling efficient scheduling between patients and doctors. Implemented appointment scheduling, user management, and patient care workflows. Built with React, Django, and PostgreSQL. Managed cloud infrastructure on Google Cloud with Docker for containerization and scalable deployments.',
    'exp.analyst': 'Developer Analyst',
    'exp.periferia': 'Periferia IT Group (Bancamía)',
    'exp.period2': '04/2024 – Present',
    'exp.desc2': 'Administered GeneXus source control by managing SVT workflows, validating technical documentation, and coordinating handoffs to QA environments. Governed CI/CD readiness by cataloging GeneXus objects in GitLab, maintaining GXServer environments, and supporting Jenkins-integrated deployments.',
    'exp.sonda': 'Sonda del Perú',
    'exp.period3': '03/2024 – 07/2025',
    'exp.desc3': 'Developed core investment maintainers using a hybrid architecture combining stored procedures and GeneXus to ensure data consistency and performance. Implemented dual-control approval models and integration APIs to secure change management across multiple knowledge bases.',
    'exp.engineer': 'Software Engineer',
    'exp.incalpaca': 'Incalpaca TPX',
    'exp.period4': '02/2022 – 03/2024',
    'exp.desc4': 'Engineered enterprise surveillance and access-control systems enabling visitor tracking, vehicle authorization, and personnel monitoring. Redesigned ERP logistics workflows and purchasing authorization flows, improving traceability, audit control, and operational efficiency. Built internal communication and complaint management platforms with dashboard-driven decision support.',
    'exp.instructor': 'Programming Instructor',
    'exp.crackthecode': 'Crack the Code',
    'exp.period5': '11/2021 – 06/2023',
    'exp.desc5': 'Delivered structured programming instruction using block-based and text-based paradigms to develop logical thinking and computational foundations in students across Latin America. Facilitated game development learning paths through interactive platforms and applied problem-solving projects.',
    'proj.inDevelopment': 'In Development',
    'proj.deployed': 'Deployed',
    'proj.viewProject': 'View Project →',
    'proj.viewDemo': 'View Deployment →',
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
    'hero.title': 'Jose Gabriel Zevallos Delgado de la Flor',
    'hero.subtitle': 'Ingeniero de Software | Desarrollador Web & ERP',
    'hero.description': 'Ingeniero de Software con más de 4 años de experiencia en desarrollo de software en las industrias bancaria, de inversiones y textil. Especializado en aplicaciones web, sistemas ERP y soluciones en la nube con Python, Django, React, PostgreSQL y GeneXus. Bachiller en Ciencias de la Computación con diplomas en Visión por Computadora (Machine Learning y Deep Learning) y Desarrollo Web. Fundador de una startup de salud enfocada en gestión de citas médicas. Actualmente en Vancouver, Canadá, abierto a nuevas oportunidades.',
    'hero.getInTouch': 'Contáctame',
    'hero.viewGithub': 'Ver GitHub',
    'hero.downloadResume': 'Descargar CV',
    'resume.selectLanguage': 'Selecciona tu idioma preferido:',
    'resume.close': 'Cerrar',
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
    'exp.desc1': 'Diseñé y desarrollé una plataforma de gestión de citas médicas que permite la programación eficiente entre pacientes y médicos. Implementé funcionalidades de agendamiento, gestión de usuarios y flujos de atención al paciente. Construido con React, Django y PostgreSQL. Administré infraestructura en Google Cloud con Docker.',
    'exp.analyst': 'Analista Desarrollador',
    'exp.periferia': 'Periferia IT Group (Bancamía)',
    'exp.period2': '04/2024 – Presente',
    'exp.desc2': 'Administré control de código GeneXus gestionando flujos SVT, validando documentación técnica y coordinando entregas a ambientes QA. Goberné la disponibilidad CI/CD catalogando objetos GeneXus en GitLab, manteniendo ambientes GXServer y soportando despliegues integrados con Jenkins.',
    'exp.sonda': 'Sonda del Perú',
    'exp.period3': '03/2024 – 07/2025',
    'exp.desc3': 'Desarrollé mantenedores de inversión usando arquitectura híbrida combinando procedimientos almacenados y GeneXus para asegurar consistencia y rendimiento. Implementé modelos de aprobación de doble control y APIs de integración para gestionar cambios entre múltiples bases de conocimiento.',
    'exp.engineer': 'Ingeniero de Software',
    'exp.incalpaca': 'Incalpaca TPX',
    'exp.period4': '02/2022 – 03/2024',
    'exp.desc4': 'Ingenieré sistemas de vigilancia y control de acceso empresarial para seguimiento de visitantes, autorización de vehículos y monitoreo de personal. Rediseñé flujos logísticos ERP y autorización de compras, mejorando trazabilidad y eficiencia operacional. Construí plataformas de comunicación interna y gestión de reclamos con dashboards de soporte a decisiones.',
    'exp.instructor': 'Instructor de Programación',
    'exp.crackthecode': 'Crack the Code',
    'exp.period5': '11/2021 – 06/2023',
    'exp.desc5': 'Impartí instrucción de programación estructurada usando paradigmas visuales y textuales para desarrollar pensamiento lógico y fundamentos computacionales en estudiantes de Latinoamérica. Facilité rutas de aprendizaje de desarrollo de videojuegos a través de plataformas interactivas y proyectos aplicados.',
    'proj.inDevelopment': 'En Desarrollo',
    'proj.deployed': 'Desplegado',
    'proj.viewProject': 'Ver Proyecto →',
    'proj.viewDemo': 'Ver Despliegue →',
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
