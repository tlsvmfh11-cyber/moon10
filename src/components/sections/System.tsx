import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "문의 단계",
        desc: "처음 문의할 때 가장 중요한 건 말을 잘하는 게 아니라 솔직하게 말하는 것입니다. 혼자 방문인지, 처음인지, 조용한 게 좋은지. 이걸 말해주셔야 강남 달토 시스템이 맞게 돌아갑니다."
    },
    {
        num: "02",
        title: "도착 후 입실",
        desc: "도착하면 괜히 홀에서 오래 기다리게 하지 않습니다. 처음 방문자일수록 이 시간이 길어지면 긴장이 커집니다."
    },
    {
        num: "03",
        title: "설명 먼저",
        desc: "자리에 앉자마자 진행하지 않습니다. 이용 시간, 주대 구조, 초이스 방식을 먼저 설명합니다. 이 설명을 듣고 나서 “아, 이런 구조구나” 하고 이해가 되면 그때부터는 훨씬 편해집니다."
    },
    {
        num: "04",
        title: "초이스",
        desc: "출근 인원이 많다 보니 처음 방문자도 여러 조를 충분히 보고 선택할 수 있습니다. 담당이 옆에서 “이건 아니실 것 같다”, “이 조 한 번만 더 보고 가자” 이렇게 정리해줍니다."
    }
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-guide-bg relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16">
            {/* Sticky Title for Desktop */}
            <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight break-keep">
                    처음 방문자가<br />
                    실제로 겪는<br />
                    <span className="text-guide-accent">이용 흐름</span>
                </h2>
                <p className="text-guide-text/60 text-lg mb-10">
                    4단계 프로세스로<br />
                    미리 경험해보세요.
                </p>
                <div className="hidden md:block w-full aspect-square bg-[url('/images/system.jpg')] bg-cover bg-center rounded-2xl opacity-50 grayscale" />
            </div>

            {/* Steps Scroll */}
            <div className="md:w-2/3 space-y-24 md:pt-20">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="relative pl-8 md:pl-16 border-l border-guide-text/10"
                    >
                        {/* Number */}
                        <div className="absolute -left-[3rem] top-0 text-8xl font-bold text-white/30 select-none z-0 pointer-events-none">
                            {step.num}
                        </div>
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-guide-accent rounded-full ring-4 ring-guide-bg z-10" />

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-6">{step.title}</h3>
                            <p className="text-xl text-guide-text/80 leading-relaxed font-light break-keep">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}