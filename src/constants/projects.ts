export type FeaturedProject = {
  slug: string;
  title: string;
  role: string[];
  projectName: string;
  category: string;
  description: string;
  /** Must be a flat rectangular mockup — CSS handles tilt off-center */
  coverImage: string;
  featured: boolean;
  active?: boolean;
};

export type PlaygroundProject = {
  slug: string;
  title: string;
  height: number;
  column: 1 | 2 | 3 | 4;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "cleaning-service",
    title: "Cleaning Service",
    role: ["UI Designer"],
    projectName: "Cleaning Service",
    category: "Cleaning Service",
    description:
      "Designed a clear and trustworthy cleaning service experience focused on easy service discovery, transparent pricing, and seamless booking.",
    coverImage: "/assets/portrait.png",
    featured: false,
  },
  {
    slug: "travel-booking-platform",
    title: "Travel Booking Platform",
    role: ["UI Designer"],
    projectName: "Travel Booking",
    category: "Travel Booking Platform",
    description:
      "Bringing curated destinations and personalized journeys together in one place.",
    coverImage: "/assets/raw-3.png",
    featured: false,
  },
  {
    slug: "prescribed-it",
    title: "Healthcare Consultation Platform",
    role: ["UI Designer", "Lead Designer"],
    projectName: "Prescribed It",
    category: "Healthcare Consultation Platform",
    description:
      "Designed a clear, intuitive healthcare experience connecting users with pharmacists through seamless video consultations.",
    coverImage: "/assets/prescribed-mockup.png",
    featured: true,
    active: true,
  },
  {
    slug: "food-ordering-experience",
    title: "Food Ordering Experience",
    role: ["UI Designer"],
    projectName: "Food Ordering",
    category: "Food Ordering Experience",
    description:
      "A bold digital experience built around cravings, easy menu discovery, and effortless ordering.",
    coverImage: "/assets/raw-6.png",
    featured: false,
  },
  {
    slug: "product-giveaway-page",
    title: "Product Giveaway Page",
    role: ["UI Designer"],
    projectName: "Product Giveaway",
    category: "Product Giveaway Page",
    description:
      "A high-converting giveaway experience designed to capture attention, build excitement, and drive participation.",
    coverImage: "/assets/featured-project.png",
    featured: false,
  },
];

/** Figma Play Ground masonry: 4 columns with exact heights */
export const playgroundProjects: PlaygroundProject[] = [
  { slug: "fogbox", title: "Fogbox", height: 313, column: 1 },
  { slug: "as-subah-academy", title: "As-Subah Academy", height: 516, column: 1 },
  { slug: "studyshathi", title: "StudyShathi", height: 430, column: 1 },
  { slug: "autocraft", title: "Autocraft", height: 516, column: 2 },
  { slug: "as-subah-outreach", title: "As-Subah Outreach", height: 267, column: 2 },
  { slug: "kode-by-kraft", title: "Kode By Kraft", height: 313, column: 2 },
  { slug: "focusely", title: "Focusely", height: 267, column: 3 },
  { slug: "sharifa-legal", title: "Sharifa Legal", height: 430, column: 3 },
  { slug: "meridian-academy", title: "Meridian Academy", height: 516, column: 3 },
  { slug: "holborn-clinic", title: "Holborn Clinic", height: 430, column: 4 },
  { slug: "home-rent", title: "Home Rent", height: 313, column: 4 },
  { slug: "school-management-app", title: "School Management App", height: 430, column: 4 },
];

export type PortfolioCaseStudy = {
  slug: string;
  title: string;
  coverImage: string;
  summary: string;
  details: string;
  about: string;
  /** Live site — Feature Projects opens this instead of an internal detail page. */
  liveUrl?: string;
};

export type PortfolioListProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  /** Live site — All Projects opens this instead of an internal detail page. */
  liveUrl?: string;
};

export const portfolioCaseStudies: PortfolioCaseStudy[] = [
  {
    slug: "govuno",
    title: "Govuno",
    coverImage: "/assets/project-govuno.png",
    liveUrl: "https://govuno.com/",
    summary:
      "Designed a structured digital governance experience for Govuno, helping boards, family businesses, and organisations manage meetings, decisions, and critical documents through a secure and intuitive platform. The design focuses on clarity, professionalism, and simplifying complex governance workflows.",
    details:
      "The platform brings together meeting management, board packs, voting, document handling, digital signatures, and contract workflows. Bilingual support for Arabic and English, combined with organised layouts and clear navigation, helps make essential governance tasks easier to manage.",
    about:
      "Govuno is a digital governance and contracts platform developed by Kode by Kraft for organisations in Saudi Arabia and the UAE. The project focuses on creating a secure, accessible, and regionally relevant experience that supports transparent decision-making, organised board operations, and long-term organisational continuity.",
  },
  {
    slug: "crafted-routes",
    title: "Crafted Routes",
    coverImage: "/assets/project-crafted-routes.png",
    liveUrl: "https://craftedroutes.co.uk/",
    summary:
      "Designed a travel-focused digital experience for Crafted Routes, making it easier for travellers to discover guided London walking tours and curated day trips. The design combines destination-led imagery, clear tour information, and intuitive navigation to make exploring and choosing experiences effortless.",
    details:
      "The website features curated tour listings, detailed itineraries, transparent pricing, an interactive booking system, and travel guides. The booking journey simplifies date selection, ticket choices, and checkout, helping users plan their experiences with greater confidence.",
    about:
      "Crafted Routes offers small-group walking tours across London and day trips to destinations such as the Peak District. The project focuses on simplifying tour discovery and reservations through a user-friendly interface, transparent information, and a streamlined booking experience.",
  },
  {
    slug: "north-gate-motor-group",
    title: "North Gate Motor Group",
    coverImage: "/assets/project-north-gate.png",
    liveUrl: "https://www.northgatemotorgroup.com/",
    summary:
      "Designed a professional website for North Gate Motor Group, presenting its accident claim management and vehicle replacement services through a bold visual identity, structured layouts, and clear, service-focused messaging.",
    details:
      "The website features accident claim guidance, a step-by-step claims process, vehicle replacement services, insurance comparisons, and an FAQ section. The design prioritizes clarity and accessibility, helping users understand their options and find the right support during a stressful situation.",
    about:
      "North Gate Motor Group provides accident claim management and vehicle replacement services for drivers across the UK. The project focuses on building a trustworthy digital experience that simplifies complex claims information and helps users navigate the support process with confidence.",
  },
  {
    slug: "prescribed-it",
    title: "Prescribed It",
    coverImage: "/assets/project-prescribed-it.png",
    liveUrl: "https://prescribedit.com/",
    summary:
      "Designed a user-friendly digital healthcare experience for Prescribed It, connecting users with UK-registered pharmacists through accessible online consultations. The design focuses on building trust, simplifying healthcare navigation, and making professional guidance easier to access.",
    details:
      "The website features dedicated healthcare services, consultation booking, step-by-step guidance, and clear information about treatment options and pricing. Each section is designed to help users understand the process, explore relevant services, and feel confident about their next steps.",
    about:
      "Prescribed It is an online healthcare service offering pharmacist-led consultations for weight management, men's health, and travel-related healthcare. The project focused on translating a professional clinical service into a clear, trustworthy digital experience while making healthcare information and consultation journeys easier to navigate.",
  },
  {
    slug: "kits-cartel",
    title: "Kits Cartel",
    coverImage: "/assets/project-kits-cartel.jpg",
    summary:
      "Designed a focused e-commerce experience for Kits Cartel, bringing football kits, activewear, and teamwear into a bold yet structured digital storefront. The design combines strong editorial typography, product-focused layouts, and clear navigation to create a shopping experience that feels energetic without compromising usability.",
    details:
      "The website features curated product collections, club-based discovery, promotional sections, teamwear services, and a dedicated custom-kit request journey. Each section is designed to make browsing more intuitive while maintaining a consistent visual identity across the experience.",
    about:
      "Kits Cartel is a football-focused retailer offering replica kits, training wear, activewear, accessories, and custom teamwear. The project focused on translating the brand’s energetic football identity into a distinctive digital shopping experience while keeping product discovery and purchasing straightforward.",
  },
];

export const portfolioAllProjects: PortfolioListProject[] = [
  {
    slug: "autocraft",
    title: "Autocraft",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://supreme-autocraft.vercel.app/",
  },
  {
    slug: "fogbox",
    title: "Fogbox",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://fogbox.co.uk/",
  },
  {
    slug: "sharifa-legal",
    title: "Sharifa Legal",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://sharifilegal.co.uk/",
  },
  {
    slug: "as-subah-academy",
    title: "As-Subah Academy",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://www.assubah.com/",
  },
  {
    slug: "as-subah-outreach",
    title: "As-Subah Outreach",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://assubahoutreach.com/",
  },
  {
    slug: "wingz-box",
    title: "wingz Box",
    category: "UX Research & UI Design",
    year: "2026",
    liveUrl: "https://wings-box.up.railway.app/",
  },
  {
    slug: "peptide",
    title: "Peptide",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://peptide.up.railway.app/giveaway",
  },
  {
    slug: "holborn-clinic",
    title: "Holborn Clinic",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://holbornclinic.com/",
  },
  {
    slug: "photographic",
    title: "Photographic",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://www.directedbysamirul.co.uk/",
  },
  {
    slug: "aj-cleaning",
    title: "Aj cleaning",
    category: "UI Design",
    year: "2026",
    liveUrl: "https://aj-cleaning-london.vercel.app/",
  },
];

export const playgroundIntro =
  "A selection of projects I’ve worked on across different products, platforms, and industries. Each one is an opportunity to solve real problems, explore thoughtful ideas, and create digital experiences that feel simple and purposeful.";

export const heroIntro =
  "I craft thoughtful digital experiences where strategy, usability, and visual design come together. By turning complex problems into clear and intuitive solutions, I design products that feel effortless to navigate, purposeful to use, and memorable to experience.";

export const heroMarqueeItems = [
  "UI/UX DESIGN",
  "PRODUCT DESIGN",
  "USER RESEARCH",
  "USABILITY TESTING",
  "DESIGN SYSTEMS",
  "INTERACTION DESIGN",
] as const;

export function getProjectBySlug(slug: string) {
  return (
    featuredProjects.find((project) => project.slug === slug) ??
    playgroundProjects.find((project) => project.slug === slug)
  );
}
