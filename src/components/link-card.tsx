import type { LinkItem } from '@/lib/links';

export function LinkCard({ link }: { link: LinkItem }) {
  const { title, href, Icon } = link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors duration-200 hover:border-primary"
    >
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="flex-1 text-right text-lg font-medium text-foreground">
        {title}
      </h3>
    </a>
  );
}
