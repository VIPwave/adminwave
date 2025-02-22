"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "차트",
    href: "/chart",
  },
  {
    name: "가이드",
    href: "/guide",
  },
  {
    name: "원클릭스밍",
    href: "/streaming",
  },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("chart");

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="text-xl font-bold ">VIPWAVE</div>
      <nav className="flex gap-6">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "py-4 px-1 border-b-2 -mb-px",
              activeTab === item.name
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            )}
            onClick={() => setActiveTab(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
