// Genera las páginas estáticas de tutoriales a partir de scripts/tutoriales-data.mjs:
//   - tutoriales/index.html
//   - tutoriales/<slug>/index.html
//   - las tarjetas de tutoriales en index.html (entre los marcadores <!-- tutoriales:start/end -->)
//
// Uso: node scripts/build-tutoriales.mjs

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spentTutoriales } from "./tutoriales-data.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://spentapp.co";

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const icons = {
  play:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z"/></svg>',
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowLeft:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
};

const nav = (current) => `
  <nav class="nav">
    <div class="container nav-inner">
      <a href="/" class="brand"><img src="/images/spent.png" alt="" width="28" height="28">Spent</a>
      <div class="nav-links">
        <a href="/#actualizaciones" class="hide-sm">Actualizaciones</a>
        <a href="/tutoriales"${current === "tutoriales" ? ' aria-current="page"' : ""}>Tutoriales</a>
        <a href="/download" class="btn btn-primary btn-sm">Descargar</a>
      </div>
    </div>
  </nav>`;

const footer = `
  <footer class="footer">
    <div class="container footer-inner">
      <p>© Spent, ${new Date().getFullYear()}. Hecho en Costa Rica 🇨🇷</p>
      <div class="footer-links">
        <a href="/privacidad">Política de privacidad</a>
        <a href="/terminos">Términos y condiciones</a>
      </div>
    </div>
  </footer>`;

const head = ({ title, description, url, extraCss = "" }) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE}/images/og-image.jpeg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#061319" media="(prefers-color-scheme: dark)">
  <link rel="icon" type="image/png" href="/images/spent.png">
  <link rel="apple-touch-icon" href="/images/spent.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/spent.css">
  <link rel="stylesheet" href="/assets/tutoriales.css">${extraCss}
</head>`;

const ctaSection = `
    <section class="tut-cta">
      <h2>¿Todavía no tienes Spent?</h2>
      <p>Descárgalo gratis para iPhone y Android.</p>
      <a href="/download" class="btn btn-primary btn-lg">${icons.download}Descargar Spent</a>
    </section>`;

/** Tarjeta de tutorial (se usa en /tutoriales y en el home). */
export function tutorialCard(t, extraClass = "") {
  const versions = t.versions.filter((v) => v.steps.length > 0);
  const chips = [t.platform, ...(versions.length > 1 ? versions.map((v) => v.label) : [])]
    .map((c) => `<span class="chip">${esc(c)}</span>`)
    .join("");
  return `<a href="/tutoriales/${t.slug}" class="card tut-card ${extraClass}">
          <img src="${t.icon}" alt="" width="52" height="52" class="tut-card-icon">
          <div class="tut-card-body">
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.summary)}</p>
            <div class="tut-chips">${chips}</div>
          </div>
          <span class="tut-card-arrow">${icons.arrowRight}</span>
        </a>`;
}

function renderMedia(m) {
  const el =
    m.type === "video"
      ? `<video src="${m.src}" aria-label="${esc(m.alt)}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img src="${m.src}" alt="${esc(m.alt)}" loading="lazy" decoding="async">`;
  return `<figure>${el}${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ""}</figure>`;
}

function renderTutorial(t) {
  const versions = t.versions.filter((v) => v.steps.length > 0);
  const def = versions[0]?.id;
  const multi = versions.length > 1;
  const url = `${SITE}/tutoriales/${t.slug}`;

  const tabs = multi
    ? `
      <div class="segmented" role="tablist" aria-label="Versión">
        ${versions
          .map(
            (v) =>
              `<button type="button" role="tab" data-version="${v.id}" aria-selected="${v.id === def}">${esc(v.label)}</button>`,
          )
          .join("\n        ")}
      </div>
      <p class="tut-hint">¿No sabes qué versión tienes? Ve a <strong>Ajustes › General › Información</strong>.</p>`
    : "";

  const panels = versions
    .map(
      (v) => `
      <section class="tut-panel" data-version="${v.id}" role="tabpanel"${v.id !== def ? " hidden" : ""}>
        ${
          v.video
            ? `<a href="${v.video.url}" target="_blank" rel="noopener" class="chip chip-video">${icons.play}${esc(v.video.label)}</a>`
            : ""
        }
        ${v.note ? `<p class="note">${v.note}</p>` : ""}
        ${
          v.shortcut
            ? `<a href="${v.shortcut.url}" target="_blank" rel="noopener" class="card tut-shortcut">
          <span class="tut-shortcut-icon">${icons.download}</span>
          <span><strong>¿Prefieres el atajo listo?</strong><br><span class="muted">${esc(v.shortcut.text)}</span></span>
        </a>`
            : ""
        }
        <ol class="tut-steps">
          ${v.steps
            .map(
              (s, i) => `<li class="tut-step">
            <div class="tut-step-num">${i + 1}</div>
            <div class="tut-step-body">
              <h2>${esc(s.title)}</h2>
              ${s.body ? `<div class="tut-step-text">${s.body}</div>` : ""}
              ${s.media ? `<div class="tut-media">${s.media.map(renderMedia).join("")}</div>` : ""}
            </div>
          </li>`,
            )
            .join("\n          ")}
        </ol>
      </section>`,
    )
    .join("");

  return `${head({ title: `${t.title} | Spent`, description: t.summary, url })}
<body>
${nav("tutoriales")}
  <main class="container-narrow tut-page">
    <a href="/tutoriales" class="tut-back">${icons.arrowLeft}Tutoriales</a>
    <header class="tut-header">
      <img src="${t.icon}" alt="" width="64" height="64" class="tut-header-icon">
      <span class="chip">${esc(t.platform)}</span>
      <h1>${esc(t.title)}</h1>
      <p class="lead">${esc(t.summary)}</p>
    </header>
    ${tabs}
    ${panels}
    ${ctaSection}
  </main>
${footer}
  <script>
    (function () {
      var tabs = document.querySelectorAll(".segmented [data-version]");
      var panels = document.querySelectorAll(".tut-panel");
      function select(id) {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", String(t.dataset.version === id)); });
        panels.forEach(function (p) { p.hidden = p.dataset.version !== id; });
      }
      tabs.forEach(function (t) {
        t.addEventListener("click", function () {
          select(t.dataset.version);
          history.replaceState(null, "", "#" + t.dataset.version);
        });
      });
      var h = location.hash.slice(1);
      if (h && Array.prototype.some.call(tabs, function (t) { return t.dataset.version === h; })) select(h);
    })();
  </script>
</body>
</html>
`;
}

function renderIndex() {
  const url = `${SITE}/tutoriales`;
  return `${head({
    title: "Tutoriales | Spent",
    description: "Guías paso a paso para sacarle el máximo a Spent: Apple Pay, Google Pay, correo y más.",
    url,
  })}
<body>
${nav("tutoriales")}
  <main class="container-narrow tut-page">
    <header class="tut-index-header">
      <p class="eyebrow">Spent · Tutoriales</p>
      <h1>Tutoriales</h1>
      <p class="lead">Guías paso a paso para sacarle el máximo a Spent.</p>
    </header>
    <div class="tut-list">
        ${spentTutoriales.map((t) => tutorialCard(t)).join("\n        ")}
    </div>
    ${ctaSection}
  </main>
${footer}
</body>
</html>
`;
}

async function write(rel, content) {
  const file = join(root, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
  console.log("✓", rel);
}

await write("tutoriales/index.html", renderIndex());
for (const t of spentTutoriales) await write(`tutoriales/${t.slug}.html`, renderTutorial(t));

// Tarjetas en el home
const homePath = join(root, "index.html");
const home = await readFile(homePath, "utf8");
const re = /(<!-- tutoriales:start -->)[\s\S]*?(<!-- tutoriales:end -->)/;
if (re.test(home)) {
  const cards = spentTutoriales.map((t) => tutorialCard(t, "reveal")).join("\n        ");
  await writeFile(homePath, home.replace(re, `$1\n        ${cards}\n        $2`));
  console.log("✓ index.html (tarjetas de tutoriales)");
}
