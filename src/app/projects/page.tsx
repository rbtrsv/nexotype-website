import React from 'react';
import { Metadata } from 'next';
import NavbarDownwards from '@/modules/main/components/NavbarDownwards/NavbarDownwards';
import Projects from '@/modules/projects/components/Projects';
import Footer from '@/modules/main/components/Footer/Footer';
import { generatePageMetadata } from '@/modules/blog/components/composed/PageSEO';

export const metadata: Metadata = generatePageMetadata({
  title: 'Projects',
  description: 'Explore our innovative projects in fitness, health technology, and lifestyle optimization.',
  slug: 'projects',
  type: 'website',
  keywords: ['projects', 'innovation', 'fitness tech', 'health', 'lifestyle', 'technology'],
});

export default function ProjectsPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarDownwards />
      <div className='grow pt-28'>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
