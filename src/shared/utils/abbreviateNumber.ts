const SI_SYMBOLS = ["", "K", "M", "B"];

/**
 * Abbreviates a number using SI symbols (K, M, B) for thousands, millions and billions.
 *
 * @param num - The number to abbreviate.
 * @returns A string representation of the abbreviated number.
 *
 * @example
 * abbreviateNumber(1500)    // returns "1.5k"
 * abbreviateNumber(1234567) // returns "1.2M"
 * abbreviateNumber(123)     // returns "123"
 * abbreviateNumber(0)       // returns "0"
 * abbreviateNumber(1234567890) // returns "1.2B"
 *
 * @remarks
 * - The function supports abbreviations up to billions (B).
 * - Numbers less than 1000 are returned as-is.
 * - The result is rounded to one decimal place when abbreviated.
 */

export function abbreviateNumber(num: number): string {
  if (num === 0) return "0";

  const tier = Math.floor(Math.log10(Math.abs(num)) / 3);

  if (tier === 0) return num.toString();

  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;

  const rounded = Math.round(scaled * 10) / 10;

  return rounded.toString() + SI_SYMBOLS[tier];
}
