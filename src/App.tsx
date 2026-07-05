import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CareerSectors } from './sections/CareerSectors';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { PlacementStats } from './sections/PlacementStats';
import { SuccessStories } from './sections/SuccessStories';
import { VideoReviews } from './sections/VideoReviews';
import { PlacementGallery } from './sections/PlacementGallery';
import { AdmissionForm } from './sections/AdmissionForm';
import { FAQ } from './sections/FAQ';
import { CTABanner } from './sections/CTABanner';

function Home() {
  return (
    <div className="min-h-screen font-sans text-text-main selection:bg-primary-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerSectors />
        <WhyChooseUs />
        <PlacementStats />
        <SuccessStories />
        <VideoReviews />
        <PlacementGallery />
        <AdmissionForm />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
