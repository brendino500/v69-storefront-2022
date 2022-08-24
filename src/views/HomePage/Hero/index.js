import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'

import heroBg from '../../../../public/hero-bg.jpg'

function Hero() {
  return (
    <SectionWrapper id="hero">
      <h1 className="text-7xl font-title">THIS IS THE HERO</h1>
      <Image src={heroBg} />
    </SectionWrapper>
  )
}

export default Hero
