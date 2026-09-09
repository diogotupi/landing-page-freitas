import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import test from "node:test";

test("loads Adobe Rift and keeps a readable primary font", () => {
  const layout = readFileSync("src/app/layout.tsx", "utf8");
  assert.match(layout, /Manrope/);
  assert.match(layout, /https:\/\/use\.typekit\.net\/dlb7wlq\.css/);
  assert.doesNotMatch(layout, /Barlow_Condensed/);
  assert.doesNotMatch(layout, /\bSyne\b/);

  const css = readFileSync("src/app/globals.css", "utf8");
  assert.match(css, /--font-display:\s*"rift"/);
});

test("ships the selected Freitas and editorial photography", () => {
  const expected = [
    "public/images/freitas-guide.png",
    "public/images/freitas-speaking.jpg",
    "public/images/freitas-whiteboard.jpg",
    "public/images/operations-fire.jpg",
  ];

  for (const path of expected) {
    assert.equal(existsSync(path), true, `${path} should exist`);
  }

  const content = readFileSync("src/content/nucoe.ts", "utf8");
  assert.match(content, /\/images\/freitas-guide\.png/);
});

test("brand logos use RGBA transparency instead of baked black backgrounds", () => {
  for (const path of [
    "public/brand/logo-negativo.png",
    "public/brand/logo-positivo.png",
  ]) {
    const png = readFileSync(path);
    assert.deepEqual(
      [...png.subarray(0, 8)],
      [137, 80, 78, 71, 13, 10, 26, 10],
      `${path} should contain actual PNG data`,
    );
    assert.equal(png[25], 6, `${path} should use PNG color type RGBA`);
  }
});

test("visible source copy contains no em or en dashes", () => {
  const files = readdirSync("src", { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(ts|tsx)$/.test(entry.name))
    .map((entry) => readFileSync(`${entry.parentPath}/${entry.name}`, "utf8"));

  assert.doesNotMatch(files.join("\n"), /[—–]/);
});

test("offer describes the approved hybrid format", () => {
  const content = readFileSync("src/content/nucoe.ts", "utf8");
  assert.doesNotMatch(content, /Aprenda com Freitas/);
  assert.match(content, /Presencial e Zoom simultaneamente/);
  assert.match(content, /DEPOIMENTO MODELO/);
});

test("editorial photos render above section backgrounds and below copy", () => {
  const css = readFileSync(
    "src/components/LandingSections.module.css",
    "utf8",
  );
  assert.match(css, /\.editorialImage\s*\{[^}]*z-index:\s*0/s);
  assert.match(css, /\.withPhoto\s+:global\(\.section__inner\)\s*\{[^}]*z-index:\s*2/s);
});

test("header bypasses stale image optimization for the transparent logo", () => {
  const header = readFileSync("src/components/SiteHeader.tsx", "utf8");
  assert.match(header, /logo-negativo-transparente\.png/);
  assert.match(header, /\bunoptimized\b/);
});

test("editorial backgrounds remain visibly present under their overlays", () => {
  const css = readFileSync(
    "src/components/LandingSections.module.css",
    "utf8",
  );
  assert.match(css, /\.imageDark\s*\{[^}]*opacity:\s*0\.[6-9]/s);
  assert.match(css, /\.imageLight\s*\{[^}]*opacity:\s*0\.[5-9]/s);
});

test("copy is short: headlines under 50 chars, paragraphs under 170", () => {
  const content = readFileSync("src/content/nucoe.ts", "utf8");
  const field = (key) =>
    [...content.matchAll(new RegExp(`\\b${key}:\\s*\\n?\\s*"([^"]*)"`, "g"))].map(
      (m) => m[1],
    );

  const headlines = field("headline");
  assert.ok(headlines.length >= 10, "expected headlines in every section");
  for (const h of headlines) {
    assert.ok(h.length <= 50, `headline too long (${h.length}): ${h}`);
  }

  const paragraphs = [
    ...field("body"),
    ...field("intro"),
    ...field("detail"),
    ...field("bio"),
    ...field("answer"),
    ...field("quote"),
    ...field("closing"),
    ...field("subheadline"),
  ];
  assert.ok(paragraphs.length >= 20);
  for (const p of paragraphs) {
    assert.ok(p.length <= 170, `paragraph too long (${p.length}): ${p}`);
  }
});

test("hero is compact, concise, and uses a real Freitas photo", () => {
  const content = readFileSync("src/content/nucoe.ts", "utf8");
  assert.match(content, /eyebrow:\s*"NUCOE \| Formação ao vivo"/);
  assert.match(content, /headline:\s*"Não importa o problema, a liderança é a solução\."/);
  assert.match(
    content,
    /subheadline:\s*"Lidere-se\."/,
  );

  const sections = readFileSync("src/components/LandingSections.tsx", "utf8");
  const hero = sections.split("{/* 3 Problem */}")[0];
  assert.match(hero, /\/images\/freitas-hero\.png/);
  assert.equal(existsSync("public/images/freitas-hero.png"), true);

  // "Tudo depende de você?" interrupt section was removed by the client.
  assert.doesNotMatch(sections, /Interrupt|id="quebra"|nucoe\.interrupt/);
  assert.doesNotMatch(content, /\binterrupt:/);
  assert.doesNotMatch(hero, /<HeroMark/);

  const css = readFileSync(
    "src/components/LandingSections.module.css",
    "utf8",
  );
  assert.match(css, /\.hero\s*\{[^}]*76svh/s);
  // Header occupies ~104px (72px logo + padding); eyebrow must clear it.
  assert.match(
    css,
    /\.hero\s*\{[^}]*padding-top:\s*calc\(var\(--header-h\) \+ [3-9]/s,
  );
  // Photo must stay fully visible, no grayscale, no darkening over the face.
  assert.match(css, /\.heroPhoto\s*\{[^}]*opacity:\s*0\.86\b/s);
  assert.doesNotMatch(css, /\.heroPhoto\s*\{[^}]*grayscale/s);
  assert.match(css, /\.heroGrid\s*\{/);
});

test("close section stacks and centers every child", () => {
  const sections = readFileSync("src/components/LandingSections.tsx", "utf8");
  assert.match(sections, /styles\.closeStack/);

  const css = readFileSync(
    "src/components/LandingSections.module.css",
    "utf8",
  );
  assert.match(
    css,
    /\.closeStack\s*\{[^}]*align-items:\s*center/s,
  );
  assert.match(
    css,
    /\.closeStack\s*\{[^}]*text-align:\s*center/s,
  );
});
