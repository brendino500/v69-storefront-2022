import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'
import Title from '@/components/Title'
import Button from '@/components/Button'

import coffeeImage from '../../../../public/coffee-cup.jpg'
import data from '@/data/HomePage/aboutSection.json'

function AboutSection() {
  const { title, content, ctaAbout, ctaVisit } = data
  return (
    <SectionWrapper
      id="about"
      className="h-[600px] w-full flex items-center justify-center"
    >
      <div className="m-8 flex">
        <Image src={coffeeImage} alt="Coffee splash" height={400} width={400} />
        <div className="flex items-center justify-content flex-col w-[600px] mx-10">
          <Title element="h2" className="">
            {title}
          </Title>
          <p className="text-body my-8 text-justify">{content}</p>
          <div className="flex items-start justify-start flex-row">
            <Button
              secondary="true"
              className="w-[200px] mx-4 hover:duration-1000"
            >
              {ctaAbout}
            </Button>
            <Button
              secondary="true"
              className="w-[200px] mx-4 hover:duration-1000"
            >
              {ctaVisit}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
