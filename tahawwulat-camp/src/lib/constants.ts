// ===== SITE CONFIGURATION =====
export const SITE_CONFIG = {
  name: "Tahawwulat Youth Camp",
  tagline: "Kem Terbaik Abad Ini!",
  description:
    "4 hari untuk membina ketahanan emosi, spiritual dan mental berdasarkan psikologi islam & Modul akhir zaman bersumberkan Al Quran dan Hadis.",
  whatsappLink: "https://wa.me/60123456789",
  registrationLink: "#daftar",
};

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Jadual", href: "#jadual" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "FAQ", href: "#faq" },
];

// ===== VENUE INFORMATION =====
export const VENUES = [
  {
    id: 1,
    date: "21 - 24 Dis",
    day: "Ahad - Rabu",
    year: "2025",
    name: "Masjid Raja Bendahara Tengku Badar Shah",
    location: "Denai Alam",
  },
  {
    id: 2,
    date: "21 - 24 Dis",
    day: "Ahad - Rabu",
    year: "2025",
    name: "Masjid Saujana Utama",
    location: "Sungai Buloh",
  },
  {
    id: 3,
    date: "22 - 25 Dis",
    day: "Isnin - Khamis",
    year: "2025",
    name: "Masjid At-Taqwa",
    location: "Petaling Jaya",
  },
];

// ===== PROGRAM FEATURES =====
export const FEATURES = [
  {
    id: 1,
    icon: "mosque" as const,
    title: "Asas Iman",
    description: "Pembinaan asas keimanan yang kukuh berdasarkan Al-Quran dan Hadis.",
  },
  {
    id: 2,
    icon: "brain" as const,
    title: "Psikologi Islam",
    description: "Memahami jiwa dan emosi melalui perspektif psikologi Islam.",
  },
  {
    id: 3,
    icon: "mountain" as const,
    title: "Outdoor Challenge",
    description: "Aktiviti luar yang mencabar untuk membina ketahanan fizikal dan mental.",
  },
  {
    id: 4,
    icon: "book" as const,
    title: "Hafazan Al-Kahfi",
    description: "Program hafazan Surah Al-Kahfi dengan teknik yang berkesan.",
  },
  {
    id: 5,
    icon: "handshake" as const,
    title: "Ukhuwwah",
    description: "Membina persaudaraan dan jaringan positif sesama peserta.",
  },
  {
    id: 6,
    icon: "moon" as const,
    title: "Qiyamulail",
    description: "Pengalaman qiyamulail bersama untuk mendekatkan diri kepada Allah.",
  },
];

// ===== SCHEDULE DATA =====
export const SCHEDULE = {
  day1: {
    theme: "Asas Bertahan (Faith Foundation)",
    focus: "Perubahan jiwa & asas iman",
    activities: [
      { time: "7.00-8.00", activity: "Pendaftaran" },
      { time: "8.00-8.30", activity: "Solat Dhuha & Zikir Harian" },
      { time: "8.30-9.30", activity: "Ice Breaking: Siapa Aku di Hadapan Allah" },
      { time: "9.30-10.30", activity: "Dunia Menuju Final Chapter (Ustaz Syed Putra Haizam)" },
      { time: "10.30-11.00", activity: "Rehat" },
      { time: "11.00-12.00", activity: "24 Jam dengan Nabi" },
      { time: "12.00-12.30", activity: "Code of Survival: Hafal Surah Al Kahfi" },
      { time: "12.30-2.00", activity: "Solat Zohor + Makan & Rehat" },
      { time: "2.00-3.30", activity: "Survival Skills Workshop" },
      { time: "3.30-4.30", activity: "Solat Asar + Rehat" },
      { time: "4.30-6.30", activity: "Outdoor Challenge: Team Building" },
      { time: "6.30-8.30", activity: "Solat Maghrib + Makan Malam" },
      { time: "8.30-10.00", activity: "Muhasabah Malam" },
    ],
  },
  day2: {
    theme: "Kekuatan Mental (Mental Fortress)",
    focus: "Membina ketahanan mental & emosi",
    activities: [
      { time: "5.30-6.30", activity: "Qiyamulail & Solat Subuh" },
      { time: "6.30-7.30", activity: "Senaman Pagi & Sarapan" },
      { time: "8.00-9.30", activity: "Psikologi Emosi dalam Islam" },
      { time: "9.30-10.30", activity: "Workshop: Menguruskan Kemarahan" },
      { time: "10.30-11.00", activity: "Rehat" },
      { time: "11.00-12.30", activity: "Hafazan Al-Kahfi (Sesi 2)" },
      { time: "12.30-2.30", activity: "Solat Zohor + Makan & Rehat" },
      { time: "2.30-4.00", activity: "Jungle Trekking" },
      { time: "4.00-5.00", activity: "Solat Asar + Rehat" },
      { time: "5.00-6.30", activity: "Water Challenge" },
      { time: "6.30-8.30", activity: "Solat Maghrib + Makan Malam" },
      { time: "8.30-10.30", activity: "Malam Motivasi: Kisah Para Sahabat" },
    ],
  },
  day3: {
    theme: "Kekuatan Spiritual (Spiritual Power)",
    focus: "Mendalami hubungan dengan Allah",
    activities: [
      { time: "5.00-6.30", activity: "Tahajjud & Solat Subuh" },
      { time: "6.30-7.30", activity: "Senaman & Sarapan" },
      { time: "8.00-10.00", activity: "Rahsia Solat Khusyuk" },
      { time: "10.00-10.30", activity: "Rehat" },
      { time: "10.30-12.30", activity: "Hafazan Al-Kahfi (Sesi 3)" },
      { time: "12.30-2.30", activity: "Solat Zohor + Makan & Rehat" },
      { time: "2.30-4.00", activity: "Archery & Memanah" },
      { time: "4.00-5.00", activity: "Solat Asar" },
      { time: "5.00-6.30", activity: "Survival Cooking" },
      { time: "6.30-8.30", activity: "Solat Maghrib + Berbuka" },
      { time: "8.30-11.00", activity: "Malam Akhir Zaman" },
    ],
  },
  day4: {
    theme: "Transformasi (The New Me)",
    focus: "Komitmen & pelan tindakan",
    activities: [
      { time: "5.00-6.30", activity: "Qiyamulail & Subuh" },
      { time: "6.30-8.00", activity: "Senaman & Sarapan" },
      { time: "8.00-9.30", activity: "Hafazan Al-Kahfi (Ujian)" },
      { time: "9.30-11.00", activity: "Pelan Tindakan 90 Hari" },
      { time: "11.00-12.00", activity: "Ikrar & Penyerahan Sijil" },
      { time: "12.00-1.00", activity: "Solat Zohor & Penutup" },
      { time: "1.00-2.00", activity: "Makan Tengahari & Pulang" },
    ],
  },
};

// ===== BENEFITS/OUTCOMES =====
export const BENEFITS = [
  {
    id: 1,
    icon: "praying" as const,
    title: "Lebih Yakin Solat",
    description: "Memahami makna dan khusyuk dalam solat.",
  },
  {
    id: 2,
    icon: "graduation" as const,
    title: "Hafal Surah Al-Kahfi",
    description: "Menghafal surah pelindung dari fitnah Dajjal.",
  },
  {
    id: 3,
    icon: "shield" as const,
    title: "Mental Kuat",
    description: "Ketahanan mental menghadapi cabaran hidup.",
  },
  {
    id: 4,
    icon: "heart" as const,
    title: "Emosi Stabil",
    description: "Menguruskan emosi dengan cara Islam.",
  },
  {
    id: 5,
    icon: "star" as const,
    title: "Jati Diri Muslim",
    description: "Identiti Islam yang jelas dan yakin.",
  },
  {
    id: 6,
    icon: "users" as const,
    title: "Sahabat Soleh",
    description: "Jaringan rakan yang positif dan menyokong.",
  },
  {
    id: 7,
    icon: "target" as const,
    title: "Matlamat Jelas",
    description: "Pelan tindakan 90 hari untuk berubah.",
  },
  {
    id: 8,
    icon: "running" as const,
    title: "Fizikal Cergas",
    description: "Badan sihat melalui aktiviti luar.",
  },
  {
    id: 9,
    icon: "moon" as const,
    title: "Dekat dengan Allah",
    description: "Hubungan yang lebih erat dengan Pencipta.",
  },
];

// ===== FAQ =====
export const FAQ = [
  {
    id: 1,
    question: "Siapa yang sesuai menyertai kem ini?",
    answer: "Kem ini sesuai untuk remaja berumur 13-18 tahun yang ingin membina ketahanan emosi, spiritual dan mental. Sesuai untuk semua latar belakang.",
  },
  {
    id: 2,
    question: "Apa yang perlu dibawa?",
    answer: "Peserta perlu membawa pakaian untuk 4 hari, peralatan mandi, tuala, Al-Quran, buku nota, dan kasut sukan. Senarai lengkap akan diberikan selepas pendaftaran.",
  },
  {
    id: 3,
    question: "Adakah makanan disediakan?",
    answer: "Ya, semua makanan (sarapan, makan tengahari, makan malam, dan snek) disediakan sepanjang program.",
  },
  {
    id: 4,
    question: "Bagaimana dengan keselamatan peserta?",
    answer: "Keselamatan adalah keutamaan kami. Kami mempunyai fasilitator terlatih, pertolongan cemas, dan protokol keselamatan yang ketat.",
  },
  {
    id: 5,
    question: "Boleh ibu bapa hadir?",
    answer: "Ibu bapa dialu-alukan hadir pada majlis penutup di hari ke-4 untuk penyerahan sijil.",
  },
];

// ===== TESTIMONIALS =====
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmad Farhan",
    age: 16,
    quote: "Kem ini mengubah cara saya melihat solat. Sekarang saya lebih khusyuk dan faham apa yang saya baca.",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Nur Aisyah",
    age: 15,
    quote: "Saya dapat kawan-kawan baru yang sama-sama nak berubah. Kami masih contact sampai sekarang!",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Muhammad Haziq",
    age: 17,
    quote: "Outdoor challenge tu memang best! Belajar kerja dalam team dan tak putus asa bila susah.",
    image: "/images/testimonial-3.jpg",
  },
];

// ===== SOCIAL LINKS =====
export const SOCIAL_LINKS = [
  { platform: "whatsapp", url: "https://wa.me/60123456789", icon: "WhatsApp" },
  { platform: "instagram", url: "https://instagram.com/tahawwulatcamp", icon: "Instagram" },
  { platform: "facebook", url: "https://facebook.com/tahawwulatcamp", icon: "Facebook" },
  { platform: "tiktok", url: "https://tiktok.com/@tahawwulatcamp", icon: "TikTok" },
];

// ===== STATS =====
export const STATS = [
  { value: "5000+", label: "Alumni" },
  { value: "50+", label: "Siri Kem" },
  { value: "4", label: "Hari Program" },
  { value: "98%", label: "Kepuasan" },
];
