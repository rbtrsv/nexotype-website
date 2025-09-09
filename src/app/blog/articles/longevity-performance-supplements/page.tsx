import React from 'react';
import { Metadata } from 'next';
import AlternativeArticleHeader from '@/modules/blog/components/composed/AlternativeArticleHeader';
import Text from '@/modules/blog/components/primitives/Text';
import UL from '@/modules/blog/components/primitives/UL';
import LI from '@/modules/blog/components/primitives/LI';
import LinkComponent from '@/modules/blog/components/primitives/LinkComponent';
import SimpleSection from '@/modules/blog/components/composed/SimpleSection';
import NavbarDownwards from '@/modules/main/components/NavbarDownwards/NavbarDownwards';
import Footer from '@/modules/main/components/Footer/Footer';
import SupplementTable from './subcomponents/SupplementTable';
import longevitySupplementsImage from './images/Longevity Supplments - Nexotype.jpeg';
import { generatePageMetadata } from '@/modules/blog/components/composed/PageSEO';

export const metadata: Metadata = generatePageMetadata({
  title: 'Longevity & Performance Supplement List – Independent Analysis & Science Review (2025)',
  description: 'Evidence-checked, dosage-specific guidance for optimal health and performance, featuring 17 key supplements with research-backed benefits and expert recommendations.',
  slug: 'blog/articles/longevity-performance-supplements',
  type: 'article',
  publishDate: '2025-01-08',
  author: 'Nexotype Research',
  keywords: ['longevity', 'supplements', 'performance', 'health', 'NAD+', 'mitochondrial health', 'anti-aging', 'biohacking', 'creatine', 'omega-3'],
  image: {
    url: longevitySupplementsImage.src,
    alt: 'Longevity and performance supplements'
  }
});


export default function LongevityPerformanceSupplementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDownwards />
      <main className="grow bg-white dark:bg-black pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12">
        <AlternativeArticleHeader
        title="Longevity & Performance Supplement List – Independent Analysis & Science Review (2025)"
        subtitle="Evidence-checked, dosage-specific guidance for optimal health and performance"
        author="Nexotype Research"
        publishDate="January 8, 2025"
        categories={[
          { label: 'Supplements', variant: 'supplements' },
          { label: 'Health', variant: 'health' },
          { label: 'Performance', variant: 'performance' }
        ]}
        imageUrl={longevitySupplementsImage.src}
        imageAlt="Longevity and performance supplements"
      />
      
      <SimpleSection title="Supplement List Summary + Dosages (2025 Update)">
        <div className="space-y-6 mb-8">
          <div className="space-y-4">
            <Text>
              Popular health and longevity experts like Peter Attia, Andrew Huberman, Rhonda Patrick, and Bryan Johnson 
              frequently discuss supplements across various platforms, leading to endless searches about their actual supplement regimens.
            </Text>
            <Text>
              This research-backed guide provides clear dosage recommendations and specific product suggestions, 
              giving you a science-based foundation for your supplement decisions.
            </Text>
            <Text className="text-sm italic">
              This guide is based entirely on publicly available information. The mentioned experts did not contribute 
              to or review this content.
            </Text>
          </div>
        </div>

        <SupplementTable />

        <div className="mt-8 p-4 bg-gradient-to-r from-[#c517ff]/10 to-[#2631f7]/10 border border-purple-200 dark:border-purple-800 rounded-lg">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Disclaimer:</strong> This information is for educational purposes only and should not replace 
            professional medical advice. Consult with a healthcare provider before starting any supplement regimen, 
            especially if you have existing health conditions or take medications.
          </p>
        </div>
      </SimpleSection>

      <SimpleSection title="Why We Didn't Include NMN">
        <Text>
          <strong>Nicotinamide mononucleotide (NMN)</strong> has become incredibly popular in longevity circles as a way to boost NAD+ levels, 
          the cellular energy molecule that declines with age. However, cutting-edge research suggests this approach may be fundamentally flawed.
        </Text>

        <Text>
          According to <LinkComponent href="https://hackmyage.com/the-problem-with-nad-boosters-a-more-effective-way-to-increase-energy-dr-nichola-conlon/" className="text-[#9f55f9] underline transition-all duration-200">
            <strong>Dr. Nichola Conlon</strong>
          </LinkComponent>, the latest science shows that although NMN does boost NAD+ levels, 
          it's not addressing the root cause of why NAD+ declines in the first place. The problem isn't a shortage of raw materials—it's broken cellular machinery.
        </Text>

        <Text>
          <strong>The Factory Analogy:</strong> Think of your cells as NAD+-producing factories. As we age, the decline in NAD+ production 
          isn't due to lack of raw materials (which NMN provides), but because the factory machinery itself is damaged. Simply adding more 
          raw materials to a broken factory won't solve the underlying production problems.
        </Text>

        <Text>
          <strong>Key Scientific Concerns with NMN:</strong>
        </Text>

        <UL>
          <LI><strong>Absorption Questions:</strong> Scientists debate whether NMN effectively enters cells to be converted into NAD+</LI>
          <LI><strong>Methyl Depletion:</strong> Without functional recycling pathways, excess NMN depletes methyl donors essential for DNA repair and epigenetic regulation</LI>
          <LI><strong>Temporary Results:</strong> Clinical studies show NAD+ levels plateau regardless of increased NMN dosage, while toxic metabolites accumulate</LI>
          <LI><strong>Root Cause Ignored:</strong> NMN doesn't fix the underlying NAD+ recycling problems that cause the decline</LI>
        </UL>

        <Text>
          <strong>Our Mitochondrial Approach Instead:</strong> Rather than forcing more NAD+ precursors into broken systems, 
          we included supplements that directly support mitochondrial health and biogenesis:
        </Text>

        <UL>
          <LI><strong>PQQ (Targeted Enhancement):</strong> Directly stimulates mitochondrial biogenesis—creating new, healthy cellular powerhouses</LI>
          <LI><strong>Ubiquinol/CoQ10 (Advanced Optimization):</strong> Supports existing mitochondrial function and energy production</LI>
        </UL>

        <Text>
          <strong>Better NAD+ Support Alternatives:</strong> For those wanting to support NAD+ pathways, consider these evidence-based approaches:
        </Text>

        <UL>
          <LI>
            <LinkComponent href="https://amazon.com/dp/B0938NKV1G/ref=nosim?tag=burarotechnol-20" className="text-[#9f55f9] underline transition-all duration-200">
              Methylfolate + Methyl B-12
            </LinkComponent> (Dr. Peter Attia's approach for DNA repair and methylation support)
          </LI>
          <LI>
            <LinkComponent href="https://amazon.com/dp/B0FDH1JFLS/ref=nosim?tag=burarotechnol-20" className="text-[#9f55f9] underline transition-all duration-200">
              Nicotinamide Riboside
            </LinkComponent> (Dr. Brad Stanfield's approach for NAD+ support)
          </LI>
        </UL>

        <Text>
          Science has evolved—we now understand why NAD+ declines and there are more effective ways to address it than simply 
          supplementing precursors. <LinkComponent href="https://drtimpearce.com/2024/06/06/longevity-the-best-and-worst-supplements-to-slow-ageing/" className="text-[#9f55f9] underline transition-all duration-200">Research by Dr. Tim Pearce</LinkComponent> and 
          others confirms this more targeted approach.
        </Text>
      </SimpleSection>
      </main>
      <Footer />
    </div>
  );
}