import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zesen Long — Computer Engineer',
  description: 'Embedded systems, robotics, edge AI, and playful hardware–software projects by Zesen Long.',
  metadataBase: new URL('https://zesen-long-portfolio.vaundy.chatgpt.site'),
  openGraph: {
    title: 'Zesen Long — Computer Engineer',
    description: 'Embedded systems, robotics, edge AI, and playful hardware–software projects.',
    type: 'website',
    url: 'https://zesen-long-portfolio.vaundy.chatgpt.site',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zesen Long — Computer Engineer',
    description: 'Embedded systems, robotics, edge AI, and playful hardware–software projects.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
