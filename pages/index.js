import TradingViewTickerTape from '@/components/TradingViewTickerTape'
import {CTA, Hero, Header, HowSection, Provide, Navbar, Testimonials, PlanSection, PayMethods, Footer} from '../components/Home'

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
      <Footer cta={true} />
      <TradingViewTickerTape display='down' />
    </div>
  )
}

export default Home