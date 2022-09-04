import HeroSection from './Hero'
import AboutSection from './About'
import ShopSection from './Shop'
import WholesaleSection from './Wholesale'
import LearnSection from './Learn'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <ShopSection /> */}
      <WholesaleSection />
      <LearnSection />
    </div>
  )
}

export default HomePage
