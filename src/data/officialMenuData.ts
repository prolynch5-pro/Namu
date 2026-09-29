import { OfficialMenuItem } from '../types';

export const OFFICIAL_MENU_ITEMS: OfficialMenuItem[] = [
  // === COFFEE ===
  {
    id: 'c-espresso',
    name: 'Espresso',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 10000,
    priceFormatted: '10K',
    notes: 'Single shot espresso murni'
  },
  {
    id: 'c-affogato',
    name: 'Affogato',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 18000,
    priceFormatted: '18K',
    notes: 'Espresso disiram di atas es krim vanila lembut'
  },
  {
    id: 'c-americano',
    name: 'Americano',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 18000,
    priceFormatted: '18K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'c-cappuccino',
    name: 'Cappuccino',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 20000,
    priceFormatted: '20K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'c-cafe-latte',
    name: 'Cafe Latte',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 20000,
    priceFormatted: '20K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'c-dirty-latte',
    name: 'Dirty Latte',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 20000,
    priceFormatted: '20K',
    notes: 'Double espresso di atas susu dingin kental'
  },
  {
    id: 'c-namu-creamy',
    name: 'Namu Creamy Coffee',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 20000,
    priceFormatted: '20K',
    badge: 'Signature House Coffee',
    notes: 'Racikan kopi susu kental & gurih khas Namu'
  },
  {
    id: 'c-salted-caramel',
    name: 'Salted Caramel Coffee',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 22000,
    priceFormatted: '22K'
  },
  {
    id: 'c-banana-creamy',
    name: 'Banana Creamy Coffee',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 22000,
    priceFormatted: '22K'
  },
  {
    id: 'c-pistachio-creamy',
    name: 'Pistachio Creamy Coffee',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 22000,
    priceFormatted: '22K',
    badge: 'Favorit Baru'
  },
  {
    id: 'c-butterscotch-creamy',
    name: 'Butterscotch Creamy Coffee',
    category: 'coffee',
    groupName: 'COFFEE',
    price: 22000,
    priceFormatted: '22K'
  },

  // === NON COFFEE ===
  {
    id: 'nc-original-tea',
    name: 'Original Tea',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 15000,
    priceFormatted: '15K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'nc-lychee-tea',
    name: 'Lychee Tea',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 18000,
    priceFormatted: '18K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'nc-lemon-tea',
    name: 'Lemon Tea',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 18000,
    priceFormatted: '18K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'nc-strawberry-tea',
    name: 'Strawberry Tea',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 18000,
    priceFormatted: '18K'
  },
  {
    id: 'nc-lychee-juice',
    name: 'Lychee Juice',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 20000,
    priceFormatted: '20K',
    badge: 'Favorit di Ulasan Google Maps',
    notes: 'Jus leci dingin menyegarkan yang dipuji para reviewer'
  },
  {
    id: 'nc-strawberry-juice',
    name: 'Strawberry Juice',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 20000,
    priceFormatted: '20K'
  },
  {
    id: 'nc-melon-juice',
    name: 'Melon Juice',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 20000,
    priceFormatted: '20K'
  },
  {
    id: 'nc-choco-latte',
    name: 'Choco Latte',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 22000,
    priceFormatted: '22K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'nc-matcha-latte',
    name: 'Matcha Latte',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 22000,
    priceFormatted: '22K',
    servingTemp: 'HOT / ICE',
    badge: 'Best Seller'
  },
  {
    id: 'nc-taro-latte',
    name: 'Taro Latte',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 22000,
    priceFormatted: '22K',
    servingTemp: 'HOT / ICE'
  },
  {
    id: 'nc-choco-hazelnut',
    name: 'Choco Hazelnut',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 22000,
    priceFormatted: '22K'
  },
  {
    id: 'nc-strawberry-smoothies',
    name: 'Strawberry Smoothies',
    category: 'non-coffee',
    groupName: 'NON COFFEE',
    price: 23000,
    priceFormatted: '23K'
  },

  // === AMERICANO SERIES ===
  {
    id: 'as-astrocano',
    name: 'Astrocano',
    category: 'signature-americano',
    groupName: 'AMERICANO SERIES',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Espresso, Strawberry, Lychee, Grape',
    badge: 'Artisan Mocktail'
  },
  {
    id: 'as-peach-candy',
    name: 'Peach Candy',
    category: 'signature-americano',
    groupName: 'AMERICANO SERIES',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Espresso, Peach, Guava'
  },
  {
    id: 'as-apple-bloom',
    name: 'Apple Bloom',
    category: 'signature-americano',
    groupName: 'AMERICANO SERIES',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Espresso, Apple, Peach'
  },

  // === SIGNATURE ===
  {
    id: 'sig-gummy-blue',
    name: 'Gummy Blue',
    category: 'signature-americano',
    groupName: 'SIGNATURE',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Blue Curacao, Strawberry, Creamy Foam',
    badge: 'Top Signature'
  },
  {
    id: 'sig-sun-berry',
    name: 'Sun Berry',
    category: 'signature-americano',
    groupName: 'SIGNATURE',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Strawberry, Orange, Soda, Nata De Coco'
  },
  {
    id: 'sig-purple-lagoon',
    name: 'Purple Lagoon',
    category: 'signature-americano',
    groupName: 'SIGNATURE',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Blue Curacao, Grape, Lychee, Soda, Nata De Coco'
  },
  {
    id: 'sig-pink-punch',
    name: 'Pink Punch',
    category: 'signature-americano',
    groupName: 'SIGNATURE',
    price: 23000,
    priceFormatted: '23K',
    ingredients: 'Strawberry, Orange, Pineapple, Soda'
  },

  // === RICE BOWL ===
  {
    id: 'rb-nasi-telur',
    name: 'Nasi Telur Saus Tiram',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 20000,
    priceFormatted: '20K',
    notes: 'Sajian praktis hemat & gurih'
  },
  {
    id: 'rb-ayam-sambal-matah',
    name: 'Ayam Sambal Matah',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 26000,
    priceFormatted: '26K',
    badge: 'Pedas Segar'
  },
  {
    id: 'rb-ayam-telur-asin',
    name: 'Ayam Telur Asin',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 26000,
    priceFormatted: '26K',
    notes: 'Saus salted egg creamy gurih'
  },
  {
    id: 'rb-ayam-cabe-garam',
    name: 'Ayam Cabe Garam',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 26000,
    priceFormatted: '26K',
    badge: 'Favorit Mahasiswa'
  },
  {
    id: 'rb-ayam-madu-mentega',
    name: 'Ayam Madu Mentega',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 26000,
    priceFormatted: '26K'
  },
  {
    id: 'rb-ayam-katsu',
    name: 'Ayam Katsu',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 28000,
    priceFormatted: '28K',
    notes: 'Katsu renyah dengan saus spesial'
  },
  {
    id: 'rb-beef-teriyaki',
    name: 'Beef Teriyaki',
    category: 'rice-bowl',
    groupName: 'RICE BOWL',
    price: 30000,
    priceFormatted: '30K',
    badge: 'Premium Bowl'
  },

  // === MEALS ===
  {
    id: 'm-sate-taichan',
    name: 'Sate Taichan',
    category: 'meals-pasta',
    groupName: 'MEALS',
    price: 28000,
    priceFormatted: '28K',
    badge: 'Best Seller Malam'
  },
  {
    id: 'm-ayam-goreng-ketumbar',
    name: 'Ayam Goreng Ketumbar',
    category: 'meals-pasta',
    groupName: 'MEALS',
    price: 28000,
    priceFormatted: '28K',
    badge: 'Menu Terkenal di Ulasan',
    notes: 'Ayam goreng berbumbu rempah ketumbar khas nusantara'
  },
  {
    id: 'm-nasi-goreng-hongkong',
    name: 'Nasi Goreng Hongkong',
    category: 'meals-pasta',
    groupName: 'MEALS',
    price: 28000,
    priceFormatted: '28K'
  },

  // === PASTA ===
  {
    id: 'p-mac-n-cheese',
    name: "Mac N' Chesse",
    category: 'meals-pasta',
    groupName: 'PASTA',
    price: 25000,
    priceFormatted: '25K',
    notes: 'Macaroni dengan lelehan keju creamy gurih'
  },
  {
    id: 'p-spaghetti-mushroom',
    name: 'Spaghetti Creamy Mushroom',
    category: 'meals-pasta',
    groupName: 'PASTA',
    price: 26000,
    priceFormatted: '26K'
  },
  {
    id: 'p-spaghetti-aglio-olio',
    name: "Spaghetti Aglio O'Lio",
    category: 'meals-pasta',
    groupName: 'PASTA',
    price: 26000,
    priceFormatted: '26K',
    notes: 'Pasta klasik gurih dengan aroma bawang & cabai'
  },

  // === SNACKS ===
  {
    id: 's-kentang-goreng',
    name: 'Kentang Goreng',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 18000,
    priceFormatted: '18K',
    notes: 'French fries renyah tabur garam gurih'
  },
  {
    id: 's-onion-ring',
    name: 'Onion Ring',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 18000,
    priceFormatted: '18K'
  },
  {
    id: 's-dimsum',
    name: 'Dimsum',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 18000,
    priceFormatted: '18K'
  },
  {
    id: 's-cireng',
    name: 'Cireng',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 20000,
    priceFormatted: '20K',
    notes: 'Cireng kenyal gurih dengan bumbu cocolan'
  },
  {
    id: 's-churros',
    name: 'Churros',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 20000,
    priceFormatted: '20K'
  },
  {
    id: 's-ropang',
    name: 'Ropang (Roti Panggang)',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 20000,
    priceFormatted: '20K',
    notes: 'Pilihan topping: Mix / Chocomaltine / Keju / Tiramisu'
  },
  {
    id: 's-waffle',
    name: 'Waffle',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 22000,
    priceFormatted: '22K'
  },
  {
    id: 's-mix-platter',
    name: 'Mix Platter',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 26000,
    priceFormatted: '26K',
    badge: 'Favorit Sharing Nugas',
    notes: 'Isi komplit: Nugget, Sosis, & Kentang'
  },
  {
    id: 's-chicken-wings',
    name: 'Chicken Wings',
    category: 'snacks',
    groupName: 'SNACKS',
    price: 26000,
    priceFormatted: '26K'
  }
];

export const MENU_CATEGORIES_TABS = [
  { id: 'all', label: 'Semua Menu (52)' },
  { id: 'coffee', label: 'Coffee (11)' },
  { id: 'non-coffee', label: 'Non Coffee & Jus (12)' },
  { id: 'signature-americano', label: 'Signature & Americano (7)' },
  { id: 'rice-bowl', label: 'Rice Bowl (7)' },
  { id: 'meals-pasta', label: 'Meals & Pasta (6)' },
  { id: 'snacks', label: 'Snacks (9)' }
];
