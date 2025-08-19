import Footer from '@/component/module/Footer'
import Navbar from '@/component/module/Navbar'
import DevicesSection from '@/component/template/product/product3/DevicesSection'
import IranPlatform from '@/component/template/product/product3/IranPlatform'
import IranPlatformData from '@/component/template/product/product3/IranPlatformData'


function index() {
  return (
    <>
    <Navbar/>
    <IranPlatform/>
    <IranPlatformData/>
    <DevicesSection/>
    <Footer/>
    </>
  )
}

export default index