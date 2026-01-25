import { ComponentType, createElement } from 'react';
import {
  BookOpenCheck,
  Download,
  Globe,
  LucideProps,
  Send,
  Smartphone,
} from 'lucide-react';

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {}

const SvgWrapper =
  (IconComponent: ComponentType<CustomIconProps | LucideProps>) =>
  (props: CustomIconProps | LucideProps) =>
    createElement(IconComponent, props);

const WhatsAppIcon = (props: CustomIconProps) =>
  createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      ...props,
    },
    createElement('path', {
      d: 'M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.82l-1.34 4.89 5.02-1.32c1.4.79 3 1.21 4.73 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16c-1.5 0-2.91-.4-4.2-1.1l-.3-.18-3.12.82.83-3.05-.2-.32a8.2 8.2 0 0 1-1.26-4.34c0-4.53 3.69-8.21 8.21-8.21 4.53 0 8.21 3.69 8.21 8.21s-3.68 8.21-8.21 8.21zm4.43-5.22c-.24-.12-1.44-.71-1.66-.79-.23-.08-.39-.12-.56.12-.17.24-.63.79-.77.95-.14.17-.29.19-.53.07s-1.02-.37-1.94-1.2c-.72-.65-1.2-1.45-1.34-1.7s-.02-.38.1-.51c.11-.11.24-.29.37-.43.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.55-.42-.15 0-.31 0-.47.01-.17 0-.43.06-.66.31-.22.24-.86.84-.86 2.06 0 1.22.88 2.39 1 2.56.12.17 1.74 2.65 4.22 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.44-.59 1.64-1.15.2-.56.2-1.04.14-1.15-.07-.12-.23-.19-.48-.31z',
    })
  );

export type LinkItem = {
  title: string;
  description: string;
  href: string;
  Icon: ComponentType<any>;
};

export const links: LinkItem[] = [
  {
    title: 'دفتر رمضان – دليلك العملي',
    description:
      'دفتر تفاعلي لتنظيم عبادتك في رمضان ومتابعة أهدافك اليومية بأسلوب مشجّع وعصري.',
    href: 'https://drive.google.com/file/d/19i9mmJwukaGISMEapCkrcHf6L3SaxjsN/view?usp=drivesdk',
    Icon: SvgWrapper(BookOpenCheck),
  },
  {
    title: 'تطبيق قراءة الملفات (Lumin)',
    description:
      'تطبيق خفيف ومميز لفتح دفتر رمضان على هاتفك، مع أدوات تصفح مريحة وواضحة.',
    href: 'https://play.google.com/store/apps/details?id=com.luminpdfapp',
    Icon: SvgWrapper(Smartphone),
  },
  {
    title: 'موقع نجاتك بيدك',
    description:
      'منصة إسلامية متكاملة تجمع لك الأذكار، القرآن، وروابط نافعة في مكان واحد.',
    href: 'https://in-your-hands.vercel.app/',
    Icon: SvgWrapper(Globe),
  },
  {
    title: 'تطبيق نجاتك بيدك (أندرويد)',
    description:
      'نسخة التطبيق من موقع نجاتك بيدك لتصل للمحتوى بسهولة وفي أي وقت بدون متصفح.',
    href: 'https://www.mediafire.com/file/hka968xggvz4qdj/app-release+-+٢٠٢٦-٠١-٢٥T٢٠٤١٤٢.٤٨٣.apk/file',
    Icon: SvgWrapper(Download),
  },
  {
    title: 'بوت تليجرام للتواصل',
    description:
      'بوت مخصّص للاستفسارات والمتابعة، وليصلك كل جديد بسرعة وسهولة.',
    href: 'https://t.me/Ramadan000_bot',
    Icon: SvgWrapper(Send),
  },
  {
    title: 'قناة واتساب',
    description:
      'قناة لنشر المحتوى النافع والتنبيهات المهمة أولاً بأول، لتبقى على اتصال دائم بالخير.',
    href: 'https://whatsapp.com/channel/0029VbCC6Ta6buMTCGX6Um0F',
    Icon: SvgWrapper(WhatsAppIcon),
  },
];

export { WhatsAppIcon };
