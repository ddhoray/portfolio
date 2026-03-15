import type { Metadata } from 'next';
import './globals.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  return {
    metadataBase: new URL(baseUrl),
    title: 'DHORAY | Digital Anthropologist | #TheCyberGuy',
    description: 'Daren Dhoray - Digital Anthropologist, Cybersecurity Professional, and Founder of CyberSafeTT Foundation. 25+ years of IT experience.',
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    openGraph: {
      title: 'DHORAY | Digital Anthropologist | #TheCyberGuy',
      description: 'Daren Dhoray - Digital Anthropologist, Cybersecurity Professional, and Founder of CyberSafeTT Foundation.',
      images: ['/og-image.png'],
      type: 'website',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className="min-h-screen bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
