app/admin/page.tsx
export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-brand-300">لوحة الإدارة</p>
        <h1 className="text-4xl font-black text-white">إدارة المحتوى الطبي</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          ['إضافة مقال', 'إدخال مقال طبي جديد في الفسيولوجيا أو الأمراض أو الوقاية.'],
          ['إدارة الأحاديث', 'أضف أو عدّل الأحاديث ذات الارتباط الطبي.'],
          ['إدارة الأجهزة', 'قم بتحديث قائمة الأجهزة الحيوية والأدلة المرافقة.'],
          ['استعراض AI Logs', 'عرض الاستفسارات الطبية ونتائج المساعد الذكي.'],
          ['مراجعة المحتوى', 'تدقيق الدقة العلمية واللغة العربية.'],
          ['التحليلات', 'مؤشرات الأداء والأحدث داخل المنصة.']
        ].map(([title, desc]) => (
          <div key={title} className="card-surface p-5">
            <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
            <p className="text-sm leading-7 text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
