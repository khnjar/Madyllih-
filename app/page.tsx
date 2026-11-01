app/page.tsx
import Link from 'next/link';
import { ArrowLeft, ArrowUpLeft, BookHeart, BrainCircuit, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { articles, bodySystems, hadiths, homepageStats } from '@/lib/content';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 md:px-8">
      <section className="grid items-center gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
            <Sparkles className="h-4 w-4" />
            منصة طبية عربية ذكية
          </div>

          <h1 className="max-w-xl text-balance text-4xl font-black leading-tight text-white md:text-6xl">
            موسوعة طبية عربية تجمع المعرفة والذكاء والقدرة على الفهم.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            استكشف أجهزة الجسم، اقرأ المقالات الموثقة، تواصل مع أحاديث طبية لها علاقة بسلامة الجسد، واطلب من المساعد الطبي تحليلًا مبنيًا على الفسيولوجيا والوقاية.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/systems" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-brand-400">
              استكشف الأجهزة
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="/assistant" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 font-medium text-white transition hover:border-brand-500/50">
              تواصل مع المساعد الطبي
              <BrainCircuit className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="card-surface p-5 shadow-glow">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-400">نظرة عامة</div>
              <div className="text-2xl font-bold text-white">التكامل الحيوي</div>
            </div>
            <div className="rounded-xl bg-brand-500/10 p-3 text-brand-300">
              <BookHeart className="h-6 w-6" />
            </div>
          </div>

          <div className="space-y-4">
            {homepageStats.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                <span className="text-slate-300">{item.label}</span>
                <span className="text-lg font-black text-brand-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: 'علمي', description: 'محتوى مبني على الفسيولوجيا والتكامل بين الأجهزة.', icon: Stethoscope },
          { title: 'ذكي', description: 'مساعد طبي متقدم يساعد في الفهم والتوجيه والتحليل.', icon: BrainCircuit },
          { title: 'مؤسسي', description: 'إرشادات وقائية تربط بين التجربة العلمية والحديث النبوي.', icon: ShieldCheck }
        ].map(({ title, description, icon: Icon }) => (
          <div key={title} className="card-surface p-5">
            <div className="mb-4 inline-flex rounded-xl bg-brand-500/10 p-3 text-brand-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-300">{description}</p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="section-title">الأجهزة الحيوية</h2>
          <Link href="/systems" className="inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200">
            عرض الكل
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {bodySystems.map((system) => (
            <Link key={system.id} href={`/systems#${system.id}`} className="card-surface p-5 transition hover:-translate-y-1 hover:border-brand-500/40">
              <div className="mb-4 text-4xl">{system.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-white">{system.name}</h3>
              <p className="mb-4 text-sm leading-7 text-slate-300">{system.description}</p>
              <div className="flex flex-wrap gap-2">
                {system.focus.slice(0, 2).map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="section-title">مقالات مختارة</h2>
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200">
            المزيد
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="card-surface p-5">
              <div className="mb-3 inline-flex rounded-full bg-brand-500/10 px-2 py-1 text-xs text-brand-200">{article.category}</div>
              <h3 className="mb-2 text-xl font-bold text-white">{article.title}</h3>
              <p className="mb-4 text-sm leading-7 text-slate-300">{article.summary}</p>
              <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
                <span>{article.author}</span>
                <span>{article.readTime} دقيقة</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="section-title">أحاديث مرتبطة بالصحة</h2>
          <Link href="/hadiths" className="inline-flex items-center gap-2 text-sm text-brand-300 hover:text-brand-200">
            مشاهدة الكل
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {hadiths.map((item) => (
            <div key={item.id} className="card-surface p-5">
              <div className="mb-2 text-lg font-bold text-white">{item.title}</div>
              <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              <div className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-400">{item.source}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
