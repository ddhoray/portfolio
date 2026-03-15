'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { CDN_IMAGES, NAV_ITEMS } from '@/lib/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-[140px] h-[40px]">
              <Image
                src={CDN_IMAGES.logo}
                alt="DHORAY Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS?.map?.((item) => (
              <Link
                key={item?.href ?? '#'}
                href={item?.href ?? '/'}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item?.href
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item?.label ?? ''}
              </Link>
            )) ?? []}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {NAV_ITEMS?.map?.((item) => (
              <Link
                key={item?.href ?? '#'}
                href={item?.href ?? '/'}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item?.href
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item?.label ?? ''}
              </Link>
            )) ?? []}
          </div>
        )}
      </div>
    </nav>
  );
}
