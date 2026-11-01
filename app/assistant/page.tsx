app/assistant/page.tsx
'use client';

import { useState } from 'react';

export default function AssistantPage() {
  const [symptoms, setSymptoms] = useState('');
  const [vitals, setVitals] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms, vitals })
      });

      const data = await response.json();
      setAnswer(data.answer || 'لم يتم الحصول على إجابة من الذكاء الاصطناعي في هذه اللحظة.');
    } catch (error) {
      setAnswer('حدث خطأ أثناء اتصال المساعد الطبي. تأكد من إدخال مفتاح Gemini في متغيرات البيئة.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-brand-300">مساعد طبي ذكي</p>
        <h1 className="text-4xl font-black text-white">مساعد فسيولوجي ومشورة صحية</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={handleSubmit} className="card-surface p-6">
          <div className="mb-5">
            <label className="mb-2 block text-sm text-slate-300">الأعراض / الشكوى</label>
            <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)} rows={8} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-brand-500" placeholder="مثال: تعب مستمر، ألم في الصدر، ضيق تنفس..." />
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm text-slate-300">العلامات الحيوية / التحاليل</label>
            <textarea value={vitals} onChange={(e) => setVitals(e.target.value)} rows={6} className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-brand-500" placeholder="مثال: ضغط دم 140/90، نبض 84، حرارة 37.2، سكر 120..." />
          </div>

          <button type="submit" disabled={loading} className="w-full rounded-full bg-brand-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? 'جارٍ تحليل الحالة...' : 'طلب تحليل طبي ذكي'}
          </button>
        </form>

        <div className="card-surface p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">النتيجة</h2>
          <div className="min-h-[300px] rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-8 text-slate-200 whitespace-pre-wrap">
            {answer || 'سيتظهر هنا التحليل التشخيصي والفسيولوجي وتوصيات الرعاية بعد إدخال بيانات المريض.'}
          </div>
        </div>
      </div>
    </div>
  );
}
