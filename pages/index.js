import TradingViewTickerTape from '@/components/TradingViewTickerTape'
import {CTA, Hero, Header, HowSection, Provide, Navbar, Testimonials, PlanSection, PayMethods, Footer} from '../components'

const Home = () => {
  return (
    <div className='font-poppins overflow-hidden bg-black'>
      <Header />
      <Hero />
      <HowSection />
      <Provide />
      <CTA />
      <Testimonials />
      <PlanSection />
      <PayMethods />
      <Footer />
      <TradingViewTickerTape />
    </div>
  )
}

export default Home