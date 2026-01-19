import { motion } from 'framer-motion';

export default function Structure() {
  return (
    <section className="py-24 bg-guide-bg border-y border-white/5 relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none">
        HYPER PUBLIC
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="text-guide-accent font-bold tracking-widest text-sm mb-4 block uppercase">Structure</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
                강남 달토 하이퍼블릭은<br />
                <span className="text-guide-text/80">이런 방식입니다</span>
            </h2>

            <div className="bg-guide-card/80 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-guide-accent rounded-full"></span>
                            압도적인 출근율
                        </h3>
                        <p className="text-guide-text/70 leading-relaxed font-light break-keep">
                            하루 평균 <strong className="text-white">150명~200명</strong> 수준의 출근율을 유지합니다. 
                            룸 개수가 많아 손님이 몰리는 시간대에도 선택 폭이 줄어들지 않습니다.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-guide-accent rounded-full"></span>
                            합리적인 기준
                        </h3>
                        <p className="text-guide-text/70 leading-relaxed font-light break-keep">
                            텐이나 쩜오처럼 처음부터 비용 부담이 큰 구조는 아니지만, 그렇다고 기준이 낮은 업종도 아닙니다.
                        </p>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                    <p className="text-lg text-white font-medium">
                        "처음인데 너무 부담은 싫다"<br className="md:hidden" /> 
                        <span className="text-guide-text/60 mx-2">|</span> 
                        "그래도 어느 정도는 보고 싶다"
                    </p>
                    <p className="text-guide-accent mt-2">이런 분들한테 딱 맞는 구조입니다.</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
