import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { Compass } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,#31406822,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#a294ff22,transparent)]"></div>
      </div>
      <div className="absolute -bottom-1/2 left-0 right-0 -z-10 h-1/2 w-full rounded-full bg-accent/10 opacity-50 blur-[150px]"></div>

      <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <Compass className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">منارة الإيمان</h1>
          </div>
          <div className="flex items-center gap-2">
            <ShareButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container animate-in fade-in-5 zoom-in-95 duration-1000 px-4 text-center md:px-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                طريقك نحو السمو الروحي
              </div>
              <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                بوابتك الرقمية إلى عالم من السكينة
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
                اكتشف أدوات ومصادر إيمانية فريدة، صُممت لإلهامك وتقوية صلتك
                بالخالق في رحلة إيمانية متجددة.
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-24 md:pb-32">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              أدواتك في رحلة السمو
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              مجموعة منتقاة من المصادر الرقمية لتعميق إيمانك وإثراء تجربتك
              الروحية اليومية.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => (
              <div
                key={link.title}
                className="animate-in fade-in slide-in-from-bottom-10 duration-700"
                style={{
                  animationDelay: `${index * 150}ms`,
                  willChange: 'transform, opacity',
                }}
              >
                <LinkCard link={link} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-border/20 py-8">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-md text-muted-foreground">
            صُنعت بحب لتكون رفيقك في رحلتك نحو النور.
          </p>
          <p className="text-sm text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()} منارة الإيمان
          </p>
        </div>
      </footer>
    </div>
  );
}
