import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'
import Button from '@/components/Button'
import Title from '@/components/Title'

import v60Img from '../../../../public/v60.jpg'
import data from '@/data/HomePage/learnSection.json'

function LearnSection() {
  const { title, content, cta } = data

  return (
    <SectionWrapper
      id="about"
      className="min-h-[650px] flex items-center justify-center"
    >
      <div className="m-8 flex">
        <div className="hidden h-[400px] w-[400px] lg:block">
          <Image src={v60Img} alt="Coffee splash" height={400} width={400} />
        </div>

        <div className="flex items-center justify-center flex-col w-full lg:w-[600px] mx-10">
          <Title element="h2">{title}</Title>
          <p className="font-body my-8 text-justify text-base">{content}</p>
          <div className="flex items-center justify-start flex-col md:flex-row">
            <Button
              href="learn"
              secondary="true"
              className="w-[200px] my-2 md:my-0 mx-4 hover:duration-1000"
            >
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default LearnSection
