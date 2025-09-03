import React from 'react';

interface BlogHeroHeaderProps {
  className?: string;
}

const BlogHeroHeader: React.FC<BlogHeroHeaderProps> = ({
  className = ''
}) => {
  return (
    <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12 text-center ${className}`}>
      <div className="space-y-4">
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              <span className="bg-linear-to-br from-[#c517ff] to-[#2631f7] bg-clip-text text-transparent">
                Nexotype
              </span>{' '}
              <span className="text-zinc-900 dark:text-zinc-100">
                Blog
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Insights on fitness, longevity, lifestyle, and entrepreneurship to help you optimize your life and business.
            </p>
            
            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">3+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">6</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">∞</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Impact</div>
              </div>
            </div>
            
      </div>
    </div>
  );
};

export default BlogHeroHeader;