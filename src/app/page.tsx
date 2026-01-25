'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { BookHeart, MessageSquareQuote } from 'lucide-react';

const QuoteOfTheDay = () => {
  return (
    <div
      className="animate-in fade-in-50 slide-in-from-top-10 duration-700 relative w-full rounded-2xl border-2 border-primary/20 bg-card p-6 text-center shadow-2xl shadow-primary/10"
    >
      <div className="flex flex-col items-center gap-4">
        <MessageSquareQuote className="h-8 w-8 text-primary" />
        <p className="text-xl font-bold tracking-tight text-primary">
          "إِذَا مَاتَ ابنُ آدم انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ:
          صَدَقَةٍ جَارِيَةٍ، أو عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ
          يَدْعُو لَهُ."
        </p>
        <p className="text-lg text-muted-foreground">(رَوَاهُ مُسْلِمٌ)</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <header className="absolute left-4 top-4 z-50 p-4">
        <ThemeToggle />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl space-y-16 text-center">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="animate-in fade-in-5 slide-in-from-bottom-16 duration-1000 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              رفيق <span className="text-primary">رمضان</span>
            </h1>
            <p className="animate-in fade-in-5 slide-in-from-bottom-12 duration-1000 delay-200 max-w-2xl text-lg text-muted-foreground md:text-xl">
              ابدأ طريقك إلى الله من هنا. محتوى بسيط وأدوات عملية تساعدك تلتزم،
              تقرّب، وتكمّل خطوة بخطوة. مش مطلوب الكمال… المهم الاستمرار.
            </p>
          </div>

          <QuoteOfTheDay />
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <div
                key={link.title}
                className="animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{
                  animationDelay: `${800 + index * 100}ms`,
                  willChange: 'transform, opacity',
                  animationFillMode: 'both',
                }}
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>

          <div
            className="animate-in fade-in slide-in-from-bottom-10 duration-700 w-full max-w-sm mx-auto"
            style={{ animationDelay: '1500ms', animationFillMode: 'both' }}
          >
            <ShareButton />
          </div>
        </div>
      </main>

      <footer className="w-full py-8">
        <div className="container flex flex-col items-center gap-2 text-center">
           <BookHeart className="h-8 w-8 text-primary" />
          <p className="max-w-md text-sm text-muted-foreground">
            رمضان فرصة حقيقية للتقرب إلى الله وترتيب أولوياتنا. هذا الدفتر
            مصمم ليكون رفيقك، يساعدك على الالتزام بهدوء وسكينة، خطوة بخطوة،
            بلا ضغط أو تعقيد. نسأل الله أن يوفقك ويتقبل منك صالح الأعمال.
          </p>
           <p className="mt-4 text-xs text-muted-foreground/50">
            جميع الحقوق محفوظة © {new Date().getFullYear()} رفيق رمضان
          </p>
        </div>
      </footer>
    </div>
  );
}
