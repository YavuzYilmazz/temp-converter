import { cToF, fToC, cToK, kToC, fToK, kToF } from "../src/index";

describe("Temperature Converter", () => {
  describe("cToF", () => {
    it("converts Celsius to Fahrenheit", () => {
      expect(cToF(0)).toBe(32);
      expect(cToF(100)).toBe(212);
      expect(cToF(-40)).toBe(-40);
    });
    it("throws below absolute zero", () => {
      expect(() => cToF(-273.16)).toThrow(RangeError);
    });
  });

  describe("fToC", () => {
    it("converts Fahrenheit to Celsius", () => {
      expect(fToC(32)).toBe(0);
      expect(fToC(212)).toBe(100);
      expect(fToC(-40)).toBe(-40);
    });
    it("throws below absolute zero", () => {
      expect(() => fToC(-459.68)).toThrow(RangeError);
    });
  });

  describe("cToK", () => {
    it("converts Celsius to Kelvin", () => {
      expect(cToK(0)).toBe(273.15);
      expect(cToK(100)).toBe(373.15);
    });
    it("throws below absolute zero", () => {
      expect(() => cToK(-273.16)).toThrow(RangeError);
    });
  });

  describe("kToC", () => {
    it("converts Kelvin to Celsius", () => {
      expect(kToC(273.15)).toBe(0);
      expect(kToC(373.15)).toBe(100);
    });
    it("throws below absolute zero", () => {
      expect(() => kToC(-0.01)).toThrow(RangeError);
    });
  });

  describe("fToK", () => {
    it("converts Fahrenheit to Kelvin", () => {
      expect(fToK(32)).toBe(273.15);
      expect(fToK(212)).toBe(373.15);
    });
    it("throws below absolute zero", () => {
      expect(() => fToK(-459.68)).toThrow(RangeError);
    });
  });

  describe("kToF", () => {
    it("converts Kelvin to Fahrenheit", () => {
      expect(kToF(273.15)).toBe(32);
      expect(kToF(373.15)).toBe(212);
    });
    it("throws below absolute zero", () => {
      expect(() => kToF(-0.01)).toThrow(RangeError);
    });
  });
});
