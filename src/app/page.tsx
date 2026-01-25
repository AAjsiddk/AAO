import { ThemeToggle } from '@/components/theme-toggle';
import { LinkCard } from '@/components/link-card';
import { links } from '@/lib/links';
import { ShareButton } from '@/components/share-button';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            دليل النجاة
          </h1>
          <div className="flex items-center gap-2">
            <ShareButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 text-center md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                بين يديك، دليلك إلى حياة أقرب إلى الله
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                هنا تجد مجموعة من المصادر والأدوات المنتقاة بعناية، لتكون عونًا لك على طريقك نحو الثبات والسكينة.
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-12 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <LinkCard key={link.title} link={link} />
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:px-8 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            صُنع بحب{' '}
            <Heart className="inline-block h-4 w-4 text-primary" />{' '}
            ليكون عونًا على الطريق. نسأل الله القبول.
          </p>
          <p className="text-xs text-muted-foreground">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
