'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel as CarouselCN,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const thinkers = [
  'confucius',
  'socrates',
  'albert_einstein',
  'plato',
  'william_shakespeare',
  'mahatma_gandhi',
  'leonardo_da_vinci',
] as const

export function Carousel() {
  const t = useTranslations('thinkers')
  const locale = useLocale()
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  )

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5 } },
  }

  const thinkerImages = {
    confucius: '/thinkers/confucius.jpg',
    socrates: '/thinkers/socrates.jpg',
    albert_einstein: '/thinkers/albert_einstein.jpg',
    plato: '/thinkers/plato.jpg',
    william_shakespeare: '/thinkers/william_shakespeare.jpg',
    mahatma_gandhi: '/thinkers/mahatma_gandhi.jpg',
    leonardo_da_vinci: '/thinkers/leonardo_da_vinci.jpg',
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={contentVariants}>
      <CarouselCN
        plugins={[plugin.current]}
        className="mx-auto w-full max-w-4xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {thinkers.map((thinker, index) => (
            <CarouselItem key={index}>
              <Card className="relative h-[400px] overflow-hidden sm:h-[500px] md:h-[600px]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: `url(${thinkerImages[thinker]})` }}
                />
                <CardContent className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-center gap-6 bg-black/70 p-6 text-center">
                  <h2 className="text-2xl font-bold text-slate-400 sm:text-3xl md:text-4xl lg:text-5xl">
                    {t(`${thinker}.${locale}`)}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    {t(`${thinker}.quotes.${locale}`)}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </CarouselCN>
    </motion.div>
  )
}
