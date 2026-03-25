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
        title={`${settings.title} | 1982 애중복지재단`}
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
