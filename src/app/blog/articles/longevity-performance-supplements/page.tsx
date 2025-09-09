'use client';

import React from 'react';
import { createColumnHelper } from '@/modules/blog/components/primitives/Table';
import Table from '@/modules/blog/components/primitives/Table';
import AlternativeArticleHeader from '@/modules/blog/components/composed/AlternativeArticleHeader';
import AffiliateBox from '@/modules/blog/components/primitives/AffiliateBox';
import Text from '@/modules/blog/components/primitives/Text';
import UL from '@/modules/blog/components/primitives/UL';
import LI from '@/modules/blog/components/primitives/LI';
import LinkComponent from '@/modules/blog/components/primitives/LinkComponent';
import SimpleSection from '@/modules/blog/components/composed/SimpleSection';
import NavbarDownwards from '@/modules/main/components/NavbarDownwards/NavbarDownwards';
import Footer from '@/modules/main/components/Footer/Footer';
import longevitySupplementsImage from './images/Longevity Supplments - Nexotype.jpeg';

interface SupplementData {
  supplement: string;
  benefits: string;
  dosage: string;
  link: React.ReactNode;
  isCategory?: boolean;
}

const supplementData: SupplementData[] = [
  {
    supplement: 'Essential Stack',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'Creatine',
    benefits: 'ATP production, neuroprotection, muscle maintenance',
    dosage: '5g daily',
    link: <AffiliateBox href="https://amazon.com/dp/B06WVKGGJB/ref=nosim?tag=burarotechnol-20" productName="Creatine" />
  },
  {
    supplement: 'Omega-3 (EPA/DHA)',
    benefits: 'Inflammation control, brain health, cardiovascular',
    dosage: '2–3g EPA + DHA daily',
    link: <AffiliateBox href="https://amazon.com/dp/B0739KKHWL/ref=nosim?tag=burarotechnol-20" productName="Omega-3" />
  },
  {
    supplement: 'Magnesium Glycinate',
    benefits: '300+ enzymatic processes, sleep, testosterone',
    dosage: '400–600mg nightly',
    link: <AffiliateBox href="https://amazon.com/dp/B07NWMVMT1/ref=nosim?tag=burarotechnol-20" productName="Magnesium Glycinate" />
  },
  {
    supplement: 'Vitamin D3 + K2',
    benefits: 'Hormone optimization, bone health, immune function',
    dosage: '3000–5000 IU D3 + 90–180µg K2 daily',
    link: <AffiliateBox href="https://amazon.com/dp/B09RG6LXJ2/ref=nosim?tag=burarotechnol-20" productName="Vitamin D3+K2" />
  },
  {
    supplement: 'Berberine',
    benefits: 'AMPK activation, glucose control, longevity pathways',
    dosage: '500mg 2–3 times daily with meals',
    link: <AffiliateBox href="https://amazon.com/dp/B07PSMZ3J1/ref=nosim?tag=burarotechnol-20" productName="Berberine" />
  },
  {
    supplement: 'Advanced Optimization',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'NMN (NAD+ precursor)',
    benefits: 'DNA repair, cellular energy, multiple aging pathways',
    dosage: '250–500mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B08Q7BG1VX/ref=nosim?tag=burarotechnol-20" productName="NMN" />
  },
  {
    supplement: 'Ashwagandha (KSM-66)',
    benefits: 'Cortisol reduction, testosterone, stress adaptation',
    dosage: '600mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B0F9N56MST/ref=nosim?tag=burarotechnol-20" productName="Ashwagandha" />
  },
  {
    supplement: 'Ubiquinol (CoQ10)',
    benefits: 'Mitochondrial function, cardiovascular health',
    dosage: '100–200mg daily with fat',
    link: <AffiliateBox href="https://amazon.com/dp/B003PWKVKE/ref=nosim?tag=burarotechnol-20" productName="CoQ10" />
  },
  {
    supplement: 'Alpha-Lipoic Acid',
    benefits: 'Glucose metabolism, antioxidant recycling',
    dosage: '300–600mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B000I1YJQC/ref=nosim?tag=burarotechnol-20" productName="Alpha-Lipoic Acid" />
  },
  {
    supplement: 'Glycine',
    benefits: 'Sleep quality, collagen synthesis, glutathione production',
    dosage: '3g before bed',
    link: <AffiliateBox href="https://amazon.com/dp/B002J0RHTQ/ref=nosim?tag=burarotechnol-20" productName="Glycine" />
  },
  {
    supplement: 'Melatonin',
    benefits: 'Sleep-wake cycle regulation, deeper sleep quality',
    dosage: '2–10mg before bed',
    link: <AffiliateBox href="https://amazon.com/dp/B00H779MOE/ref=nosim?tag=burarotechnol-20" productName="Melatonin" />
  },
  {
    supplement: 'Targeted Enhancement',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'Astaxanthin',
    benefits: 'Powerful antioxidant, skin protection',
    dosage: '8–12mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B097F68J43/ref=nosim?tag=burarotechnol-20" productName="Astaxanthin" />
  },
  {
    supplement: 'PQQ (Pyrroloquinoline Quinone)',
    benefits: 'Mitochondrial biogenesis, energy levels, cellular vitality',
    dosage: '20mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B07BH4JG35/ref=nosim?tag=burarotechnol-20" productName="PQQ" />
  },
  {
    supplement: 'Zinc',
    benefits: 'Testosterone, immune function, tissue repair',
    dosage: '15–30mg daily (balance with copper)',
    link: <AffiliateBox href="https://amazon.com/dp/B07735XF2K/ref=nosim?tag=burarotechnol-20" productName="Zinc" />
  },
  {
    supplement: 'Lion\'s Mane',
    benefits: 'Neurogenesis, cognitive protection',
    dosage: '500–1000mg daily (best consumed in morning with coffee)',
    link: <AffiliateBox href="https://amazon.com/dp/B08JSS48Z7/ref=nosim?tag=burarotechnol-20" productName="Lion's Mane" />
  },
  {
    supplement: 'Tongkat Ali',
    benefits: 'Testosterone optimization, stress resilience',
    dosage: '200–400mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B00NY30DP2/ref=nosim?tag=burarotechnol-20" productName="Tongkat Ali" />
  },
  {
    supplement: 'Alpha-GPC',
    benefits: 'Acetylcholine production, focus, power output',
    dosage: '300mg pre-workout',
    link: <AffiliateBox href="https://amazon.com/dp/B07H4KT7XD/ref=nosim?tag=burarotechnol-20" productName="Alpha-GPC" />
  }
];

const columnHelper = createColumnHelper<SupplementData>();

const columns = [
  columnHelper.accessor('supplement', {
    header: 'Supplement',
    cell: info => {
      const isCategory = info.row.original.isCategory;
      return (
        <span className={isCategory ? "font-semibold text-zinc-900 dark:text-zinc-100" : "font-medium text-zinc-900 dark:text-zinc-100"}>
          {info.getValue()}
        </span>
      );
    }
  }),
  columnHelper.accessor('benefits', {
    header: 'Benefits (concise)',
    cell: info => {
      const isCategory = info.row.original.isCategory;
      return isCategory ? null : (
        <span className="text-zinc-700 dark:text-zinc-300">
          {info.getValue()}
        </span>
      );
    }
  }),
  columnHelper.accessor('dosage', {
    header: 'Dosage Guide',
    cell: info => {
      const isCategory = info.row.original.isCategory;
      return isCategory ? null : (
        <span className="text-zinc-700 dark:text-zinc-300 font-mono text-sm">
          {info.getValue()}
        </span>
      );
    }
  }),
  columnHelper.accessor('link', {
    header: 'Link to buy',
    cell: info => {
      const isCategory = info.row.original.isCategory;
      return isCategory ? null : info.getValue();
    }
  })
] as any;

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

        <Table 
          data={supplementData} 
          columns={columns}
          className="mt-6"
          showSorting={true}
          showFiltering={true}
          showPagination={false}
        />

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