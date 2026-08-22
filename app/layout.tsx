import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zesen Long — Computer Engineer',
  description: 'Embedded systems, robotics, edge AI, and playful hardware–software projects by Zesen Long.',
  metadataBase: new URL('https://github.com/OrionHachiii/zesen-portfolio'),
  openGraph: {
    title: 'Zesen Long — Computer Engineer',
    description: 'Embedded systems, robotics, edge AI, and playful hardware–software projects.',
    type: 'website',
    images: ['https://raw.githubusercontent.com/OrionHachiii/zesen-portfolio/main/public/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zesen Long — Computer Engineer',
    description: 'Embedded systems, robotics, edge AI, and playful hardware–software projects.',
    images: ['https://raw.githubusercontent.com/OrionHachiii/zesen-portfolio/main/public/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
