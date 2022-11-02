import React from 'react'
import Slider from '../components/slider'
import { CaroImages } from '../components/slideData'
import Services from '../components/services'
import About from '../components/about'
import Clients from '../components/clients'
import Contact from '../components/contact'
import Footer from "../components/footer"
const Home = () => {
  return (
    <>
    <div>
        <Slider 
        images={CaroImages}
        />
       
        <Services />
        <About />
        <Clients />
        <Contact />
        <Footer />
    </div>
        
    </>
  )
}

export default Home