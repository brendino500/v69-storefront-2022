import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'
import Title from '@/components/Title'
import Button from '@/components/Button'

import coffeeImage from '../../../../public/coffee-cup.jpg'

function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="h-[600px] w-full flex items-center justify-center"
    >
      <div className="m-8 flex">
        <Image src={coffeeImage} alt="Coffee splash" height={400} width={400} />
        <div className="flex items-center justify-content flex-col w-[600px] mx-10">
          <Title element="h2" className="">
            Welcome to V69
          </Title>
          <p className="text-body my-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex items-start justify-start flex-row">
            <Button secondary className="w-[200px] mx-4 hover:duration-1000">
              About
            </Button>
            <Button secondary className="w-[200px] mx-4 hover:duration-1000">
              Visit
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
