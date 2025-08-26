import Footer from '@/component/module/Footer';
import Navbar from '@/component/module/Navbar';
import DevicesSection from '@/component/template/product/product3/DevicesSection';
import IranPlatform from '@/component/template/product/product3/IranPlatform';
import IranPlatformData from '@/component/template/product/product3/IranPlatformData';
import OperationalFeaturesSection from '@/component/template/product/product3/OperationalFeatureItem';
import IranApplications from '@/component/template/product/product3/IranApplications';

function ProductPage() {
  return (
    <>
      <Navbar />
      <IranPlatform />
      <IranPlatformData />
      <DevicesSection />
      <OperationalFeaturesSection />
      <IranApplications />
      <Footer />
    </>
  );
}

export default ProductPage;