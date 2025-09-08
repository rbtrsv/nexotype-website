import React from 'react';
import { ExternalLink } from 'lucide-react';
import LinkComponent from './LinkComponent';

interface AffiliateBoxProps {
  href: string;
  productName: string;
  showDisclaimer?: boolean;
  className?: string;
}

const AffiliateBox: React.FC<AffiliateBoxProps> = ({ 
  href, 
  productName, 
  showDisclaimer = false,
  className = '' 
}) => {
  return (
    <div className={`mt-6 flex justify-start ${className}`}>
      <div className="px-3 py-2 bg-gradient-to-r from-[#c517ff]/10 to-[#2631f7]/10 border border-purple-200 dark:border-purple-800 rounded-lg inline-flex items-center gap-2">
        <ExternalLink className="w-4 h-4 text-[#9f55f9]" />
        <LinkComponent href={href} className="text-[#9f55f9] hover:text-[#8a4ae3] transition-colors">
          <span className="font-medium">Get {productName}</span>
        </LinkComponent>
        {showDisclaimer && (
          <p className="text-xs mt-2 text-zinc-600 dark:text-zinc-400">
            As an Amazon Associate, I earn from qualifying purchases.
          </p>
        )}
      </div>
    </div>
  );
};

export default AffiliateBox;