import { ComponentType, createElement } from 'react';
import {
  BookOpenCheck,
  Download,
  Globe,
  LucideProps,
  Send,
  Smartphone,
} from 'lucide-react';

interface CustomIconProps extends LucideProps {}

const SvgWrapper =
  (IconComponent: ComponentType<CustomIconProps>) =>
  (props: CustomIconProps) =>
    createElement(IconComponent, props);

const WhatsAppIcon = (props: CustomIconProps) =>
  createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props,
    },
    createElement('path', {
      d: 'M21 11.5c0-5.247-4.253-9.5-9.5-9.5S2 6.253 2 11.5c0 3.129 1.514 5.922 3.883 7.64l-1.383 5.018 5.117-1.34c1.55.973 3.328 1.532 5.233 1.532h.15c5.247 0 9.5-4.253 9.5-9.5z',
    }),
    createElement('path', {
      d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.212 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z',
    })
  );

export type LinkItem = {
  title: string;
  description: string;
  href: string;
  Icon: ComponentType<CustomIconProps>;
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
