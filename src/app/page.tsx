'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { BookHeart, MessageSquareQuote } from 'lucide-react';
import { CurrentYear } from '@/components/current-year';

const QuoteOfTheDay = () => {
  return (
    <div className="animate-in fade-in-50 slide-in-from-top-10 duration-700 relative w-full rounded-2xl border-primary/10 bg-card/50 p-6 text-center shadow-2xl shadow-primary/20 backdrop-blur-sm transition-all hover:border-primary/20">
      <div
        className="absolute inset-0 -z-10 rounded-2xl"
        style={{
          boxShadow:
            '0 0 60px -20px hsl(var(--primary) / 0.4), 0 0 30px -20px hsl(var(--accent) / 0.4)',
        }}
      />
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
          <MessageSquareQuote className="h-7 w-7" />
        </div>
        <p className="text-lg font-bold tracking-tight text-primary">
          "إِذَا مَاتَ ابنُ آدم انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ:
          صَدَقَةٍ جَارِيَةٍ، أو عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ
          يَدْعُو لَهُ."
        </p>
        <p className="text-md text-muted-foreground">(رَوَاهُ مُسْلِمٌ)</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <div className="bg-grid-pattern fixed inset-0 -z-10" />
      <div className="bg-radial-gradient fixed inset-0 -z-10" />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 cursor-default transition-transform hover:scale-105">
          <BookHeart className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold">رفيق رمضان</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto flex w-full flex-1 flex-col items-center justify-center px-4 py-24">
        <div className="w-full max-w-4xl space-y-2 text-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="animate-in fade-in-5 slide-in-from-bottom-16 duration-1000 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              رفيق{' '}
              <span
                className="text-primary"
                style={{
                  textShadow:
                    '0 0 12px hsl(var(--primary) / 0.6), 0 0 24px hsl(var(--accent) / 0.4)',
                }}
              >
                رمضان
              </span>
            </h1>
            <p className="animate-in fade-in-5 slide-in-from-bottom-12 duration-1000 delay-200 max-w-2xl text-md text-muted-foreground md:text-lg">
              ابدأ طريقك إلى الله من هنا. محتوى بسيط وأدوات عملية تساعدك تلتزم،
              تتقرب الي الله، وتكمّل خطوة بخطوة. مش مطلوب الكمال… المهم الاستمرار.
            </p>
          </div>

          <div className="py-2">
            <QuoteOfTheDay />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
            className="animate-in fade-in slide-in-from-bottom-10 duration-700 mx-auto w-full max-w-sm pt-2"
            style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
          >
            <ShareButton />
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-border/20 bg-background/50 py-6 backdrop-blur-sm">
        <div className="container flex flex-col items-center gap-3 text-center">
          <BookHeart className="h-8 w-8 text-primary" />
          <p className="max-w-lg text-sm text-muted-foreground">
            رمضان فرصة حقيقية للتقرب إلى الله وترتيب أولوياتنا. هذا الدفتر
            مصمم ليكون رفيقك، يساعدك على الالتزام بهدوء وسكينة، خطوة بخطوة،
            بلا ضغط أو تعقيد. نسأل الله أن يوفقك ويتقبل منك صالح الأعمال.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">
            جميع الحقوق محفوظة © <CurrentYear /> رفيق رمضان
          </p>
        </div>
      </footer>
    </div>
  );
}
