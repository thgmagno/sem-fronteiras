import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ja', 'ru', 'ar'],
  localePrefix: 'always',
  defaultLocale: 'pt',
  pathnames: {
    '/': '/',
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
