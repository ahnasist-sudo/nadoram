import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  image?: string;
}

export default function Hero({ title, subtitle, date, time, image }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image || "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920&h=1080"} 
          alt="배경" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-primary/20 to-transparent opacity-50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-medium tracking-[0.3em] uppercase mb-4 block">
            Invitation
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3">
            <Calendar className="text-primary w-6 h-6" />
            <span className="text-lg font-medium text-white">{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary w-6 h-6" />
            <span className="text-lg font-medium text-white">{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary w-6 h-6" />
            <span className="text-lg font-medium text-white">애중복지재단</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
