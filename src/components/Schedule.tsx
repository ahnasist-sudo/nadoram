import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScheduleItem } from "../types";
import { X, ZoomIn } from "lucide-react";

interface ScheduleProps {
  items: ScheduleItem[];
}

export default function Schedule({ items }: ScheduleProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="schedule" className="py-24 bg-muted/30">
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
                <h3 className="text-2xl font-bold mb-2 text-primary tracking-tight">
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
                      className="flex-shrink-0 order-1 md:order-2 w-full md:w-64 aspect-video md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group cursor-pointer"
                      onClick={() => setSelectedImage(item.image || null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <ZoomIn className="text-white w-8 h-8 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
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

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
