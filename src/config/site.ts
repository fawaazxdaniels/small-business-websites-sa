export const siteConfig = {
  businessName: 'Studio North',
  shortName: 'SN',
  tagline: 'Professional websites for small businesses.',
  description: 'A streamlined professional website service for South African small businesses. Get a polished, responsive five-page website for R5,000 once-off.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@yourbusiness.co.za',
  phone: process.env.NEXT_PUBLIC_PHONE || '+27 XX XXX XXXX',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '+27 XX XXX XXXX',
  location: 'South Africa',
  instagram: '',
  facebook: '',
  linkedin: '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  primaryColour: '#13231f',
  accentColour: '#d6f36b',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Websites', href: '/websites' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Examples', href: '/examples' },
  { label: 'Contact', href: '/contact' },
];

