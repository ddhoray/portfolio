'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Daren Dhoray. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
