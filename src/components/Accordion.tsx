'use client'

import { useLocale, useTranslations } from 'next-intl'
import {
  Accordion as AccordionCN,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export function Accordion() {
  const t = useTranslations('aboutProject')
  const locale = useLocale()

  return (
    <AccordionCN type="single" collapsible className="mx-auto max-w-4xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>{t(`summary.${locale}`)}</AccordionTrigger>
        <AccordionContent>
          <motion.div
            className="mt-3 space-y-4 text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{t(`content.p1.${locale}`)}</p>
            <p>{t(`content.p2.${locale}`)}</p>
            <p>{t(`content.p3.${locale}`)}</p>
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </AccordionCN>
  )
}
