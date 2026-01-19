import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Parallax for Text & Image moving in opposite directions
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="intro" ref={ref} className="min-h-screen flex items-center bg-guide-bg relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Layout: Image Top-Right, Text Bottom-Left Overlapping */}
        <div className="flex flex-col md:block relative h-full">
            
            {/* Image Section */}
            <motion.div 
                style={{ y: yImg }}
                className="md:absolute md:right-0 md:top-0 w-full md:w-[60%] aspect-[4/3] md:h-[80vh] z-0"
            >
                <img 
                    src="/images/intro.jpg" 
                    alt="Intro" 
                    className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 opacity-60 md:opacity-100" 
                />
            </motion.div>

            {/* Text Section (Overlapping Card) */}
            <motion.div 
                style={{ y: yText }}
                className="bg-guide-card/95 backdrop-blur-xl p-8 md:p-16 md:w-[50%] md:mt-[20vh] z-10 shadow-2xl border-l-4 border-guide-accent relative"
            >
                <span className="text-guide-accent font-bold tracking-widest text-xs mb-6 block uppercase">Why Dalto?</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight break-keep">
                    왜 “처음 가기 전에<br />
                    제일 검색되는 곳”일까요?
                </h2>
                
                <div className="space-y-8 text-guide-text/80 leading-relaxed font-light text-lg break-keep">
                    <p>
                        강남 달토를 검색하는 분들 대부분은 이미 마음을 100% 정하고 들어오는 경우가 아닙니다.
                    </p>
                    <ul className="space-y-3 font-medium text-white">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-guide-accent"></span>
                            달토를 가도 괜찮은지
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-guide-accent"></span>
                            설명이랑 실제가 다른 건 아닌지
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-guide-accent"></span>
                            혼자 가도 어색하지 않은지
                        </li>
                    </ul>
                    <p>
                        강남 달토 하이퍼블릭은 이런 <strong>‘가기 전 단계의 불안’</strong>을 기준으로 운영 방식을 만들어온 곳입니다. 
                        화려한 말보다 “어디서 불안해하는지”를 먼저 보는 게 첫 방문자에게는 훨씬 중요하기 때문입니다.
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}