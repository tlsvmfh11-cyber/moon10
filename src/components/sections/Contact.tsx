import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="contact" ref={ref} className="py-32 bg-guide-bg relative overflow-hidden">
        {/* Parallax BG */}
        <div className="absolute inset-0 z-0 h-[120%] -top-[10%] opacity-30">
            <motion.div style={{ y }} className="w-full h-full">
                <img src="/images/contact.jpg" alt="Contact" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-guide-bg/80" />
        </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">픽업 서비스 · 예약 안내</h2>
            
            <p className="text-xl text-guide-text/80 mb-12 font-light leading-relaxed">
                처음 방문하시는 분들도 예약 문의만 주셔도 됩니다.<br />
                혼자 방문 / 첫 방문 / 대략적인 시간. 이 정도만 알려주세요.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <a href="tel:01023033778" className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-guide-bg font-bold hover:bg-guide-text transition-colors rounded-full shadow-lg min-w-[200px]">
                    <Phone size={20} /> 전화 문의
                </a>
                <a href="sms:01023033778" className="flex items-center justify-center gap-3 px-10 py-5 bg-guide-card text-white font-bold hover:bg-guide-card/80 transition-colors rounded-full border border-white/10 min-w-[200px]">
                    <MessageSquare size={20} /> 문자 문의
                </a>
                <a href="https://t.me/hscompanyshs" target="_blank" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#0088cc] text-white font-bold hover:bg-[#0077b3] transition-colors rounded-full min-w-[200px]">
                    <Send size={20} /> 텔레그램
                </a>
            </div>

            <div className="border-t border-white/10 pt-10">
                <p className="text-guide-text/60 mb-4">
                    강남 달토 하이퍼블릭은 처음부터 익숙한 사람만을 위한 곳은 아닙니다.<br />
                    처음이라서 불안한 분들이 조금이라도 편해질 수 있도록 운영 방식을 맞춰온 곳입니다.
                </p>
                <p className="text-guide-accent font-bold">
                    달토를 가볼까 말까 고민 중이라면 일단 문의부터 해보셔도 됩니다.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
