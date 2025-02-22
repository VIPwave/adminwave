"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "차트",
    href: "/chart",
  },
  {
    name: "원클릭스밍",
    href: "/streaming",
  },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const path = usePathname();

  useEffect(() => {
    const currentPath = path.split("/")[1];
    if (currentPath) {
      const nextTab = navItems.findIndex(
        (item) => item.href === `/${currentPath}`
      );
      setActiveTab(nextTab);
    }
  }, [activeTab, path]);

  return (
    <header className="flex items-center justify-between px-8 border-b border-gray-800">
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
            item.name !== "home" && (
              <Link
                href={item.href}
                key={index}
                className={cn(
                  "py-4 px-1 border-b-2 -mb-px",
                  index === activeTab
                    ? "bold"
                    : "border-transparent text-gray-500"
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
