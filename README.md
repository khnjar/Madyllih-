# Madyllih Web

نسخة ويب حديثة من فكرة الموسوعة الطبية العربية الأصلية. تم إعادة صياغة المشروع من تطبيق Android إلى منصة ويب احترافية باستخدام أحدث التقنيات المناسبة للمحتوى الطبي العربي.

## المميزات
- واجهة عربية RTL كاملة
- أقسام: الأجهزة، المقالات، الأحاديث، الاختبارات، المساعد الطبي
- تصميم حديث باستخدام Tailwind CSS
- API Route مخصص للذكاء الاصطناعي عبر Gemini
- هيكل قابل للتوسع في الإنتاج
- دعم قاعدة بيانات Prisma مستقبليًا

## التشغيل السريع
```bash
npm install
cp .env.example .env.local
npm run dev
```

افتح المتصفح على:
```bash
http://localhost:3000
```

## متغيرات البيئة
```bash
GEMINI_API_KEY=your_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/madyllih
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## هيكل المشروع
- app/
- components/
- lib/
- prisma/

## ملاحظات
- المشروع الحالي هو نسخة ويب حديثة للفكرة الأصلية، وليس تحويل مباشر لملفات Android.
- إذا رغبت في التوسع إلى CMS كامل، يمكن ربط Prisma و PostgreSQL بسهولة.
