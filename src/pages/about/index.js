import Footer from '@/component/module/Footer'
import Navbar from '@/component/module/Navbar'

import HeroAbout from '@/component/template/about/HeroAbout'
import Mission from '@/component/template/about/Mission'
import Specialized from '@/component/template/about/Specialized'
import TimeLines from '@/component/template/about/TimeLines'

function AboutPage() {
  return (
    <>
      <Navbar/>
      <HeroAbout/>
     
      <TimeLines/>
      <Specialized/>
      <Mission/>
      <Footer/>
    </>
  )
}

export default AboutPage
