// @ts-nocheck
import './globals.css'
import type { Metadata } from 'next'
import { LanguageProvider } from './LanguageContext'
import { ThemeProvider } from './ThemeContext'

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
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="bg-primary text-body transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
