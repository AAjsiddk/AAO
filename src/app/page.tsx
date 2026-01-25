import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 opacity-50 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-20%] top-auto h-[600px] w-[600px] rounded-full bg-accent/10 opacity-50 blur-[120px]"></div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border/10 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary">
              <Sparkles className="h-7 w-7" />
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
              <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                أنرْ قلبك بنور الإيمان، وارتقِ بروحك
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
                بوابتك الرقمية نحو عالم من السكينة والنور. اكتشف أدوات ومصادر
                إيمانية فريدة، صُممت لإلهامك وتقوية صلتك بالخالق.
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-16 md:pb-28 lg:pb-36">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              أدواتك في رحلة السمو
            </h3>
            <p className="mt-3 text-muted-foreground">
              كل ما تحتاجه لتعميق إيمانك في مكان واحد.
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
      <footer className="border-t border-border/50 py-8 md:px-8 md:py-10">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-md text-muted-foreground">
            منصة منارة الإيمان - أُنشئت لتكون عونًا لك في رحلتك الروحية.
          </p>
          <p className="text-sm text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
