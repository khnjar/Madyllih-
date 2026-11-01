app/quiz/page.tsx
import { quizQuestions } from '@/lib/content';

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-brand-300">اختبارات تفاعلية</p>
        <h1 className="text-4xl font-black text-white">اختبر معرفتك الطبية</h1>
      </div>

      <div className="space-y-5">
        {quizQuestions.map((question) => (
          <div key={question.id} className="card-surface p-6">
            <div className="mb-4 text-sm text-brand-300">السؤال {question.id}</div>
            <h2 className="mb-4 text-xl font-bold text-white">{question.question}</h2>

            <div className="grid gap-3 md:grid-cols-2">
              {question.options.map((option) => (
                <div key={option} className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-3 text-slate-200">
                  {option}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm leading-7 text-emerald-100">
              <div className="mb-1 font-bold text-emerald-200">الإجابة الصحيحة:</div>
              <div>{question.answer}</div>
            </div>

            <div className="mt-4 text-sm leading-7 text-slate-300">{question.explanation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
