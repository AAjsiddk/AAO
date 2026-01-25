import type { LinkItem } from '@/lib/links';
import { ArrowUpRight } from 'lucide-react';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, href, Icon, description } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full transform-gpu flex-col justify-between rounded-2xl border border-border/20 bg-card/60 p-5 text-right shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/20"
      style={{
        transformStyle: 'preserve-3d',
        boxShadow:
          '0 0 15px -8px hsl(var(--primary) / 0.15), 0 0 8px -10px hsl(var(--accent) / 0.15)',
      }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.05), transparent 70%)',
          transform: 'translateZ(-10px)',
        }}
      />
      <div className="flex flex-col gap-3 items-start text-right">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-md font-bold text-foreground transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end">
        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all duration-300 group-hover:bg-accent">
          <span>اضغط هنا</span>
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </div>
    </a>
  );
}
