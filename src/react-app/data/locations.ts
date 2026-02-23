export interface LocationData {
  id: string;
  slug: string;
  state: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  cities: CityData[];
  keywords: string[];
  benefits: string[];
}

export interface CityData {
  name: string;
  slug: string;
  description: string;
}

export const tamilNaduData: LocationData = {
  id: "tamil-nadu",
  slug: "leggings-manufacturer-in-tamil-nadu",
  state: "Tamil Nadu",
  title: "Leggings Manufacturer in Tamil Nadu",
  metaTitle: "Best Leggings Manufacturer in Tamil Nadu | Viwin Leggings Tirupur",
  metaDescription: "Viwin Leggings - Leading leggings manufacturer in Tamil Nadu based in Tirupur. Premium chudidar, ankle, shimmer & cotton leggings. Wholesale & bulk orders for retailers.",
  heroTitle: "Premium Leggings Manufacturer",
  heroSubtitle: "in Tamil Nadu",
  description: "Viwin Leggings is Tamil Nadu's leading leggings manufacturer, proudly based in Tirupur - India's textile capital. With over a decade of manufacturing excellence, we supply premium quality leggings to retailers, boutiques, and wholesalers across the state.",
  cities: [
    { name: "Tirupur", slug: "tirupur-leggings-manufacturer", description: "Our manufacturing hub - direct factory prices with fastest delivery" },
    { name: "Chennai", slug: "chennai-leggings-supplier", description: "Major distribution center serving the capital region retailers" },
    { name: "Coimbatore", slug: "coimbatore-leggings-wholesale", description: "Strong wholesale network for textile businesses" },
    { name: "Madurai", slug: "madurai-leggings-dealer", description: "Reliable supply chain for southern Tamil Nadu" }
  ],
  keywords: [
    "Leggings Manufacturer in Tirupur",
    "Cotton Leggings Wholesale Tamil Nadu",
    "Chudidar Leggings Manufacturer",
    "Ankle Leggings Supplier Chennai",
    "Shimmer Leggings Dealer Coimbatore",
    "Hosiery Manufacturer Tamil Nadu",
    "Bulk Leggings Supplier TN"
  ],
  benefits: [
    "Direct factory prices from Tirupur",
    "Same-day dispatch for local orders",
    "Wide color range - 25+ options",
    "Low MOQ for small retailers",
    "Dedicated Tamil Nadu sales team"
  ]
};

export const andhraData: LocationData = {
  id: "andhra-pradesh",
  slug: "leggings-supplier-in-andhra-pradesh",
  state: "Andhra Pradesh",
  title: "Leggings Supplier in Andhra Pradesh",
  metaTitle: "Leggings Supplier in Andhra Pradesh | Wholesale Leggings Vijayawada",
  metaDescription: "Premium leggings supplier in Andhra Pradesh. Wholesale chudidar, ankle & cotton leggings for retailers in Vijayawada, Visakhapatnam, Guntur. Best prices from Tirupur.",
  heroTitle: "Trusted Leggings Supplier",
  heroSubtitle: "in Andhra Pradesh",
  description: "Viwin Leggings has established a strong wholesale distribution network across Andhra Pradesh. From our Tirupur manufacturing facility, we supply premium quality leggings to retailers and boutiques in all major AP cities with reliable delivery and competitive pricing.",
  cities: [
    { name: "Vijayawada", slug: "vijayawada-leggings-wholesale", description: "Central hub for AP wholesale distribution" },
    { name: "Visakhapatnam", slug: "visakhapatnam-leggings-supplier", description: "Serving coastal Andhra retail markets" },
    { name: "Guntur", slug: "guntur-leggings-dealer", description: "Strong presence in Guntur wholesale market" },
    { name: "Tirupati", slug: "tirupati-leggings-supplier", description: "Reliable supply for Rayalaseema region" }
  ],
  keywords: [
    "Leggings Wholesale in Vijayawada",
    "Leggings Supplier in Visakhapatnam",
    "Chudidar Leggings Dealer Andhra",
    "Cotton Leggings Manufacturer Andhra Pradesh",
    "Bulk Leggings Supplier AP",
    "Ladies Leggings Wholesale Andhra"
  ],
  benefits: [
    "Fast delivery to all AP districts",
    "Dedicated AP distributor network",
    "Telugu-speaking customer support",
    "Flexible payment terms",
    "Regular stock availability"
  ]
};

export const karnatakaData: LocationData = {
  id: "karnataka",
  slug: "leggings-wholesale-in-karnataka",
  state: "Karnataka",
  title: "Leggings Wholesale in Karnataka",
  metaTitle: "Leggings Wholesale in Karnataka | Bangalore Leggings Supplier",
  metaDescription: "Wholesale leggings in Karnataka from Viwin Leggings. Premium chudidar, ankle & shimmer leggings for Bangalore, Mysore retailers. Factory prices from Tirupur.",
  heroTitle: "Wholesale Leggings Supplier",
  heroSubtitle: "in Karnataka",
  description: "Viwin Leggings serves Karnataka's thriving retail market with premium quality leggings at wholesale prices. Our strong presence in Bangalore and major Karnataka cities ensures quick delivery and consistent quality for all your leggings requirements.",
  cities: [
    { name: "Bangalore", slug: "bangalore-leggings-wholesale", description: "Major distribution hub for Karnataka market" },
    { name: "Mysore", slug: "mysore-leggings-supplier", description: "Heritage city retail network coverage" },
    { name: "Hubli", slug: "hubli-leggings-dealer", description: "North Karnataka wholesale distribution" },
    { name: "Mangalore", slug: "mangalore-leggings-supplier", description: "Coastal Karnataka retail supply" }
  ],
  keywords: [
    "Leggings Wholesale in Bangalore",
    "Leggings Manufacturer in Karnataka",
    "Ladies Leggings Supplier Mysore",
    "Cotton Leggings Supplier Karnataka",
    "Ankle Leggings Wholesale Karnataka",
    "Bulk Leggings Dealer Bangalore"
  ],
  benefits: [
    "Next-day delivery to Bangalore",
    "Kannada-speaking support team",
    "Regular new collection updates",
    "Competitive wholesale rates",
    "Quality guarantee on all products"
  ]
};

export const keralaData: LocationData = {
  id: "kerala",
  slug: "leggings-wholesale-in-kerala",
  state: "Kerala",
  title: "Leggings Wholesale in Kerala",
  metaTitle: "Leggings Wholesale in Kerala | Cotton Leggings Supplier Kochi",
  metaDescription: "Premium leggings wholesale in Kerala. Trusted supplier for cotton, chudidar & shimmer leggings in Kochi, Trivandrum, Kozhikode. Best wholesale prices from Tirupur.",
  heroTitle: "Premium Leggings Wholesale",
  heroSubtitle: "in Kerala",
  description: "Viwin Leggings has become Kerala's preferred wholesale leggings supplier with our commitment to quality and service. We supply premium cotton, shimmer, and specialty leggings to boutiques and retailers across God's Own Country.",
  cities: [
    { name: "Kochi", slug: "kochi-leggings-wholesale", description: "Central Kerala distribution center" },
    { name: "Trivandrum", slug: "trivandrum-leggings-supplier", description: "South Kerala retail network" },
    { name: "Kozhikode", slug: "kozhikode-leggings-dealer", description: "Malabar region wholesale hub" },
    { name: "Thrissur", slug: "thrissur-leggings-supplier", description: "Cultural capital retail supply" }
  ],
  keywords: [
    "Leggings Wholesale in Kochi",
    "Cotton Leggings Supplier Kerala",
    "Chudidar Leggings Dealer Kerala",
    "Ankle Fit Leggings Wholesale Kerala",
    "Shimmer Leggings Supplier Kerala",
    "Ladies Leggings Bulk Order Kerala"
  ],
  benefits: [
    "Weekly shipments to Kerala",
    "Malayalam-speaking support",
    "Festival season priority stock",
    "Boutique-friendly small MOQ",
    "Premium cotton range preferred"
  ]
};

export const southIndiaData: LocationData = {
  id: "south-india",
  slug: "south-india-leggings-manufacturer",
  state: "South India",
  title: "South India Leggings Manufacturer",
  metaTitle: "Best Leggings Manufacturer in South India | Viwin Leggings Tirupur",
  metaDescription: "Viwin Leggings - South India's leading leggings manufacturer. Premium chudidar, ankle, shimmer & cotton leggings. Wholesale supplier for Tamil Nadu, Kerala, Karnataka & AP.",
  heroTitle: "South India's Trusted",
  heroSubtitle: "Leggings Manufacturer",
  description: "Viwin Leggings is the leading leggings manufacturer in South India, serving retailers and wholesalers across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh. Based in Tirupur, India's textile hub, we deliver premium quality leggings with pan-South India distribution.",
  cities: [
    { name: "Tamil Nadu", slug: "leggings-manufacturer-in-tamil-nadu", description: "Our home state with manufacturing facility in Tirupur" },
    { name: "Kerala", slug: "leggings-wholesale-in-kerala", description: "Growing network of boutique partners" },
    { name: "Karnataka", slug: "leggings-wholesale-in-karnataka", description: "Strong wholesale presence in Bangalore" },
    { name: "Andhra Pradesh", slug: "leggings-supplier-in-andhra-pradesh", description: "Expanding retail distribution network" }
  ],
  keywords: [
    "Best Leggings Manufacturer South India",
    "South India Leggings Wholesale Supplier",
    "Bulk Leggings Supplier South India",
    "Ladies Leggings Manufacturer South India",
    "Premium Cotton Leggings Supplier",
    "OEM Leggings Manufacturer India"
  ],
  benefits: [
    "Pan South India delivery network",
    "Multi-language customer support",
    "Largest color & style range",
    "Private labeling available",
    "Consistent quality guarantee"
  ]
};

export const allLocations = [tamilNaduData, andhraData, karnatakaData, keralaData, southIndiaData];
