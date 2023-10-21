export const metadata = {
  title: 'Home - Prabaha',
  description: 'Nurturing the flow of Canine Potential',
}

import Features from '@/components/features'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
