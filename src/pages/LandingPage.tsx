import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Location from "../components/Location";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ShareButtons from "../components/ShareButtons";
import { useAppData } from "../hooks/useAppData";

export default function LandingPage() {
  const { settings, schedule } = useAppData();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${settings.title} | 애중복지재단`}
        description={settings.subtitle}
      />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Hero 
        title={settings.title}
        subtitle={settings.subtitle}
        date={settings.date}
        time="오전 10:00"
      />

      <About text={settings.aboutText} />
      
      {/* Image Preview Section for the Talk Concert */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">행사 이미지 미리보기</h2>
            <p className="text-muted-foreground">토크콘서트 '생활인의 삶'의 공식 이미지입니다.</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://drive.google.com/uc?export=view&id=1onwGqhDzZWI7fQi_sXnYnCNu3Xzbh0kZ" 
              alt="Talk Concert Preview" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
      
      <Schedule items={schedule} />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-8">이 소식을 공유해보세요</h3>
          <ShareButtons />
        </div>
      </section>

      <Location 
        address={settings.location} 
        detail={settings.locationDetail} 
        phone={settings.phone}
        email={settings.email}
        donationAccount={settings.donationAccount}
      />
      
      <Footer />
    </div>
  );
}
