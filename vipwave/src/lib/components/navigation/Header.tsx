'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
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
  ,
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
  const [activeTab, setActiveTab] = useState(0);
  const path = usePathname();

  useEffect(() => {
    const nextTab = navItems.findIndex((item) => item && item.href === path);
    setActiveTab(nextTab);
  }, [path]);

  return (
    <header className="flex items-center justify-between px-5 border-b border-gray-800 text-sm">
      <Link
        className="font-bold"
        href="/"
        key={0}
        onClick={() => setActiveTab(0)}
      >
        VIPWAVE
      </Link>
      <nav className="flex gap-6">
        {navItems.map(
          (item, index) =>
            item &&
            item.name !== 'home' && (
              <Link
                href={item.href}
                key={index}
                className={cn(
                  'py-4 px-1 border-b-2 -mb-px',
                  index === activeTab
                    ? 'bold'
                    : 'border-transparent text-gray-500'
                )}
                onClick={() => setActiveTab(index)}
              >
                {item.name}
              </Link>
            )
        )}
      </nav>
    </header>
  );
}
