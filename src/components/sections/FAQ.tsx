import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="py-24 bg-guide-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl font-bold text-white mb-4">처음 문의 주시는 분들한테<br />제일 많이 듣는 말</h2>
            <p className="text-guide-text/60">불안하지만 관심은 있다는 뜻입니다.</p>
        </motion.div>

        <div className="grid gap-4">
            {[
                "달토가 처음이라 잘 몰라서요.",
                "룸에와서 괜히 민폐되는 건 아닌가요?",
                "강남 룸에 대해 설명 좀 자세히 듣고 싶어요."
            ].map((text, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-guide-bg p-6 rounded-xl flex items-center gap-4 shadow-sm"
                >
                    <MessageCircle className="text-guide-accent shrink-0" />
                    <p className="text-guide-text font-medium">"{text}"</p>
                </motion.div>
            ))}
        </div>

        <div className="mt-12 text-center bg-guide-accent/10 p-8 rounded-2xl">
            <p className="text-guide-text leading-relaxed">
                그래서 강남 달토에서는 처음 문의 주신 분들일수록 더 자세하게 설명합니다.<br />
                <strong className="text-white">어떤 업종인지, 어떻게 진행되는지, 어느 정도 생각하면 되는지.</strong><br />
                이걸 안 듣고 오시면 현장에서 아무리 잘해줘도 불안은 남을 수밖에 없습니다.
            </p>
        </div>
      </div>
    </section>
  );
}
