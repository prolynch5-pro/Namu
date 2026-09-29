import { ReviewItem, PopularHour } from '../types';

import realFacadeImg from '../assets/images/gmaps_real_photo_1.jpg';
import realInteriorImg from '../assets/images/gmaps_real_photo_2.jpg';

export const CAFE_IMAGES = {
  facadeReal: realFacadeImg,
  interiorReal: realInteriorImg,
};

export const CAFE_INFO = {
  name: 'Namu Coffee and Eatery',
  tagline: 'Ruang Teduh untuk Kopi, Cerita, & Inspirasi di Jember',
  category: 'Kedai Kopi & Eatery',
  rating: 4.5,
  reviewCount: 57,
  priceRange: 'Rp 25.000–50.000 per orang',
  priceRangeReportCount: 18,
  address: 'Jl. Karimata No.26, Gumuk Kerang, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121',
  plusCode: 'RP98+P8 Sumbersari, Kabupaten Jember, Jawa Timur',
  phone: '0821-7408-0280',
  whatsappRaw: '6282174080280',
  googleMapsUrl: 'https://maps.app.goo.gl/aLWMF6eCcn3jFti78',
  googleMapsInteriorUrl: 'https://maps.app.goo.gl/4QLR9RzxwKb5h3f78',
  hours: {
    status: 'Buka',
    closesAt: '23.00 WIB',
    schedule: [
      { days: 'Senin - Minggu', time: 'Buka · Tutup pukul 23.00 WIB' }
    ]
  },
  services: [
    { title: 'Makan di tempat', desc: 'Area sofa santai, meja nugas nyaman dengan colokan listrik, serta rak buku bacaan.' },
    { title: 'Bawa pulang', desc: 'Layanan takeaway untuk kopi dingin dan hidangan makanan.' },
    { title: 'Pesan online', desc: 'Pemesanan cepat langsung terhubung ke WhatsApp resmi.' }
  ]
};

// Kategori sajian umum di Namu Coffee & Eatery
export const MENU_CATEGORIES = [
  {
    id: 'kopi',
    title: 'Kopi & Espresso Bar',
    subtitle: 'Signature & Racikan Dingin / Hangat',
    description: 'Menyajikan racikan Iced Coffee andalan Namu, aneka olahan espresso murni, serta es kopi susu segar yang pas menemani waktu nugas.',
    badge: 'Menu Andalan di Google Maps: Iced Coffee'
  },
  {
    id: 'non-kopi',
    title: 'Minuman Segar & Jus',
    subtitle: 'Non-Coffee Refreshers',
    description: 'Pilihan minuman dingin non-kopi, teh, dan jus buah segar—termasuk Jus Leci yang banyak dipuji pengunjung di ulasan.',
    badge: 'Favorit Pengunjung: Jus Leci'
  },
  {
    id: 'makanan',
    title: 'Makanan Utama & Eatery',
    subtitle: 'Santap Siang & Malam',
    description: 'Pilihan hidangan makanan berat yang mengenyangkan, seperti aneka olahan ayam gurih berbumbu rempah dan menu santap hangat.',
    badge: 'Dilaporkan Pengunjung: Hidangan Ayam'
  },
  {
    id: 'snack',
    title: 'Camilan & Kudapan Nugas',
    subtitle: 'Bites & Sharing Snacks',
    description: 'Kudapan gurih dan manis yang cocok dinikmati beramai-ramai saat berdiskusi santai atau sambil membaca novel.',
    badge: 'Teman Ngobrol & Membaca'
  }
];

export const POPULAR_HOURS: PopularHour[] = [
  { hour: '06', percentage: 5, label: 'Persiapan buka' },
  { hour: '09', percentage: 30, label: 'Pagi tenang untuk nugas & membaca' },
  { hour: '12', percentage: 55, label: 'Makan siang & istirahat kopi' },
  { hour: '15', percentage: 70, label: 'Mulai ramai mahasiswa' },
  { hour: '18', percentage: 95, label: 'Puncak: Lebih ramai dari biasanya' },
  { hour: '21', percentage: 80, label: 'Hangout malam & ngobrol santai' }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-ricky',
    author: 'Ricky',
    authorSubtitle: 'Local Guide · 619 ulasan · 3.723 foto',
    avatarText: 'R',
    avatarColor: 'bg-emerald-600',
    rating: 5,
    timeAgo: '2 bulan lalu',
    content: "I was pleasantly surprised by the cafe’s interior, the space has a clean, well designed aesthetic, and the overall facilities made my visit comfortable. There are several seating areas to choose from, although only a few are set up in a way...",
    tags: ['estetik', 'santai'],
    likes: 12
  },
  {
    id: 'rev-local-reviewer',
    author: 'local reviewer',
    authorSubtitle: 'Local Guide · 46 ulasan · 143 foto',
    avatarText: 'L',
    avatarColor: 'bg-blue-600',
    rating: 4,
    timeAgo: '4 bulan lalu',
    content: "cukup oke, ada yg sofa tp mejanya sejajar sih, klo mau nugas ada juga kursi yg kaya biasanya. aku pesen jus leci, enakk, sblmnya jarang sih liat menu itu. ada beberapa buku, mostly tere liye sih. pas aku kesana gada tukang parkir.",
    tags: ['santai', 'nugas', 'parkir'],
    likes: 6
  },
  {
    id: 'rev-nadella',
    author: 'Nadella',
    authorSubtitle: '2 ulasan · 1 foto',
    avatarText: 'N',
    avatarColor: 'bg-amber-600',
    rating: 4,
    timeAgo: '3 minggu lalu',
    isNew: true,
    content: "tempatnya enak, tapi sayang ayam yang disajikan kurang fresh seperti stok lama, ayam goreng ketumbar tapi rasanya seperti ayam biasa. padahal dijual dengan harga yang cukup mahal. 4 harian sampai saat ini saya diare setelah makan darisana.",
    tags: ['ayam', 'santai'],
    likes: 3,
    ownerReply: {
      timeAgo: '3 minggu lalu',
      text: "Halo Kak, terima kasih sudah menyampaikan pengalaman dan masukannya kepada kami. Mohon maaf apabila makanan yang Kakak terima belum sesuai dengan ekspektasi, baik dari segi rasa maupun kualitas..."
    }
  },
  {
    id: 'rev-quote-1',
    author: 'Fidy',
    authorSubtitle: 'Pengunjung Google Maps',
    avatarText: 'F',
    avatarColor: 'bg-purple-600',
    rating: 5,
    timeAgo: 'Ringkasan Ulasan',
    content: "Ada juga buku yang di sediakan pihak cafe tapi Fidy bawa buku sendiri tadi.",
    tags: ['santai', 'buku'],
    likes: 8
  },
  {
    id: 'rev-quote-2',
    author: 'Pengunjung Terverifikasi',
    authorSubtitle: 'Google Maps',
    avatarText: 'P',
    avatarColor: 'bg-teal-600',
    rating: 5,
    timeAgo: 'Ringkasan Ulasan',
    content: "Kopi sama makanannya enak, pelayanan ramah, dan musiknya juga pas.",
    tags: ['santai', 'musik'],
    likes: 11
  },
  {
    id: 'rev-quote-3',
    author: 'Pengunjung Terverifikasi',
    authorSubtitle: 'Google Maps',
    avatarText: 'P',
    avatarColor: 'bg-rose-600',
    rating: 5,
    timeAgo: '4 bulan lalu',
    content: "kasirnya cakep, nih kasirnya 😌😌",
    tags: ['santai', 'estetik'],
    likes: 9
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 'gal-real-facade',
    title: 'Fasad Depan Namu Coffee (Foto Asli Google Maps)',
    category: 'Eksterior & Fasad',
    image: CAFE_IMAGES.facadeReal,
    sourceUrl: 'https://maps.app.goo.gl/aLWMF6eCcn3jFti78',
    caption: 'Tampak depan kafe dengan kanopi bergaris hijau toska, pintu kaca lapang, dan plang logo melingkar di Jl. Karimata No. 26.'
  },
  {
    id: 'gal-real-interior',
    title: 'Area Duduk & Interior (Foto Asli Google Maps)',
    category: 'Interior & Suasana',
    image: CAFE_IMAGES.interiorReal,
    sourceUrl: 'https://maps.app.goo.gl/4QLR9RzxwKb5h3f78',
    caption: 'Interior nyaman dengan sofa kulit santai, dinding aksen toska, rak pajangan ornamen/buku, serta cermin lengkung unik.'
  }
];
