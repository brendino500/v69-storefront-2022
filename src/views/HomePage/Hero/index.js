import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'
import Button from '@/components/Button'

import heroBg from '../../../../public/hero-bg.jpg'
import logoWhite from '../../../../public/logo-white.png'

function HeroSection() {
  return (
    <SectionWrapper id="hero" className="h-[600px] bg-black">
      <Image
        src={heroBg}
        layout="fill"
        objectFit="cover"
        objectPosition="85%"
      />
      <div className="absolute w-full h-full flex items-center justify-center max-w-screen-3xl">
        <div className="flex items-center justify-center flex-col absolute right-14">
          <Image src={logoWhite} height={200} width={200} />
          <Button href="shop" className="w-60 my-10">
            Shop
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection
