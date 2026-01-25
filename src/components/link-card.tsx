import type { LinkItem } from '@/lib/links';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, description, href, Icon } = link;

  return (
    <Card className="group flex h-full transform flex-col overflow-hidden border bg-card/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-accent hover:shadow-2xl hover:shadow-accent/10">
      <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
        <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
          <Icon className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full bg-primary/90 text-primary-foreground transition-all duration-300 group-hover:bg-primary"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            توجه إلى الرابط
            <ChevronLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
