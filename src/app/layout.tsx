import '@/modules/main/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='h-full' lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Impact.com affiliate network site verification */}
        <meta name='impact-site-verification' content='30029652-c46b-468f-a1a7-49fb49800a1f' />
      </head>
      <body className='h-full bg-white text-black dark:bg-black dark:text-white'>
        {children}
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}