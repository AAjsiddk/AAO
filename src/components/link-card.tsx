import type { LinkItem } from '@/lib/links';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, href, Icon, description } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full transform-gpu flex-col items-center justify-start gap-4 rounded-2xl border-2 border-border bg-card p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-8 w-8" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}
