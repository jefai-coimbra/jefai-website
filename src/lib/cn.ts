import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Junta classes Tailwind e resolve conflitos (ex.: cn("p-4", condicao && "p-6") → "p-6"). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
