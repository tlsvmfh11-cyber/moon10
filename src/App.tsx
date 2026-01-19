import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import FAQ from './components/sections/FAQ';
import Structure from './components/sections/Structure';
import System from './components/sections/System';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import { useProtection } from './hooks/use-protection';
import { Phone, MessageSquare, Send } from 'lucide-react';

function App() {
  useProtection();

  return (
    <div className="bg-guide-bg min-h-screen text-guide-text font-sans selection:bg-guide-accent selection:text-black">
      <Navbar />

              <main>
                <Hero />
                <Intro />
                <FAQ />
                <Structure />
                <System />
                <Pricing />        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* Mobile Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-guide-text/10 bg-guide-bg/95 backdrop-blur-md">
        <a
          href="tel:01023033778"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white font-bold text-xs active:bg-white/10 transition-colors"
        >
          <Phone size={20} className="text-guide-accent" />
          전화
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white font-bold text-xs active:bg-white/10 transition-colors"
        >
          <MessageSquare size={20} className="text-white" />
          문자
        </a>
        <a
          href="https://t.me/hscompanyshs"
          target="_blank"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white font-bold text-xs active:bg-white/10 transition-colors"
        >
          <Send size={20} className="text-[#0088cc]" />
          텔레그램
        </a>
      </div>
    </div>
  );
}

export default App;
