'use client';

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Copy, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { WhatsAppIcon } from '@/lib/links';

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);

export function ShareButton() {
  const { toast } = useToast();
  const [url, setUrl] = React.useState('');
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'تم نسخ الرابط!',
      description: 'يمكنك الآن مشاركة الرابط مع الآخرين.',
    });
  };

  const shareOnWhatsApp = () => {
    const text = `✨ اكتشف "${title}" ✨\n\nبوابتك الرقمية نحو عالم من السكينة والنور. مصادر إيمانية فريدة لإلهامك وتقوية صلتك بالخالق.\n\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareOnTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(
        `✨ اكتشف "${title}" ✨\n\nبوابتك الرقمية نحو عالم من السكينة والنور. مصادر إيمانية فريدة لإلهامك وتقوية صلتك بالخالق.`
      )}`,
      '_blank'
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">مشاركة</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={shareOnWhatsApp}>
          <WhatsAppIcon className="ml-2 h-4 w-4" />
          <span>واتساب</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnTelegram}>
          <TelegramIcon className="ml-2 h-4 w-4" />
          <span>تليجرام</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyLink}>
          <Copy className="ml-2 h-4 w-4" />
          <span>نسخ الرابط</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
