import type { LinkItem } from '@/lib/links';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, description, href, Icon } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="flex h-full transform-gpu flex-col overflow-hidden rounded-xl border-2 border-primary/20 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
        <div className="flex-1">
          <div className="mb-4 flex items-start justify-between">
            <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300">
              <Icon className="h-6 w-6" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
          <p className="text-base text-muted-foreground line-clamp-4">
            {description}
          </p>
        </div>
        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </Card>
    </a>
  );
}
