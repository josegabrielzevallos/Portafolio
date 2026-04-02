// @ts-nocheck
import './globals.css'
import type { Metadata } from 'next'
import { LanguageProvider } from './LanguageContext'

export const metadata: Metadata = {
  title: 'Jose Gabriel Zevallos - Software Engineer',
  description: 'Web & ERP Developer | React, Django, Python | Vancouver, BC',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-gray-100">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
