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
import { ArrowLeft } from 'lucide-react';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, description, href, Icon } = link;

  return (
    <Card className="group flex h-full transform flex-col overflow-hidden border-2 border-transparent bg-card/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
      <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
        <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 dark:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full transition-all duration-300 group-hover:bg-primary/90"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            الانتقال إلى الرابط
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}