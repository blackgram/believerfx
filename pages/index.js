import {CTA, Hero, HowSection, Provide, Navbar, Testimonials, PlanSection, PayMethods, Footer} from '../components'

const Home = () => {
  return (
    <div className='font-poppins'>
      <Navbar />
      <Hero />
      <HowSection />
      <Provide />
      <CTA />
      <Testimonials />
      <PlanSection />
      <PayMethods />
      <Footer />
    </div>
  )
}

export default Home