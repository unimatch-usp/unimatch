/*
 * data.js — Dados do UniMatch (perguntas do quiz, cursos, fatores regionais)
 *
 * Este arquivo foi separado do index.html para facilitar a curadoria de dados
 * por pessoas que não programam. Para editar um curso, salário ou nota, basta
 * mexer aqui — não precisa tocar no index.html.
 *
 * IMPORTANTE — pendências que a equipe precisa resolver (não inventei nada disso):
 * 1) REGION_FACTORS abaixo são multiplicadores estimados/heurísticos, não vêm
 *    de uma fonte oficial por região. Isso precisa ou (a) ser substituído por
 *    dados reais por região, ou (b) continuar deixando claro na interface que
 *    é uma aproximação -- já adicionei um aviso no index.html, mas o número em
 *    si continua sem fonte.
 * 2) Cada curso tem `fuvest`, `notaSISU`, `sal`, `emp`, `dem` etc. Nem todos
 *    têm uma fonte/URL específica anexada -- só existe uma nota genérica no
 *    rodapé do site. Ver seção "Sobre os dados" do index.html.
 * 3) `sisuEstimated: true` já sinaliza cursos com nota SISU estimada por
 *    comparação (não é dado direto do MEC). Mantenha esse padrão ao adicionar
 *    cursos novos.
 * 4) Adicione um campo `dataAtualizada` (data em que os dados foram
 *    conferidos) quando a equipe efetivamente revisar isso -- não coloquei
 *    uma data aqui porque não sei quando os dados foram de fato levantados.
 */

// Preencha com a data em que a equipe de fato conferiu/atualizou os dados
// abaixo (formato livre, ex: "setembro de 2026"). Deixe "" se ainda não foi
// revisado -- nesse caso o aviso não aparece no site.
const DATA_LAST_REVIEWED = "";

const REGION_FACTORS = {
  sudeste: 1.00, sul: 0.975, centroOeste: 0.955, nordeste: 0.930, norte: 0.905
};
const REGION_LABELS = {
  sudeste:"Sudeste", sul:"Sul", centroOeste:"Centro-Oeste", nordeste:"Nordeste", norte:"Norte"
};

const QUESTIONS = [
  {
    q: "Qual grande área mais te atrai?",
    dim: "area",
    opts: [
      { t:"Ciências da Saúde",               e:"🏥", v:"saude" },
      { t:"Tecnologia e Computação",          e:"💻", v:"tecnologia" },
      { t:"Ciências Exatas e Engenharias",    e:"🔬", v:"exatas" },
      { t:"Negócios e Gestão",                e:"📊", v:"negocios" },
      { t:"Artes e Comunicação",              e:"🎨", v:"artes" },
      { t:"Ciências Humanas e Sociais",       e:"👥", v:"humanas" },
      { t:"Ciências Ambientais e Biológicas", e:"🌿", v:"ambiental" }
    ]
  },
  {
    q: "Qual seu talento mais forte?",
    dim: "talent",
    opts: [
      { t:"Analítico — raciocínio lógico e números",      e:"🔢", v:"analitico" },
      { t:"Criativo — idéias novas e expressão artística", e:"✨", v:"criativo" },
      { t:"Comunicativo — fala, escuta, persuasão",       e:"💬", v:"comunicativo" },
      { t:"Científico — pesquisa, experimentos, método",  e:"🧪", v:"cientifico" },
      { t:"Organizacional — planejamento e execução",     e:"📋", v:"organizacional" },
      { t:"Empático — cuidar, ajudar, ouvir pessoas",     e:"❤️", v:"empatico" }
    ]
  },
  {
    q: "Que tipo de problema você prefere resolver?",
    dim: "problem",
    opts: [
      { t:"Problemas técnicos — equações, código, sistemas",     e:"⚙️", v:"tecnico" },
      { t:"Problemas humanos — bem-estar, saúde, conflitos",     e:"🤝", v:"humano" },
      { t:"Problemas de mercado — lucro, estratégia, clientes",  e:"💹", v:"mercado" },
      { t:"Problemas sociais — desigualdade, política, cultura", e:"🌍", v:"social" },
      { t:"Problemas criativos — comunicação, design, arte",     e:"🎭", v:"criativo" },
      { t:"Problemas ambientais — natureza, sustentabilidade",   e:"🌱", v:"ambiental" }
    ]
  },
  {
    q: "Qual seu nível de afinidade com matemática?",
    dim: "math",
    opts: [
      { t:"Alta — adoro cálculo, álgebra, estatística",   e:"🧮", v:"alto" },
      { t:"Média — me saio bem, mas não é minha paixão",  e:"✅", v:"medio" },
      { t:"Baixa — prefiro evitar cálculos complexos",    e:"📝", v:"baixo" },
      { t:"Mínima — definitivamente não é minha área",    e:"🚫", v:"minimo" }
    ]
  },
  {
    q: "Qual seu interesse em tecnologia e programação?",
    dim: "tech",
    opts: [
      { t:"Muito alto — quero criar tecnologia",        e:"💡", v:"muito-alto" },
      { t:"Alto — tecnologia como ferramenta central",  e:"📱", v:"alto" },
      { t:"Moderado — uso tecnologia mas não é o foco", e:"💻", v:"moderado" },
      { t:"Baixo — prefiro áreas menos técnicas",       e:"📚", v:"baixo" }
    ]
  },
  {
    q: "Como você prefere trabalhar no dia a dia?",
    dim: "work_style",
    opts: [
      { t:"Sozinho — concentrado, produção individual",   e:"🧘", v:"sozinho" },
      { t:"Em equipe diversa — colaboração e debate",     e:"👥", v:"equipe" },
      { t:"Com o público — atendimento, ensino, cuidado", e:"🙋", v:"publico" },
      { t:"Liderando — coordenar pessoas e projetos",     e:"🏆", v:"liderando" }
    ]
  },
  {
    q: "Qual ambiente de trabalho te atrai mais?",
    dim: "environment",
    opts: [
      { t:"Laboratório ou hospital",      e:"🧪", v:"lab" },
      { t:"Escritório ou empresa",        e:"🏢", v:"escritorio" },
      { t:"Campo, natureza ou externo",   e:"🌳", v:"campo" },
      { t:"Remoto ou startup",            e:"🏠", v:"remoto" },
      { t:"Escola, universidade ou ONG",  e:"📚", v:"educacao" },
      { t:"Estúdio, agência ou teatro",   e:"🎬", v:"estudio" }
    ]
  },
  {
    q: "O que mais te motiva na carreira?",
    dim: "motivation",
    opts: [
      { t:"Impacto social — transformar vidas",             e:"❤️", v:"impacto" },
      { t:"Inovação — criar o novo, resolver o impossível", e:"🚀", v:"inovacao" },
      { t:"Estabilidade — carreira sólida e bem remunerada",e:"💰", v:"estabilidade" },
      { t:"Expressão — criar, comunicar, deixar legado",    e:"🎭", v:"expressao" },
      { t:"Conhecimento — entender profundamente o mundo",  e:"🔍", v:"conhecimento" },
      { t:"Autonomia — ser meu próprio chefe",              e:"🗽", v:"autonomia" }
    ]
  },
  {
    q: "Quanto tempo de graduação você aceita?",
    dim: "duration",
    opts: [
      { t:"4 anos — quero terminar logo",           e:"⚡", v:"4" },
      { t:"5 anos — tempo razoável",                e:"📅", v:"5" },
      { t:"6 anos — não tenho pressa, vale a pena", e:"♾️", v:"6" }
    ]
  },
  {
    q: "Qual faixa salarial inicial é importante pra você?",
    dim: "salary",
    opts: [
      { t:"Acima de R$ 7.000 — prioridade máxima", e:"💎", v:"muito-alto" },
      { t:"R$ 4.000–7.000 — equilíbrio ideal",     e:"⚖️", v:"alto" },
      { t:"R$ 2.500–4.000 — satisfatório",         e:"🌟", v:"medio" },
      { t:"Não é prioridade — prefiro realização",  e:"🌱", v:"baixo" }
    ]
  }
];

const COURSES = {
  "Administração": {
    vec:[2,4,1,3,10,3,1,5],
    desc:"Gestão de organizações, recursos e pessoas para maximizar resultados.",
    carreiras:"Gerente, consultor, empreendedor, analista de negócios.",
    fuvest:{ac:58, ep:43, ppi:27}, notaSISU:"670.40",
    sal:"R$ 4.500–12.000", salMid:8250, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Gestão","Liderança","Estratégia"]
  },
  "Arquitetura e Urbanismo": {
    vec:[5,4,0,3,2,9,3,3],
    desc:"Projeto de espaços habitáveis com foco em estética, funcionalidade e planejamento urbano.",
    carreiras:"Arquiteto, urbanista, paisagista, designer de interiores.",
    fuvest:{ac:61, ep:49, ppi:38}, notaSISU:"727.00",
    sal:"R$ 3.800–9.000", salMid:6400, emp:"Média", empScore:5, dem:"Estável", dur:"5",
    tags:["Design","Cidade","Projetos"]
  },
  "Artes Cênicas": {
    vec:[0,5,0,1,1,10,0,6],
    desc:"Teatro, dança e performance — teoria e prática das artes do corpo.",
    carreiras:"Ator, diretor, coreógrafo, produtor cultural, professor.",
    fuvest:{ac:53, ep:42, ppi:32}, notaSISU:"611.20",
    sal:"R$ 2.500–6.000", salMid:4250, emp:"Baixa", empScore:3, dem:"Competitiva", dur:"4",
    tags:["Teatro","Dança","Expressão"]
  },
  "Artes Visuais": {
    vec:[1,5,0,2,1,10,1,2],
    desc:"Pintura, escultura, fotografia, vídeo e arte digital.",
    carreiras:"Artista, curador, crítico de arte, professor, galerista.",
    fuvest:{ac:59, ep:50, ppi:37}, notaSISU:"603.80",
    sal:"R$ 2.800–7.000", salMid:4900, emp:"Média", empScore:4, dem:"Competitiva", dur:"4",
    tags:["Arte","Visual","Criatividade"]
  },
  "Astronomia": {
    vec:[9,2,0,5,0,1,3,0],
    desc:"Estudo científico do universo, estrelas, planetas e fenômenos celestes.",
    carreiras:"Astrônomo, pesquisador, professor universitário, divulgador científico.",
    fuvest:{ac:50, ep:27, ppi:27}, notaSISU:"721.40",
    sal:"R$ 5.000–12.000", salMid:8500, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Universo","Pesquisa","Física"]
  },
  "Audiovisual": {
    vec:[1,5,0,4,3,10,0,4],
    desc:"Linguagem e produção audiovisual: cinema, vídeo, televisão e mídias digitais.",
    carreiras:"Cineasta, diretor, roteirista, produtor, editor de vídeo.",
    fuvest:{ac:63, ep:54, ppi:41}, notaSISU:"651.80",
    sal:"R$ 3.000–8.500", salMid:5750, emp:"Média", empScore:4, dem:"Competitiva", dur:"4",
    tags:["Cinema","Roteiro","Produção"]
  },
  "Biblioteconomia e Ciência da Informação": {
    vec:[1,7,0,3,2,3,0,5],
    desc:"Organização, gestão e disseminação da informação em acervos físicos e digitais.",
    carreiras:"Bibliotecário, gestor de informação, analista de documentação, arquivista.",
    fuvest:{ac:49, ep:35, ppi:33}, notaSISU:"588.20",
    sal:"R$ 3.000–6.500", salMid:4750, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Informação","Documentação","Gestão"]
  },

  "Biotecnologia": {
    vec:[7,2,7,7,2,0,6,1],
    desc:"Aplicação de tecnologia em sistemas biológicos para novos produtos e tratamentos.",
    carreiras:"Pesquisador, analista, desenvolvedor de bioprodutos, consultor.",
    fuvest:{ac:53, ep:34, ppi:29}, notaSISU:"748.60",
    sal:"R$ 5.500–12.000", salMid:8750, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Biotech","Inovação","Laboratório"]
  },
  "Ciências Agrárias": {
    vec:[6,2,2,3,3,0,8,2],
    desc:"Produção agropecuária sustentável: solo, plantas e animais.",
    carreiras:"Engenheiro agrônomo, pesquisador, consultor agrícola.",
    fuvest:{ac:46, ep:27, ppi:27}, notaSISU:"641.30",
    sal:"R$ 4.000–9.000", salMid:6500, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Agro","Sustentabilidade","Campo"]
  },
  "Ciências Atuariais": {
    vec:[9,1,0,5,7,0,0,1],
    desc:"Matemática e estatística para análise de riscos em seguros e finanças.",
    carreiras:"Atuário, analista de riscos, consultor financeiro.",
    fuvest:{ac:58, ep:43, ppi:27}, notaSISU:"709.50",
    sal:"R$ 5.000–11.000", salMid:8000, emp:"Alta", empScore:8, dem:"Estável", dur:"4",
    tags:["Matemática","Risco","Finanças"]
  },
  "Ciências Biológicas": {
    vec:[6,3,5,3,1,1,8,2],
    desc:"Seres vivos, processos vitais e relações ecológicas.",
    carreiras:"Biólogo, pesquisador, professor, perito ambiental.",
    fuvest:{ac:56, ep:46, ppi:29}, notaSISU:"689.40",
    sal:"R$ 3.500–8.000", salMid:5750, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Biologia","Ecologia","Pesquisa"]
  },
  "Ciências Biomédicas": {
    vec:[7,2,8,6,1,0,4,2],
    desc:"Pesquisa e análise de processos biológicos relacionados à saúde humana.",
    carreiras:"Pesquisador, analista biomédico, professor universitário.",
    fuvest:{ac:60, ep:49, ppi:40}, notaSISU:"735.80",
    sal:"R$ 4.500–10.000", salMid:7250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Pesquisa","Saúde","Laboratório"]
  },
  "Ciências Contábeis": {
    vec:[7,2,0,4,9,1,0,2],
    desc:"Gestão financeira, contabilidade e controle patrimonial.",
    carreiras:"Contador, auditor, controller, consultor tributário.",
    fuvest:{ac:58, ep:43, ppi:27}, notaSISU:"641.90",
    sal:"R$ 4.000–9.000", salMid:6500, emp:"Alta", empScore:8, dem:"Estável", dur:"4",
    tags:["Finanças","Auditoria","Tributário"]
  },
  "Ciências da Computação": {
    vec:[9,1,0,10,3,2,0,2],
    desc:"Algoritmos, software, inteligência artificial e sistemas computacionais.",
    carreiras:"Desenvolvedor, cientista de dados, arquiteto de software, pesquisador.",
    fuvest:{ac:63, ep:52, ppi:40}, notaSISU:"750.10",
    sal:"R$ 6.000–20.000", salMid:13000, emp:"Muito Alta", empScore:10, dem:"Crescendo", dur:"4",
    tags:["Programação","IA","Sistemas"]
  },
  "Ciência de Dados": {
    vec:[9,1,1,10,4,1,1,1],
    desc:"Análise e interpretação de grandes volumes de dados para apoio à decisão.",
    carreiras:"Cientista de dados, engenheiro de ML, analista de BI.",
    fuvest:{ac:63, ep:52, ppi:40}, notaSISU:"762.30", sisuEstimated:true,
    sal:"R$ 6.000–22.000", salMid:14000, emp:"Muito Alta", empScore:10, dem:"Crescendo", dur:"4",
    tags:["Dados","Machine Learning","Análise"]
  },
  "Ciências da Natureza": {
    vec:[7,3,2,3,1,1,8,2],
    desc:"Formação interdisciplinar em Física, Química e Biologia voltada para a docência.",
    carreiras:"Professor de Ciências, educador ambiental, pesquisador em ensino de ciências.",
    fuvest:{ac:28, ep:27, ppi:27}, notaSISU:"612.30",
    sal:"R$ 2.800–6.500", salMid:4650, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Ensino","Ciências","Interdisciplinar"]
  },
  "Ciências dos Alimentos": {
    vec:[7,1,3,4,3,0,5,2],
    desc:"Propriedades, processamento, segurança e conservação de alimentos.",
    carreiras:"Pesquisador, tecnólogo de alimentos, analista de qualidade.",
    fuvest:{ac:66, ep:27, ppi:27}, notaSISU:"678.20",
    sal:"R$ 4.200–8.500", salMid:6350, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Alimentos","Qualidade","Segurança"]
  },
  "Ciências Exatas": {
    vec:[10,1,0,6,1,0,2,0],
    desc:"Base sólida em Matemática, Física e Química com flexibilidade para especialização.",
    carreiras:"Pesquisador, professor, analista quantitativo, engenheiro.",
    fuvest:{ac:28, ep:27, ppi:27}, notaSISU:"698.50",
    sal:"R$ 5.000–13.000", salMid:9000, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Matemática","Física","Química"]
  },
  "Ciências Físicas e Biomoleculares": {
    vec:[8,1,6,5,1,0,4,1],
    desc:"Interface entre Física, Química e Biologia aplicada a sistemas moleculares e celulares.",
    carreiras:"Pesquisador, analista biomolecular, professor universitário.",
    fuvest:{ac:50, ep:27, ppi:27}, notaSISU:"718.40", sisuEstimated:true,
    sal:"R$ 5.000–11.000", salMid:8000, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Biofísica","Pesquisa","Molecular"]
  },
  "Ciência Política": {
    vec:[1,9,0,1,4,2,1,7],
    desc:"Análise de sistemas políticos, poder, Estado e relações internacionais.",
    carreiras:"Cientista político, consultor, analista de políticas públicas, pesquisador.",
    fuvest:{ac:43, ep:27, ppi:27}, fuvestNota:"Ingresso via Ciências Sociais na FUVEST", notaSISU:"668.70",
    sal:"R$ 3.800–9.000", salMid:6400, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Política","Estado","Análise"]
  },
  "Ciências Sociais": {
    vec:[1,9,1,1,2,3,3,7],
    desc:"Análise de sociedades humanas, culturas e dinâmicas sociais.",
    carreiras:"Pesquisador, consultor social, analista de políticas, professor.",
    fuvest:{ac:43, ep:27, ppi:27}, notaSISU:"632.50",
    sal:"R$ 3.200–7.000", salMid:5100, emp:"Média", empScore:4, dem:"Estável", dur:"4",
    tags:["Sociedade","Cultura","Pesquisa"]
  },
  "Design": {
    vec:[4,3,0,5,4,9,2,3],
    desc:"Soluções visuais e funcionais para produtos, marcas e interfaces digitais.",
    carreiras:"Designer gráfico, UX/UI designer, diretor de arte.",
    fuvest:{ac:59, ep:52, ppi:43}, notaSISU:"680.90",
    sal:"R$ 3.500–10.000", salMid:6750, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["UI/UX","Visual","Branding"]
  },
  "Direito": {
    vec:[2,9,2,1,4,3,1,7],
    desc:"Leis, justiça, advocacia e regulação da vida em sociedade.",
    carreiras:"Advogado, juiz, promotor, defensor público, consultor jurídico.",
    fuvest:{ac:63, ep:50, ppi:38}, notaSISU:"754.80",
    sal:"R$ 4.000–25.000", salMid:12000, emp:"Alta", empScore:7, dem:"Competitiva", dur:"5",
    tags:["Leis","Justiça","Advocacia"]
  },
  "Economia": {
    vec:[7,5,0,4,8,1,2,3],
    desc:"Produção, distribuição e consumo: análise micro e macroeconômica.",
    carreiras:"Economista, analista de mercado, pesquisador, consultor.",
    fuvest:{ac:58, ep:43, ppi:27}, notaSISU:"714.60",
    sal:"R$ 5.000–14.000", salMid:9500, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Mercado","Análise","Política Econômica"]
  },
  "Editoração": {
    vec:[2,7,0,3,3,8,0,3],
    desc:"Produção editorial: livros, revistas, e-books e publicações digitais.",
    carreiras:"Editor, revisor, diagramador, produtor editorial, gestor de conteúdo.",
    fuvest:{ac:51, ep:41, ppi:28}, notaSISU:"638.70",
    sal:"R$ 2.800–7.000", salMid:4900, emp:"Média", empScore:4, dem:"Competitiva", dur:"4",
    tags:["Edição","Publicação","Conteúdo"]
  },
  "Educação Física e Esporte": {
    vec:[3,3,7,2,2,2,3,7],
    desc:"Promoção da saúde e desempenho por meio de atividades físicas.",
    carreiras:"Professor, personal trainer, preparador físico, gestor esportivo.",
    fuvest:{ac:41, ep:27, ppi:27}, notaSISU:"634.70",
    sal:"R$ 2.800–7.000", salMid:4900, emp:"Alta", empScore:6, dem:"Estável", dur:"4",
    tags:["Esporte","Saúde","Movimento"]
  },
  "Educomunicação": {
    vec:[0,6,1,3,2,7,0,8],
    desc:"Interface entre educação e comunicação para formação crítica e uso de mídias.",
    carreiras:"Educomunicador, produtor de conteúdo educativo, gestor cultural, professor.",
    fuvest:{ac:35, ep:27, ppi:27}, notaSISU:"622.40", sisuEstimated:true,
    sal:"R$ 2.800–6.500", salMid:4650, emp:"Média", empScore:5, dem:"Crescendo", dur:"4",
    tags:["Educação","Mídia","Comunicação"]
  },
  "Enfermagem": {
    vec:[3,4,9,2,2,1,2,9],
    desc:"Cuidado integral à saúde humana em diferentes níveis de atenção.",
    carreiras:"Enfermeiro, gestor hospitalar, educador em saúde, pesquisador.",
    fuvest:{ac:44, ep:30, ppi:27}, notaSISU:"682.30",
    sal:"R$ 3.500–9.000", salMid:6250, emp:"Muito Alta", empScore:9, dem:"Crescendo", dur:"5",
    tags:["Cuidado","Hospital","Saúde Coletiva"]
  },
  "Engenharia Aeronáutica": {
    vec:[10,1,0,8,3,1,2,2],
    desc:"Projeto, construção e manutenção de aeronaves e sistemas aeroespaciais.",
    carreiras:"Engenheiro aeronáutico, projetista, analista de sistemas de voo.",
    fuvest:{ac:73, ep:56, ppi:40}, notaSISU:"769.50",
    sal:"R$ 6.000–16.000", salMid:11000, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Aviação","Aeroespacial","Projetos"]
  },
  "Engenharia Agronômica": {
    vec:[7,2,2,4,3,0,9,2],
    desc:"Produção agropecuária sustentável, manejo do solo, irrigação e tecnologia agrícola.",
    carreiras:"Engenheiro agrônomo, consultor rural, pesquisador, gestor de propriedades.",
    fuvest:{ac:46, ep:27, ppi:27}, notaSISU:"689.30",
    sal:"R$ 4.500–10.000", salMid:7250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Agro","Solo","Sustentabilidade"]
  },
  "Engenharia Ambiental": {
    vec:[8,2,1,5,2,0,9,2],
    desc:"Soluções tecnológicas para preservação ambiental e sustentabilidade.",
    carreiras:"Engenheiro ambiental, consultor, gestor de recursos naturais.",
    fuvest:{ac:37, ep:27, ppi:27}, notaSISU:"699.10",
    sal:"R$ 4.800–10.000", salMid:7400, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Meio Ambiente","Sustentabilidade","Tecnologia"]
  },
  "Engenharia Bioquímica": {
    vec:[8,1,4,6,2,0,5,1],
    desc:"Processos bioquímicos industriais para produção de fármacos, alimentos e biocombustíveis.",
    carreiras:"Engenheiro bioquímico, pesquisador, gestor de bioprodutos.",
    fuvest:{ac:46, ep:27, ppi:27}, notaSISU:"712.80", sisuEstimated:true,
    sal:"R$ 5.000–12.000", salMid:8500, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Bioprocessos","Indústria","Pesquisa"]
  },
  "Engenharia Biomédica": {
    vec:[8,1,6,8,1,0,1,2],
    desc:"Desenvolvimento de equipamentos, dispositivos e sistemas aplicados à medicina.",
    carreiras:"Engenheiro biomédico, desenvolvedor de dispositivos médicos, pesquisador.",
    fuvest:{ac:64, ep:41, ppi:27}, notaSISU:"736.20",
    sal:"R$ 5.500–14.000", salMid:9750, emp:"Alta", empScore:8, dem:"Crescendo", dur:"5",
    tags:["Bioengenharia","Equipamentos","Saúde"]
  },
  "Engenharia Civil": {
    vec:[9,1,0,5,3,1,4,3],
    desc:"Projetos, construção e manutenção de edificações e infraestrutura urbana.",
    carreiras:"Engenheiro civil, projetista, fiscal de obras, gestor de projetos.",
    fuvest:{ac:55, ep:40, ppi:27}, notaSISU:"712.40",
    sal:"R$ 5.000–13.000", salMid:9000, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Construção","Infraestrutura","Cálculo"]
  },
  "Engenharia de Alimentos": {
    vec:[8,1,2,5,3,0,4,1],
    desc:"Processos industriais de produção, conservação e desenvolvimento de alimentos.",
    carreiras:"Engenheiro de alimentos, gerente de produção, analista de qualidade.",
    fuvest:{ac:44, ep:27, ppi:27}, notaSISU:"672.80",
    sal:"R$ 4.500–10.000", salMid:7250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Alimentos","Indústria","Processos"]
  },
  "Engenharia de Biossistemas": {
    vec:[7,1,2,5,2,0,8,1],
    desc:"Engenharia aplicada a sistemas biológicos e ao agronegócio sustentável.",
    carreiras:"Engenheiro de biossistemas, consultor em agronegócio, pesquisador.",
    fuvest:{ac:46, ep:27, ppi:27}, notaSISU:"678.40", sisuEstimated:true,
    sal:"R$ 4.500–10.000", salMid:7250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Agro","Biossistemas","Sustentabilidade"]
  },
  "Engenharia de Computação": {
    vec:[10,0,0,9,2,1,0,2],
    desc:"Hardware, firmware e software integrados em sistemas computacionais completos.",
    carreiras:"Engenheiro de computação, desenvolvedor embarcado, arquiteto de sistemas.",
    fuvest:{ac:65, ep:46, ppi:27}, notaSISU:"745.20",
    sal:"R$ 5.500–18.000", salMid:11750, emp:"Muito Alta", empScore:9, dem:"Crescendo", dur:"5",
    tags:["Hardware","Software","Sistemas Embarcados"]
  },
  "Engenharia de Materiais": {
    vec:[9,1,0,6,2,0,5,1],
    desc:"Desenvolvimento, processamento e aplicação de materiais de alta performance.",
    carreiras:"Engenheiro de materiais, pesquisador, desenvolvedor de produtos.",
    fuvest:{ac:28, ep:27, ppi:27}, notaSISU:"689.70",
    sal:"R$ 5.000–12.000", salMid:8500, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Materiais","Inovação","Pesquisa"]
  },
  "Engenharia de Materiais e Manufatura": {
    vec:[9,0,0,6,3,0,4,1],
    desc:"Desenvolvimento de materiais e processos de fabricação industrial de alta performance.",
    carreiras:"Engenheiro de manufatura, desenvolvedor de produtos, consultor industrial.",
    fuvest:{ac:28, ep:27, ppi:27}, notaSISU:"692.40", sisuEstimated:true,
    sal:"R$ 5.000–12.000", salMid:8500, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Materiais","Manufatura","Indústria"]
  },
  "Engenharia de Minas": {
    vec:[9,0,0,5,2,0,7,1],
    desc:"Extração, processamento e gerenciamento de recursos minerais.",
    carreiras:"Engenheiro de minas, consultor em mineração, gestor de lavras.",
    fuvest:{ac:64, ep:41, ppi:27}, notaSISU:"695.20",
    sal:"R$ 6.000–14.000", salMid:10000, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Mineração","Recursos","Extração"]
  },
  "Engenharia de Petróleo": {
    vec:[9,0,0,6,3,0,5,1],
    desc:"Exploração, extração e processamento de petróleo e gás natural.",
    carreiras:"Engenheiro de petróleo, consultor, especialista em reservatórios.",
    fuvest:{ac:64, ep:41, ppi:27}, notaSISU:"721.60",
    sal:"R$ 7.000–18.000", salMid:12500, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Petróleo","Gás","Exploração"]
  },
  "Engenharia de Produção": {
    vec:[8,2,0,6,7,1,2,4],
    desc:"Otimização de sistemas produtivos, logística e gestão industrial.",
    carreiras:"Engenheiro de produção, consultor, gestor industrial, supply chain.",
    fuvest:{ac:44, ep:27, ppi:27}, notaSISU:"718.60",
    sal:"R$ 5.500–13.000", salMid:9250, emp:"Alta", empScore:8, dem:"Estável", dur:"5",
    tags:["Produção","Otimização","Logística"]
  },
  "Engenharia Elétrica": {
    vec:[10,0,0,8,2,0,2,1],
    desc:"Projeto e desenvolvimento de sistemas elétricos, eletrônicos e de energia.",
    carreiras:"Engenheiro eletricista, projetista, gestor de energia.",
    fuvest:{ac:65, ep:46, ppi:27}, notaSISU:"730.80",
    sal:"R$ 5.500–14.000", salMid:9750, emp:"Alta", empScore:8, dem:"Estável", dur:"5",
    tags:["Eletricidade","Energia","Sistemas"]
  },
  "Engenharia Física": {
    vec:[10,0,0,8,1,0,3,0],
    desc:"Física aplicada ao desenvolvimento tecnológico: fotônica, semicondutores e nanotecnologia.",
    carreiras:"Engenheiro físico, pesquisador em P&D, especialista em nanotecnologia.",
    fuvest:{ac:44, ep:27, ppi:27}, notaSISU:"748.60", sisuEstimated:true,
    sal:"R$ 6.000–16.000", salMid:11000, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Física","Nanotecnologia","P&D"]
  },
  "Engenharia Florestal": {
    vec:[7,2,0,3,2,0,9,2],
    desc:"Manejo sustentável de florestas, recursos madeireiros e conservação ambiental.",
    carreiras:"Engenheiro florestal, pesquisador, gestor ambiental, consultor.",
    fuvest:{ac:64, ep:41, ppi:27}, notaSISU:"649.80",
    sal:"R$ 4.000–9.000", salMid:6500, emp:"Alta", empScore:6, dem:"Estável", dur:"5",
    tags:["Florestas","Manejo","Conservação"]
  },
  "Engenharia Mecânica": {
    vec:[10,0,0,6,3,0,2,2],
    desc:"Projeto, análise e fabricação de sistemas e componentes mecânicos.",
    carreiras:"Engenheiro mecânico, projetista, gestor de manufatura.",
    fuvest:{ac:61, ep:43, ppi:27}, notaSISU:"724.90",
    sal:"R$ 5.500–13.000", salMid:9250, emp:"Alta", empScore:8, dem:"Estável", dur:"5",
    tags:["Mecânica","Projetos","Indústria"]
  },
  "Engenharia Mecatrônica": {
    vec:[10,0,0,9,2,0,1,2],
    desc:"Mecânica, eletrônica e computação integradas em sistemas automatizados.",
    carreiras:"Engenheiro mecatrônico, desenvolvedor de robótica, especialista em automação.",
    fuvest:{ac:61, ep:43, ppi:27}, notaSISU:"742.10",
    sal:"R$ 5.500–15.000", salMid:10250, emp:"Alta", empScore:8, dem:"Crescendo", dur:"5",
    tags:["Robótica","Automação","IoT"]
  },
  "Engenharia Metalúrgica": {
    vec:[9,0,0,5,2,0,5,1],
    desc:"Extração, processamento e aplicação de metais e ligas metálicas.",
    carreiras:"Engenheiro metalúrgico, pesquisador de materiais, consultor industrial.",
    fuvest:{ac:64, ep:41, ppi:27}, notaSISU:"688.90",
    sal:"R$ 5.500–13.000", salMid:9250, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Metais","Processos","Indústria"]
  },
  "Engenharia Naval": {
    vec:[9,0,0,5,2,0,4,1],
    desc:"Projeto e construção de embarcações, plataformas offshore e sistemas navais.",
    carreiras:"Engenheiro naval, projetista, especialista offshore, consultor marítimo.",
    fuvest:{ac:64, ep:41, ppi:27}, notaSISU:"711.20",
    sal:"R$ 6.000–15.000", salMid:10500, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Naval","Offshore","Projetos"]
  },
  "Engenharia Química": {
    vec:[10,0,0,6,2,0,4,1],
    desc:"Processos químicos industriais e desenvolvimento de novos produtos.",
    carreiras:"Engenheiro químico, gestor de processos, pesquisador, consultor.",
    fuvest:{ac:44, ep:27, ppi:27}, notaSISU:"726.30",
    sal:"R$ 5.500–13.000", salMid:9250, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Química","Processos","Petroquímica"]
  },
  "Estatística": {
    vec:[9,2,1,7,5,0,1,1],
    desc:"Coleta, análise e interpretação de dados para tomada de decisão.",
    carreiras:"Estatístico, analista de dados, cientista de dados, consultor.",
    fuvest:{ac:58, ep:43, ppi:27}, notaSISU:"698.40",
    sal:"R$ 5.000–14.000", salMid:9500, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Dados","Análise","Probabilidade"]
  },
  "Farmácia": {
    vec:[7,2,7,4,2,0,4,3],
    desc:"Desenvolvimento, produção e controle de medicamentos e cosméticos.",
    carreiras:"Farmacêutico, pesquisador, gestor de farmácia hospitalar, analista.",
    fuvest:{ac:54, ep:42, ppi:27}, notaSISU:"712.60",
    sal:"R$ 4.000–10.000", salMid:7000, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Medicamentos","Saúde","Laboratório"]
  },
  "Filosofia": {
    vec:[1,10,0,0,1,4,1,3],
    desc:"Reflexão crítica sobre existência, ética, conhecimento e política.",
    carreiras:"Professor, pesquisador, consultor, escritor, redator.",
    fuvest:{ac:41, ep:28, ppi:27}, notaSISU:"591.30",
    sal:"R$ 2.800–6.500", salMid:4650, emp:"Baixa", empScore:3, dem:"Competitiva", dur:"4",
    tags:["Pensamento","Ética","Crítica"]
  },
  "Finanças e Negócios": {
    vec:[5,2,0,4,10,1,0,2],
    desc:"Gestão financeira, mercados de capitais e estratégia empresarial.",
    carreiras:"Analista financeiro, gestor de investimentos, consultor de negócios.",
    fuvest:{ac:51, ep:34, ppi:27}, notaSISU:"682.40",
    sal:"R$ 5.000–14.000", salMid:9500, emp:"Alta", empScore:8, dem:"Estável", dur:"4",
    tags:["Finanças","Mercado","Investimentos"]
  },
  "Física": {
    vec:[10,2,0,7,0,0,3,0],
    desc:"Leis fundamentais que regem matéria, energia, espaço e tempo.",
    carreiras:"Físico, pesquisador, professor, engenheiro de projetos de alta tecnologia.",
    fuvest:{ac:50, ep:27, ppi:27}, notaSISU:"714.20",
    sal:"R$ 6.000–16.000", salMid:11000, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Pesquisa","Universo","Fundamentos"]
  },
  "Física Computacional": {
    vec:[10,1,0,9,1,0,2,0],
    desc:"Métodos computacionais aplicados à resolução de problemas físicos complexos.",
    carreiras:"Pesquisador, desenvolvedor de simulações, cientista computacional.",
    fuvest:{ac:50, ep:27, ppi:27}, notaSISU:"724.80", sisuEstimated:true,
    sal:"R$ 5.500–14.000", salMid:9500, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Física","Computação","Simulação"]
  },
  "Física Médica": {
    vec:[9,1,7,7,1,0,1,2],
    desc:"Princípios físicos aplicados a diagnóstico, radioterapia e equipamentos médicos.",
    carreiras:"Físico médico, pesquisador, desenvolvedor de equipamentos hospitalares.",
    fuvest:{ac:49, ep:27, ppi:27}, notaSISU:"728.40", sisuEstimated:true,
    sal:"R$ 7.000–16.000", salMid:11500, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Física","Medicina","Diagnóstico"]
  },
  "Fisioterapia": {
    vec:[4,3,9,2,1,1,1,8],
    desc:"Prevenção e tratamento de disfunções do movimento e reabilitação funcional.",
    carreiras:"Fisioterapeuta, pesquisador, gestor de clínica, professor.",
    fuvest:{ac:57, ep:45, ppi:33}, notaSISU:"694.80",
    sal:"R$ 3.500–9.000", salMid:6250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Reabilitação","Movimento","Saúde"]
  },
  "Fonoaudiologia": {
    vec:[3,4,8,2,1,2,0,8],
    desc:"Avaliação e tratamento de distúrbios da comunicação e deglutição.",
    carreiras:"Fonoaudiólogo, pesquisador, professor, consultor em saúde.",
    fuvest:{ac:46, ep:38, ppi:27}, notaSISU:"688.50",
    sal:"R$ 3.500–8.500", salMid:6000, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Fala","Audição","Terapia"]
  },
  "Geociências e Educação Ambiental": {
    vec:[5,5,0,2,1,1,9,4],
    desc:"Formação em Geociências voltada para educação ambiental e ensino de Ciências da Terra.",
    carreiras:"Professor, educador ambiental, pesquisador, gestor de projetos ambientais.",
    fuvest:{ac:27, ep:27, ppi:27}, notaSISU:"598.60", sisuEstimated:true,
    sal:"R$ 3.000–7.000", salMid:5000, emp:"Média", empScore:5, dem:"Crescendo", dur:"4",
    tags:["Geociências","Educação","Ambiente"]
  },
  "Geofísica": {
    vec:[9,1,0,5,2,0,7,0],
    desc:"Estudo da Terra por métodos físicos e matemáticos.",
    carreiras:"Geofísico, pesquisador, consultor em exploração mineral e petróleo.",
    fuvest:{ac:50, ep:27, ppi:27}, notaSISU:"680.10",
    sal:"R$ 6.000–14.000", salMid:10000, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Terra","Exploração","Física"]
  },
  "Geografia": {
    vec:[3,7,0,2,2,2,6,5],
    desc:"Espaço geográfico, relações sociedade-natureza e planejamento territorial.",
    carreiras:"Geógrafo, professor, planejador territorial, analista ambiental.",
    fuvest:{ac:38, ep:29, ppi:27}, notaSISU:"617.60",
    sal:"R$ 3.200–7.500", salMid:5350, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Território","Espaço","Planejamento"]
  },
  "Geologia": {
    vec:[8,2,0,4,2,0,8,1],
    desc:"Composição, estrutura e história da Terra e seus recursos.",
    carreiras:"Geólogo, consultor em mineração, pesquisador de petróleo.",
    fuvest:{ac:48, ep:27, ppi:27}, notaSISU:"674.30",
    sal:"R$ 6.000–15.000", salMid:10500, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Rochas","Recursos Naturais","Exploração"]
  },
  "Gerontologia": {
    vec:[1,5,7,1,2,1,1,9],
    desc:"Estudo do envelhecimento humano e promoção da qualidade de vida do idoso.",
    carreiras:"Gerontólogo, gestor de saúde do idoso, pesquisador, consultor em políticas.",
    fuvest:{ac:49, ep:28, ppi:27}, notaSISU:"634.20", sisuEstimated:true,
    sal:"R$ 3.000–7.500", salMid:5250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Envelhecimento","Saúde","Políticas"]
  },
  "Gestão Ambiental": {
    vec:[4,5,1,4,5,1,9,4],
    desc:"Planejamento e gestão de recursos naturais com foco em sustentabilidade.",
    carreiras:"Gestor ambiental, consultor, analista de sustentabilidade corporativa.",
    fuvest:{ac:28, ep:27, ppi:27}, notaSISU:"632.80",
    sal:"R$ 3.800–8.500", salMid:6150, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Sustentabilidade","Recursos","Políticas"]
  },
  "Gestão de Políticas Públicas": {
    vec:[2,7,1,2,7,1,2,9],
    desc:"Planejamento, implementação e avaliação de políticas públicas e programas governamentais.",
    carreiras:"Gestor público, analista de políticas, consultor em governo, pesquisador.",
    fuvest:{ac:37, ep:28, ppi:27}, notaSISU:"624.80",
    sal:"R$ 3.500–10.000", salMid:6750, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Governo","Políticas","Gestão"]
  },
  "História": {
    vec:[1,10,0,0,1,5,2,3],
    desc:"Processos históricos, culturas e transformações das sociedades humanas.",
    carreiras:"Historiador, professor, pesquisador, curador, museólogo.",
    fuvest:{ac:48, ep:30, ppi:27}, notaSISU:"619.80",
    sal:"R$ 2.800–6.500", salMid:4650, emp:"Média", empScore:4, dem:"Competitiva", dur:"4",
    tags:["Passado","Cultura","Pesquisa"]
  },
  "Informática Biomédica": {
    vec:[7,1,6,9,2,0,1,2],
    desc:"Computação aplicada a soluções para saúde, medicina e pesquisa clínica.",
    carreiras:"Analista de sistemas de saúde, pesquisador, desenvolvedor de software médico.",
    fuvest:{ac:41, ep:31, ppi:27}, notaSISU:"712.40", sisuEstimated:true,
    sal:"R$ 5.000–12.000", salMid:8500, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Saúde","TI","Computação"]
  },
  "Jornalismo": {
    vec:[1,7,1,3,3,7,1,7],
    desc:"Apuração, produção e disseminação de informações e narrativas jornalísticas.",
    carreiras:"Jornalista, editor, repórter, produtor de conteúdo digital.",
    fuvest:{ac:60, ep:50, ppi:42}, notaSISU:"665.40",
    sal:"R$ 2.800–8.000", salMid:5400, emp:"Média", empScore:5, dem:"Competitiva", dur:"4",
    tags:["Notícias","Mídia","Comunicação"]
  },
  "Lazer e Turismo": {
    vec:[1,4,2,2,5,4,3,8],
    desc:"Planejamento e gestão de atividades de lazer, turismo e hospitalidade.",
    carreiras:"Gestor de turismo, planejador de eventos, consultor em hospitalidade.",
    fuvest:{ac:27, ep:27, ppi:27}, notaSISU:"591.40", sisuEstimated:true,
    sal:"R$ 2.800–7.000", salMid:4900, emp:"Média", empScore:5, dem:"Crescendo", dur:"4",
    tags:["Turismo","Lazer","Hospitalidade"]
  },
  "Letras": {
    vec:[1,9,0,1,1,7,1,4],
    desc:"Línguas, literaturas e manifestações culturais do mundo.",
    carreiras:"Professor, tradutor, revisor, pesquisador linguístico, escritor.",
    fuvest:{ac:35, ep:27, ppi:27}, notaSISU:"607.20",
    sal:"R$ 2.800–6.500", salMid:4650, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Línguas","Literatura","Cultura"]
  },
  "Marketing": {
    vec:[3,4,0,5,9,6,1,6],
    desc:"Estratégias de mercado, comunicação e relacionamento com consumidores.",
    carreiras:"Profissional de marketing digital, gestor de marcas, analista de mercado.",
    fuvest:{ac:46, ep:33, ppi:27}, notaSISU:"672.10",
    sal:"R$ 3.500–11.000", salMid:7250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Mercado","Branding","Digital"]
  },
  "Matemática": {
    vec:[10,2,0,6,2,0,1,0],
    desc:"Estruturas abstratas, padrões e relações quantitativas fundamentais.",
    carreiras:"Matemático, professor, pesquisador, analista quantitativo, atuário.",
    fuvest:{ac:29, ep:27, ppi:27}, notaSISU:"692.80",
    sal:"R$ 5.000–14.000", salMid:9500, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Números","Lógica","Abstração"]
  },
  "Matemática Aplicada": {
    vec:[10,1,0,7,3,0,2,0],
    desc:"Matemática com foco em aplicações práticas em ciência, tecnologia e economia.",
    carreiras:"Matemático aplicado, pesquisador, analista quantitativo, cientista de dados.",
    fuvest:{ac:45, ep:31, ppi:27}, notaSISU:"718.40",
    sal:"R$ 5.000–14.000", salMid:9500, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Matemática","Aplicações","Modelagem"]
  },
  "Matemática Aplicada a Negócios": {
    vec:[9,1,0,6,7,0,1,0],
    desc:"Matemática e estatística aplicadas à tomada de decisão no mundo dos negócios.",
    carreiras:"Analista quantitativo, cientista de dados, consultor financeiro, atuário.",
    fuvest:{ac:58, ep:43, ppi:27}, notaSISU:"698.20", sisuEstimated:true,
    sal:"R$ 5.500–15.000", salMid:10250, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Matemática","Negócios","Análise"]
  },
  "Matemática Aplicada e Computação Científica": {
    vec:[10,1,0,9,2,0,2,0],
    desc:"Algoritmos e modelos computacionais aplicados a ciência e engenharia.",
    carreiras:"Pesquisador, desenvolvedor de algoritmos, cientista computacional.",
    fuvest:{ac:45, ep:31, ppi:27}, notaSISU:"728.60", sisuEstimated:true,
    sal:"R$ 5.500–15.000", salMid:10250, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Matemática","Computação","Ciência"]
  },
  "Matemática Aplicada e Computacional": {
    vec:[10,1,0,9,2,0,2,0],
    desc:"Métodos matemáticos e computacionais para modelagem científica e engenharia.",
    carreiras:"Pesquisador, desenvolvedor de algoritmos, cientista computacional.",
    fuvest:{ac:45, ep:31, ppi:27}, notaSISU:"724.60", sisuEstimated:true,
    sal:"R$ 5.500–15.000", salMid:10250, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Matemática","Computação","Modelagem"]
  },
  "Medicina": {
    vec:[5,4,10,4,2,1,2,9],
    desc:"Diagnóstico, tratamento e prevenção de doenças. A graduação mais longa e competitiva.",
    carreiras:"Médico generalista, especialista, pesquisador clínico, professor.",
    fuvest:{ac:79, ep:71, ppi:60}, notaSISU:"807.90",
    sal:"R$ 10.000–30.000", salMid:20000, emp:"Muito Alta", empScore:10, dem:"Alta", dur:"6",
    tags:["Medicina","Diagnóstico","Pesquisa Clínica"]
  },
  "Medicina Veterinária": {
    vec:[5,2,8,3,2,1,6,7],
    desc:"Saúde animal, clínica, cirurgia e saúde pública veterinária.",
    carreiras:"Médico veterinário, pesquisador, inspetor sanitário, consultor.",
    fuvest:{ac:57, ep:46, ppi:36}, notaSISU:"714.80",
    sal:"R$ 4.000–10.000", salMid:7000, emp:"Alta", empScore:7, dem:"Estável", dur:"5",
    tags:["Animais","Clínica","Saúde Pública"]
  },
  "Meteorologia": {
    vec:[8,2,0,5,1,0,7,1],
    desc:"Atmosfera, clima e previsão do tempo por métodos científicos.",
    carreiras:"Meteorologista, pesquisador climático, analista, consultor.",
    fuvest:{ac:50, ep:27, ppi:27}, notaSISU:"678.90",
    sal:"R$ 5.000–11.000", salMid:8000, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Clima","Atmosfera","Previsão"]
  },
  "Música": {
    vec:[2,5,0,2,1,10,0,5],
    desc:"Teoria, composição e execução musical em múltiplos gêneros.",
    carreiras:"Músico, compositor, professor, regente, produtor musical.",
    fuvest:{ac:44, ep:27, ppi:27}, notaSISU:"625.40",
    sal:"R$ 2.500–7.000", salMid:4750, emp:"Baixa", empScore:3, dem:"Competitiva", dur:"4",
    tags:["Som","Composição","Performance"]
  },
  "Nutrição": {
    vec:[4,3,8,2,2,1,3,7],
    desc:"Alimentação, nutrição clínica e promoção da saúde humana.",
    carreiras:"Nutricionista, pesquisador, consultor alimentar, gestor de UAN.",
    fuvest:{ac:54, ep:45, ppi:34}, notaSISU:"684.20",
    sal:"R$ 3.000–8.000", salMid:5500, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Alimentação","Saúde","Clínica"]
  },
  "Nutrição e Metabolismo": {
    vec:[5,2,8,3,2,1,3,6],
    desc:"Nutrição clínica avançada com foco em metabolismo e doenças crônicas.",
    carreiras:"Nutricionista clínico, pesquisador em metabolismo, consultor em saúde.",
    fuvest:{ac:54, ep:45, ppi:34}, notaSISU:"698.40", sisuEstimated:true,
    sal:"R$ 3.500–9.000", salMid:6250, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Nutrição","Metabolismo","Saúde"]
  },
  "Obstetrícia": {
    vec:[2,3,9,1,1,1,1,9],
    desc:"Cuidado integral à saúde da mulher durante gestação, parto e puerpério.",
    carreiras:"Obstetra, enfermeiro obstetra, pesquisador em saúde materna.",
    fuvest:{ac:41, ep:27, ppi:27}, notaSISU:"694.80", sisuEstimated:true,
    sal:"R$ 4.000–10.000", salMid:7000, emp:"Alta", empScore:8, dem:"Crescendo", dur:"4",
    tags:["Gestação","Saúde da Mulher","Parto"]
  },
  "Oceanografia": {
    vec:[7,3,2,3,1,1,9,2],
    desc:"Oceanos, mares, zonas costeiras e seus ecossistemas.",
    carreiras:"Oceanógrafo, pesquisador, consultor ambiental marinho.",
    fuvest:{ac:44, ep:28, ppi:27}, notaSISU:"659.80",
    sal:"R$ 4.500–10.000", salMid:7250, emp:"Média", empScore:5, dem:"Crescendo", dur:"4",
    tags:["Oceanos","Ecossistemas","Pesquisa"]
  },
  "Odontologia": {
    vec:[5,2,9,3,3,2,0,7],
    desc:"Prevenção, diagnóstico e tratamento de doenças bucais.",
    carreiras:"Cirurgião-dentista, especialista, pesquisador, professor.",
    fuvest:{ac:50, ep:37, ppi:27}, notaSISU:"754.30",
    sal:"R$ 5.000–18.000", salMid:11500, emp:"Alta", empScore:8, dem:"Estável", dur:"5",
    tags:["Saúde Bucal","Clínica","Cirurgia"]
  },
  "Pedagogia": {
    vec:[1,7,3,1,2,3,1,9],
    desc:"Processos de ensino e aprendizagem em contextos formais e informais.",
    carreiras:"Pedagogo, professor, gestor educacional, orientador escolar.",
    fuvest:{ac:42, ep:27, ppi:27}, notaSISU:"604.60",
    sal:"R$ 2.500–6.000", salMid:4250, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Educação","Ensino","Aprendizagem"]
  },
  "Psicologia": {
    vec:[2,7,8,2,2,3,1,9],
    desc:"Comportamento humano, processos mentais e saúde psicológica.",
    carreiras:"Psicólogo clínico, organizacional, escolar, pesquisador.",
    fuvest:{ac:66, ep:56, ppi:48}, notaSISU:"745.60",
    sal:"R$ 3.500–10.000", salMid:6750, emp:"Alta", empScore:7, dem:"Crescendo", dur:"5",
    tags:["Saúde Mental","Comportamento","Terapia"]
  },
  "Publicidade e Propaganda": {
    vec:[1,4,0,4,7,9,1,6],
    desc:"Criação e gestão de campanhas publicitárias e comunicação mercadológica.",
    carreiras:"Publicitário, diretor de criação, planejador, gestor de contas.",
    fuvest:{ac:59, ep:49, ppi:42}, notaSISU:"668.40",
    sal:"R$ 3.200–10.000", salMid:6600, emp:"Média", empScore:5, dem:"Competitiva", dur:"4",
    tags:["Publicidade","Criatividade","Mídia"]
  },
  "Química": {
    vec:[9,1,2,5,2,0,5,1],
    desc:"Matéria, suas transformações, propriedades e aplicações industriais.",
    carreiras:"Químico, pesquisador, professor, analista laboratorial.",
    fuvest:{ac:48, ep:31, ppi:27}, notaSISU:"671.40",
    sal:"R$ 4.000–10.000", salMid:7000, emp:"Alta", empScore:7, dem:"Estável", dur:"4",
    tags:["Matéria","Laboratório","Síntese"]
  },
  "Relações Internacionais": {
    vec:[2,9,1,2,6,3,3,6],
    desc:"Relações entre Estados, organizações e atores no cenário global.",
    carreiras:"Diplomata, analista internacional, gestor de projetos globais, consultor.",
    fuvest:{ac:66, ep:55, ppi:45}, notaSISU:"706.80",
    sal:"R$ 4.500–12.000", salMid:8250, emp:"Média", empScore:5, dem:"Competitiva", dur:"4",
    tags:["Diplomacia","Global","Política"]
  },
  "Relações Públicas": {
    vec:[1,5,0,3,6,6,0,7],
    desc:"Gestão da comunicação entre organizações e seus públicos de interesse.",
    carreiras:"Relações públicas, assessor de comunicação, gestor de marca, consultor.",
    fuvest:{ac:50, ep:38, ppi:29}, notaSISU:"638.40",
    sal:"R$ 3.000–8.000", salMid:5500, emp:"Média", empScore:5, dem:"Estável", dur:"4",
    tags:["Comunicação","Marca","Relacionamento"]
  },
  "Saúde Pública": {
    vec:[3,6,8,2,3,1,3,8],
    desc:"Promoção, proteção e recuperação da saúde em nível coletivo e populacional.",
    carreiras:"Sanitarista, gestor em saúde, pesquisador, educador em saúde.",
    fuvest:{ac:30, ep:27, ppi:27}, notaSISU:"668.20",
    sal:"R$ 4.000–9.000", salMid:6500, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Saúde Coletiva","Políticas","Prevenção"]
  },
  "Sistemas de Informação": {
    vec:[7,2,0,9,6,2,0,3],
    desc:"Gestão e desenvolvimento de sistemas de informação em organizações.",
    carreiras:"Analista de sistemas, gestor de TI, desenvolvedor, consultor.",
    fuvest:{ac:57, ep:48, ppi:32}, notaSISU:"691.50",
    sal:"R$ 5.000–15.000", salMid:10000, emp:"Muito Alta", empScore:9, dem:"Crescendo", dur:"4",
    tags:["Sistemas","TI","Desenvolvimento"]
  },
  "Terapia Ocupacional": {
    vec:[2,4,8,2,1,3,1,9],
    desc:"Atividades terapêuticas para reabilitação, inclusão e promoção de autonomia.",
    carreiras:"Terapeuta ocupacional, pesquisador, gestor em saúde.",
    fuvest:{ac:48, ep:39, ppi:28}, notaSISU:"661.40",
    sal:"R$ 3.200–7.500", salMid:5350, emp:"Alta", empScore:7, dem:"Crescendo", dur:"4",
    tags:["Reabilitação","Inclusão","Autonomia"]
  },
  "Têxtil e Moda": {
    vec:[2,3,0,3,4,9,2,3],
    desc:"Criação, produção e gestão no universo têxtil, de moda e vestuário.",
    carreiras:"Estilista, gestor de produção têxtil, consultor de moda.",
    fuvest:{ac:51, ep:42, ppi:33}, notaSISU:"621.80",
    sal:"R$ 2.800–7.000", salMid:4900, emp:"Média", empScore:4, dem:"Competitiva", dur:"4",
    tags:["Moda","Design","Têxtil"]
  },
  "Turismo": {
    vec:[1,4,0,2,5,4,2,7],
    desc:"Planejamento turístico, gestão de destinos e desenvolvimento do setor de viagens.",
    carreiras:"Gestor de turismo, consultor, planejador de destinos, gestor de eventos.",
    fuvest:{ac:27, ep:27, ppi:27}, notaSISU:"598.40",
    sal:"R$ 2.800–7.500", salMid:5150, emp:"Média", empScore:5, dem:"Crescendo", dur:"4",
    tags:["Turismo","Destinos","Eventos"]
  },
  "Zootecnia": {
    vec:[5,2,5,3,3,0,8,4],
    desc:"Produção, manejo e conservação de animais domésticos e silvestres.",
    carreiras:"Zootecnista, gestor de produção animal, pesquisador.",
    fuvest:{ac:39, ep:27, ppi:27}, notaSISU:"643.70",
    sal:"R$ 3.800–8.500", salMid:6150, emp:"Alta", empScore:6, dem:"Estável", dur:"4",
    tags:["Animais","Produção","Manejo"]
  }
};
