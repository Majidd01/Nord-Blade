export const siteConfig = {
  name: "NORDBLADE",
  tagline: "Partnership · Craft · Growth",
  description:
    "Premium knife manufacturing and brand growth partner. Launch, manufacture, and scale knife brands with NORDBLADE.",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "923240000002",
  email: "hello@nordblade.com",
  emailShipping: "shipping@nordblade.com",
  phone: "+92 324 0000002",
  phoneAlt: "+92 324 0000002",
  address: "Sialkot, Punjab, Pakistan",
  hours: "Monday – Saturday, 9:00 AM – 6:00 PM",
  investmentNote: "$5,000",
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
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
  message: "Hi NORDBLADE, I'm interested in the Partner Program and would like to discuss investment.",
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
