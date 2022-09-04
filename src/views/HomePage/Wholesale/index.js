import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'
import Button from '@/components/Button'
import Title from '@/components/Title'

import coffeeBg from '../../../../public/espresso-jug.jpg'
import data from '@/data/HomePage/WholesaleSection.json'

function WholesaleSection() {
  const { title, content, cta } = data

  return (
    <SectionWrapper
      id="wholesale"
      className="h-[600px] bg-black flex items-center justify-center w-full"
    >
      <div className="absolute h-[600px] w-full max-w-[1440px] flex items-center justify-center mx-8">
        <Image
          src={coffeeBg}
          layout="fill"
          objectFit="contain"
          objectPosition="100% center"
        />
      </div>
      <div className="absolute max-w-[1440px]">
        <div className="flex items-center justify-center flex-col w-1/2 mx-8 h-[600px]">
          <Title element="h2" className="text-white">
            {title}
          </Title>
          <p className="font-body my-8 text-justify text-white">{content}</p>
          <Button secondary="true">{cta}</Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WholesaleSection
