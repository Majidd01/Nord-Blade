export const siteConfig = {
  name: "NORDBLADE",
  tagline: "Partnership · Craft · Growth",
  description:
    "Premium knife manufacturing and brand growth partner. Launch, manufacture, and scale knife brands with NORDBLADE.",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "923240000002",
  whatsappDisplay: "+92 324 0000002",
  email: "hello@nordblade.com",
  emailShipping: "shipping@nordblade.com",
  phoneUK: "+44 7405 012119",
  phone: "+44 7405 012119",
  phoneAlt: "+92 324 0000002",
  registration: "Registered in England & Wales",
  manufacturing: "Sialkot, Pakistan",
  address: "Sialkot, Pakistan",
  hoursDays: "Monday – Friday",
  hoursTime: "09:00 AM – 06:00 PM (UK Time)",
  hours: "Monday – Friday, 09:00 AM – 06:00 PM (UK Time)",
  investmentNote: "$5,000",
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const headerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/oem-manufacturing", label: "OEM Manufacturing" },
  { href: "/launch-your-brand", label: "Launch Your Brand" },
  { href: "/grow-your-brand", label: "Grow Your Brand" },
  { href: "/partner-program", label: "Partner Program" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/launch-your-brand", label: "Launch Your Brand" },
  { href: "/oem-manufacturing", label: "OEM Manufacturing" },
  { href: "/grow-your-brand", label: "Grow Your Brand" },
  { href: "/partner-program", label: "Partner Program" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const partnerProgram = {
  href: "/partner-program",
  message:
    "Hi NORDBLADE, I'm interested in the Partner Program and would like to discuss investment.",
  minInvestment: "$5,000",
  heroEyebrow: "Together. Stronger. Legacy.",
  heroTitleWhite: "Become a Partner.",
  heroTitleGold: "Build a Legacy Together.",
  heroDescription:
    "A structured investment partnership for people who want to build a premium knife brand without running manufacturing themselves. You invest — we manage product, production, branding, and growth. Profits are shared 50/50.",
  heroHighlights: [
    {
      title: "You Invest",
      description: "Capital from $5,000 with a clear partnership structure.",
      icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    },
    {
      title: "We Manage Everything",
      description: "Research, manufacturing, branding, and sales handled by us.",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Shared Profits",
      description: "Transparent 50/50 profit sharing on agreed terms.",
      icon: "M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    },
    {
      title: "Long-Term Legacy",
      description: "Build a lasting knife brand, not a one-off order.",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discuss",
      description: "Share goals and investment range on WhatsApp.",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    },
    {
      number: "02",
      title: "Align",
      description: "Agree structure, timeline, and responsibilities.",
      icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    },
    {
      number: "03",
      title: "Invest",
      description: "Transfer the first 50% to begin production planning.",
      icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    },
    {
      number: "04",
      title: "Research",
      description: "Product research and market-fit for your line.",
      icon: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35",
    },
    {
      number: "05",
      title: "Manufacture",
      description: "Premium blades produced to agreed specs.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    },
    {
      number: "06",
      title: "Brand",
      description: "Packaging, assets, and brand presentation.",
      icon: "M12 2l2.2 6.6H21l-5.4 3.9 2.1 6.5L12 15.8 6.3 19l2.1-6.5L3 8.6h6.8L12 2z",
    },
    {
      number: "07",
      title: "Sell",
      description: "Products sold through our premium brand channels.",
      icon: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    },
    {
      number: "08",
      title: "Share",
      description: "Profits split 50/50 on transparent reporting.",
      icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
    },
  ],
  payments: [
    {
      percent: "50%",
      label: "First Payment",
      description:
        "Initial transfer to lock your partnership and begin research, sampling, and production planning.",
      icon: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3",
    },
    {
      percent: "50%",
      label: "Second Payment",
      description:
        "Final payment before bulk production and packaging so manufacturing can proceed at full scale.",
      icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    },
  ],
  terms: [
    {
      title: "Investment Is 100% Yours",
      description: "Your capital funds your partnership share in the brand line we build together.",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
    {
      title: "Early Withdrawal Not Allowed",
      description: "Funds stay committed through the agreed production and launch cycle.",
      icon: "M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10",
    },
    {
      title: "Clear Written Agreement",
      description: "Roles, timeline, and profit terms are confirmed before any payment.",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    },
    {
      title: "Transparent Reporting",
      description: "You receive clear updates on production, sales, and shared returns.",
      icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
    },
    {
      title: "WhatsApp-First Process",
      description: "All details, plans, and next steps are discussed directly on WhatsApp.",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    },
  ],
  whatWeDo: [
    { title: "Product Research", icon: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35" },
    { title: "Manufacturing", icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z" },
    { title: "Quality Control", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
    { title: "Packaging", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
    { title: "Brand Assets", icon: "M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" },
    { title: "Marketing", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
    { title: "Sales Channels", icon: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" },
    { title: "Profit Tracking", icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z" },
  ],
  whereWeSell:
    "Products are sold through NORDBLADE’s premium brand platform and partner channels — so you benefit from an established sales system instead of building distribution from zero.",
  profitNote:
    "After costs, profits from the partnership line are split equally — 50% for you and 50% for NORDBLADE — with clear reporting.",
  // keep older fields for homepage references
  steps: [
    {
      number: "01",
      title: "You Invest",
      description:
        "Bring capital and a vision. We align on goals, timeline, and the level of involvement you want.",
    },
    {
      number: "02",
      title: "We Build Together",
      description:
        "NORDBLADE handles manufacturing, branding, operations, and growth strategy — you stay informed at every step.",
    },
    {
      number: "03",
      title: "Shared Profits",
      description:
        "As the business grows, profits are shared transparently based on the partnership structure we agree on.",
    },
  ],
  benefits: [
    "Access to premium knife manufacturing",
    "Full brand-building support",
    "Marketing & sales guidance",
    "Transparent profit sharing",
    "Long-term partnership mindset",
    "Lower risk than going solo",
  ],
  idealFor: [
    "Investors seeking a tangible product business",
    "Entrepreneurs who want expertise, not just capital deployment",
    "Partners who value craftsmanship and brand quality",
    "Anyone ready to build a knife brand with shared upside",
  ],
} as const;

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Brands Partnered" },
  { value: "50+", label: "Countries Served" },
  { value: "100%", label: "Quality Guaranteed" },
] as const;

export const homeBenefits = [
  {
    title: "Premium Quality",
    description: "Handcrafted with precision.",
  },
  {
    title: "Brand Focused",
    description: "We build, you grow.",
  },
  {
    title: "Long Term Partnership",
    description: "Your success, our mission.",
  },
] as const;

export const homeBannerCards = [
  {
    title: "Launch Your Brand",
    description: "Turn your idea into a premium knife brand — from concept to first sale.",
    href: "/launch-your-brand",
    cta: "Learn More",
    icon: "M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5z",
  },
  {
    title: "OEM Manufacturing",
    description: "Private label and bulk production with consistent quality and shipping.",
    href: "/oem-manufacturing",
    cta: "Learn More",
    icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
  },
  {
    title: "Grow Your Brand",
    description: "Diagnose sales issues, refine products, and scale with a clear roadmap.",
    href: "/grow-your-brand",
    cta: "Learn More",
    icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
  },
  {
    title: "Become a Partner",
    description: "Invest with us. We build the business — profits are shared between both.",
    href: "/partner-program",
    cta: "Learn More",
    icon: "M8 11V7a4 4 0 1 1 8 0v4h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2 0h4V7a2 2 0 1 0-4 0v4z",
  },
  {
    title: "About Us",
    description: "Craft, partnership, and manufacturing expertise behind every blade.",
    href: "/about",
    cta: "Learn More",
    icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 16.5v-11A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5z",
  },
  {
    title: "Contact Us",
    description: "Project idea, OEM quote, or partnership — talk to us on WhatsApp.",
    href: "/contact",
    cta: "Contact Us",
    icon: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z",
  },
] as const;

export const pageBannerCards = {
  home: homeBannerCards,
  launch: [
    {
      title: "Brand Strategy",
      description: "Positioning, naming direction, and a clear launch roadmap.",
      icon: "M12 2l2.2 6.6H21l-5.4 3.9 2.1 6.5L12 15.8 6.3 19l2.1-6.5L3 8.6h6.8L12 2z",
    },
    {
      title: "Product Design",
      description: "Blade specs, handle options, and materials that match your market.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    },
    {
      title: "Manufacturing",
      description: "Premium production with quality checks at every stage.",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Packaging",
      description: "Boxes, inserts, and unboxing that feel premium on arrival.",
      icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    },
    {
      title: "Marketing Assets",
      description: "Photos, copy, and listing-ready visuals for your first campaign.",
      icon: "M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
    },
    {
      title: "First Sale Support",
      description: "Guidance through listing, launch, and early customer traction.",
      icon: "M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
      href: "/contact",
      cta: "Start Now",
    },
  ],
  oem: [
    {
      title: "Private Label",
      description: "Your brand on our craftsmanship — consistent and export-ready.",
      icon: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01",
    },
    {
      title: "Bulk Capacity",
      description: "Reliable volume for growing catalogs and repeat orders.",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Custom Specs",
      description: "Steel, grind, finish, and handle options tailored to your line.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    },
    {
      title: "Quality Control",
      description: "Inspection checkpoints so every batch matches the sample.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    },
    {
      title: "Global Shipping",
      description: "Worldwide logistics support for retail and wholesale partners.",
      icon: "M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    },
    {
      title: "Flexible MOQs",
      description: "Start lean, then scale production as demand grows.",
      icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
      href: "/contact",
      cta: "Get Quote",
    },
  ],
  grow: [
    {
      title: "Sales Diagnosis",
      description: "Find what’s blocking conversions, reviews, and repeat buys.",
      icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
    },
    {
      title: "Product Fixes",
      description: "Refine specs, finishing, and packaging that hurt perceived value.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    },
    {
      title: "Listing Upgrades",
      description: "Stronger visuals, copy, and offers that win the click.",
      icon: "M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
    },
    {
      title: "Growth Roadmap",
      description: "A practical plan for SKUs, channels, and monthly targets.",
      icon: "M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7",
    },
    {
      title: "Brand Refresh",
      description: "Tighten identity so the product feels premium again.",
      icon: "M12 2l2.2 6.6H21l-5.4 3.9 2.1 6.5L12 15.8 6.3 19l2.1-6.5L3 8.6h6.8L12 2z",
    },
    {
      title: "Partner Support",
      description: "Ongoing guidance as you rebuild traction and scale.",
      icon: "M8 11V7a4 4 0 1 1 8 0v4h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2 0h4V7a2 2 0 1 0-4 0v4z",
      href: "/contact",
      cta: "Talk Growth",
    },
  ],
  partner: [
    {
      title: "You Invest",
      description: "Bring capital and vision — we align on goals and structure.",
      icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    },
    {
      title: "We Build",
      description: "Manufacturing, branding, and operations handled by NORDBLADE.",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Shared Growth",
      description: "Both sides push the brand forward with clear responsibilities.",
      icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
    },
    {
      title: "Profit Sharing",
      description: "Transparent returns based on the partnership we agree upfront.",
      icon: "M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    },
    {
      title: "Lower Solo Risk",
      description: "Expertise and capacity on our side — you are not building alone.",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
    {
      title: "Discuss Deal",
      description: "Share your investment range and we’ll outline a clear path.",
      href: "/contact",
      cta: "WhatsApp",
      icon: "M8 11V7a4 4 0 1 1 8 0v4h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2 0h4V7a2 2 0 1 0-4 0v4z",
    },
  ],
  services: [
    {
      title: "Launch Your Brand",
      description: "Idea to first sale with manufacturing and brand support.",
      href: "/launch-your-brand",
      cta: "Explore",
      icon: "M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5z",
    },
    {
      title: "OEM Manufacturing",
      description: "Private label and bulk production done right.",
      href: "/oem-manufacturing",
      cta: "Explore",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Grow Your Brand",
      description: "Fix sales blockers and scale with a clear plan.",
      href: "/grow-your-brand",
      cta: "Explore",
      icon: "M4 19h16v2H4v-2zm1-3h3v-6H5v6zm5 0h3V7h-3v9zm5 0h3v-4h-3v4z",
    },
    {
      title: "Partner Program",
      description: "Invest together and share profits transparently.",
      href: "/partner-program",
      cta: "Explore",
      icon: "M8 11V7a4 4 0 1 1 8 0v4h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1zm2 0h4V7a2 2 0 1 0-4 0v4z",
    },
    {
      title: "About NORDBLADE",
      description: "The craft and partnership behind the blades.",
      href: "/about",
      cta: "About",
      icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 16.5v-11A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5z",
    },
    {
      title: "Contact Us",
      description: "Not sure which path fits? We’ll guide you.",
      href: "/contact",
      cta: "Contact",
      icon: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z",
    },
  ],
  about: [
    {
      title: "10+ Years",
      description: "Manufacturing discipline built over a decade.",
      icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    },
    {
      title: "500+ Brands",
      description: "Partners who trust us with their product lines.",
      icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    },
    {
      title: "50+ Countries",
      description: "Export-ready fulfillment across global markets.",
      icon: "M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    },
    {
      title: "England & Wales",
      description: "Registered business with a UK business line.",
      icon: "M3 21h18M5 21V7l7-4 7 4v14",
    },
    {
      title: "Sialkot Craft",
      description: "Manufacturing facilities rooted in knife-making heritage.",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Work With Us",
      description: "Launch, OEM, growth, or investment partnership.",
      href: "/contact",
      cta: "Contact",
      icon: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z",
    },
  ],
  contact: [
    {
      title: "UK Business Line",
      description: "+44 7405 012119 — calls and general enquiries.",
      href: "tel:+447405012119",
      cta: "Call",
      icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z",
    },
    {
      title: "WhatsApp",
      description: "+92 324 0000002 — projects and manufacturing.",
      href: "/contact",
      cta: "Chat",
      icon: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
    },
    {
      title: "Business Hours",
      description: "Monday–Friday, 09:00–18:00 UK time.",
      icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    },
    {
      title: "Registered",
      description: "Registered in England & Wales.",
      icon: "M3 21h18M5 21V7l7-4 7 4v14",
    },
    {
      title: "Manufacturing",
      description: "Facilities in Sialkot, Pakistan.",
      icon: "M3 13h8V3H9v4H7V3H5v8H3v2zm10 8h2v-4h2v4h2v-6h-6v6zM3 21h8v-6H3v6zm10-12h8V3h-8v6z",
    },
    {
      title: "Email",
      description: "hello@nordblade.com for project briefs.",
      href: "mailto:hello@nordblade.com",
      cta: "Email",
      icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
    },
  ],
} as const;

export const services = [
  {
    slug: "launch-your-brand",
    href: "/launch-your-brand",
    number: "01",
    title: "Launch Your Brand",
    tagline: "From Idea to First Sale – We Guide You.",
    short:
      "We help you turn your idea into a premium knife brand. From concept to first sale.",
    message: "Hi NORDBLADE, I want to launch my knife brand.",
    cta: "Start Your Project",
    checklist: [
      "Brand Strategy",
      "Product Selection",
      "Manufacturing",
      "Packaging",
      "Marketing Assets",
      "Launch Support",
      "Listing Guidance",
      "First Sale Focus",
    ],
  },
  {
    slug: "oem-manufacturing",
    href: "/oem-manufacturing",
    number: "02",
    title: "OEM Manufacturing",
    tagline: "Reliable Manufacturing. Consistent Quality.",
    short:
      "Reliable private label & bulk manufacturing for existing knife brands.",
    message: "Hi NORDBLADE, I'd like to discuss an OEM / bulk manufacturing project.",
    cta: "Discuss OEM Project",
    checklist: [
      "Private Label",
      "Bulk Orders",
      "Premium Materials",
      "Custom Designs",
      "Quality Control",
      "Worldwide Shipping",
      "Consistent Specs",
      "Flexible MOQs",
    ],
  },
  {
    slug: "grow-your-brand",
    href: "/grow-your-brand",
    number: "03",
    title: "Grow Your Brand",
    tagline: "Low Sales? We Fix It. We Grow It.",
    short:
      "Already have a brand but sales are low? We analyze, optimize and grow your business.",
    message: "Hi NORDBLADE, I need help growing my knife brand.",
    cta: "Improve My Brand",
    checklist: [
      "Market Analysis",
      "Product Improvement",
      "Packaging Redesign",
      "Marketing Content",
      "Sales Boost Strategy",
      "Listing Optimization",
      "Pricing Guidance",
      "Growth Roadmap",
    ],
  },
] as const;

export const launchProcess = [
  {
    number: "01",
    title: "Idea & Strategy",
    points: ["Market fit clarity", "Brand positioning", "Launch roadmap"],
  },
  {
    number: "02",
    title: "Design & Development",
    points: ["Blade concepts", "Handle & materials", "Prototype refinement"],
  },
  {
    number: "03",
    title: "Manufacturing",
    points: ["Premium steel work", "Consistent QC", "Batch production"],
  },
  {
    number: "04",
    title: "Branding & Packaging",
    points: ["Logo & identity", "Retail packaging", "Unboxing experience"],
  },
  {
    number: "05",
    title: "Photos & Marketing",
    points: ["Product photography", "Listing assets", "Launch creatives"],
  },
  {
    number: "06",
    title: "Launch & First Sale",
    points: ["Go-to-market plan", "Sales channels", "First-sale support"],
  },
] as const;

export const trustReasons = [
  {
    title: "Premium Quality",
    description: "Handcrafted with precision and material integrity.",
  },
  {
    title: "Manufacturing Excellence",
    description: "Consistent production for private label and bulk.",
  },
  {
    title: "Dedicated Support",
    description: "A real team guiding every step of the journey.",
  },
  {
    title: "Global Experience",
    description: "Brands shipped and supported across 50+ countries.",
  },
  {
    title: "Confidential & Secure",
    description: "Your ideas and designs stay protected.",
  },
  {
    title: "Long-Term Partnership",
    description: "We grow with you — not just for one order.",
  },
] as const;

export const valueBar = [
  {
    title: "Premium Quality",
    description: "Handcrafted with precision.",
  },
  {
    title: "Confidentiality",
    description: "Your ideas & designs are 100% safe.",
  },
  {
    title: "Long Term Partnership",
    description: "Your success. Our mission.",
  },
  {
    title: "Global Delivery",
    description: "We ship worldwide with care.",
  },
  {
    title: "Dedicated Support",
    description: "We're with you at every step.",
  },
] as const;

export const contactReasons = [
  {
    title: "Fast Response",
    description: "Quick replies so your project keeps moving.",
  },
  {
    title: "Expert Guidance",
    description: "Knife manufacturing and brand expertise in one place.",
  },
  {
    title: "Custom Solutions",
    description: "Built around your stage — launch, OEM, or growth.",
  },
  {
    title: "Long-term Partner",
    description: "Relationships measured in years, not one-off orders.",
  },
  {
    title: "100% Confidential",
    description: "Designs, margins, and plans stay private.",
  },
] as const;

export const aboutPillars = [
  {
    title: "Our Mission",
    description: "Build premium knife brands that last in real markets.",
  },
  {
    title: "Our Vision",
    description: "Become the go-to partner for knife brand growth worldwide.",
  },
  {
    title: "Our Promise",
    description: "Quality, clarity, and commitment on every project.",
  },
  {
    title: "Our Values",
    description: "Precision, honesty, craftsmanship, and partnership.",
  },
] as const;
