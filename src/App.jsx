import Header from "./components/Header";
// import MediaUploader from "./components/MediaUploader";
import ProductShowcase from "./components/ProductShowcase";
import HeroSection from "./components/HeroSection";
import HealthTipsSection from "./components/HealthTipsSection";
import LatestCollection from "./components/LatestCollection";
import Footer from "./components/Footer";
import VideoWalkthrough from "./components/VideoWalkthrough";
// import FeaturesSection from "./components/FeaturesSection";
import UseCaseSection from "./components/UseCaseSection";
import ShowcaseSection from "./components/ShowcaseSection";
import HowItWorks from "./components/HowItWorks";
import SocialSection from "./components/SocialSection";
import LiveExampleEmbed from "./components/LiveExampleEmbed";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VideoWalkthrough />
      {/* <MediaUploader /> */}
      <FeaturesSection />
      <UseCaseSection />
      <ShowcaseSection />
      <HowItWorks />
      <SocialSection />
      <ProductShowcase />
      <LatestCollection />
      <HealthTipsSection />
      <LiveExampleEmbed />
      <Footer />
    </div>
  );
}

export default App;
