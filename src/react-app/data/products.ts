export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  price?: number;
  sizes?: string[];
  colors?: {
    id: string;
    name: string;
    hex: string;
    image: string;
  }[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: ProductCategory[] = [
  {
    id: "chudidar",
    name: "Chudidar Leggings",
    slug: "chudidar-leggings",
    description: "Classic chudidar leggings with perfect fit and comfort for everyday wear",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop"
  },
  {
    id: "ankle",
    name: "Ankle Leggings",
    slug: "ankle-leggings",
    description: "Trendy ankle-length leggings perfect for casual and semi-formal occasions",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop"
  },
  {
    id: "pattiyala",
    name: "Pattiyala Leggings",
    slug: "pattiyala-leggings",
    description: "Traditional pattiyala style leggings with elegant pleats and comfortable fit",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&h=600&fit=crop"
  },
  {
    id: "shimmer",
    name: "Shimmer Leggings",
    slug: "shimmer-leggings",
    description: "Glamorous shimmer finish leggings for parties and special occasions",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop"
  },
  {
    id: "cotton",
    name: "Cotton Leggings",
    slug: "cotton-leggings",
    description: "Premium quality cotton leggings for maximum comfort and breathability",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop"
  },
  {
    id: "capri",
    name: "Capri Leggings",
    slug: "capri-leggings",
    description: "Stylish capri-length leggings ideal for workouts and casual wear",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=600&fit=crop"
  },
  {
    id: "cigar-pants",
    name: "Cigar Pants",
    slug: "cigar-pants",
    description: "Slim-fit cigar pants with a modern silhouette for formal and casual styling",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop"
  },
  {
    id: "yoga-shorts",
    name: "Yoga Shorts",
    slug: "yoga-shorts",
    description: "Comfortable and flexible yoga shorts for active lifestyle",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop"
  },
  {
    id: "printed-shorts",
    name: "Printed Shorts",
    slug: "printed-shorts",
    description: "Vibrant printed shorts with trendy patterns for casual wear",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop"
  },
  {
    id: "viscose",
    name: "Viscose Leggings",
    slug: "viscose-leggings",
    description: "Soft and stretchy viscose leggings with a silky smooth finish",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=600&fit=crop"
  },
  {
    id: "shaper",
    name: "Mermaid Shaper",
    slug: "mermaid-shaper",
    description: "Body-shaping leggings with our signature Mermaid Shaper technology",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
  },
  {
    id: "comfort",
    name: "Comfort Leggings",
    slug: "comfort-leggings",
    description: "Ultra-soft comfort leggings perfect for all-day wear at home or outside",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=600&fit=crop"
  }
];

export const products: Product[] = [
  {
    id: "viwin-chudidar-cotton",
    name: "Viwin Classic Chudidar",
    category: "chudidar",
    description: "Premium cotton chudidar leggings with reinforced stitching",
    features: ["100% Cotton", "Reinforced Waistband", "Perfect Fit"],
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&h=900&fit=crop",
    price: 799,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { id: "ruby", name: "Ruby", hex: "#E11D48", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?sig=1&w=900&h=900&fit=crop" },
      { id: "amber", name: "Amber", hex: "#F59E0B", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?sig=2&w=900&h=900&fit=crop" },
      { id: "teal", name: "Teal", hex: "#0EA5A4", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?sig=3&w=900&h=900&fit=crop" },
      { id: "indigo", name: "Indigo", hex: "#2563EB", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?sig=4&w=900&h=900&fit=crop" },
      { id: "emerald", name: "Emerald", hex: "#10B981", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?sig=5&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-ankle-stretch",
    name: "Viwin Ankle Fit",
    category: "ankle",
    description: "Stretchable ankle-length leggings with perfect fit",
    features: ["4-Way Stretch", "Skin-Friendly Fabric", "Flattering Fit"],
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&h=900&fit=crop",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { id: "ebony", name: "Ebony", hex: "#111827", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?sig=1&w=900&h=900&fit=crop" },
      { id: "slate", name: "Slate", hex: "#6B7280", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?sig=2&w=900&h=900&fit=crop" },
      { id: "graphite", name: "Graphite", hex: "#374151", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?sig=3&w=900&h=900&fit=crop" },
      { id: "silver", name: "Silver", hex: "#9CA3AF", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?sig=4&w=900&h=900&fit=crop" },
      { id: "cloud", name: "Cloud", hex: "#F3F4F6", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?sig=5&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-shimmer-gold",
    name: "Viwin Shimmer",
    category: "shimmer",
    description: "Eye-catching shimmer leggings for festive occasions",
    features: ["Metallic Finish", "Party Wear", "Multiple Shades"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&h=900&fit=crop",
    price: 1199,
    sizes: ["S", "M", "L"],
    colors: [
      { id: "champagne", name: "Champagne", hex: "#FDE68A", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?sig=1&w=900&h=900&fit=crop" },
      { id: "rose", name: "Rose", hex: "#FBCFE8", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?sig=2&w=900&h=900&fit=crop" },
      { id: "pearl", name: "Pearl", hex: "#F9FAFB", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?sig=3&w=900&h=900&fit=crop" },
      { id: "blush", name: "Blush", hex: "#FCA5A5", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?sig=4&w=900&h=900&fit=crop" },
      { id: "silver-sheen", name: "Silver Sheen", hex: "#CBD5E1", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?sig=5&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-premium-cotton",
    name: "Viwin Premium Cotton",
    category: "cotton",
    description: "Breathable cotton leggings for daily comfort",
    features: ["Premium Cotton Blend", "Breathable", "All-Day Comfort"],
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&h=900&fit=crop",
    price: 699,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { id: "orange", name: "Orange", hex: "#F97316", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?sig=1&w=900&h=900&fit=crop" },
      { id: "fuchsia", name: "Fuchsia", hex: "#F43F5E", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?sig=2&w=900&h=900&fit=crop" },
      { id: "violet", name: "Violet", hex: "#7C3AED", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?sig=3&w=900&h=900&fit=crop" },
      { id: "cyan", name: "Cyan", hex: "#06B6D4", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?sig=4&w=900&h=900&fit=crop" },
      { id: "lime", name: "Lime", hex: "#84CC16", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?sig=5&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-pattiyala",
    name: "Viwin Pattiyala",
    category: "pattiyala",
    description: "Traditional pattiyala style leggings with elegant pleats and comfortable fit",
    features: ["Elastic Pleats", "Durable Stitching", "Hand-Finish"],
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&h=900&fit=crop",
    price: 859,
    sizes: ["S", "M", "L"],
    colors: [
      { id: "maroon", name: "Maroon", hex: "#B91C1C", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?sig=1&w=900&h=900&fit=crop" },
      { id: "rust", name: "Rust", hex: "#C2410C", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?sig=2&w=900&h=900&fit=crop" },
      { id: "bronze", name: "Bronze", hex: "#92400E", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?sig=3&w=900&h=900&fit=crop" },
      { id: "amber-dark", name: "Amber Dark", hex: "#a16207", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?sig=4&w=900&h=900&fit=crop" },
      { id: "copper", name: "Copper", hex: "#92400E", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?sig=5&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-capri-active",
    name: "Viwin Active Capri",
    category: "capri",
    description: "Sporty capri leggings for active women",
    features: ["Quick Dry", "Flexible Movement", "Workout Ready"],
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=900&h=900&fit=crop",
    price: 749,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { id: "midnight", name: "Midnight", hex: "#111827", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?sig=1&w=900&h=900&fit=crop" },
      { id: "slate-blue", name: "Slate Blue", hex: "#4B5563", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?sig=2&w=900&h=900&fit=crop" },
      { id: "steel", name: "Steel", hex: "#6B7280", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?sig=3&w=900&h=900&fit=crop" },
      { id: "mist", name: "Mist", hex: "#9CA3AF", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?sig=4&w=900&h=900&fit=crop" },
      { id: "pearl-gray", name: "Pearl Gray", hex: "#D1D5DB", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?sig=5&w=900&h=900&fit=crop" }
    ]
  }
  ,
  {
    id: "viwin-cigar-pants",
    name: "Viwin Cigar Pants",
    category: "cigar-pants",
    description: "Slim-fit cigar pants with modern silhouette suitable for formal and casual wear",
    features: ["Slim Fit", "Comfort Waist", "Tapered Leg"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&h=900&fit=crop",
    price: 1299,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { id: "black", name: "Black", hex: "#0F172A", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?sig=1&w=900&h=900&fit=crop" },
      { id: "charcoal", name: "Charcoal", hex: "#334155", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?sig=2&w=900&h=900&fit=crop" },
      { id: "navy", name: "Navy", hex: "#1E293B", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?sig=3&w=900&h=900&fit=crop" },
      { id: "olive", name: "Olive", hex: "#556B2F", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?sig=4&w=900&h=900&fit=crop" },
      { id: "tan", name: "Tan", hex: "#C19A6B", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?sig=5&w=900&h=900&fit=crop" },
      { id: "stone", name: "Stone", hex: "#D1D5DB", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?sig=6&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-yoga-shorts",
    name: "Viwin Yoga Shorts",
    category: "yoga-shorts",
    description: "Ultra-comfortable shorts for yoga and fitness",
    features: ["Moisture Wicking", "High Waist", "Non-See-Through"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&h=900&fit=crop",
    price: 449,
    sizes: ["S", "M", "L"],
    colors: [
      { id: "coral", name: "Coral", hex: "#FB7185", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?sig=1&w=900&h=900&fit=crop" },
      { id: "teal", name: "Teal", hex: "#14B8A6", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?sig=2&w=900&h=900&fit=crop" },
      { id: "plum", name: "Plum", hex: "#7C3AED", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?sig=3&w=900&h=900&fit=crop" },
      { id: "sun", name: "Sun", hex: "#F59E0B", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?sig=4&w=900&h=900&fit=crop" },
      { id: "midnight", name: "Midnight", hex: "#0F172A", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?sig=5&w=900&h=900&fit=crop" }
    ]
  },
  {
    id: "viwin-mermaid-shaper",
    name: "Viwin Mermaid Shaper",
    category: "shaper",
    description: "Body-shaping leggings with signature Mermaid Shaper technology",
    features: ["Tummy Control", "Seamless Design", "Sculpting Fit"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop",
    price: 1499,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { id: "black-sheen", name: "Black Sheen", hex: "#0B1220", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?sig=1&w=900&h=900&fit=crop" },
      { id: "rose-gold", name: "Rose Gold", hex: "#F4C7C3", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?sig=2&w=900&h=900&fit=crop" },
      { id: "midnight-blue", name: "Midnight Blue", hex: "#1E3A8A", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?sig=3&w=900&h=900&fit=crop" },
      { id: "olive-sheen", name: "Olive Sheen", hex: "#556B2F", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?sig=4&w=900&h=900&fit=crop" },
      { id: "platinum", name: "Platinum", hex: "#E6E9EE", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?sig=5&w=900&h=900&fit=crop" },
      { id: "burgundy", name: "Burgundy", hex: "#7F1D1D", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?sig=6&w=900&h=900&fit=crop" }
    ]
  }
];

export const regions = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    cities: ["Tirupur", "Chennai", "Coimbatore", "Madurai"],
    description: "Our home base - manufacturing hub in Tirupur with distribution across Tamil Nadu"
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    cities: ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati"],
    description: "Strong wholesale network across major cities in Andhra Pradesh"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    slug: "karnataka",
    cities: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
    description: "Growing presence in Karnataka's retail and wholesale markets"
  },
  {
    id: "kerala",
    name: "Kerala",
    slug: "kerala",
    cities: ["Kochi", "Trivandrum", "Kozhikode", "Thrissur"],
    description: "Trusted supplier for boutiques and retailers across Kerala"
  }
];
