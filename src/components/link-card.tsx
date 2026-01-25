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
    <Card className="flex h-full transform flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <div className="rounded-lg bg-primary/20 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={href} target="_blank" rel="noopener noreferrer">
            الانتقال إلى الرابط
            <ArrowLeft className="mr-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
