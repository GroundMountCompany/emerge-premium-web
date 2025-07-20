'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/emerge-emblem.png"
            alt="Emerge Premium Studios"
            width={36}
            height={36}
            priority
            className="inline-block align-middle"
          />
        </Link>
      </div>
    </header>
  );
} 