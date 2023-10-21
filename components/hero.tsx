import Image from 'next/image'

import PrabahaLogo from '@/images/Prabaha-yellow-green-logo-16-9.png'

export default function Hero() {
  return (
    <section>
      <Image src={PrabahaLogo} alt="Prabaha" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      </div>
    </section>
  )
}
