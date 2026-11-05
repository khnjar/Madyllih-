app/hadiths/page.tsx
import { hadiths } from '@/lib/content';

export default function HadithsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-brand-300">الربط بين النقل والمعرفة</p>
        <h1 className="text-4xl font-black text-white">الأحاديث الطبية</h1>
      </div>

      <div className="space-y-5">
        {hadiths.map((hadith) => (
          <article key={hadith.id} className="card-surface p-6">
            <div className="mb-3 text-sm text-brand-200">{hadith.source}</div>
            <h2 className="mb-4 text-2xl font-bold text-white">{hadith.title}</h2>
            <p className="mb-4 text-lg leading-9 text-slate-200">{hadith.text}</p>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="mb-2 text-sm text-brand-300">الأثر الطبي</div>
              <p className="text-sm leading-8 text-slate-300">{hadith.significance}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
