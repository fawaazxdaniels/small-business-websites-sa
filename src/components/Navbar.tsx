'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '@/config/site';

export function Navbar() { const [open, setOpen] = useState(false); return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">{siteConfig.shortName}</span><span>{siteConfig.businessName}</span></Link><nav className={`desktop-nav ${open ? 'is-open' : ''}`}>{navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={15} /></Link></nav><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>; }

