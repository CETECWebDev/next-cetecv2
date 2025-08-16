import Navbar from '@/component/module/Navbar'
import Product from '@/component/template/product/product2/Product'
import Option from '@/component/template/product/product2/Option'
import Footer from '@/component/module/Footer'
import ProductSlider from '@/component/template/product/product2/Parts'
import FeaturesSection from '@/component/template/product/product2/FeaturesSection'


function product1() {
  return (
    <>
    <Navbar/>
    <Product/>
    <ProductSlider/>
    <Option/>
    <FeaturesSection/>
    <Footer/>
    
    </>
  )
}

export default product1