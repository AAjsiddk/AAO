import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { Heart, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-primary/10 opacity-50 blur-[120px]"></div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-transparent bg-background/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">رحلة اليقين</h1>
          </div>
          <div className="flex items-center gap-2">
            <ShareButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-36">
          <div className="container animate-in fade-in zoom-in-95 duration-700 px-4 text-center md:px-6">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                أطلق العنان لروحك، وابدأ رحلة اليقين
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                ملاذك الروحي الرقمي. مصادر وأدوات مختارة بعناية لتنير دربك،
                وتلهم قلبك، وترافقك في رحلتك نحو السكينة والاتصال بالله.
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-12 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <div
                key={link.title}
                className="animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-border/50 bg-card/50 py-8 md:px-8 md:py-10">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-md text-muted-foreground">
            صُنع بحب{' '}
            <Heart className="inline-block h-4 w-4 animate-pulse text-primary" />{' '}
            ليكون منارة على الطريق. نسأل الله القبول والإخلاص.
          </p>
          <p className="text-sm text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()} - رحلة اليقين
          </p>
        </div>
      </footer>
    </div>
  );
}