import { motion } from "motion/react";
import { ScheduleItem } from "../types";

interface ScheduleProps {
  items: ScheduleItem[];
}

export default function Schedule({ items }: ScheduleProps) {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">행사 일정</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-8 mb-12 last:mb-0 relative"
            >
              {/* Timeline Line */}
              {index !== items.length - 1 && (
                <div className="absolute left-[2.45rem] top-10 bottom-[-3rem] w-[1px] bg-primary/20 hidden md:block" />
              )}

              <div className="flex-shrink-0 w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center bg-background z-10">
                <span className="text-primary font-bold text-sm">{item.time}</span>
              </div>

              <div className="flex-grow pt-4">
                <h3 className="text-2xl font-bold mb-2 text-[#8b7355] tracking-tight">
                  {item.title}
                </h3>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-grow order-2 md:order-1">
                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.image && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="flex-shrink-0 order-1 md:order-2 w-full md:w-80 aspect-[4/3] md:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
