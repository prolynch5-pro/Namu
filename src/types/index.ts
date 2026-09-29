export interface MenuItem {
  id: string;
  name: string;
  category: 'kopi' | 'non-kopi' | 'makanan' | 'camilan';
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  tags?: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  authorSubtitle: string;
  avatarText: string;
  avatarColor: string;
  rating: number;
  timeAgo: string;
  isNew?: boolean;
  content: string;
  tags: string[];
  likes: number;
  ownerReply?: {
    timeAgo: string;
    text: string;
  };
}

export interface PopularHour {
  hour: string;
  percentage: number;
  label: string;
}
