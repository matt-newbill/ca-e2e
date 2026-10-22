import { test } from "node:test"; import assert from "node:assert/strict"; import { div } from "../src/math.js"; test("div", () => assert.equal(div(6, 3), 2));
