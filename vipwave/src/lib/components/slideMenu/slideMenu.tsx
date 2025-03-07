import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="p-2 z-50" onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`absolute top-0 left-0 h-full w-[250px] bg-white shadow-lg p-5 transition-transform duration-500 ease-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} color="black" />
        </button>

        <nav className="mt-10 space-y-4">
          <Link
            href="/"
            className="block text-lg text-black font-bold"
            onClick={() => setIsOpen(false)}
          >
            VIPWAVE
          </Link>
          <Link
            href="/chart"
            className="block text-lg text-black font-bold"
            onClick={() => setIsOpen(false)}
          >
            차트
          </Link>
          <Link
            href="/streaming"
            className="block text-lg text-black font-bold"
            onClick={() => setIsOpen(false)}
          >
            원클릭
          </Link>
          <Link
            href="/guide"
            className="block text-lg text-black font-bold"
            onClick={() => setIsOpen(false)}
          >
            가이드
          </Link>
          <Link
            href="/support"
            className="block text-lg text-black font-bold"
            onClick={() => setIsOpen(false)}
          >
            서포트
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default SlideMenu;
