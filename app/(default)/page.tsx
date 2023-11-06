import ContactForm from '@/components/contact-us';
import Features from '@/components/features';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Zigzag from '@/components/zigzag';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <ContactForm />
    </>
  )
}
