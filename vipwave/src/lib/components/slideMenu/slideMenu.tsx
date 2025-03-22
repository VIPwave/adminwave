import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/navItems";
import { slideMenuItems } from "@/lib/slideMenuPaths";
import { usePathname } from "next/navigation";
import IconButton from "@/components/ui/IconButton";

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <IconButton onClick={handleIsOpen} className="px-0 justify-end">
        <Menu color="white" style={{ width: "20px", height: "20px" }} />
      </IconButton>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={handleIsOpen}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[250px] bg-black shadow-lg p-5 transition-transform duration-500 ease-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <Link
            href={"/"}
            onClick={handleIsOpen}
            className={`block ${
              path === "/" ? "font-semibold text-whitㄷ" : "text-gray-300"
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
              {item.name === "가이드" ? (
                <>
                  <div
                    onClick={toggleGuideMenu}
                    className={`flex items-center justify-between w-full ${
                      path.startsWith("/guide")
                        ? "underline underline-offset-[6px] font-semibold text-white"
                        : "text-gray-300"
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
                          onClick={handleIsOpen}
                          className={`block text-[12px] ${
                            path === subItem.href
                              ? "underline underline-offset-[6px] font-semibold text-white"
                              : "text-gray-300"
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
                  className={`block ${
                    path === item.href
                      ? "underline underline-offset-[6px] font-semibold text-white"
                      : "text-gray-300"
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
