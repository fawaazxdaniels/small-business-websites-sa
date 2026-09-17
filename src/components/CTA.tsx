import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function CTA({ title = 'Ready to make your business easier to choose?', copy = 'Tell us a little about your business. We’ll help you find the right starting point.' }: { title?: string; copy?: string }) { return <section className="cta-band"><div><span className="eyebrow">Start with a conversation</span><h2>{title}</h2><p>{copy}</p></div><Link className="button button-light" href="/contact">Start my website <ArrowUpRight size={18} /></Link></section>; }

