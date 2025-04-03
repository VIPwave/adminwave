'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-2 border-b border-secondary text-sm">
      <Link className="font-bold" href="/">
        ADMINWAVE
      </Link>
    </header>
  );
}
