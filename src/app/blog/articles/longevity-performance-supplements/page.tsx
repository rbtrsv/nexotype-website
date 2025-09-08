'use client';

import React from 'react';
import { createColumnHelper } from '@/modules/blog/components/primitives/Table';
import Table from '@/modules/blog/components/primitives/Table';
import AlternativeArticleHeader from '@/modules/blog/components/composed/AlternativeArticleHeader';
import AffiliateBox from '@/modules/blog/components/primitives/AffiliateBox';
import Text from '@/modules/blog/components/primitives/Text';
import H2 from '@/modules/blog/components/primitives/H2';
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
    supplement: 'Foundational Supplements',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'Multivitamin (Methylated)',
    benefits: 'Covers nutrient gaps, methylation support',
    dosage: '1 serving per label (2–4 caps)',
    link: <AffiliateBox href="https://amazon.com/dp/B07D52M13T/ref=nosim?tag=burarotechnol-20" productName="Multivitamin" />
  },
  {
    supplement: 'Omega-3 (EPA/DHA)',
    benefits: 'Anti-inflammatory, heart & brain health',
    dosage: '2–3g EPA + DHA per day',
    link: <AffiliateBox href="https://amazon.com/dp/B00CAZAU62/ref=nosim?tag=burarotechnol-20" productName="Omega-3" />
  },
  {
    supplement: 'Vitamin D3 + K2',
    benefits: 'Immunity, hormone regulation, bone & heart health',
    dosage: '3000–5000 IU D3 + 90–180µg K2 daily',
    link: <AffiliateBox href="https://amazon.com/dp/B07B8YN8VB/ref=nosim?tag=burarotechnol-20" productName="Vitamin D3+K2" />
  },
  {
    supplement: 'Creatine Monohydrate',
    benefits: 'Strength, endurance, ATP production, brain function',
    dosage: '5g daily pre-workout',
    link: <AffiliateBox href="https://amazon.com/dp/B002DYIZEO/ref=nosim?tag=burarotechnol-20" productName="Creatine" />
  },
  {
    supplement: 'Magnesium Glycinate',
    benefits: 'Sleep quality, muscle relaxation, testosterone support',
    dosage: '400–600mg nightly',
    link: <AffiliateBox href="https://amazon.com/dp/B00C9C2X7Y/ref=nosim?tag=burarotechnol-20" productName="Magnesium Glycinate" />
  },
  {
    supplement: 'Performance & Cognitive Enhancement',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'Alpha-GPC',
    benefits: 'Focus, acetylcholine production, power output',
    dosage: '300mg pre-workout',
    link: <AffiliateBox href="https://amazon.com/dp/B07H4KT7XD/ref=nosim?tag=burarotechnol-20" productName="Alpha-GPC" />
  },
  {
    supplement: 'Lion\'s Mane Mushroom',
    benefits: 'Neurogenesis, cognitive protection, neural pathways',
    dosage: '500–1000mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B078SJ9F5S/ref=nosim?tag=burarotechnol-20" productName="Lion's Mane" />
  },
  {
    supplement: 'Ashwagandha (KSM-66)',
    benefits: 'Cortisol reduction, testosterone, stress adaptation',
    dosage: '600mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B0DHWGVVT2/ref=nosim?tag=burarotechnol-20" productName="Ashwagandha" />
  },
  {
    supplement: 'Longevity & Cellular Health',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'NMN (Nicotinamide Mononucleotide)',
    benefits: 'NAD+ support, cellular energy, DNA repair',
    dosage: '250–500mg daily',
    link: <AffiliateBox href="https://amazon.com/dp/B08Q7BG1VX/ref=nosim?tag=burarotechnol-20" productName="NMN" />
  },
  {
    supplement: 'CoQ10 (Ubiquinol)',
    benefits: 'Cellular energy, heart health, mitochondrial function',
    dosage: '100–200mg daily with fat',
    link: <AffiliateBox href="https://amazon.com/dp/B01A8GGAU6/ref=nosim?tag=burarotechnol-20" productName="CoQ10" />
  },
  {
    supplement: 'Berberine',
    benefits: 'AMPK activation, glucose control, longevity pathways',
    dosage: '500mg 2–3 times daily with meals',
    link: <AffiliateBox href="https://amazon.com/dp/B07L6THBXG/ref=nosim?tag=burarotechnol-20" productName="Berberine" />
  },
  {
    supplement: 'Immune & Hormonal Support',
    benefits: '',
    dosage: '',
    link: null,
    isCategory: true
  },
  {
    supplement: 'Zinc',
    benefits: 'Immune strength, testosterone support, tissue repair',
    dosage: '15–30mg daily (balance with copper)',
    link: <AffiliateBox href="https://amazon.com/dp/B000TMJZ4G/ref=nosim?tag=burarotechnol-20" productName="Zinc" />
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
          { label: 'Health', variant: 'health' },
          { label: 'Performance', variant: 'performance' },
          { label: 'Supplements', variant: 'supplements' }
        ]}
        imageUrl={longevitySupplementsImage.src}
        imageAlt="Longevity and performance supplements"
      />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700">
          <div className="space-y-6">
            <div className="space-y-4">
              <H2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Why we wrote this guide
              </H2>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4">
                <Text>
                  Podcasts, interviews, and social feeds from performance‑science voices such as Peter Attia, 
                  Andrew Huberman, Rhonda Patrick, and Bryan Johnson spark a constant wave of "What do they actually take?" searches.
                </Text>
                <Text>
                  Our goal is to translate those sound‑bites into evidence‑checked, dosage‑specific guidance, 
                  then share our own product picks for readers who want a vetted starting point.
                </Text>
                <Text className="text-sm italic">
                  None of the experts named here had any editorial input and we used publicly available 
                  information to construct this guide.
                </Text>
              </div>
            </div>

            <div className="space-y-4">
              <H2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Supplement List Summary + Dosages (2025 Update)
              </H2>
              
              <Table 
                data={supplementData} 
                columns={columns}
                className="mt-6"
                showSorting={true}
                showFiltering={true}
              />
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#c517ff]/10 to-[#2631f7]/10 border border-purple-200 dark:border-purple-800 rounded-lg">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <strong>Disclaimer:</strong> This information is for educational purposes only and should not replace 
                professional medical advice. Consult with a healthcare provider before starting any supplement regimen, 
                especially if you have existing health conditions or take medications.
              </p>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}