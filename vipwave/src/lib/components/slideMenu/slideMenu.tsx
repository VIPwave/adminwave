import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/lib/navItems';
import { slideMenuItems } from '@/lib/slideMenuPaths';
import { usePathname } from 'next/navigation';

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleGuideMenu = () => {
    setIsGuideOpen(!isGuideOpen);
  };

  const path = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={handleIsOpen}>
        <Menu size={24} color="white" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={handleIsOpen}
        />
      )}

      <aside
        className={`absolute top-0 left-0 h-full w-[250px] bg-black shadow-lg p-5 transition-transform duration-500 ease-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between">
          <Link
            href={'/'}
            className={`block text-[16px] ${
              path === '/' ? 'text-primary font-semibold' : 'text-white'
            }`}
          >
            VIPWAVE
          </Link>
          <button className="absolute top-4 right-4" onClick={handleIsOpen}>
            <X size={24} color="white" />
          </button>
        </div>
        <nav className="mt-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.name === '가이드' ? (
                <>
                  <div
                    onClick={toggleGuideMenu}
                    className={`flex items-center justify-between w-full text-[16px]  ${
                      path.startsWith('/guide')
                        ? 'text-primary font-semibold'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                    {isGuideOpen ? (
                      <ChevronUp size={20} color="white" />
                    ) : (
                      <ChevronDown size={20} color="white" />
                    )}
                  </div>

                  {isGuideOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {slideMenuItems.map((subItem, subIndex) => (
                        <Link
                          href={subItem.href}
                          key={subIndex}
                          className={`block text-[14px]  ${
                            path === subItem.href
                              ? 'text-primary font-semibold'
                              : 'text-gray-300'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleIsOpen}
                  className={`block text-[16px] ${
                    path === item.href
                      ? 'text-primary font-semibold'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SlideMenu;
