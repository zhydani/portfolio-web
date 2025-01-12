import { Roboto } from 'next/font/google'
import React from 'react'

import { AppQueryClient, AppThemeProvider } from '@/components/base'
import { Footer, Header, ScrollToTop } from '@/components/layout'
import { BackPage } from '@/components/layout/BackPage'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const metadata = {
  title: 'Zhydani Reis',
  description: 'Desenvolvido por Zhydani',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo-z2.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <AppThemeProvider>
        <body
          className={roboto.className}
        >
          <AppQueryClient>
            <Header />
            <main>{children}</main>
            <BackPage />
            <Footer />
            <ScrollToTop />
          </AppQueryClient>
        </body>
      </AppThemeProvider>
    </html>
  )
}
