/// <reference lib="deno.ns" />
import { assertStringIncludes } from "@std/assert";
import { PERSONAL } from "./constants/index.ts";

Deno.test("renders portfolio hero content", () => {
  const html = `<h1>${PERSONAL.name}</h1><p>${PERSONAL.title}</p>`;
  assertStringIncludes(html, "Damoon Azarpazhooh");
  assertStringIncludes(html, "Principal Cloud Architect");
});

Deno.test("personal info is properly anonymized", () => {
  // Ensure no client names appear in personal data
  const personalString = JSON.stringify(PERSONAL);
  // These should NOT appear in the portfolio
  const forbiddenTerms = ["T-Mobile", "Scotiabank", "Badal", "OTH"];
  for (const term of forbiddenTerms) {
    if (personalString.includes(term)) {
      throw new Error(`Found forbidden term "${term}" in personal data`);
    }
  }
});
