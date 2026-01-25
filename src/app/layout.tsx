import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'منارة الإيمان | طريقك نحو السمو الروحي',
  description:
    'بوابتك الرقمية نحو عالم من السكينة والنور. اكتشف أدوات ومصادر إيمانية فريدة، صُممت لإلهامك وتقوية صلتك بالخالق.',
  openGraph: {
    title: 'منارة الإيمان | طريقك نحو السمو الروحي',
    description:
      'اكتشف أدوات ومصادر إيمانية فريدة، صُممت لإلهامك وتقوية صلتك بالخالق.',
    images: ['https://i.postimg.cc/d7wz9RmJ/Untitled-1.png'],
    type: 'website',
    url: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
