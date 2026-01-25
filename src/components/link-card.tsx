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
      <Card className="flex h-full transform flex-col justify-between overflow-hidden rounded-xl border-2 border-transparent bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300">
              <Icon className="h-7 w-7" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
          </div>
          <CardDescription className="mb-2 text-base text-muted-foreground">
            {description}
          </CardDescription>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
        <div className="mt-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </Card>
    </a>
  );
}
