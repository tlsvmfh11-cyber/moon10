import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    <HelmetProvider>
      <div className="bg-guide-bg min-h-screen text-guide-text font-sans selection:bg-guide-accent selection:text-black">
        <Helmet>
          <title>강남 달토 공식 홈페이지 예약안내 | 달리는토끼 픽업서비스 가격 후기</title>
          <meta name="description" content="강남 달토는 처음 방문하는 분들의 걱정부터 줄이는 하이퍼블릭입니다. 달리는토끼·런닝레빗 구조를 기반으로 출근율, 초이스 방식, 가격 안내까지 현장에서 실제 진행하는 흐름 그대로 설명해드립니다." />
          <meta name="keywords" content="강남달토, 달리는토끼, 런닝레빗, 강남달토예약, 강남달토가격, 강남달토후기" />
          <link rel="canonical" href="https://moon10.example.com" />
        </Helmet>

        <Navbar />

        <main>
          <Hero />
          <Intro />
          <FAQ />
          <Structure />
          <System />
          <Pricing />
          <Reviews />
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
    </HelmetProvider>
  );
}

export default App;
