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
      id="learn"
      className="h-[600px] w-full flex items-center justify-center"
    >
      <div className="m-8 flex">
        <Image src={v60Img} alt="V60" height={400} width={400} />
        <div className="flex items-center justify-content flex-col w-[600px] mx-10">
          <Title element="h2" className="">
            {title}
          </Title>
          <p className="text-body my-8 text-justify">{content}</p>
          <div className="flex items-start justify-start flex-row">
            <Button
              secondary="true"
              className="w-[400px] mx-4 hover:duration-1000"
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
