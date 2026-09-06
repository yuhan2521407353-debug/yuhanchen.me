import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const controllerPath = new URL("../app/components/motion-controller.tsx", import.meta.url);

test("re-registers route reveal targets after client-side navigation", async () => {
  const source = await readFile(controllerPath, "utf8");

  assert.match(source, /usePathname/);
  assert.match(source, /\}, \[pathname\]\);/);
  assert.match(source, /revealObserver\.unobserve/);
});
