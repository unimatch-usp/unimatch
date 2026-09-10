/*
 * coverage-test.js — testa se cada um dos 98 cursos consegue ser a
 * recomendação #1 para pelo menos uma combinação de respostas do quiz.
 * Roda fora do navegador (Node), reimplementando as mesmas fórmulas de
 * index.html (buildUserVector / cosineSimilarity / computeScores) pra não
 * precisar de DOM.
 */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data.js");
const code = fs.readFileSync(dataPath, "utf8");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code + "\nglobalThis.__EXPORTS__={QUESTIONS,COURSES};", sandbox);
const { QUESTIONS, COURSES } = sandbox.__EXPORTS__;

const idx = { R:0, I:1, A:2, S:3, E:4, C:5 };
const CORE = [
  { dim:"activity",    weight:3.0 },
  { dim:"talent",      weight:2.5 },
  { dim:"environment", weight:2.0 },
  { dim:"motivation",  weight:2.5 },
  { dim:"team_role",   weight:1.5 },
  { dim:"challenge",   weight:2.0 }
];
const LETTERS = ["R","I","A","S","E","C"];

function buildUserVector(letterChoices) {
  const v=[0,0,0,0,0,0];
  CORE.forEach(({weight},i)=>{ v[idx[letterChoices[i]]]+=weight; });
  return v;
}
function cosineSimilarity(a,b){
  let dot=0,magA=0,magB=0;
  for(let i=0;i<a.length;i++){dot+=a[i]*b[i];magA+=a[i]*a[i];magB+=b[i]*b[i];}
  if(magA===0||magB===0) return 0;
  return dot/(Math.sqrt(magA)*Math.sqrt(magB));
}
function scoreAll(userVec, durPref, mathPref, techPref, salPref, areasInteresse) {
  const mathScore={alto:10,medio:6,baixo:3,minimo:0}[mathPref];
  const salScore={"muito-alto":4,alto:3,medio:2,baixo:1}[salPref];
  const techScore={"muito-alto":10,alto:7,moderado:4,baixo:1}[techPref];
  const hasAreaFilter = areasInteresse.length>0 && !areasInteresse.includes("nenhuma");
  const pool = hasAreaFilter
    ? Object.keys(COURSES).filter(name=>areasInteresse.includes(COURSES[name].area))
    : Object.keys(COURSES);
  return pool.map(name=>{
    const c=COURSES[name];
    const sim=cosineSimilarity(userVec,c.vec);
    let score=sim*70;
    const courseDur=parseInt(c.dur);
    if(courseDur<=durPref) score+=8; else score-=(courseDur-durPref)*4;
    const mathDemand=(c.vec[1]+c.vec[5])/2;
    score+=Math.max(0,8-Math.abs(mathScore-mathDemand));
    const courseSalScore=c.salMid>=12000?4:c.salMid>=8000?3:c.salMid>=5000?2:1;
    if(salScore===courseSalScore) score+=7;
    else if(Math.abs(salScore-courseSalScore)===1) score+=4;
    score+=Math.max(0,7-Math.abs(techScore-c.vec[1]));
    return {name, score};
  }).sort((a,b)=>b.score-a.score);
}

const AREAS = ["saude","exatas","tecnologia","humanas","negocios","artes","ambiental"];
const allCourses = new Set(Object.keys(COURSES));
const rank1 = new Set();
const top3 = new Set();
const mathOpts=["alto","medio","baixo","minimo"];
const techOpts=["muito-alto","alto","moderado","baixo"];
const durOpts=[4,5,6];
const salOpts=["muito-alto","alto","medio","baixo"];

function testCombo(letterChoices) {
  const uv = buildUserVector(letterChoices);
  mathOpts.forEach(m=>techOpts.forEach(t=>durOpts.forEach(d=>salOpts.forEach(s=>{
    // sem filtro de área (equivalente a "nenhuma em especial")
    let ranked = scoreAll(uv, d, m, t, s, []);
    rank1.add(ranked[0].name);
    ranked.slice(0,3).forEach(r=>top3.add(r.name));
    // com cada área isolada selecionada (o cenário que mais importa agora,
    // já que a área virou filtro rígido)
    AREAS.forEach(a=>{
      ranked = scoreAll(uv, d, m, t, s, [a]);
      if(ranked.length){
        rank1.add(ranked[0].name);
        ranked.slice(0,3).forEach(r=>top3.add(r.name));
      }
    });
  }))));
}

// pure letter combos (6)
LETTERS.forEach(l=>testCombo(Array(6).fill(l)));
// pairs: metade das perguntas numa letra, metade em outra (30 combos: 6x5)
LETTERS.forEach(l1=>LETTERS.forEach(l2=>{
  if(l1===l2) return;
  testCombo([l1,l1,l1,l2,l2,l2]);
}));
// perfis "realistas" aleatórios (2000 amostras) pra cobrir combinações mistas
function randLetter(){ return LETTERS[Math.floor(Math.random()*6)]; }
for(let i=0;i<3000;i++){
  testCombo([randLetter(),randLetter(),randLetter(),randLetter(),randLetter(),randLetter()]);
}

const neverRank1 = [...allCourses].filter(c=>!rank1.has(c));
const neverTop3 = [...allCourses].filter(c=>!top3.has(c));

console.log(`Cursos testados: ${allCourses.size}`);
console.log(`Cursos que aparecem em #1 para pelo menos 1 perfil: ${rank1.size} / ${allCourses.size}`);
console.log(`Cursos que NUNCA aparecem em #1: ${neverRank1.length}`);
if (neverRank1.length) console.log(neverRank1.map(c=>` - ${c}`).join("\n"));
console.log(`\nCursos que NUNCA aparecem no top-3: ${neverTop3.length}`);
if (neverTop3.length) console.log(neverTop3.map(c=>` - ${c}`).join("\n"));
