/// <reference lib="deno.ns" />
import { assertEquals } from "@std/assert";
import { PERSONAL } from "../../constants/data.ts";

Deno.test("hero uses personal data correctly", () => {
  // Verify personal info is available for hero
  assertEquals(typeof PERSONAL.name, "string");
  assertEquals(typeof PERSONAL.title, "string");
  assertEquals(typeof PERSONAL.tagline, "string");
  assertEquals(typeof PERSONAL.github, "string");
});

Deno.test("hero personal data is properly anonymized", () => {
  // Ensure no client names appear in personal data
  const personalString = JSON.stringify(PERSONAL);
  const forbiddenTerms = ["T-Mobile", "Scotiabank", "Badal", "OTH"];

  for (const term of forbiddenTerms) {
    assertEquals(
      personalString.includes(term),
      false,
      `Found forbidden term "${term}" in personal data`,
    );
  }
});
