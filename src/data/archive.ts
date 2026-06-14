export interface ArchiveRecord {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

export const archiveRecords: ArchiveRecord[] = [
  // FOOTBALL

  {
    id: "001",
    slug: "football-culture",
    title: "Football Culture",
    category: "Football",
    year: "2026",
    image: "/archive/001.jpg",
    description: "Exploring the intersection of football, fashion, luxury and global culture.",
    tags: ["football", "fashion", "luxury"],
  },

  {
    id: "002",
    slug: "womens-football",
    title: "Women's Football",
    category: "Football",
    year: "2026",
    image: "/archive/002.jpg",
    description: "The rise of women's football as a cultural and commercial force.",
    tags: ["football", "women", "culture"],
  },

  {
    id: "003",
    slug: "ultras-fan-culture",
    title: "Ultras & Fan Culture",
    category: "Football",
    year: "2026",
    image: "/archive/003.jpg",
    description: "Examining supporter identity, ritual and community.",
    tags: ["football", "fans"],
  },

  {
    id: "004",
    slug: "football-fashion",
    title: "Football Fashion",
    category: "Football",
    year: "2026",
    image: "/archive/004.jpg",
    description: "The influence of football aesthetics on luxury fashion.",
    tags: ["football", "fashion"],
  },

  {
    id: "005",
    slug: "football-media",
    title: "Football Media",
    category: "Football",
    year: "2026",
    image: "/archive/005.jpg",
    description: "Media ecosystems surrounding global football culture.",
    tags: ["football", "media"],
  },

  {
    id: "006",
    slug: "football-sponsorships",
    title: "Football Sponsorships",
    category: "Football",
    year: "2026",
    image: "/archive/006.jpg",
    description: "Commercial partnerships driving football growth.",
    tags: ["football", "commerce"],
  },

  // ATHLETICS

  {
    id: "007",
    slug: "luxury-athletics",
    title: "Luxury Athletics",
    category: "Athletics",
    year: "2026",
    image: "/archive/007.jpg",
    description: "Performance culture entering the luxury landscape.",
    tags: ["luxury", "sport"],
  },

  {
    id: "008",
    slug: "performance-luxury",
    title: "Performance Luxury",
    category: "Athletics",
    year: "2026",
    image: "/archive/008.jpg",
    description: "Luxury brands embracing performance technologies.",
    tags: ["luxury", "performance"],
  },

  {
    id: "009",
    slug: "luxury-running",
    title: "Luxury Running",
    category: "Athletics",
    year: "2026",
    image: "/archive/009.jpg",
    description: "The premiumization of running culture.",
    tags: ["running", "luxury"],
  },

  {
    id: "010",
    slug: "tennis-culture",
    title: "Tennis Culture",
    category: "Athletics",
    year: "2026",
    image: "/archive/010.jpg",
    description: "Tennis as a luxury lifestyle ecosystem.",
    tags: ["tennis", "sport"],
  },

  {
    id: "011",
    slug: "golf-luxury",
    title: "Golf Luxury",
    category: "Athletics",
    year: "2026",
    image: "/archive/011.jpg",
    description: "Golf's evolution into a luxury cultural space.",
    tags: ["golf", "luxury"],
  },

  {
    id: "012",
    slug: "recovery-wellness",
    title: "Recovery & Wellness",
    category: "Athletics",
    year: "2026",
    image: "/archive/012.jpg",
    description: "Recovery systems shaping modern athletic lifestyles.",
    tags: ["wellness", "performance"],
  },

  // WOMEN

  {
    id: "013",
    slug: "womens-sportswear",
    title: "Women's Sportswear",
    category: "Women",
    year: "2026",
    image: "/archive/013.jpg",
    description: "The future of women's performance apparel.",
    tags: ["women", "sportswear"],
  },

  {
    id: "014",
    slug: "womens-performance-apparel",
    title: "Women's Performance Apparel",
    category: "Women",
    year: "2026",
    image: "/archive/014.jpg",
    description: "Innovation across women's athletic wear.",
    tags: ["women", "apparel"],
  },

  {
    id: "015",
    slug: "female-athlete-influence",
    title: "Female Athlete Influence",
    category: "Women",
    year: "2026",
    image: "/archive/015.jpg",
    description: "Athletes reshaping global consumer culture.",
    tags: ["women", "athletes"],
  },

  {
    id: "016",
    slug: "beauty-athletics",
    title: "Beauty & Athletics",
    category: "Women",
    year: "2026",
    image: "/archive/016.jpg",
    description: "Where beauty culture meets sport performance.",
    tags: ["beauty", "sport"],
  },

  {
    id: "017",
    slug: "luxury-activewear",
    title: "Luxury Activewear",
    category: "Women",
    year: "2026",
    image: "/archive/017.jpg",
    description: "Premium activewear redefining luxury dressing.",
    tags: ["luxury", "activewear"],
  },

  {
    id: "018",
    slug: "future-female-consumer",
    title: "Future Female Consumer",
    category: "Women",
    year: "2026",
    image: "/archive/018.jpg",
    description: "Behavioral shifts among future female audiences.",
    tags: ["consumer", "women"],
  },

  // FORMULA ONE

  {
    id: "019",
    slug: "formula-one",
    title: "Formula One",
    category: "Formula One",
    year: "2026",
    image: "/archive/019.jpg",
    description: "Formula One as a luxury entertainment platform.",
    tags: ["f1", "luxury"],
  },

  {
    id: "020",
    slug: "motorsport-luxury",
    title: "Motorsport Luxury",
    category: "Formula One",
    year: "2026",
    image: "/archive/020.jpg",
    description: "Luxury culture inside motorsport ecosystems.",
    tags: ["motorsport", "luxury"],
  },

  {
    id: "021",
    slug: "driver-branding",
    title: "Driver Branding",
    category: "Formula One",
    year: "2026",
    image: "/archive/021.jpg",
    description: "Athlete branding in modern motorsport.",
    tags: ["branding", "motorsport"],
  },

  {
    id: "022",
    slug: "paddock-culture",
    title: "Paddock Culture",
    category: "Formula One",
    year: "2026",
    image: "/archive/022.jpg",
    description: "Fashion, hospitality and commerce in the paddock.",
    tags: ["f1", "culture"],
  },

  {
    id: "023",
    slug: "formula-one-commerce",
    title: "Formula One Commerce",
    category: "Formula One",
    year: "2026",
    image: "/archive/023.jpg",
    description: "Business models powering Formula One growth.",
    tags: ["f1", "commerce"],
  },

  {
    id: "024",
    slug: "future-motorsport-fashion",
    title: "Future Motorsport Fashion",
    category: "Formula One",
    year: "2026",
    image: "/archive/024.jpg",
    description: "The future relationship between fashion and racing.",
    tags: ["motorsport", "fashion"],
  },

  // BEAUTY

  {
    id: "025",
    slug: "luxury-beauty",
    title: "Luxury Beauty",
    category: "Beauty",
    year: "2026",
    image: "/archive/025.jpg",
    description: "Luxury beauty's role in modern culture.",
    tags: ["beauty", "luxury"],
  },

  {
    id: "026",
    slug: "fragrance-culture",
    title: "Fragrance Culture",
    category: "Beauty",
    year: "2026",
    image: "/archive/026.jpg",
    description: "The cultural power of fragrance brands.",
    tags: ["fragrance", "beauty"],
  },

  {
    id: "027",
    slug: "editorial-beauty",
    title: "Editorial Beauty",
    category: "Beauty",
    year: "2026",
    image: "/archive/027.jpg",
    description: "Beauty imagery shaping aspiration.",
    tags: ["beauty", "editorial"],
  },

  {
    id: "028",
    slug: "beauty-technology",
    title: "Beauty Technology",
    category: "Beauty",
    year: "2026",
    image: "/archive/028.jpg",
    description: "Technology transforming beauty experiences.",
    tags: ["beauty", "technology"],
  },

  {
    id: "029",
    slug: "beauty-retail",
    title: "Beauty Retail",
    category: "Beauty",
    year: "2026",
    image: "/archive/029.jpg",
    description: "Future retail models within beauty.",
    tags: ["beauty", "retail"],
  },

  {
    id: "030",
    slug: "future-beauty-systems",
    title: "Future Beauty Systems",
    category: "Beauty",
    year: "2026",
    image: "/archive/030.jpg",
    description: "The next decade of beauty innovation.",
    tags: ["beauty", "future"],
  },

  // STREETWEAR

  {
    id: "031",
    slug: "streetwear-culture",
    title: "Streetwear Culture",
    category: "Streetwear",
    year: "2026",
    image: "/archive/031.jpg",
    description: "Global streetwear ecosystems and influence.",
    tags: ["streetwear"],
  },

  {
    id: "032",
    slug: "contemporary-luxury",
    title: "Contemporary Luxury",
    category: "Streetwear",
    year: "2026",
    image: "/archive/032.jpg",
    description: "Modern luxury beyond heritage fashion.",
    tags: ["luxury"],
  },

  {
    id: "033",
    slug: "creative-collectives",
    title: "Creative Collectives",
    category: "Streetwear",
    year: "2026",
    image: "/archive/033.jpg",
    description: "Communities driving creative innovation.",
    tags: ["creative"],
  },

  {
    id: "034",
    slug: "emerging-labels",
    title: "Emerging Labels",
    category: "Streetwear",
    year: "2026",
    image: "/archive/034.jpg",
    description: "Next-generation independent fashion labels.",
    tags: ["fashion"],
  },

  {
    id: "035",
    slug: "global-street-culture",
    title: "Global Street Culture",
    category: "Streetwear",
    year: "2026",
    image: "/archive/035.jpg",
    description: "Street culture across global markets.",
    tags: ["streetwear"],
  },

  {
    id: "036",
    slug: "community-building",
    title: "Community Building",
    category: "Streetwear",
    year: "2026",
    image: "/archive/036.jpg",
    description: "The importance of communities in modern brands.",
    tags: ["community"],
  },

  // RETAIL

  {
    id: "037",
    slug: "future-retail",
    title: "Future Retail",
    category: "Retail",
    year: "2026",
    image: "/archive/037.jpg",
    description: "The next generation of retail experiences.",
    tags: ["retail"],
  },

  {
    id: "038",
    slug: "luxury-commerce",
    title: "Luxury Commerce",
    category: "Retail",
    year: "2026",
    image: "/archive/038.jpg",
    description: "Commerce systems shaping luxury brands.",
    tags: ["commerce"],
  },

  {
    id: "039",
    slug: "digital-luxury",
    title: "Digital Luxury",
    category: "Retail",
    year: "2026",
    image: "/archive/039.jpg",
    description: "Luxury's transition into digital ecosystems.",
    tags: ["digital", "luxury"],
  },

  {
    id: "040",
    slug: "direct-to-consumer",
    title: "Direct To Consumer",
    category: "Retail",
    year: "2026",
    image: "/archive/040.jpg",
    description: "DTC strategies for future luxury brands.",
    tags: ["commerce"],
  },

  {
    id: "041",
    slug: "omnichannel-experiences",
    title: "Omnichannel Experiences",
    category: "Retail",
    year: "2026",
    image: "/archive/041.jpg",
    description: "Integrated retail experiences across channels.",
    tags: ["retail"],
  },

  {
    id: "042",
    slug: "retail-intelligence",
    title: "Retail Intelligence",
    category: "Retail",
    year: "2026",
    image: "/archive/042.jpg",
    description: "Data-driven retail decision systems.",
    tags: ["retail", "data"],
  },

  // HOSPITALITY

  {
    id: "043",
    slug: "luxury-hospitality",
    title: "Luxury Hospitality",
    category: "Hospitality",
    year: "2026",
    image: "/archive/043.jpg",
    description: "Hospitality as a luxury ecosystem.",
    tags: ["hospitality"],
  },

  {
    id: "044",
    slug: "hotel-culture",
    title: "Hotel Culture",
    category: "Hospitality",
    year: "2026",
    image: "/archive/044.jpg",
    description: "Hotels shaping modern luxury experiences.",
    tags: ["hotel"],
  },

  {
    id: "045",
    slug: "destination-branding",
    title: "Destination Branding",
    category: "Hospitality",
    year: "2026",
    image: "/archive/045.jpg",
    description: "Building desire around destinations.",
    tags: ["branding"],
  },

  {
    id: "046",
    slug: "experience-economy",
    title: "Experience Economy",
    category: "Hospitality",
    year: "2026",
    image: "/archive/046.jpg",
    description: "Experiences becoming the ultimate luxury.",
    tags: ["experience"],
  },

  {
    id: "047",
    slug: "luxury-wellness",
    title: "Luxury Wellness",
    category: "Hospitality",
    year: "2026",
    image: "/archive/047.jpg",
    description: "Wellness as a luxury growth sector.",
    tags: ["wellness"],
  },

  {
    id: "048",
    slug: "future-lifestyle-systems",
    title: "Future Lifestyle Systems",
    category: "Hospitality",
    year: "2026",
    image: "/archive/048.jpg",
    description: "The convergence of luxury, technology and lifestyle.",
    tags: ["future", "lifestyle"],
  },
];