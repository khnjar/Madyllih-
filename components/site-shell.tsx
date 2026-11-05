components/site-shell.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrainCircuit, BookOpenText, GraduationCap, HeartPulse, Menu, Sparkles, Stethoscope } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'الرئيسية', icon: Sparkles },
  { href: '/systems', label: 'الأجهزة', icon: HeartPulse },
  { href: '/articles', label: 'المقالات', icon: BookOpenText },
  { href: '/hadiths', label: 'الأحاديث', icon: Stethoscope },
  { href: '/quiz', label: 'الاختبارات', icon: GraduationCap },
  { href: '/assistant', label: 'المساعد الطبي', icon: BrainCircuit }
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/50">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black text-white">Madyllih</div>
              <div className="text-xs text-slate-400">الموسوعة الطبية العربية</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition ${
                    active ? 'bg-brand-500/15 text-brand-200 ring-1 ring-brand-500/40' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link href="/admin" className="hidden rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-500/50 hover:text-white md:inline-flex">
            لوحة الإدارة
          </Link>

          <button aria-label="Open navigation" className="rounded-xl border border-slate-700 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-200 hover:bg-slate-900">
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
              <Link href="/admin" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-center text-slate-200">
                لوحة الإدارة
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© 2025 Madyllih — موسوعة طبية عربية ذكية</div>
          <div className="flex gap-4">
            <Link href="/systems">الأجهزة</Link>
            <Link href="/articles">المقالات</Link>
            <Link href="/assistant">المساعد الطبي</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
