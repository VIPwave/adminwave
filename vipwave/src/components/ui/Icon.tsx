"use client";

import { ReactNode } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type IconButtonPropsType = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

export default function IconButton(props: IconButtonPropsType) {
  const { children, onClick, className } = props;

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-[28px] h-[28px] flex items-center justify-center rounded-none",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
