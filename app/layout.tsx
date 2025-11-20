import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme AI ? Ship smarter, faster',
  description: 'Modern AI-powered tooling to accelerate your team?s workflow.',
  metadataBase: new URL('https://agentic-1f04df8f.vercel.app'),
  openGraph: {
    title: 'Acme AI ? Ship smarter, faster',
    description: 'Modern AI-powered tooling to accelerate your team?s workflow.',
    url: 'https://agentic-1f04df8f.vercel.app',
    siteName: 'Acme AI',
    images: [
      {
        url: 'https://og-playground.vercel.sh/api/og?title=Acme%20AI&desc=Ship%20smarter%2C%20faster',
        width: 1200,
        height: 630,
        alt: 'Acme AI'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme AI ? Ship smarter, faster',
    description: 'Modern AI-powered tooling to accelerate your team?s workflow.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
