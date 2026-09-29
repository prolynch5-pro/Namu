export type MenuCategoryType = 
  | 'all'
  | 'coffee'
  | 'non-coffee'
  | 'signature-americano'
  | 'rice-bowl'
  | 'meals-pasta'
  | 'snacks';

export interface OfficialMenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  groupName: 'COFFEE' | 'NON COFFEE' | 'AMERICANO SERIES' | 'SIGNATURE' | 'RICE BOWL' | 'MEALS' | 'PASTA' | 'SNACKS';
  price: number;
  priceFormatted: string; // e.g. "20K"
  servingTemp?: 'HOT / ICE' | 'ICE';
  ingredients?: string;
  notes?: string;
  badge?: string;
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
