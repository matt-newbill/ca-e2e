import { test } from "node:test"; import assert from "node:assert/strict"; import { existsSync, readFileSync } from "node:fs";
const expect = {"alpha":"alpha","beta":"beta","gamma":"gamma","child-change":"change","root":"root"};
for (const [name, text] of Object.entries(expect)) {
  test("swarm/" + name + ".txt is exactly its content when present", () => {
    const file = "swarm/" + name + ".txt";
    if (existsSync(file)) assert.equal(readFileSync(file, "utf8").trim(), text);
  });
}
test("no unexpected files under swarm/", async () => {
  const { readdirSync, existsSync: has } = await import("node:fs");
  if (!has("swarm")) return;
  for (const f of readdirSync("swarm")) assert.ok(Object.keys(expect).map(n => n + ".txt").includes(f), "unexpected " + f);
});
