import Image from 'next/image'

import SectionWrapper from '@/components/SectionWrapper'
import Button from '@/components/Button'
import Title from '@/components/Title'

import coffeeBg from '../../../../public/espresso-jug.jpg'

function WholesaleSection() {
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
            Wholesale
          </Title>
          <p className="text-body my-8 text-justify text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button secondary>shop</Button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default WholesaleSection
