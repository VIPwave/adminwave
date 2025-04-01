import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ChartType =
  | "flo_top100"
  | "melon_hot100"
  | "melon_top100"
  | "genie_top200"
  | "bugs_top100"
  | "vibe_top100";

export function convertRedableChartType(type: ChartType | string) {
  if (type === "flo_top100") {
    return "플로 TOP100";
  } else if (type === "melon_hot100") {
    return "멜론 HOT100";
  } else if (type === "melon_top100") {
    return "멜론 TOP100";
  } else if (type === "genie_top200") {
    return "지니 TOP200";
  } else if (type === "bugs_top100") {
    return "벅스 TOP100";
  } else if (type === "vibe_top100") {
    return "바이브 TOP100";
  }

  return type;
}
