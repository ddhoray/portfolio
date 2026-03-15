'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CDN_IMAGES } from '@/lib/constants';
import Navigation from './navigation';
import SocialIcons from './social-icons';
import Footer from './footer';
import { Briefcase, Shield, Heart } from 'lucide-react';

const cards = [
  {
    title: 'Professional',
    subtitle: 'Digital Anthropologist & IT Leader',
    image: CDN_IMAGES.professional,
    href: '/professional',
    icon: Briefcase,
    gradient: 'from-blue-900/80 to-blue-950/90',
  },
  {
    title: 'CyberSafeTT',
    subtitle: 'Keeping Trinidad & Tobago Safe Online',
    image: CDN_IMAGES.cybersafett,
    href: '/cybersafett',
    icon: Shield,
    gradient: 'from-red-900/80 to-red-950/90',
  },
  {
    title: 'Volunteerism',
    subtitle: 'Community Service & Giving Back',
    image: CDN_IMAGES.volunteer,
    href: '/volunteerism',
    icon: Heart,
    gradient: 'from-blue-800/80 to-indigo-950/90',
  },
];

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navigation />
      <SocialIcons />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        {/* Animated background dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
            <span className="text-white">DHORAY</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Digital Anthropologist &bull; <span className="text-red-500 font-medium">#TheCyberGuy</span>
          </p>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            25+ years transforming technology, education, and cybersecurity across the Caribbean.
          </p>
        </motion.div>

        {/* Three column cards */}
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 relative z-10">
          {cards?.map?.((card, idx) => {
            const IconComp = card?.icon;
            return (
              <motion.div
                key={card?.href ?? idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              >
                <Link href={card?.href ?? '/'} className="group block">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-red-500/20 group-hover:scale-[1.02]">
                    <Image
                      src={card?.image ?? ''}
                      alt={card?.title ?? 'Portfolio section'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${card?.gradient ?? ''} transition-opacity duration-500 group-hover:opacity-0`} />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {IconComp && <IconComp className="w-6 h-6 text-red-400" />}
                        <h2 className="text-2xl font-bold text-white">{card?.title ?? ''}</h2>
                      </div>
                      <p className="text-gray-300 text-sm">{card?.subtitle ?? ''}</p>
                      <div className="mt-3 inline-flex items-center text-red-400 text-sm font-medium group-hover:text-red-300 transition-colors">
                        Explore &rarr;
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          }) ?? []}
        </div>
      </section>

      <Footer />
    </div>
  );
}
