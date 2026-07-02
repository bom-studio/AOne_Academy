export const siteInfo = {
  name: "에이원 수학학원",
  slogan: "개념부터 입시까지, 수학 성적의 기준을 만듭니다.",
  description:
    "김포 중·고등 수학 전문 학원으로, 개별 수준 진단부터 내신, 수능까지 학생별 맞춤 커리큘럼으로 관리합니다.",
  director: "허보미",
  address: "경기도 김포시 김포한강8로 123, 3층 에이원 수학학원",
  phone: "031-987-1234",
  businessNumber: "",
  hours: "평일 14:00 ~ 22:00 / 토요일 10:00 ~ 18:00 / 일요일 휴무",
  parking: "건물 지하주차장 1시간 무료",
};

export const navigationItems = [
  { label: "학원소개", href: "/about" },
  { label: "교육과정", href: "/courses" },
  { label: "강사진", href: "/teachers" },
  { label: "성적향상", href: "/results" },
  { label: "시간표", href: "/schedule" },
  { label: "공지사항", href: "/notices" },
  { label: "상담예약", href: "/reservation" },
  { label: "오시는 길", href: "/location" },
] as const;

export const pageMetadata = {
  home: {
    title: "에이원 수학학원 | 김포 중·고등 수학 전문",
    description:
      "김포 중·고등 수학 전문 에이원 수학학원입니다. 개념부터 내신, 수능까지 학생 맞춤형 수학 교육을 제공합니다.",
  },
  about: {
    title: "학원소개 | 에이원 수학학원",
    description: "에이원 수학학원의 교육 철학, 학생 관리 방식, 시설 안내를 소개합니다.",
  },
  courses: {
    title: "교육과정 | 에이원 수학학원",
    description: "중등부, 고등부, 수능대비반, 방학특강 등 학년별 맞춤 수학 교육과정을 안내합니다.",
  },
  teachers: {
    title: "강사진 | 에이원 수학학원",
    description: "에이원 수학학원 전문 강사진의 경력, 수업 스타일, 담당 과정을 소개합니다.",
  },
  results: {
    title: "성적향상 | 에이원 수학학원",
    description: "에이원 수학학원의 진학 성과와 성적향상 사례, 학부모 후기를 확인하세요.",
  },
  schedule: {
    title: "시간표 | 에이원 수학학원",
    description: "중등부, 고등부, 수능대비반, 방학특강 시간표를 확인하세요.",
  },
  notices: {
    title: "공지사항 | 에이원 수학학원",
    description: "에이원 수학학원의 모집, 특강, 시험 대비 등 최신 공지사항을 안내합니다.",
  },
  reservation: {
    title: "상담예약 | 에이원 수학학원",
    description: "에이원 수학학원 상담 예약을 신청하세요. 방문·전화 상담 모두 가능합니다.",
  },
  location: {
    title: "오시는 길 | 에이원 수학학원",
    description: "에이원 수학학원 위치, 운영시간, 교통 및 주차 안내입니다.",
  },
};

export const achievementStats = [
  { year: "최근 3년", label: "성적향상 사례", value: "126건" },
  { year: "최근 3년", label: "내신 1~2등급 향상 학생", value: "57명" },
  { year: "최근 3년", label: "상담 학생", value: "500+명" },
  { year: "만족도", label: "학부모 추천율", value: "96%" },
];

export const yearlyAchievements = [
  { year: "2023", students: 32 },
  { year: "2024", students: 38 },
  { year: "2025", students: 42 },
  { year: "2026", students: 45 },
];

export const scoreImprovementData = [
  { name: "중3 김OO", before: 62, after: 91 },
  { name: "고1 이OO", before: 58, after: 84 },
  { name: "고2 박OO", before: 4, after: 2, type: "grade" as const },
  { name: "고1 최OO", before: 67, after: 88 },
  { name: "중2 정OO", before: 71, after: 93 },
];

export const gradeDistribution = [
  { grade: "1등급", count: 18 },
  { grade: "2등급", count: 39 },
  { grade: "3등급", count: 44 },
  { grade: "4등급 이하", count: 25 },
];

export const resultStats = [
  { label: "최근 3년 성적향상 사례", value: "126건", description: "개별 상담 기록 기준" },
  { label: "내신 1~2등급 달성", value: "57명", description: "최근 3년 누적" },
  { label: "학생 만족도", value: "98%", description: "수업 만족도 설문 기준" },
  { label: "학부모 추천율", value: "96%", description: "상담 후기 기준" },
];

export const homeResultHighlights = [
  { label: "성적향상 사례", value: "126건", percent: 85 },
  { label: "내신 1~2등급 달성", value: "57명", percent: 72 },
  { label: "학부모 추천율", value: "96%", percent: 96 },
];

export const featureItems = [
  {
    title: "1:1 수준 진단",
    description: "입학 전 진단 테스트와 상담을 통해 학생의 현재 위치와 필요한 학습 전략을 정확히 파악합니다.",
    icon: "chart",
  },
  {
    title: "학교별 내신 대비",
    description: "지역 학교별 시험 범위와 출제 경향을 반영해 실전에 강한 내신 대비 수업을 운영합니다.",
    icon: "school",
  },
  {
    title: "오답 관리 시스템",
    description: "틀린 문제를 반복 분석하고 재풀이하여 실수를 줄이고 점수 상승으로 이어지도록 관리합니다.",
    icon: "checklist",
  },
  {
    title: "정기 학부모 상담",
    description: "학습 현황과 향후 계획을 정기적으로 안내해 가정과 학원이 함께 학생의 성장을 관리합니다.",
    icon: "users",
  },
];

export const aboutContent = {
  greeting: {
    title: "원장 인사말",
    content: `안녕하세요, 에이원 수학학원 원장 김도현입니다.

저희 학원은 화려한 광고보다 학생 한 명 한 명의 변화에 집중하는 동네 수학학원입니다. 수학은 단순히 문제를 많이 푸는 과목이 아니라, 개념을 이해하고 응용하는 과정입니다.

학생의 현재 수준을 정확히 진단하고, 학교 생활과 목표에 맞는 학습 계획을 함께 세워드립니다. 학부모님께서 믿고 맡기실 수 있는 학원이 되겠습니다.`,
  },
  philosophy: {
    title: "교육 철학",
    items: [
      { title: "기초가 튼튼해야 성적이 오릅니다", description: "개념 이해를 우선하고, 무리한 선행보다 탄탄한 기초를 중시합니다." },
      { title: "학생 개개인에 맞는 속도", description: "같은 반 안에서도 수준과 목표가 다릅니다. 개별 맞춤 관리로 효율을 높입니다." },
      { title: "꾸준함이 가장 큰 무기", description: "단기 성과보다 장기적인 학습 습관과 자신감 형성을 목표로 합니다." },
    ],
  },
  management: {
    title: "학생 관리 방식",
    items: [
      "입학 시 수준 진단 테스트 및 1:1 상담",
      "주간 학습 리포트 및 오답 노트 관리",
      "월 1회 학부모 상담 (필요 시 추가 상담)",
      "시험 전 집중 클리닉 및 개별 보충 수업",
      "학습 태도·출결·과제 이행 여부 종합 관리",
    ],
  },
  academyFeatures: {
    title: "학원 특징",
    items: [
      "소규모 정원제로 집중도 높은 수업 운영",
      "지역 학교별 내신 대비 자료 및 분석",
      "조용하고 쾌적한 자습 공간 제공",
      "학부모와의 원활한 소통 채널 운영",
    ],
  },
  facility: {
    title: "시설 소개",
    description: "밝고 쾌적한 강의실과 자습 공간을 갖추고 있습니다. 학생들이 편안하게 집중할 수 있는 환경을 제공합니다.",
  },
  parentMessage: {
    title: "학부모님께 드리는 말씀",
    content: `자녀의 수학 성적이 걱정되실 때, 가장 먼저 현재 상태를 정확히 파악하는 것이 중요합니다. 에이원 수학학원은 상담을 통해 학생의 강점과 약점을 함께 살펴보고, 무리하지 않는 현실적인 목표를 세워드립니다.

편하게 방문 상담을 신청해 주시면, 자녀에게 맞는 학습 방향을 안내해 드리겠습니다.`,
  },
};

export const courseItems = [
  {
    id: "middle",
    title: "중등부",
    target: "중1 ~ 중3",
    lessons: ["개념 완성", "내신 대비", "선행 학습"],
    highlight: "기초 개념부터 학교 시험 대비까지 균형 있게 학습하는 중등 맞춤 과정",
    goals: ["수학 기초 개념 완성", "학교 내신 성적 향상", "고등 수학 선행 준비"],
    curriculum: ["교과서 기반 개념 수업", "학교별 내신 기출 분석", "단원별 테스트 및 오답 정리", "방학 선행 과정"],
    management: ["주간 학습 리포트", "오답 노트 관리", "월 1회 학부모 상담"],
    recommended: ["수학 기초가 약한 중학생", "내신 성적을 올리고 싶은 학생", "고등 진학 전 개념을 탄탄히 하고 싶은 학생"],
  },
  {
    id: "high",
    title: "고등부",
    target: "고1 ~ 고3",
    lessons: ["학교별 내신", "수능 기초", "심화 문제 풀이"],
    highlight: "학교별 내신과 수능 기본기를 함께 잡는 체계적인 고등 정규 과정",
    goals: ["학교별 내신 대비", "수능 기본기 확립", "심화 문제 해결력 향상"],
    curriculum: ["학교 진도 연계 수업", "내신 기출 및 예상문제 풀이", "수능형 개념 정리", "심화·고난도 문제 훈련"],
    management: ["시험별 성적 분석", "약점 단원 집중 보완", "정기 모의고사 및 피드백"],
    recommended: ["내신과 수능을 함께 준비하는 고등학생", "학교 수업만으로 부족한 학생", "체계적인 학습 관리가 필요한 학생"],
  },
  {
    id: "csat",
    title: "수능대비반",
    target: "고2 ~ 고3",
    lessons: ["수능 유형 분석", "약점 보완", "실전 모의고사"],
    highlight: "등급 향상에 필요한 핵심 단원 보완과 실전 감각을 동시에 강화하는 수능 집중반",
    goals: ["수능 등급 향상", "실전 문제 적응력 강화", "시간 관리 및 전략 수립"],
    curriculum: ["수능 기출 유형 분석", "단원별 약점 보완", "주간·월간 모의고사", "실전 시간 배분 훈련"],
    management: ["모의고사 성적 추이 관리", "개별 약점 클리닉", "수능 직전 집중 특강"],
    recommended: ["수능 등급을 올리고 싶은 고2·고3", "실전 감각이 부족한 학생", "집중 관리가 필요한 수험생"],
  },
  {
    id: "vacation",
    title: "방학특강",
    target: "중등 / 고등",
    lessons: ["단기 개념 정리", "선행 과정", "집중 클리닉"],
    highlight: "짧은 기간 동안 꼭 필요한 단원만 압축해 성과를 만드는 시즌 특강",
    goals: ["방학 기간 학습 공백 방지", "핵심 단원 집중 정리", "다음 학기 준비"],
    curriculum: ["방학 선행 과정", "취약 단원 집중 클리닉", "단기 내신·모의고사 대비", "개념+유형 통합 정리"],
    management: ["일일 학습량 체크", "단기 성과 점검", "개별 보충 수업"],
    recommended: ["방학 동안 실력을 키우고 싶은 학생", "특정 단원이 약한 학생", "짧은 기간 집중 학습이 필요한 학생"],
  },
];

export const teacherItems = [
  {
    name: "김도현 원장",
    subject: "고등 수학",
    career: "15년 경력",
    intro: "내신과 수능을 함께 설계하는 고등 전문 강사로, 학생별 로드맵 관리에 강점이 있습니다.",
    teachingStyle: "개념 설명을 꼼꼼히 하고, 학생이 스스로 풀 수 있도록 단계별로 이끕니다.",
    courses: ["고등부", "수능대비반"],
    studentManagement: "학생별 목표 등급을 설정하고, 주간 테스트 결과를 바탕으로 학습 계획을 조정합니다.",
  },
  {
    name: "이서연 선생님",
    subject: "중등 수학",
    career: "내신 전문",
    intro: "중등 개념 정리와 학교 시험 대비를 꼼꼼히 지도하며 학습 습관 형성까지 함께 돕습니다.",
    teachingStyle: "친절하고 차분한 설명으로 수학에 대한 부담을 줄이고, 기초부터 탄탄히 다집니다.",
    courses: ["중등부", "방학특강"],
    studentManagement: "오답 노트와 과제 이행을 꼼꼼히 확인하며, 학부모님께 정기적으로 학습 현황을 공유합니다.",
  },
  {
    name: "박준호 선생님",
    subject: "수능 수학",
    career: "상위권 심화반",
    intro: "고난도 문제 해결력과 실전 운영 전략을 중심으로 상위권 학생의 점프업을 이끕니다.",
    teachingStyle: "유형별 접근법을 체계적으로 가르치고, 실전 모의고사 훈련을 통해 감각을 키웁니다.",
    courses: ["수능대비반", "고등부 심화반"],
    studentManagement: "모의고사 성적 추이를 분석해 약점 단원을 집중 보완하고, 수능 직전까지 밀착 관리합니다.",
  },
];

export const resultItems = [
  {
    student: "중3 김OO",
    before: "62점",
    after: "91점",
    highlight: "+29점 상승 · 개념 보완 집중",
    description: "개념 누락 단원 보완과 오답 재학습을 통해 한 학기 만에 내신 점수를 크게 끌어올렸습니다.",
  },
  {
    student: "고1 이OO",
    before: "5등급",
    after: "2등급",
    highlight: "3등급 향상 · 내신 대비 루틴 정착",
    description: "학교별 시험 유형 분석과 주간 테스트 관리로 등급을 안정적으로 상승시켰습니다.",
  },
  {
    student: "고2 박OO",
    before: "모의고사 4등급",
    after: "모의고사 2등급",
    highlight: "2등급 향상 · 실전 모의고사 집중",
    description: "약점 단원 집중 보완과 실전 모의고사 훈련으로 수능형 문제 적응력을 높였습니다.",
  },
];

export const parentReviews = [
  {
    author: "중3 학부모",
    content: "아이가 수학을 어려워했는데, 선생님께서 차근차근 기초부터 잡아주셔서 자신감이 생겼어요. 상담도 자주 해주셔서 안심이 됩니다.",
  },
  {
    author: "고1 학부모",
    content: "학교 시험 대비 자료가 꼼꼼하고, 성적 변화를 매번 알려주셔서 믿고 맡기고 있습니다. 동네에서 찾던 학원이에요.",
  },
  {
    author: "고2 학부모",
    content: "수능 준비가 막막했는데, 목표 등급에 맞는 계획을 세워주셔서 방향이 잡혔습니다. 아이도 스스로 공부하는 습관이 생겼어요.",
  },
];

export const scheduleGroups = [
  {
    title: "중등부 시간표",
    items: [
      { className: "중등 개념반", target: "중1 ~ 중2", day: "월 / 수", time: "16:30 - 18:00", teacher: "이서연" },
      { className: "중등 심화반", target: "중3", day: "화 / 목", time: "18:10 - 19:40", teacher: "이서연" },
    ],
  },
  {
    title: "고등부 시간표",
    items: [
      { className: "고등 내신반", target: "고1 ~ 고2", day: "월 / 수 / 금", time: "19:50 - 21:20", teacher: "김도현" },
      { className: "고등 심화반", target: "고2 ~ 고3", day: "화 / 목", time: "19:50 - 21:20", teacher: "김도현" },
    ],
  },
  {
    title: "수능대비반 시간표",
    items: [
      { className: "수능 심화반", target: "고2 ~ 고3", day: "화 / 목 / 토", time: "20:00 - 22:00", teacher: "박준호" },
    ],
  },
  {
    title: "방학특강 시간표",
    items: [
      { className: "여름방학 선행반", target: "중등 / 고등", day: "월 ~ 금", time: "10:00 - 13:00", teacher: "전 강사진" },
      { className: "겨울방학 집중반", target: "중등 / 고등", day: "월 ~ 금", time: "14:00 - 17:00", teacher: "전 강사진" },
    ],
  },
];

export const scheduleNotice =
  "시간표는 학원 사정에 따라 변경될 수 있습니다. 정확한 반 배정 및 시간 확인은 상담을 통해 안내드립니다.";

export const noticeItems = [
  {
    title: "2026 여름방학 특강 모집",
    date: "2026.06.20",
    category: "모집",
    summary: "중등 선행반, 고등 내신 집중반, 수능 개념 정리반 등 여름방학 특강 모집을 시작합니다.",
  },
  {
    title: "고1 내신 집중반 신규 개설",
    date: "2026.06.05",
    category: "개강",
    summary: "고1 학생 대상 학교별 내신 대비를 위한 소수정예 집중반이 신규 개설됩니다.",
  },
  {
    title: "중등 심화반 추가 모집",
    date: "2026.05.28",
    category: "모집",
    summary: "중2·중3 학생을 위한 중등 심화반을 추가 모집합니다. 수준별 반 편성으로 진행됩니다.",
  },
  {
    title: "7월 학부모 설명회 안내",
    date: "2026.05.15",
    category: "안내",
    summary: "중·고등 학부모님을 대상으로 2학기 내신 및 수능 대비 전략 설명회를 진행합니다.",
  },
  {
    title: "기말고사 대비 특강 안내",
    date: "2026.04.30",
    category: "특강",
    summary: "1학기 기말고사 대비를 위한 학교별 맞춤 특강 일정을 안내드립니다.",
  },
];

export const locationDetails = {
  address: "경기도 김포시 김포한강8로 123, 3층 에이원 수학학원",
  phone: "031-987-1234",
  hours: "평일 14:00 ~ 22:00 / 토요일 10:00 ~ 18:00 / 일요일 휴무",
  parking: "건물 지하주차장 1시간 무료",
  transportation: [
    "김포 한강신도시 중심 상가 위치",
    "김포골드라인 ○○역 2번 출구 도보 7분",
    "인근 버스 정류장 하차 후 도보 3분",
  ],
};

export const reservationInfo = {
  consultationHours: "평일 14:00 ~ 22:00 / 토요일 10:00 ~ 18:00 / 일요일 휴무",
  phone: "031-987-1234",
  visitGuide: "방문 상담은 사전 예약 후 방문해 주시면 대기 없이 상담받으실 수 있습니다.",
  prepareItems: [
    "학생의 최근 성적표 또는 시험지",
    "현재 사용 중인 교재",
    "학습 목표 (내신, 수능 등)",
    "희망 수업 요일 및 시간",
  ],
};

export const reservationCourseOptions = [
  "중등부",
  "고등부",
  "수능대비반",
  "방학특강",
  "기타 상담",
];
