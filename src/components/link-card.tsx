import type { LinkItem } from '@/lib/links';
import { ArrowUpRight } from 'lucide-react';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, href, Icon, description } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full transform-gpu flex-col justify-between rounded-2xl border-2 border-border/20 bg-card/50 p-6 text-right shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/20"
    >
      <div className="flex flex-col gap-4 items-start text-right">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="text-base text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-end">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
            <span>اضغط هنا</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </div>
    </a>
  );
}
