import type { Metadata } from 'next'
import { Geist, Geist_Mono as GM } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { AppProvider } from './appProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GM({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sem fronteiras',
  description:
    'Aplicação de internacionalização em uma plataforma baseada em Next.js. utilizando Next-intl',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppProvider
          ipInfoToken={process.env.IPINFO_TOKEN!}
          appToken={process.env.APP_TOKEN!}
          appName={process.env.APP_NAME!}
          appApiUrl={process.env.APP_API_URL!}
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </AppProvider>
      </body>
    </html>
  )
}
