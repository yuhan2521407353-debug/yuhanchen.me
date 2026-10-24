import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("home offers a real HTTPS staff-login link, without embedding clinic data or login credentials", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(source, /href="https:\/\/frontdesk\.yuhanchen\.me\/staff\/login"/);
  assert.match(source, /Staff login \/ 前台平台登录/);
  assert.match(source, /Authorized staff sign-in required/);
  assert.match(source, /aria-labelledby="frontdesk-access-title"/);
  assert.doesNotMatch(source, /type="password"|DATABASE_URL|SESSION_SECRET|appointment_booking_history|date_of_birth/);
  assert.match(source, /Yuhan<br/);
  assert.match(source, /<KnowledgeGraph/);
});

test("only the exact frontdesk host proxies to the authenticated origin, without CDN caching", async () => {
  const source = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
  assert.match(source, /beforeFiles/);
  assert.match(source, /type: "host"/);
  assert.match(source, /frontdesk/);
  assert.match(source, /https:\/\/consultation-county-lemon-brooklyn\.trycloudflare\.com\/:path\*/);
  assert.match(source, /CDN-Cache-Control/);
  assert.match(source, /private, no-store/);
  assert.doesNotMatch(source, /DATABASE_URL|SESSION_SECRET|password|Authorization|Bearer/);
});
