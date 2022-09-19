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
      className="min-h-[650px] bg-black flex items-center justify-center w-full"
    >
      <Image
        src={coffeeBg}
        layout="fill"
        className="brightness-50 object-cover object-center lg:object-contain lg:brightness-100 lg:object-right"
      />
      <div className="absolute max-w-[1440px] w-full my-8 mx-10">
        <div className="flex items-center justify-center flex-col lg:w-1/2 mx-10">
          <Title element="h2" className="text-white">
            {title}
          </Title>
          <p className="font-body my-8 text-justify text-white">{content}</p>
          <Button secondary="true" className="w-[200px]" href="wholesale">
            {cta}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WholesaleSection
