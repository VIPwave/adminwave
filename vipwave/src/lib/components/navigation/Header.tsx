'use client';

import Link from 'next/link';
import SlideMenu from '../slideMenu/slideMenu';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  const isAdminPage = path.startsWith('/admin');

  return (
    <header className="flex items-center justify-between px-5 py-2 border-b border-secondary text-sm">
      <Link className="font-bold" href="/">
        VIPWAVE
      </Link>
      <nav>{!isAdminPage && <SlideMenu />}</nav>
    </header>
  );
}
