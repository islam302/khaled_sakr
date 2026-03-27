import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AvailableBanner from './components/AvailableBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Experience />
      <Work />
      <Skills />
      <Contact />
      <Footer />
      <AvailableBanner />
    </div>
  );
}

export default App;
