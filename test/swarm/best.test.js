import { test } from "node:test"; import assert from "node:assert/strict"; import { existsSync } from "node:fs";
test("src/answer.js answers 42 when present", async () => {
  if (!existsSync("src/answer.js")) return;
  const { answer } = await import("../../src/answer.js");
  assert.equal(answer(), 42);
});
