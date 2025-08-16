import Footer from '@/component/module/Footer'
import Navbar from '@/component/module/Navbar'
import About from '@/component/template/About'
import Hero from '@/component/template/Hero'
import ProductCard from '@/component/template/ProductCard'
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
    <ProductCard/>
    <Technologies/>
    <TechSlider/>
    <Footer/>
    </>
  )
}

export default index