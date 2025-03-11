'use client';

import Link from 'next/link';
import SlideMenu from '../slideMenu/slideMenu';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-gray-800 text-sm">
      <Link className="font-bold" href="/">
        VIPWAVE
      </Link>
      <nav>
        <SlideMenu />
      </nav>
    </header>
  );
}
