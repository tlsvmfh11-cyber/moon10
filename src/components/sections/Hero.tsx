import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-guide-bg">
      {/* Background Image - Slight Zoom Effect */}
      <motion.div 
        style={{ y, scale: 1.1 }} 
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
            src="/images/hero.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover object-center brightness-[0.6]" 
        />
      </motion.div>

      {/* Content - Asymmetric Layout (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-full h-full p-6 md:p-20 flex flex-col justify-end items-start z-10">
        <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-guide-accent"></span>
                <span className="text-guide-accent font-bold uppercase tracking-widest text-sm">Official Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 break-keep">
                강남 달토<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-guide-accent to-white">공식 예약안내</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-guide-text/90 font-light max-w-xl leading-relaxed break-keep mb-12">
                처음 방문하는 분들의 걱정부터 줄이는 하이퍼블릭.<br className="hidden md:block" />
                달리는토끼·런닝레빗 구조를 기반으로<br className="hidden md:block" />
                현장에서 실제 진행하는 흐름 그대로 설명해드립니다.
            </p>

            <a 
                href="#intro" 
                className="group flex items-center gap-4 text-white font-bold text-lg hover:gap-6 transition-all"
            >
                <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-guide-bg transition-colors">
                    ↓
                </span>
                가이드 시작하기
            </a>
        </motion.div>
      </div>

      {/* Decorative Text (Vertical) */}
      <div className="absolute top-20 right-10 hidden md:block writing-vertical-rl text-white/10 font-bold text-9xl pointer-events-none select-none">
        GUIDEBOOK
      </div>
    </section>
  );
}