/**
 * Rounds a number to the nearest hundredth (2 decimal places).
 */
function round(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Converts Celsius to Fahrenheit.
 * Throws RangeError if below absolute zero.
 */
export function cToF(c: number): number {
  if (c < -273.15)
    throw new RangeError("Celsius cannot be below absolute zero (-273.15°C)");
  return round((c * 9) / 5 + 32);
}

/**
 * Converts Fahrenheit to Celsius.
 * Throws RangeError if below absolute zero.
 */
export function fToC(f: number): number {
  if (f < -459.67)
    throw new RangeError(
      "Fahrenheit cannot be below absolute zero (-459.67°F)"
    );
  return round(((f - 32) * 5) / 9);
}

/**
 * Converts Celsius to Kelvin.
 * Throws RangeError if below absolute zero.
 */
export function cToK(c: number): number {
  if (c < -273.15)
    throw new RangeError("Celsius cannot be below absolute zero (-273.15°C)");
  return round(c + 273.15);
}

/**
 * Converts Kelvin to Celsius.
 * Throws RangeError if below absolute zero.
 */
export function kToC(k: number): number {
  if (k < 0) throw new RangeError("Kelvin cannot be below absolute zero (0K)");
  return round(k - 273.15);
}

/**
 * Converts Fahrenheit to Kelvin.
 * Throws RangeError if below absolute zero.
 */
export function fToK(f: number): number {
  if (f < -459.67)
    throw new RangeError(
      "Fahrenheit cannot be below absolute zero (-459.67°F)"
    );
  return round(((f + 459.67) * 5) / 9);
}

/**
 * Converts Kelvin to Fahrenheit.
 * Throws RangeError if below absolute zero.
 */
export function kToF(k: number): number {
  if (k < 0) throw new RangeError("Kelvin cannot be below absolute zero (0K)");
  return round((k * 9) / 5 - 459.67);
}
