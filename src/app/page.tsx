import Image from "next/image";
import type { Metadata, Viewport } from "next";
import NavbarDownwards from "@/modules/main/components/NavbarDownwards/NavbarDownwards";
import HeroSectionAnimated from "@/modules/main/components/HeroSectionAnimated/HeroSectionAnimated";
import Footer from "@/modules/main/components/Footer/Footer";
import Favicon from '@/modules/main/public/favicon.ico';
import BuraroDefault from '@/modules/main/images/buraro-default.png';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.buraro.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Fitness. Longevity. Lifestyle.',
  description: 'Optimize your health, extend your lifespan, and elevate your quality of life with cutting-edge strategies.',
  creator: 'Buraro Team',
  publisher: 'Buraro',
  category: 'Health, Fitness, Longevity, Lifestyle, Wellness, Personal Development',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fitness. Longevity. Lifestyle.',
    description: 'Optimize your health, extend your lifespan, and elevate your quality of life with cutting-edge strategies.',
    url: '/',
    siteName: 'Buraro',
    images: [
      {
        url: BuraroDefault.src,
        width: BuraroDefault.width,
        height: BuraroDefault.height,
        alt: 'Buraro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness. Longevity. Lifestyle.',
    description: 'Optimize your health, extend your lifespan, and elevate your quality of life with cutting-edge strategies.',
    creator: '@buraro_com',
    site: '@buraro_com',
    images: [BuraroDefault.src],
  },
  keywords: ['Fitness', 'Longevity', 'Lifestyle', 'Health Solutions', 'Supplements', 'Personal Growth'],
  authors: [{ name: 'Buraro Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarDownwards />
      <div className="flex flex-1 justify-center items-center">
        <HeroSectionAnimated />
      </div>
      <Footer />
    </main>
  );
}