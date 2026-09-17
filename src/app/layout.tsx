import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.businessName} — ${siteConfig.tagline}`, template: `%s — ${siteConfig.businessName}` }, description: siteConfig.description, openGraph: { title: `${siteConfig.businessName} — ${siteConfig.tagline}`, description: siteConfig.description, type: 'website' }, twitter: { card: 'summary_large_image', title: siteConfig.businessName, description: siteConfig.description }, icons: { icon: '/favicon.svg' } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-ZA"><body className={`${sans.variable} ${display.variable}`}><Navbar />{children}<Footer /></body></html>; }

