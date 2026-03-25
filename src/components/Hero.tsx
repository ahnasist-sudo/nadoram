import { motion } from "motion/react";
import { Calendar, MapPin, Clock } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  date: string;
  time: string;
}

export default function Hero({ title, subtitle, date, time }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-primary/10 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-12 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-h-[40vh]">
            <img 
              src="https://www.google.com/search?q=%EC%95%A0%EC%A4%91%EB%B3%B5%EC%A7%80%EC%9E%AC%EB%8B%A8&sca_esv=4b9c4fb793c57767&udm=2&biw=1239&bih=639&sxsrf=ANbL-n7mp2XnaPP-Z9h68pg_7RNfeF-CIg%3A1774408394309&ei=ylLDafbEEpnE1e8Pu96VwAE&ved=0ahUKEwj20Z2wirqTAxUZYvUHHTtvBRgQ4dUDCBI&uact=5&oq=%EC%95%A0%EC%A4%91%EB%B3%B5%EC%A7%80%EC%9E%AC%EB%8B%A8&gs_lp=Egtnd3Mtd2l6LWltZyIS7JWg7KSR67O17KeA7J6s64uoSL4eUOEFWN8dcAt4AJABAZgBhwGgAdwPqgEEMC4xOLgBA8gBAPgBAZgCEKACrweoAgjCAgUQABiABMICBhAAGAgYHsICCxAAGIAEGLEDGIMBwgIHEAAYgAQYCsICCBAAGIAEGLEDwgIEEAAYA8ICChAjGMkCGOoCGCeYAxOIBgGSBwM5LjegB9YssgcDMC43uAfNBsIHBjItNS4xMcgHlwGACAE&sclient=gws-wiz-img#sv=CAMSVhoyKhBlLUtpZS1kRW5jRlJySmxNMg5LaWUtZEVuY0ZSckpsTToOOGFCajZIczhYRkMwSk0gBCocCgZtb3NhaWMSEGUtS2llLWRFbmNGUnJKbE0YADABGAcgsrqrtwRKCBABGAEgASgB" 
              alt="애중복지재단 전경" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-primary font-medium tracking-[0.3em] uppercase mb-4 block">
            Invitation
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
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
            <span className="text-lg font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-primary w-6 h-6" />
            <span className="text-lg font-medium">{time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary w-6 h-6" />
            <span className="text-lg font-medium">애중복지재단</span>
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
