import Footer from '@/component/module/Footer'
import Navbar from '@/component/module/Navbar'
import About from '@/component/template/About'

import Hero from '@/component/template/Hero'
import Products from '@/component/template/Products'
import Services from '@/component/template/Services'
import TechSlider from '@/component/template/Slider'
import Technologies from '@/component/template/Technologies'
import React from 'react'
import { BsSliders } from 'react-icons/bs'

function index() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Products/>
    <Technologies/>
    <TechSlider/>
    <Footer/>
    </>
  )
}

export default index