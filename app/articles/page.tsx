app/articles/page.tsx
import { articles } from '@/lib/content';

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-brand-300">إدراك علمي متكامل</p>
        <h1 className="text-4xl font-black text-white">المقالات الطبية</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="card-surface p-5">
            <div className="mb-3 inline-flex rounded-full bg-brand-500/10 px-2 py-1 text-xs text-brand-200">{article.category}</div>
            <h2 className="mb-3 text-2xl font-bold text-white">{article.title}</h2>
            <p className="mb-4 text-slate-300 leading-8">{article.summary}</p>

            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span>{article.author}</span>
              <span>{article.readTime} دقيقة قراءة</span>
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              {article.sections.map((section) => (
                <div key={section} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2">{section}</div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
