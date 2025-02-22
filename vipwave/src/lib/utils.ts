import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ChartType = "flo_top100" | "melon_hot100" | string

export function convertRedableChartType(type: ChartType) {
  if (type === "flo_top100") {
    return "플로 TOP100"
  } else if (type === "melon_hot100") {
    return "멜론 TOP100"
  }
  
  return type;
}