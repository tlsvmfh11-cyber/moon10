import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-guide-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-guide-accent/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-guide-accent/20 rounded-full blur-2xl opacity-20" />
                    <img 
                        src="/images/pricing.jpg" 
                        alt="Pricing" 
                        className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" 
                    />
                </motion.div>
            </div>

            <div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight break-keep">
                        처음 방문자가<br />
                        <span className="text-guide-highlight">가격을 제일 걱정하는 이유</span>
                    </h2>
                    
                    <div className="space-y-8 text-lg text-guide-text/80 leading-relaxed font-light break-keep">
                        <p>
                            처음 오시는 분들은 가격을 더 크게 느낍니다. 
                            <span className="text-white font-bold bg-white/10 px-2 py-1 mx-1 rounded">기준이 없기 때문입니다.</span>
                        </p>
                        <p>
                            그래서 강남 달토에서는 가격을 애매하게 말하지 않습니다.
                        </p>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 bg-guide-bg/50 p-4 rounded-xl border border-white/5">
                                <span className="text-guide-accent font-bold">01</span>
                                <span>오늘 기준</span>
                            </div>
                            <div className="flex items-center gap-4 bg-guide-bg/50 p-4 rounded-xl border border-white/5">
                                <span className="text-guide-accent font-bold">02</span>
                                <span>이 시간대 기준</span>
                            </div>
                            <div className="flex items-center gap-4 bg-guide-bg/50 p-4 rounded-xl border border-white/5">
                                <span className="text-guide-accent font-bold">03</span>
                                <span>이 인원 기준</span>
                            </div>
                        </div>

                        <p>
                            이렇게 설명하고 그 기준에서 벗어나지 않게 진행합니다.
                            달토, 달리는토끼, 런닝레빗 시절부터 이 방식은 유지해온 기준입니다.
                        </p>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}