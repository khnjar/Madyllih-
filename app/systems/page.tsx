app/systems/page.tsx
import { bodySystems } from '@/lib/content';

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-brand-300">مكتبة الأعضاء والأنظمة</p>
        <h1 className="text-4xl font-black text-white">الأجهزة الحيوية</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {bodySystems.map((system) => (
          <section key={system.id} id={system.id} className="card-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-4xl">{system.icon}</div>
              <div className="text-xs text-brand-200">{system.latinName}</div>
            </div>

            <h2 className="mb-2 text-2xl font-bold text-white">{system.name}</h2>
            <p className="mb-4 text-slate-300 leading-8">{system.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {system.focus.map((item) => (
                <span key={item} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">{item}</span>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <div className="mb-2 text-sm text-brand-300">الربط مع الحديث</div>
              <p className="text-sm leading-7 text-slate-300">{system.hadith}</p>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-sm text-brand-300">مؤشرات رئيسية</div>
              <ul className="space-y-2 text-sm text-slate-300">
                {system.stats.map((point) => (
                  <li key={point} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
