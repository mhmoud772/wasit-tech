import './globals.css';
import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import { COMPANY } from '../src/config';

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'وسيط-تك WASIT-TECH',
  url: `${COMPANY.website}/`,
  logo: `${COMPANY.website}/logo-horizontal.jpg`,
  email: COMPANY.email,
  telephone: `+${COMPANY.phoneE164}`,
  description: 'شريكك الموثوق في التحول الرقمي. حلول تقنية متكاملة في البنية التحتية، الأتمتة، والذكاء الاصطناعي.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'YE',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  alternates: {
    canonical: '/',
  },
  title: 'وسيط-تك | WASIT-TECH - نحو مستقبل رقمي أكثر إشراقاً',
  description: 'شريكك الموثوق في التحول الرقمي. حلول تقنية متكاملة في البنية التحتية، الأتمتة والذكاء الاصطناعي لتطوير أعمالك وتوسيع نطاق استثماراتك.',
  keywords: [
    'وسيط تك',
    'Wasit Tech',
    'التحول الرقمي',
    'البنية التحتية والشبكات',
    'أتمتة العمليات',
    'الذكاء الاصطناعي',
    'حلول تقنية اليمن',
    'wasit.tech',
  ],
  authors: [{ name: 'وسيط-تك | WASIT-TECH' }],
  icons: {
    icon: '/logo-dark.jpg',
  },
  openGraph: {
    title: 'وسيط-تك | WASIT-TECH - شريكك الموثوق في التحول الرقمي',
    description: 'حلول تقنية متكاملة في البنية التحتية، الأتمتة، والذكاء الاصطناعي لتطوير أعمالك.',
    url: COMPANY.website,
    siteName: 'WASIT-TECH',
    images: [
      {
        url: '/logo-horizontal.jpg',
        width: 1200,
        height: 630,
        alt: 'وسيط-تك WASIT-TECH Logo',
      },
    ],
    locale: 'ar_YE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B132B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlex.variable} ${inter.variable}`}>
      <body className="bg-wasit-navy text-slate-100 font-arabic antialiased selection:bg-wasit-teal selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
