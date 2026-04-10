import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function ConfettiScroll() {
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // 100px 스크롤할 때마다 효과 발생

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY.current);

      if (diff > scrollThreshold) {
        lastScrollY.current = currentScrollY;

        // 꽃가루 효과 실행
        confetti({
          particleCount: 5,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFB7C5", "#FFD700", "#E30B5D", "#FFFACD"], // 벚꽃(핑크), 개나리(옐로우), 동백(레드), 연노랑
          gravity: 0.8,
          scalar: 0.7,
          drift: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // UI 요소는 없음
}
