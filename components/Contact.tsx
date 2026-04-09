'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title">{t('section.contact')}</h2>

        <div className="mb-12 flex flex-wrap gap-8 justify-center">
          <a href="email:jose.zevallos.delgadolaflor@gmail.com" className="flex items-center gap-3 text-body hover:text-accent transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              ✉️
            </div>
            <div>
              <p className="text-sm text-muted">Email</p>
              <p className="font-semibold">jose.zevallos.delgadolaflor@gmail.com</p>
            </div>
          </a>

          <a href="tel:+12368869432" className="flex items-center gap-3 text-body hover:text-accent transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              📱
            </div>
            <div>
              <p className="text-sm text-muted">Phone</p>
              <p className="font-semibold">+1 (236) 886-9432</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/jose-gabriel-zevallos-delgado-de-la-flor-a82307250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-body hover:text-accent transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              💼
            </div>
            <div>
              <p className="text-sm text-muted">LinkedIn</p>
              <p className="font-semibold">Connect with me</p>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg border border-accent/20">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-body mb-2">
              {t('form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2 text-heading placeholder-subtle focus:outline-none focus:border-accent transition-colors"
              placeholder={t('form.name')}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-body mb-2">
              {t('form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2 text-heading placeholder-subtle focus:outline-none focus:border-accent transition-colors"
              placeholder={t('form.email')}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-body mb-2">
              {t('form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-primary border border-accent/30 rounded-lg px-4 py-2 text-heading placeholder-subtle focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder={t('form.message')}
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            {t('form.send')}
          </button>

          {submitted && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
              {t('form.success')}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
