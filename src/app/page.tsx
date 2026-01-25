'use client';

import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { X, MessageSquareText } from 'lucide-react';

const MessageOfTheDay = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="animate-in fade-in-50 slide-in-from-top-10 duration-500 relative w-full rounded-lg border border-border bg-card/50 p-4 pr-10 shadow-lg">
      <button
        onClick={() => setIsOpen(false)}
        aria-label="إغلاق الرسالة"
        className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-start gap-4">
        <div className="mt-1 flex-shrink-0 text-primary">
          <MessageSquareText className="h-6 w-6" />
        </div>
        <div>
          <h4 className="mb-1 text-lg font-bold">رسالة اليوم</h4>
          <p className="text-sm text-muted-foreground">
            رمضان فرصة حقيقية للتقرب إلى الله وترتيب أولوياتنا. هذا الدفتر مصمم
            ليكون رفيقك، يساعدك على الالتزام بهدوء وسكينة، خطوة بخطوة، بلا ضغط
            أو تعقيد. نسأل الله أن يوفقك ويتقبل منك صالح الأعمال.
          </p>
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      
      <header className="absolute top-0 left-0 z-50 p-4">
        <ThemeToggle />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl space-y-12 text-center">
          
          <div className="flex flex-col items-center space-y-4">
              <h1 className="animate-in fade-in-5 slide-in-from-bottom-16 duration-1000 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                رفيق <span className="text-primary">رمضان</span>
              </h1>
              <p className="animate-in fade-in-5 slide-in-from-bottom-12 duration-1000 delay-200 max-w-xl text-lg text-muted-foreground md:text-xl">
                ابدأ طريقك إلى الله من هنا. محتوى بسيط وأدوات عملية تساعدك تلتزم، تقرّب، وتكمّل خطوة بخطوة. مش مطلوب الكمال… المهم الاستمرار.
              </p>
          </div>
            
          <MessageOfTheDay />
          
          <div className="flex w-full flex-col gap-4">
            {links.map((link, index) => (
              <div
                key={link.title}
                className="animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{
                  animationDelay: `${800 + index * 100}ms`,
                  willChange: 'transform, opacity',
                }}
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 w-full max-w-sm mx-auto" style={{ animationDelay: '1500ms' }}>
              <ShareButton />
          </div>

        </div>
      </main>

      <footer className="w-full py-6">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()} رفيق رمضان
          </p>
        </div>
      </footer>
    </div>
  );
}
