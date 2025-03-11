import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '../navigation/Header';
import { slideMenuItems } from '@/lib/slideMenuPaths';

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  //const [activeTab, setActiveTab] = useState(0);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleGuideMenu = () => {
    setIsGuideOpen(!isGuideOpen);
  };

  //const path = usePathname();

  // useEffect(() => {
  //   const nextTab = slideMenuPaths.includes(path)
  //     ? navItems.findIndex((item) => item.href === '/guide')
  //     : navItems.findIndex((item) => item.href === path);

  //   setActiveTab(nextTab !== -1 ? nextTab : 0);
  // }, [path]);

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
        <button className="absolute top-4 right-4" onClick={handleIsOpen}>
          <X size={24} color="white" />
        </button>
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
        <nav className="mt-10 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.name === '가이드' ? (
                <>
                  <div
                    onClick={toggleGuideMenu}
                    className="flex items-center justify-between w-full text-lg text-white font-bold"
                  >
                    {item.name}
                    {isGuideOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>

                  {isGuideOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {slideMenuItems.map((item, index) => (
                        <Link
                          href={item.href}
                          key={index}
                          className="block text-md text-gray-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleIsOpen}
                  className="block text-lg text-white font-bold"
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
