import React from 'react';

const AffiliateDisclosure: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-center mb-8">
          <span className="bg-gradient-to-br from-[#c517ff] to-[#2631f7] bg-clip-text text-transparent">
            Buraro
          </span>{' '}
          <span className="text-zinc-900 dark:text-zinc-100">
            Affiliate Disclosure
          </span>
        </h1>
      </header>

      <div className="space-y-8">
        <div className="space-y-6">
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black leading-relaxed">
            <strong>Disclaimer:</strong> All workout routines, nutrition tips, and lifestyle content we share is meant for educational purposes only. Do not treat this as professional medical advice. What works varies from person to person based on your goals, fitness level, and lifestyle.
          </p>

          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black leading-relaxed">
            Some product links on this site earn us a small commission when you buy something. You do not pay extra, we just get a kickback from the company to help keep the site running.
          </p>

          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black leading-relaxed">
            We research everything we recommend, but we cannot guarantee every person mentioned actually uses every single thing we talk about. We do our best to keep info accurate and up to date.
          </p>

          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black leading-relaxed">
            We are part of Amazon affiliate program and work with other companies including health supplement brands, fitness equipment companies, and lifestyle product partners. When you buy stuff through our links, we might earn commission to keep creating content.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#c517ff]/10 to-[#2631f7]/10 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <p className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-3">
            Important Notice
          </p>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
            <strong>As an Amazon Associate I earn from qualifying purchases.</strong> This website contains affiliate links to products and services from various partners.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AffiliateDisclosure;