import React from 'react';
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
    <div className={`mt-6 px-3 py-2 bg-gradient-to-r from-[#c517ff]/10 to-[#2631f7]/10 border border-purple-200 dark:border-purple-800 rounded-lg inline-block ${className}`}>
      <LinkComponent href={href}>
        <strong>→ Get {productName}</strong>
      </LinkComponent>
      {showDisclaimer && (
        <p className="text-xs mt-2 text-zinc-600 dark:text-zinc-400">
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
      )}
    </div>
  );
};

export default AffiliateBox;