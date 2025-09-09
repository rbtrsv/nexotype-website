'use client';

import React from 'react';
import { createColumnHelper } from '@/modules/blog/components/primitives/Table';
import Table from '@/modules/blog/components/primitives/Table';
import AffiliateBox from '@/modules/blog/components/primitives/AffiliateBox';

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

export default function SupplementTable() {
  return (
    <Table 
      data={supplementData} 
      columns={columns}
      className="mt-6"
      showSorting={true}
      showFiltering={true}
      showPagination={false}
    />
  );
}