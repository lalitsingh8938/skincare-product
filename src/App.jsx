import Header from "./components/Header";
import MediaUploader from "./components/MediaUploader";
import ProductShowcase from "./components/ProductShowcase";
import HeroSection from "./components/HeroSection";
import HealthTipsSection from "./components/HealthTipsSection";
import LatestCollection from "./components/LatestCollection";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <MediaUploader /> */}
      <ProductShowcase />
      <LatestCollection />
      <HealthTipsSection />
      <Footer />
    </div>
  );
}

export default App;
