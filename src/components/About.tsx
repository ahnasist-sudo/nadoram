import { motion } from "motion/react";

interface AboutProps {
  text: string;
}

export default function About({ text }: AboutProps) {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              나도람 축제 <span className="text-[#ffce00]">소개</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {text}
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-muted/20 rounded-2xl border border-white/5">
                <h4 className="text-[#ffce00] font-bold text-lg mb-2">나눔</h4>
                <p className="text-sm text-muted-foreground">마음을 나누고 기쁨을 더하는 시간</p>
              </div>
              <div className="p-8 bg-muted/20 rounded-2xl border border-white/5">
                <h4 className="text-[#ffce00] font-bold text-lg mb-2">도전</h4>
                <p className="text-sm text-muted-foreground">새로운 가능성을 향한 힘찬 발걸음</p>
              </div>
              <div className="p-8 bg-muted/20 rounded-2xl border border-white/5">
                <h4 className="text-[#ffce00] font-bold text-lg mb-2">함께</h4>
                <p className="text-sm text-muted-foreground">지역사회와 하나되는 소중한 인연</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
