'use client';

// import { cn } from '@/lib/utils';
import Link from 'next/link';
//import { usePathname } from 'next/navigation';
//import { useEffect, useState } from 'react';
import SlideMenu from '../slideMenu/slideMenu';
//import { slideMenuPaths } from '@/lib/slideMenuPaths';

// const navItems = [
//   {
//     name: 'home',
//     href: '/',
//   },
//   {
//     name: '차트',
//     href: '/chart',
//   },
//   {
//     name: '원클릭',
//     href: '/streaming',
//   },
//   {
//     name: '가이드',
//     href: '/guide',
//   },
//   {
//     name: '서포트',
//     href: '/support',
//   },
// ];

export default function Header() {
  //const [activeTab, setActiveTab] = useState(0);
  //const path = usePathname();

  // useEffect(() => {
  //   const nextTab = slideMenuPaths.includes(path)
  //     ? navItems.findIndex((item) => item.href === '/guide')
  //     : navItems.findIndex((item) => item.href === path);

  //   setActiveTab(nextTab !== -1 ? nextTab : 0);
  // }, [path]);

  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-gray-800 text-sm">
      <Link className="font-bold" href="/">
        VIPWAVE
      </Link>

      <nav>
        <SlideMenu />
      </nav>
      {/* <nav className="flex gap-6">
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
      </nav> */}
    </header>
  );
}
