/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useLocale, useTranslations } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import clsx from 'clsx'
import { getPathname, redirect, usePathname } from '@/i18n/routing'
import { motion } from 'framer-motion'

export function Toggle() {
  const t = useTranslations('languages')
  const locale = useLocale()
  const pathname = usePathname()

  const handleChange = (value: string) => {
    const newPath = getPathname({ href: pathname as any, locale }).replace(
      locale,
      '',
    )
    redirect({ href: newPath as any, locale: value })
  }

  const contentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      className="mb-10 flex justify-end sm:mx-auto sm:max-w-1/2"
    >
      <Select defaultValue={locale} onValueChange={handleChange}>
        <SelectTrigger className="flex-1 rounded">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ar" className={clsx({ hidden: locale === 'ar' })}>
            {t(`${locale}.ar`)}
          </SelectItem>
          <SelectItem value="de" className={clsx({ hidden: locale === 'de' })}>
            {t(`${locale}.de`)}
          </SelectItem>
          <SelectItem value="en" className={clsx({ hidden: locale === 'en' })}>
            {t(`${locale}.en`)}
          </SelectItem>
          <SelectItem value="es" className={clsx({ hidden: locale === 'es' })}>
            {t(`${locale}.es`)}
          </SelectItem>
          <SelectItem value="fr" className={clsx({ hidden: locale === 'fr' })}>
            {t(`${locale}.fr`)}
          </SelectItem>
          <SelectItem value="it" className={clsx({ hidden: locale === 'it' })}>
            {t(`${locale}.it`)}
          </SelectItem>
          <SelectItem value="ja" className={clsx({ hidden: locale === 'ja' })}>
            {t(`${locale}.ja`)}
          </SelectItem>
          <SelectItem value="pt" className={clsx({ hidden: locale === 'pt' })}>
            {t(`${locale}.pt`)}
          </SelectItem>
          <SelectItem value="ru" className={clsx({ hidden: locale === 'ru' })}>
            {t(`${locale}.ru`)}
          </SelectItem>
          <SelectItem value="zh" className={clsx({ hidden: locale === 'zh' })}>
            {t(`${locale}.zh`)}
          </SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  )
}
