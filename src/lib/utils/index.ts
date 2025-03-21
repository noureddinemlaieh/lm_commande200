import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine les classes CSS avec clsx et les fusionne avec tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formater un prix avec le symbole de la devise
 */
export function formatPrice(
  price: number,
  options: {
    currency?: "EUR" | "USD";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "EUR", notation = "standard" } = options;

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    notation,
  }).format(price);
}

/**
 * Retourner une date formatée
 */
export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
} 