import Image from 'next/image'

import heroBg from '../../../../public/hero-bg.jpg'

function Hero() {
  return (
    <div>
      <h1 className="text-7xl font-title">THIS IS THE HERO</h1>
      <Image src={heroBg} />
    </div>
  )
}

export default Hero
