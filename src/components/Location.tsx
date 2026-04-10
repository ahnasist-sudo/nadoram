import { motion } from "motion/react";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

interface LocationProps {
  address: string;
  detail: string;
  phone: string;
  email: string;
  donationAccount: string;
}

export default function Location({ address, detail, phone, email, donationAccount }: LocationProps) {
  return (
    <section id="location" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-muted rounded-2xl overflow-hidden relative border border-white/5"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(detail)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              title="Map"
            ></iframe>
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">오시는 길</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">주소</h4>
                  <p className="text-muted-foreground">{address}</p>
                  <p className="text-sm text-primary mt-1">{detail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">연락처</h4>
                  <p className="text-muted-foreground">{phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">이메일</h4>
                  <p className="text-muted-foreground">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">후원계좌</h4>
                  <p className="text-muted-foreground">{donationAccount}</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://map.naver.com/v5/search/${encodeURIComponent(detail)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 block w-full py-4 bg-[#ffce00] text-black font-bold rounded-xl hover:opacity-90 transition-opacity text-center"
            >
              네이버 지도로 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
