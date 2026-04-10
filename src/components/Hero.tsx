import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  image?: string;
}

export default function Hero({ title, subtitle, date, time }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-background">
      {/* Decorative Floral Branches */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left - Cherry Blossom Branch (벚꽃 나뭇가지) */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full">
            {/* Main Branch */}
            <path 
              d="M0,0 Q100,50 250,150 T400,200" 
              fill="none" 
              stroke="#5D4037" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            {/* Sub Branches */}
            <path d="M100,50 Q150,20 200,30" fill="none" stroke="#5D4037" strokeWidth="2" />
            <path d="M200,120 Q250,80 300,100" fill="none" stroke="#5D4037" strokeWidth="2" />
            
            {/* Cherry Blossoms */}
            {[
              {x: 120, y: 60, s: 15}, {x: 180, y: 40, s: 12}, {x: 250, y: 150, s: 18},
              {x: 320, y: 110, s: 14}, {x: 380, y: 190, s: 16}, {x: 220, y: 100, s: 10},
              {x: 150, y: 80, s: 12}, {x: 280, y: 130, s: 14}, {x: 410, y: 210, s: 12}
            ].map((f, i) => (
              <g key={`cherry-${i}`} transform={`translate(${f.x}, ${f.y})`}>
                {[0, 72, 144, 216, 288].map(a => (
                  <path 
                    key={a} 
                    d="M0,0 C5,-10 15,-10 10,0 C15,10 5,10 0,0" 
                    fill="#FFB7C5" 
                    transform={`rotate(${a}) scale(${f.s/10})`}
                    className="opacity-90"
                  />
                ))}
                <circle r={f.s/5} fill="#FF69B4" opacity="0.6" />
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Right Middle - Camellia Branch (동백꽃 나뭇가지) */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0, rotate: 10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-[55%] right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full">
            {/* Main Branch - Shortened */}
            <path 
              d="M500,250 Q400,300 250,400 T200,430" 
              fill="none" 
              stroke="#3E2723" 
              strokeWidth="5" 
              strokeLinecap="round"
            />
            {/* Leaves */}
            {[
              {x: 450, y: 270, r: 20}, {x: 380, y: 320, r: -30}, {x: 300, y: 380, r: 45},
              {x: 220, y: 420, r: -15}
            ].map((l, i) => (
              <ellipse 
                key={`leaf-${i}`} 
                cx={l.x} cy={l.y} rx="15" ry="8" 
                fill="#2E7D32" 
                transform={`rotate(${l.r}, ${l.x}, ${l.y})`}
                className="opacity-80"
              />
            ))}
            
            {/* Camellia Flowers */}
            {[
              {x: 420, y: 290, s: 25}, {x: 320, y: 370, s: 30}, {x: 200, y: 430, s: 22}
            ].map((f, i) => (
              <g key={`camellia-${f.x}-${i}`} transform={`translate(${f.x}, ${f.y})`}>
                <circle r={f.s} fill="#E30B5D" />
                {[0, 60, 120, 180, 240, 300].map(a => (
                  <ellipse 
                    key={a} 
                    rx={f.s/2} ry={f.s/1.2} 
                    fill="#C41E3A" 
                    transform={`rotate(${a}) translate(0, ${-f.s/2})`} 
                  />
                ))}
                <circle r={f.s/3} fill="#FFD700" />
              </g>
            ))}
          </svg>
        </motion.div>

        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-background opacity-60" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-background opacity-80" />
        
        {/* Floating Petals */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + "%", 
              y: -20,
              rotate: 0 
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: "110vh",
              x: (Math.random() * 100 - 50) + "vw",
              rotate: 360
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-4 h-4 bg-pink-200/40 rounded-full blur-[1px]"
            style={{
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[#ffa000] font-medium tracking-[0.3em] uppercase mb-4 block">
            Invitation
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-[#2D2D2D]">
            {title.includes("나도람") ? (
              <>
                <span className="text-[#ffce00]">나도람</span>
                {title.replace("나도람", "")}
              </>
            ) : title}
          </h1>
          <p className="text-xl md:text-2xl text-[#5D5D5D] mb-12 max-w-2xl mx-auto font-light leading-relaxed whitespace-pre-line">
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
            <Calendar className="text-[#ffce00] w-6 h-6" />
            <span className="text-lg font-medium text-[#2D2D2D]">{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-[#ffce00] w-6 h-6" />
            <span className="text-lg font-medium text-[#2D2D2D]">{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#ffce00] w-6 h-6" />
            <span className="text-lg font-medium text-[#2D2D2D]">애중복지재단</span>
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
