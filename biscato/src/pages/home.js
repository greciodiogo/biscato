import React from 'react'
import { Footer } from '../components'
import { About, Header, Services } from '../landing/components'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Homepage
