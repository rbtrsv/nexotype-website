import React from 'react';
import { Metadata } from 'next';
import NavbarDownwards from '@/modules/main/components/NavbarDownwards/NavbarDownwards';
import Footer from '@/modules/main/components/Footer/Footer';
import BlogHeroHeader from '@/modules/blog/components/composed/BlogHeroHeader';
import BlogCategoryTabs from '@/modules/blog/components/composed/BlogCategoryTabs';
import BlogPostsGrid from '@/modules/blog/components/composed/BlogPostsGrid';
import BlogSearchBar from '@/modules/blog/components/composed/BlogSearchBar';
import { generatePageMetadata } from '@/modules/blog/components/composed/PageSEO';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Insights on fitness, longevity, lifestyle, and entrepreneurship to help you optimize your life and business',
  slug: 'blog',
  type: 'website',
  keywords: ['fitness', 'longevity', 'lifestyle', 'entrepreneurship', 'health', 'wellness', 'optimization', 'performance'],
});

interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  publishDate: string;
  categories: string[];
  href?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "6 Supplements Proven to Increase Testosterone",
    slug: "testosterone-supplements-proven",
    summary: "Evidence-based natural supplements that boost testosterone through specific biological mechanisms, with dosages, research, and where to buy.",
    publishDate: "2025-01-06",
    categories: ["Supplements", "Health", "Performance"],
    href: "/blog/articles/testosterone-supplements-proven"
  },
  {
    title: "Daily Routine Components Demo",
    slug: "routine-demo", 
    summary: "Explore our new routine section components with interactive examples and content, inspired by evidence-based optimization strategies.",
    publishDate: "2025-01-15",
    categories: ["Lifestyle"],
    href: "/blog/articles/routine-demo"
  },
  {
    title: "The Science of Longevity",
    slug: "science_of_longevity",
    summary: "Explore the latest research and practices for extending healthy lifespan, backed by cutting-edge scientific studies and practical applications.",
    publishDate: "2023-11-01",
    categories: ["Longevity", "Health"]
  },
  {
    title: "Entrepreneurship Mindset",
    slug: "entrepreneurship-mindset",
    summary: "Develop the mental frameworks and habits that successful entrepreneurs use to build thriving businesses and overcome challenges.",
    publishDate: "2023-10-15",
    categories: ["Entrepreneurship", "Productivity"],
    href: "/blog/articles/entrepreneurship-mindset"
  }
];

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ categories?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  const selectedCategories = resolvedSearchParams.categories ? resolvedSearchParams.categories.split(',') : [];
  const allCategories = ['Lifestyle', 'Longevity', 'Health', 'Fitness', 'Supplements', 'Performance', 'Entrepreneurship', 'Productivity', 'Wellness'];

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDownwards />
      
      <main className="grow bg-white dark:bg-black">
        
        {/* Hero Header */}
        <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-4">
          <BlogHeroHeader />
        </section>

        {/* Category Filter with Search */}
        <section className="py-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <BlogCategoryTabs 
            allCategories={allCategories}
            selectedCategories={selectedCategories}
          />
          
          {/* Search Bar below categories but above divider */}
          <div className="mt-6">
            <div className="w-72 max-w-72 mx-auto px-4">
              <BlogSearchBar blogPosts={blogPosts} />
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <BlogPostsGrid 
            blogPosts={blogPosts}
            selectedCategories={selectedCategories}
          />
        </section>
        
        {/* Future: Pagination would go here */}
        
      </main>
      
      <Footer />
    </div>
  );
}