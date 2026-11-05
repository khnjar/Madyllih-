app/api/gemini/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { symptoms, vitals } = await request.json();

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      answer: `تم تجهيز المساعد الطبي، لكن مفتاح Gemini غير موجود. أضف GEMINI_API_KEY إلى متغيرات البيئة لتحويل الخادم إلى مساعد طبي ذكي كامل.\n\nملخص مؤقت:\n- الشكوى: ${symptoms || 'غير محددة'}\n- العلامات الحيوية: ${vitals || 'غير محددة'}\n- التوصية الأولية: استشارة أخصائي طبي في حال استمرار الأعراض أو ظهور علامات الخطر.`
    });
  }

  const prompt = `أنت استشاري طبي عربي محترف، ومهتم بالفسيولوجيا والتكامل بين أجهزة الجسم. أجب باللغة العربية بشكل واضح، احترافي، آمن، وأعطِ إجابة عملية.\n\nالأعراض/الشكوى:\n${symptoms || 'غير مدخلة'}\n\nالعلامات الحيوية:\n${vitals || 'غير مدخلة'}\n\nيرجى تقديم:\n1) تحليل محتمل للحالة\n2) الآلية الفسيولوجية\n3) الأعراض المتوقعة أو الخطر المحتمل\n4) التوصيات السريرية الفورية\n5) نصيحة وقائية بشكل موجز`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json({
        answer: 'لم يتم إرجاع نص من Gemini. تحقق من مفتاح المشروع ونسخة النموذج.'
      }, { status: 200 });
    }

    return NextResponse.json({ answer: text });
  } catch (error) {
    return NextResponse.json({
      answer: 'حدثت مشكلة في الاتصال بخدمة Gemini. تحقق من صحة API Key أو تواصل لاحقًا.'
    }, { status: 500 });
  }
}
