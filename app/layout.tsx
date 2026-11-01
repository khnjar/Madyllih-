app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import SiteShell from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Madyllih | الموسوعة الطبية',
  description: 'موسوعة طبية عربية ذكية مع مقالات، أحاديث، اختبارات، ومساعد طبي مدعوم بالذكاء الاصطناعي.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
