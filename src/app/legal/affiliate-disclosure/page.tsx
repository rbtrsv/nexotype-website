import { Metadata } from 'next';
import AffiliateDisclosure from '@/modules/main/components/Legal/AffiliateDisclosure';
import NavbarDownwards from '@/modules/main/components/NavbarDownwards/NavbarDownwards';
import Footer from '@/modules/main/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - Nexotype',
  description: 'Learn about our affiliate partnerships and how we earn commissions from product recommendations. Transparent disclosure of our affiliate relationships with Amazon and other partners.',
  openGraph: {
    title: 'Affiliate Disclosure - Nexotype',
    description: 'Learn about our affiliate partnerships and how we earn commissions from product recommendations.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Affiliate Disclosure - Nexotype',
    description: 'Learn about our affiliate partnerships and how we earn commissions from product recommendations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarDownwards />
      <div className='grow pt-28'>
        <AffiliateDisclosure />
      </div>
      <Footer />
    </div>
  );
}