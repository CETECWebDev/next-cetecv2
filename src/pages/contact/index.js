import Footer from '@/component/module/Footer'
import Navbar from '@/component/module/Navbar'
import ContactPage from '@/component/template/contact/ContactPage'


function index() {
  return (
    <>
    <Navbar/>
        <ContactPage/>
        <Footer/>
    </>
  )
}

export default index