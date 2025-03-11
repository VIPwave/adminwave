'use client';

import Link from 'next/link';
import SlideMenu from '../slideMenu/slideMenu';

export const navItems = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: '차트',
    href: '/chart',
  },
  {
    name: '원클릭',
    href: '/streaming',
  },
  {
    name: '가이드',
    href: '/guide',
  },
  {
    name: '서포트',
    href: '/support',
  },
];

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
