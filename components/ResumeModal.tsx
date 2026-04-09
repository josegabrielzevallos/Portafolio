'use client'

import { useLanguage } from '@/app/LanguageContext'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { t } = useLanguage()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary border border-accent/30 rounded-lg p-8 z-50 max-w-md w-full mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold text-heading mb-2">
          {t('hero.downloadResume')}
        </h2>
        <p className="text-muted mb-6">
          {t('resume.selectLanguage')}
        </p>

        <div className="space-y-3">
          {/* English Resume */}
          <a
            href="/Jose Gabriel Zevallos Delgado de la Flor - Resume.pdf"
            download
            onClick={onClose}
            className="flex items-center gap-3 w-full p-4 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent hover:text-white transition-all group cursor-pointer"
          >
            <div className="text-2xl">🇺🇸</div>
            <div className="flex-1">
              <p className="font-semibold text-heading group-hover:text-white">English Resume</p>
              <p className="text-sm text-muted group-hover:text-gray-200">Download English CV</p>
            </div>
            <div className="text-xl">↓</div>
          </a>

          {/* Spanish Resume */}
          <a
            href="/Jose Gabriel Zevallos Delgado de la Flor - Resumen.pdf"
            download
            onClick={onClose}
            className="flex items-center gap-3 w-full p-4 bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent hover:text-white transition-all group cursor-pointer"
          >
            <div className="text-2xl">🇪🇸</div>
            <div className="flex-1">
              <p className="font-semibold text-heading group-hover:text-white">CV en Español</p>
              <p className="text-sm text-muted group-hover:text-gray-200">Descargar CV en Español</p>
            </div>
            <div className="text-xl">↓</div>
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2 border border-subtle text-body rounded-lg hover:bg-secondary hover:text-heading transition-colors"
        >
          {t('resume.close')}
        </button>
      </div>
    </>
  )
}
