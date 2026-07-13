import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Experience } from "./components/Experience";
import { Personalization } from "./components/Personalization";
import { DownloadCTA } from "./components/DownloadCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Experience />
        <Personalization />
        <DownloadCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
