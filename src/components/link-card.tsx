import type { LinkItem } from '@/lib/links';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

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
          <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
            <Icon className="h-7 w-7" />
          </div>
          <CardTitle className="mb-2 text-lg font-bold">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </div>
        <div className="mt-6 flex items-center text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
          <span>انتقل الآن</span>
          <ChevronLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
        </div>
      </Card>
    </a>
  );
}
