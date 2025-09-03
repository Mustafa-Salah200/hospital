import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Service from './components/Service'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Service />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App