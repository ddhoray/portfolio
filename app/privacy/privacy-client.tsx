'use client';

import Navigation from '../components/navigation';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import SectionWrapper from '../components/section-wrapper';
import { Shield, FileText } from 'lucide-react';

const sections = [
  {
    title: 'Information Collection',
    content: 'We collect information that you voluntarily provide when using our contact forms, including your name, email address, subject, and message content. We also collect usage data through standard web analytics to improve the site experience.',
  },
  {
    title: 'Use of Information',
    content: 'Personal information collected through contact forms is used solely to respond to your inquiries. Usage data is aggregated and used to understand how visitors interact with the website to improve content and user experience.',
  },
  {
    title: 'Data Storage & Security',
    content: 'Contact form submissions are stored in a secure database. We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.',
  },
  {
    title: 'Digital Footprint Checker',
    content: 'The Digital Footprint Checker tool provides an educational estimate of digital exposure. Email addresses entered into this tool are not stored or shared. Results are generated in real-time and not retained after your session.',
  },
  {
    title: 'Internet Addiction Test',
    content: 'The Internet Addiction Test processes your answers locally in your browser. No test data is transmitted to our servers or stored in any database.',
  },
  {
    title: 'Third-Party Links',
    content: 'This website contains links to external sites including LinkedIn, Facebook, Instagram, CyberSafeTT.com, and WhatsApp. We are not responsible for the privacy practices of these external sites.',
  },
  {
    title: 'Contact',
    content: 'For privacy-related inquiries, please contact daren@dhoray.com.',
  },
];

export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900/30 to-gray-950">
      <Navigation />
      <SocialIcons />

      <div className="pt-24 pb-16 max-w-[800px] mx-auto px-4 sm:px-6">
        <SectionWrapper>
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-6 h-6 text-red-500" />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-gray-400 mb-10">Last updated: March 2026</p>
        </SectionWrapper>

        <div className="space-y-6">
          {sections?.map?.((section, i) => (
            <SectionWrapper key={i} delay={i * 0.05}>
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-500" />
                  {section?.title ?? ''}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{section?.content ?? ''}</p>
              </div>
            </SectionWrapper>
          )) ?? []}
        </div>
      </div>

      <Footer />
    </div>
  );
}
