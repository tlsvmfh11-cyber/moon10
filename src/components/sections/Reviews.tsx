import { motion } from 'framer-motion';

const reviews = [
    "달토가 처음이라 긴장했는데 설명을 먼저 해줘서 마음이 풀렸어요.",
    "달리는토끼가 이런 구조인지 몰랐는데 직접 겪어보니 이해됐습니다.",
    "혼자 갔는데도 어색하지 않았고, 진행이 자연스러웠습니다.",
    "처음인데도 부담 없이 나올 수 있었던 게 제일 좋았습니다."
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-guide-bg border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">첫 방문자 기준 실제 후기</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((text, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-guide-card p-8 rounded-xl border border-white/5 relative"
                >
                    <div className="absolute top-4 left-4 text-guide-accent/20 text-4xl font-serif">"</div>
                    <p className="text-guide-text/90 font-medium leading-relaxed relative z-10 pl-4">{text}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
