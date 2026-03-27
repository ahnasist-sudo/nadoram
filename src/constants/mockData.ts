import { ScheduleItem, SiteSettings } from "../types";

export const MOCK_SITE_SETTINGS: SiteSettings = {
  title: "나도람 축제",
  subtitle: "사회복지법인 애중복지재단이 함께하는 따뜻한 동행",
  date: "2026년 5월 13일 (수)",
  location: "애중복지재단",
  locationDetail: "전남 무안군 삼향읍 유교길 101",
  primaryColor: "#FFD700",
  heroImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920&h=1080",
  aboutText: "나도람 축제는 애중복지재단 생활인들과 지역사회가 함께 어우러지는 화합의 장입니다. '나도람'은 '나누는 사람'의 줄임말로, 서로의 마음을 나누고 함께 성장하는 시간을 의미합니다.",
  phone: "061-280-6506",
  email: "aj1982@naver.com",
  donationAccount: "(농축협) 애중복지재단 351-0459-7217-63",
};

export const MOCK_SCHEDULE: ScheduleItem[] = [
  {
    id: "1",
    time: "10:00",
    title: "개회식 및 기념사",
    description: "축제의 시작을 알리는 개회 선언과 내빈 기념사",
  },
  {
    id: "2",
    time: "10:30",
    title: "토크콘서트 '생활인의 삶'",
    description: "강연자: 이호선 교수\n생활인들의 진솔한 이야기를 듣는 소통의 시간",
    image: "https://cdn.epnc.co.kr/news/photo/202601/327566_333025_4153.jpg",
  },
  {
    id: "3",
    time: "12:00",
    title: "점심 식사",
    description: "맛있는 점심과 휴식 시간",
  },
  {
    id: "4",
    time: "13:00",
    title: "축하공연",
    description: "가온누리봉사단의 신나는 공연",
    image: "https://www.visionsungil.co.kr/user/saveDir/board/www12/876_1765714382_1.jpg",
  },
  {
    id: "5",
    time: "14:00",
    title: "나도람 코너 운영",
    description: "체험 부스, 먹거리 장터 등 다채로운 프로그램",
  },
  {
    id: "6",
    time: "16:40",
    title: "폐회",
    description: "축제를 마무리하며 다음을 기약하는 시간",
  },
];
