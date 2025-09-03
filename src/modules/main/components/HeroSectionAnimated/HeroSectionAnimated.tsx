import React from 'react';
import './HeroSectionAnimated.css';

const HeroSectionAnimated: React.FC = () => {
  return (
    <header id='hero-section'>
      <h1
        className='letter-spacing-custom select-none text-center font-bold leading-none text-transparent max-lg:text-5xl max-md:text-4xl max-sm:pt-24 max-sm:text-3xl sm:pt-36 lg:text-6xl'
        aria-label='Fitness. Longevity. Lifestyle.'
      >
        <span
          data-content='Fitness.'
          className='before:animate-gradient-background-1 relative -mx-1 inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white'
        >
          <span className='animate-gradient-foreground-1 from-gradient-1-start to-gradient-1-end bg-linear-to-r bg-clip-text px-2 text-transparent'>
            Fitness.
          </span>
        </span>
        <span
          data-content='Longevity.'
          className='before:animate-gradient-background-2 relative -mx-1 inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white'
        >
          <span className='animate-gradient-foreground-2 from-gradient-2-start to-gradient-2-end bg-linear-to-r bg-clip-text px-2 text-transparent'>
            Longevity.
          </span>
        </span>
        <span
          data-content='Lifestyle.'
          className='before:animate-gradient-background-3 relative -mx-1 inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white'
        >
          <span className='animate-gradient-foreground-3 from-gradient-3-start to-gradient-3-end bg-linear-to-r bg-clip-text px-2 text-transparent'>
            Lifestyle.
          </span>
        </span>
      </h1>
      <h2 className='sm:px-10 mx-auto max-w-3xl py-6 text-center font-normal leading-8 tracking-tight text-black/90 dark:text-white/90 max-lg:text-lg max-sm:text-lg sm:px-16 lg:text-xl'>
        Optimize your health, extend your lifespan, and elevate your quality of life with cutting-edge strategies.
      </h2>
    </header>
  );
};

export default HeroSectionAnimated;