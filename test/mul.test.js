import { test } from "node:test"; import assert from "node:assert/strict"; import { mul } from "../src/math.js"; test("mul", () => assert.equal(mul(2, 3), 6));
