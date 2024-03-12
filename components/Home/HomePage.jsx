import React from 'react'
import {CTA, Hero, Header, HowSection, Provide, Navbar, Testimonials, PlanSection, PayMethods, Footer} from './index'


const HomePage = () => {
  return (
    <div>
      <Hero />
      <HowSection />
      <Provide />
      <CTA />
      <Testimonials />
      <PlanSection />
      <PayMethods />
    </div>
  )
}

export default HomePage