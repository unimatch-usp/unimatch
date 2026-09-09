/*
 * validate-data.js — confere se data.js está íntegro antes de publicar.
 *
 * Como rodar (precisa de Node instalado):
 *   node validate-data.js
 *
 * Isso NÃO verifica se os números estão corretos (nota de corte real,
 * salário real etc.) — só confere se a estrutura do arquivo está consistente
 * (campos faltando, tipos errados, valores fora de faixa plausível).
 * Verificar se o valor em si bate com a fonte oficial continua sendo
 * trabalho manual da equipe.
 */

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const dataPath = path.join(__dirname, "data.js");
const code = fs.readFileSync(dataPath, "utf8");

const sandbox = {};
vm.createContext(sandbox);
const exportLine = "\nglobalThis.__EXPORTS__ = { QUESTIONS, COURSES, REGION_FACTORS, REGION_LABELS };";
try {
  vm.runInContext(code + exportLine, sandbox);
} catch (err) {
  console.error("❌ data.js tem um erro de sintaxe JavaScript:", err.message);
  process.exit(1);
}

const { COURSES, QUESTIONS, REGION_FACTORS, REGION_LABELS } = sandbox.__EXPORTS__;
let errors = 0;
let warnings = 0;

function fail(msg) {
  errors++;
  console.error("❌ " + msg);
}
function warn(msg) {
  warnings++;
  console.warn("⚠️  " + msg);
}

// ── Checagens de QUESTIONS ──
if (!Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
  fail("QUESTIONS está vazio ou não é um array.");
} else {
  QUESTIONS.forEach((q, i) => {
    if (!q.q || !q.dim || !Array.isArray(q.opts) || q.opts.length < 2) {
      fail(`Pergunta #${i + 1} está incompleta (texto, dimensão ou opções faltando).`);
    }
  });
}

// ── Checagens de REGION_FACTORS ──
const expectedRegions = ["sudeste", "sul", "centroOeste", "nordeste", "norte"];
expectedRegions.forEach((r) => {
  if (typeof REGION_FACTORS[r] !== "number") {
    fail(`REGION_FACTORS.${r} está faltando ou não é número.`);
  } else if (REGION_FACTORS[r] < 0.5 || REGION_FACTORS[r] > 1.2) {
    warn(`REGION_FACTORS.${r} = ${REGION_FACTORS[r]} está fora da faixa plausível (0.5–1.2). Confira se não é erro de digitação.`);
  }
  if (!REGION_LABELS[r]) fail(`REGION_LABELS.${r} está faltando.`);
});

// ── Checagens de COURSES ──
const requiredFields = ["vec", "desc", "carreiras", "fuvest", "notaSISU", "sal", "salMid", "emp", "empScore", "dem", "dur", "tags"];
const names = Object.keys(COURSES || {});

if (names.length === 0) {
  fail("COURSES está vazio.");
}

console.log(`Conferindo ${names.length} cursos...\n`);

names.forEach((name) => {
  const c = COURSES[name];

  requiredFields.forEach((field) => {
    if (c[field] === undefined || c[field] === null || c[field] === "") {
      fail(`"${name}": campo "${field}" está faltando ou vazio.`);
    }
  });

  if (Array.isArray(c.vec)) {
    if (c.vec.length !== 8) {
      fail(`"${name}": vec deveria ter 8 posições, tem ${c.vec.length}.`);
    }
    if (c.vec.some((n) => typeof n !== "number" || Number.isNaN(n))) {
      fail(`"${name}": vec tem valor não-numérico.`);
    }
  }

  if (c.fuvest) {
    ["ac", "ep", "ppi"].forEach((k) => {
      const v = c.fuvest[k];
      if (typeof v !== "number" || Number.isNaN(v)) {
        fail(`"${name}": fuvest.${k} não é número.`);
      } else if (v < 0 || v > 90) {
        fail(`"${name}": fuvest.${k} = ${v} está fora da escala válida (0–90).`);
      }
    });
    // Ampla concorrência deveria normalmente exigir nota >= Escola Pública >= EP+PPI
    if (typeof c.fuvest.ac === "number" && typeof c.fuvest.ep === "number" && c.fuvest.ep > c.fuvest.ac) {
      warn(`"${name}": nota de Escola Pública (${c.fuvest.ep}) é maior que Ampla Concorrência (${c.fuvest.ac}) — confira, isso é incomum.`);
    }
  }

  if (typeof c.notaSISU === "string") {
    const n = parseFloat(c.notaSISU);
    if (Number.isNaN(n)) fail(`"${name}": notaSISU "${c.notaSISU}" não é um número válido.`);
  }

  if (typeof c.salMid === "number") {
    if (c.salMid <= 0 || c.salMid > 100000) {
      warn(`"${name}": salMid = ${c.salMid} parece fora da faixa plausível — confira.`);
    }
  }

  if (!["Baixa", "Média", "Alta", "Muito Alta"].includes(c.emp)) {
    warn(`"${name}": emp = "${c.emp}" usa um rótulo fora do padrão esperado (Baixa/Média/Alta/Muito Alta).`);
  }

  if (typeof c.empScore === "number" && (c.empScore < 0 || c.empScore > 10)) {
    warn(`"${name}": empScore = ${c.empScore} fora da faixa esperada (0–10).`);
  }

  if (!Array.isArray(c.tags) || c.tags.length === 0) {
    fail(`"${name}": tags está vazio.`);
  }

  const dur = parseInt(c.dur, 10);
  if (![4, 5, 6].includes(dur)) {
    warn(`"${name}": dur = "${c.dur}" é incomum (esperado 4, 5 ou 6).`);
  }
});

console.log(`\n${errors === 0 ? "✅" : "❌"} ${errors} erro(s), ${warnings} aviso(s).`);
if (errors > 0) process.exit(1);
