# Claude Code Instructions for Buraro Website

This is a comprehensive guide for Claude Code instances working on the Buraro website - a Next.js-based platform focused on fitness, longevity, lifestyle, and entrepreneurship content.

## Project Overview

**Project Name**: buraro-website
**Framework**: Next.js 15.4.6 with App Router
**Node Version**: >=22.0.0
**Language**: TypeScript
**Styling**: Tailwind CSS with dark mode support
**Deployment**: Vercel (with analytics integration)

## Available Scripts

```bash
# Development with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Architecture Overview

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with dark mode setup
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog section
│   │   ├── page.tsx       # Blog listing page
│   │   ├── articles/      # Individual blog articles
│   │   └── routine-demo/  # Demo page for routine components
│   ├── projects/          # Projects showcase
│   ├── robots.ts          # SEO robots configuration
│   └── sitemap.ts         # Dynamic sitemap generation
└── modules/               # Feature-based module organization
    ├── main/              # Core website components
    │   ├── components/    # Shared UI components
    │   ├── fonts/         # Inter font files
    │   ├── images/        # Logo and brand assets
    │   ├── styles/        # Global CSS
    │   └── public/        # Static assets
    ├── blog/              # Blog-specific components
    │   └── components/    # Blog UI components
    │       ├── articles/  # Article layout components
    │       ├── code/      # Syntax highlighting (Shiki)
    │       ├── composed/  # Complex composed components
    │       └── primitives/ # Basic building blocks
    └── projects/          # Project showcase components
```

### Key Architectural Patterns

1. **Module-Based Organization**: Features are organized into modules (main, blog, projects) with their own component directories
2. **Component Hierarchy**: Components are categorized as primitives, composed, or feature-specific
3. **Layout System**: Uses Next.js App Router with a root layout handling dark mode
4. **SEO Optimization**: Comprehensive SEO setup with dynamic sitemaps and metadata generation

## Styling & Theme System

### Tailwind Configuration
- **Dark Mode**: Class-based (`class` strategy)
- **Font**: Inter variable font (self-hosted)
- **Plugins**: Forms and Typography plugins enabled
- **Content**: Scans all TypeScript/JSX files in src/

### Dark Mode Implementation
- Configured at root layout level with localStorage persistence
- Theme toggle available in navigation
- Automatic system preference detection
- Colors: `bg-white/dark:bg-black` with `text-black/dark:text-white`

### Brand Colors
- Primary gradient: `from-[#c517ff] to-[#2631f7]` (purple to blue)
- Hover states: `violet-600`
- Text hierarchy: `text-black/95` and `text-zinc-600` variants

## Key Components & Patterns

### Navigation (NavbarDownwards)
- Fixed positioned with backdrop blur
- Mobile-responsive with hamburger menu
- Dropdown support for navigation items
- Integrated theme switcher
- Logo variants for light/dark themes

### Blog System
- **ComponentMapper**: Dynamic component rendering system
- **Category Filtering**: Client-side blog post filtering
- **SEO Components**: Standardized metadata generation
- **Code Highlighting**: Shiki integration with dual themes

### Component Organization
```
primitives/     # Basic building blocks (H1, Text, etc.)
composed/       # Complex components (BlogPostCategoryFilter)
articles/       # Article-specific layouts
code/           # Code syntax highlighting
```

## Development Guidelines

### File Naming Conventions
- Components: PascalCase (e.g., `NavbarDownwards.tsx`)
- Pages: lowercase with Next.js App Router conventions
- Assets: kebab-case (e.g., `buraro-default-monochrome-black.svg`)

### Import Patterns
- Absolute imports using `@/` alias (maps to `src/`)
- Module-based imports: `@/modules/main/components/...`
- Asset imports: Direct imports from module paths

### TypeScript Configuration
- Strict mode enabled
- Path mapping: `@/*` → `./src/*`
- Target: ES2017
- JSX: preserve (handled by Next.js)

### Development Best Practices
- **Image Props**: Always make imageUrl and imageAlt optional in components, with conditional rendering
- **URL Verification**: Test Unsplash URLs before implementing to ensure they load correctly
- **Component Testing**: Test components both with and without optional props to prevent runtime errors
- **Error Prevention**: Use TypeScript strict mode and test edge cases during development

## Content Management

### Blog Posts
- Static definition in `src/app/blog/page.tsx`
- Article structure: title, slug, summary, publishDate, categories
- Category-based filtering system
- Individual articles in `src/app/blog/articles/[slug]/page.tsx`

### SEO & Metadata
- **PageSEO Component**: Centralized metadata generation
- **Dynamic Sitemaps**: Automatic article discovery
- **Base URL**: Environment-based (`NEXT_PUBLIC_BASE_URL`)
- **Social Media**: Open Graph and Twitter Card support

## Dependencies & Tools

### Core Dependencies
- **Next.js**: 15.4.6 (App Router)
- **React**: 19.1.1
- **TypeScript**: 5.4.5
- **Tailwind CSS**: 3.4.3

### UI & Icons
- **Lucide React**: Primary icon library
- **Heroicons**: Secondary icon set
- **React Icons**: Additional icon support

### Utilities
- **clsx**: Conditional className handling
- **date-fns**: Date manipulation
- **Shiki**: Syntax highlighting

### Development Tools
- **ESLint**: Code linting (Next.js config)
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Deployment & Configuration

### Environment Variables
- `NEXT_PUBLIC_BASE_URL`: Base URL for absolute links and SEO

### Build Configuration
- **React Strict Mode**: Enabled
- **ESLint**: Ignored during builds
- **Image Domains**: Configured for Unsplash and placeholder images
- **Experimental Features**: Currently empty object

### SEO Configuration
- **Robots.txt**: Generated dynamically
- **Sitemap**: Auto-generated from file structure
- **Meta Tags**: Comprehensive Open Graph and Twitter Card setup

## Special Features

### Code Highlighting
- **Shiki Integration**: Syntax highlighting for blog content
- **Supported Languages**: Python, JavaScript, TypeScript, CSS, HTML, Bash
- **Dual Themes**: github-light/github-dark for theme switching
- **Error Handling**: Graceful fallback to plain code blocks

### Analytics
- **Vercel Analytics**: Integrated in production mode
- **Google AdSense**: Prepared but commented out

### Performance Optimizations
- **Font Optimization**: Self-hosted Inter variable fonts
- **Image Optimization**: Next.js Image component with remote patterns
- **Turbopack**: Development mode acceleration

## Working with This Codebase

### Adding New Blog Posts
1. Create directory in `src/app/blog/articles/[slug]/`
2. Add `page.tsx` with article content
3. Update blog posts array in `src/app/blog/page.tsx`
4. Sitemap will auto-update

### Adding New Components
1. Determine appropriate module (main, blog, projects)
2. Choose component category (primitives, composed, feature-specific)
3. Follow existing naming and import patterns
4. Use TypeScript interfaces for props

### Styling Guidelines
- Use Tailwind utility classes
- Implement dark mode variants
- Follow responsive design patterns
- Use brand colors consistently

### SEO Best Practices
- Use `generatePageMetadata` for consistent SEO
- Include relevant keywords and descriptions
- Ensure proper heading hierarchy
- Test with both light and dark themes

## Common Tasks

### Theme Development
- Test both light and dark modes
- Use semantic color tokens
- Ensure sufficient contrast ratios
- Test theme persistence across sessions

### Component Development
- Start with primitives for reusable elements
- Build composed components for complex functionality
- Use TypeScript for prop validation
- Follow accessibility guidelines

### Content Addition
- Use existing blog post structure
- Implement proper SEO metadata
- Test responsive layouts
- Validate all internal links

## Recent Development Context

### Blog Demo Implementation (January 2025)
The routine-demo page (`/src/app/blog/routine-demo/`) demonstrates the blog component system:
- **AdaptableSection Component**: Flexible content sections with optional time indicators and color coding for routine-based content
- **Tag & TimeIndicator**: Refactored from standalone primitives to internal subcomponents within AdaptableSection for better coupling
- **Image Management**: Fixed broken Unsplash URLs and established pattern of using different images for headers vs content sections
- **Content Structure**: Sections support both timed routine items and general content blocks

### SEO Architecture Enhancement
- **ArticleSEO → PageSEO**: Renamed and moved from articles/ to composed/ for site-wide reusability
- **Enhanced Metadata**: Added comprehensive SEO fields including robots directives, OpenGraph optimization, and Twitter cards
- **generatePageMetadata Function**: Centralized metadata generation with consistent structure across all pages

### Component Architecture Patterns
Established architectural decisions:
- **Image URLs**: Always use different images between AlternativeArticleHeader and content sections to avoid duplication
- **Component Organization**: Prefer subcomponents within composed components over standalone primitives when components are tightly coupled
- **Unsplash Integration**: Use working image URLs with proper Next.js image configuration in next.config.mjs
- **SEO Consistency**: Use PageSEO component across all pages instead of inline metadata
- **AdaptableSection Usage**: imageUrl and imageAlt props are optional - component automatically adapts layout when no image provided
- **Image Validation**: Always verify Unsplash URLs exist before using them in components to avoid empty src attributes

## Design Preferences & User Requirements

### Core Principles
- **ALWAYS plan before implementing** - Present plan for approval to avoid mistakes
- **Clean, content-first design** - Remove visual noise (dates, "read more" text, etc.)
- **No heavy gradient borders** - Use subtle accents like thin left borders instead
- **Vertical layouts over grids** - Single column stacks are more readable
- **Large titles with generous spacing** - Bold typography and breathing room
- **Entire cards clickable** - Not just titles or links

### Key Patterns
- **Blog cards**: Clean border + shadow, purple accent bar, colored category tags at bottom
- **Information order**: Title → Description → Categories (remove dates)
- **Brand colors as accents only** - `from-[#c517ff] to-[#2631f7]` sparingly

This documentation should provide comprehensive guidance for any Claude Code instance working on the Buraro website. Always refer to existing patterns and maintain consistency with the established architecture.