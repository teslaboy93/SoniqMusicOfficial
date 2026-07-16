import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Experience } from "./components/Experience";
import { Personalization } from "./components/Personalization";
import { DownloadCTA } from "./components/DownloadCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { LegalPage } from "./components/LegalPage";
import { useScrollToHash } from "./hooks/useScrollToHash";

function Home() {
  useScrollToHash();
  return (
    <>
      <Hero />
      <Features />
      <Experience />
      <Personalization />
      <DownloadCTA />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<LegalPage section="privacy" />} />
        <Route path="/terms" element={<LegalPage section="terms" />} />
        <Route path="/data" element={<LegalPage section="data" />} />
        <Route path="/release-notes" element={<LegalPage section="release" />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
