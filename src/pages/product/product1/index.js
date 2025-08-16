import Navbar from '@/component/module/Navbar'
import Product from '@/component/template/product/product1/Product'
import Parts from "@/component/template/product/product1/Parts"
import Option from '@/component/template/product/product1/Option'
import Footer from '@/component/module/Footer'
import InfoSection from '@/component/template/product/product1/InfoSection'

function product1() {
  return (
    <>
    <Navbar/>
    <Product/>
    <Parts/>
    <Option/>
    <InfoSection/>
    <Footer/>
    
    </>
  )
}

export default product1