import type { LinkItem } from '@/lib/links';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
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
      <Card className="flex h-full transform flex-col justify-between overflow-hidden border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-accent hover:shadow-2xl hover:shadow-accent/10">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-accent/20 group-hover:text-accent">
              <Icon className="h-7 w-7" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
          </div>
          <CardTitle className="mb-2 text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            {description}
          </CardDescription>
        </div>
        <div className="mt-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </Card>
    </a>
  );
}
