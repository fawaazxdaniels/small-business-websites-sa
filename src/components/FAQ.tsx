'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '@/lib/content';
export function FAQ() { const [active, setActive] = useState<number | null>(0); return <div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${active === i ? 'active' : ''}`} key={q}><button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i}><span>{q}</span><Plus size={20} /></button>{active === i && <p>{a}</p>}</div>)}</div>; }

