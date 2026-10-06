// ===== Configuração =====
const WHATSAPP = "5551992084071"; // número da loja (DDI+DDD+número)

const PRODUTOS = [
  { id: 1, nome: "Camiseta Calvin Klein Verde", cat: "Camisetas", preco: 100, emoji: "👕", cor: "#d5e8dc", imgs: ["img/camiseta-verde-frente.jpg", "img/camiseta-verde-costas.jpg"], tam: ["G", "GG"] },
  { id: 2, nome: "Camiseta Calvin Klein Marrom", cat: "Camisetas", preco: 100, emoji: "👕", cor: "#eadfd2", imgs: ["img/camiseta-marrom-frente.jpg", "img/camiseta-marrom-costas.jpg"], tam: ["G", "GG"] },
  { id: 3, nome: "Calça Jeans Azul Escuro", cat: "Calças", preco: 159.9, emoji: "👖", cor: "#cfd8e6", imgs: ["img/calca-jeans-look.jpg", "img/calca-jeans-detalhe.jpg", "img/calca-jeans-etiqueta.jpg"], pos: "50% 72%", tam: ["38", "40", "42", "44"] },
  { id: 7, nome: "Jaqueta Under Armour Preta", cat: "Casacos", preco: 250, emoji: "🧥", cor: "#d5e6dc", imgs: ["img/jaqueta-preta.jpg", "img/jaqueta-ua-extra-1.jpg", "img/jaqueta-preta-costas.jpg"], tam: ["GG"] },
  { id: 8, nome: "Moletom Volcom Cinza", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#e6dccf", imgs: ["img/moletom-canguru-frente.jpg", "img/moletom-canguru.jpg"], tam: ["G"] },
  { id: 13, nome: "Jaqueta Champion Corta-vento Camuflada Cinza", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#d9d9de", imgs: ["img/jaqueta-camuflada-frente.jpg", "img/jaqueta-camuflada.jpg","img/jaqueta-camuflada-detalhe.jpg", "img/jaqueta-camuflada-costas.jpg", "img/jaqueta-camuflada-barra.jpg", "img/jaqueta-camuflada-look-1.jpg"], tam: ["G"] },
  { id: 14, nome: "Jaqueta Champion Corta-vento Camuflada Verde", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#d5e0cf", imgs: ["img/jaqueta-camuflada-verde.jpg", "img/jaqueta-camuflada-verde-look.jpg", "img/jaqueta-camuflada-verde-costas.jpg","img/jaqueta-camuflada-verde-detalhe.jpg"], tam: ["G"] },
  { id: 15, nome: "Tênis Oakley Flint Azul", cat: "Calçados", preco: 120, emoji: "👟", cor: "#dbe7f3", imgs: ["img/tenis-azul-3-4.jpg", "img/tenis-azul-frente.jpg","img/tenis-azul-lado.jpg", "img/tenis-azul.jpg", "img/tenis-azul-sola.jpg"], tam: ["43"] },
  { id: 16, nome: "Agasalho Umbro Azul-marinho", cat: "Conjuntos", preco: 200, emoji: "🥋", cor: "#cfd8e6", imgs: ["img/conjunto-azul.jpg", "img/agasalho-umbro-extra-1.jpg", "img/agasalho-umbro-extra-2.jpg"], tam: ["GG"] },
  { id: 17, nome: "Moletom Adidas Lilás", cat: "Casacos", preco: 350, emoji: "🧥", cor: "#e6e0ee", imgs: ["img/moletom-lilas-frente.jpg", "img/moletom-lilas-modelo.jpg", "img/moletom-lilas.jpg", "img/moletom-lilas-costas.jpg"], tam: ["M", "G"] },
  { id: 18, nome: "Tênis Adidas Branco", cat: "Calçados", preco: 200, emoji: "👟", cor: "#e8edf0", imgs: ["img/tenis-branco-lado.jpg", "img/tenis-branco.jpg", "img/tenis-branco-uso.jpg", "img/tenis-branco-cima.jpg"], tam: ["39"] },
  { id: 19, nome: "Camiseta Calvin Klein Preta", cat: "Camisetas", preco: 100, emoji: "👕", cor: "#dcdcdf", imgs: ["img/camiseta-preta-frente.jpg", "img/camiseta-preta-costas.jpg", "img/camiseta-preta.jpg"], tam: ["G", "GG"] },
  { id: 20, nome: "Bolsa Nike Heritage Vintage 30L", cat: "Acessórios", preco: 200, emoji: "🎒", cor: "#dbe7f3", imgs: ["img/bolsa-nike-1.jpg", "img/bolsa-nike-2.jpg", "img/bolsa-nike-3.jpg", "img/bolsa-nike-4.jpg", "img/bolsa-nike-5.jpg", "img/bolsa-nike-6.jpg"], tam: ["Único"] },
  { id: 21, nome: "Calça Joma Azul-marinho", cat: "Calças", preco: 80, emoji: "👖", cor: "#cfd8e6", imgs: ["img/calca-joma-1.jpg", "img/calca-joma-2.jpg"], tam: ["G"] },
  { id: 22, nome: "Agasalho Kappa Preto", cat: "Conjuntos", preco: 200, emoji: "🥋", cor: "#dcdcdf", imgs: ["img/agasalho-kappa-1.jpg", "img/agasalho-kappa-2.jpg", "img/agasalho-kappa-3.jpg", "img/agasalho-kappa-4.jpg"], tam: ["GG"] },
  { id: 23, nome: "Jaqueta Everlast Corta-vento Preta", cat: "Casacos", preco: 90, emoji: "🧥", cor: "#dcdcdf", imgs: ["img/jaqueta-everlast-1.jpg", "img/jaqueta-everlast-2.jpg"], tam: ["G"] },
  { id: 24, nome: "Jaqueta Puffer Ecko Azul-marinho", cat: "Casacos", preco: 250, emoji: "🧥", cor: "#cfd8e6", imgs: ["img/jaqueta-acolchoada-1.jpg", "img/jaqueta-acolchoada-2.jpg", "img/jaqueta-acolchoada-3.jpg"], tam: ["G"] },
  { id: 25, nome: "Blusa Moletom Grêmio Cinza", cat: "Casacos", preco: 80, emoji: "🧥", cor: "#dcdcdf", imgs: ["img/blusa-gremio-1.jpg", "img/blusa-gremio-2.jpg", "img/blusa-gremio-3.jpg"], tam: ["G"] },
  { id: 26, nome: "Tênis Everlast Feminino Slip-on", cat: "Calçados", preco: 80, emoji: "👟", cor: "#dbe7f3", imgs: ["img/tenis-everlast-1.jpg", "img/tenis-everlast-2.jpg", "img/tenis-everlast-3.jpg"], tam: ["39"] },
  { id: 28, nome: "Chuteira Futsal Umbro Preta", cat: "Calçados", preco: 120, emoji: "👟", cor: "#eceef0", imgs: ["img/futsal-umbro-1.jpg", "img/futsal-umbro-2.jpg", "img/futsal-umbro-3.jpg", "img/futsal-umbro-4.jpg"], tam: ["40"] },
  { id: 29, nome: "Camiseta Oakley Branca", cat: "Camisetas", preco: null, emoji: "👕", cor: "#e8edf0", imgs: ["img/camiseta-oakley-1.jpg"], tam: [] },
  { id: 30, nome: "Camiseta Beagle Branca Gola V", cat: "Camisetas", preco: 60, emoji: "👕", cor: "#e8edf0", imgs: ["img/camiseta-branca-v-1.jpg", "img/camiseta-branca-v-2.jpg", "img/camiseta-branca-v-3.jpg"], tam: ["GG"] },
  { id: 34, nome: "Moletom Oakley Cinza", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#dcdcdf", imgs: ["img/moletom-oakley-1.jpg", "img/moletom-oakley-2.jpg"], tam: ["G"] },
  { id: 35, nome: "Jaqueta Puma Corta-vento Preta", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#dcdcdf", imgs: ["img/jaqueta-puma-1.jpg", "img/jaqueta-puma-2.jpg", "img/jaqueta-puma-3.jpg", "img/jaqueta-puma-4.jpg"], tam: ["GG"] },
  { id: 36, nome: "Moletom Under Armour Cinza", cat: "Casacos", preco: 220, emoji: "🧥", cor: "#dcdcdf", imgs: ["img/moletom-ua-1.jpg", "img/moletom-ua-2.jpg", "img/moletom-ua-3.jpg"], tam: ["G"] },
  { id: 37, nome: "Agasalho Mizuno Preto", cat: "Conjuntos", preco: 320, emoji: "🥋", cor: "#dcdcdf", imgs: ["img/agasalho-mizuno-1.jpg", "img/agasalho-mizuno-2.jpg", "img/agasalho-mizuno-3.jpg", "img/agasalho-mizuno-4.jpg", "img/agasalho-mizuno-5.jpg", "img/agasalho-mizuno-6.jpg", "img/agasalho-mizuno-7.jpg"], tam: ["G"] },
  { id: 38, nome: "Agasalho Nike Academy Preto", cat: "Conjuntos", preco: 420, emoji: "🥋", cor: "#dcdcdf", imgs: ["img/agasalho-nike-1.jpg", "img/agasalho-nike-2.jpg", "img/agasalho-nike-3.jpg", "img/agasalho-nike-4.jpg", "img/agasalho-nike-5.jpg"], tam: ["G"] },
  { id: 39, nome: "Chuteira Topper Strike", cat: "Calçados", preco: 150, emoji: "👟", cor: "#eceef0", imgs: ["img/chuteira-topper-1.jpg", "img/chuteira-topper-2.jpg", "img/chuteira-topper-3.jpg", "img/chuteira-topper-4.jpg", "img/chuteira-topper-5.jpg", "img/chuteira-topper-6.jpg", "img/chuteira-topper-7.jpg", "img/chuteira-topper-8.jpg"], tam: ["44"] },
  { id: 40, nome: "Suéter Tommy Hilfiger Gola V", cat: "Casacos", preco: 350, emoji: "🧥", cor: "#dcdcdf", imgs: ["img/sueter-tommy-1.jpg", "img/sueter-tommy-2.jpg", "img/sueter-tommy-3.jpg", "img/sueter-tommy-4.jpg"], tam: ["G"] },
  { id: 27, nome: "Churrasqueira a Bafo Portátil", cat: "Casa e Lazer", preco: 100, emoji: "🔥", cor: "#e6dccf", imgs: ["img/churrasqueira-barril-1.jpg", "img/churrasqueira-barril-2.jpg", "img/churrasqueira-barril-3.jpg", "img/churrasqueira-barril-4.jpg"], tam: ["Único"] },
  { id: 31, nome: "Churrasqueira Portátil com Grelha", cat: "Casa e Lazer", preco: 80, emoji: "🔥", cor: "#e6dccf", imgs: ["img/churrasqueira-galv-1.jpg", "img/churrasqueira-galv-2.jpg", "img/churrasqueira-galv-3.jpg", "img/churrasqueira-galv-4.jpg", "img/churrasqueira-galv-5.jpg"], tam: ["Único"] },
  { id: 32, nome: "Marmiteira e Lancheira Electrolux Térmica", cat: "Casa e Lazer", preco: 45, emoji: "🍱", cor: "#d6eef0", imgs: ["img/marmita-1.jpg", "img/marmita-2.jpg", "img/marmita-3.jpg"], tam: ["Único"] },
  { id: 33, nome: "Colchão Inflável Aveludado Casal com Inflador", cat: "Casa e Lazer", preco: 150, emoji: "🛏️", cor: "#dbe7f3", imgs: ["img/colchao-1.jpg", "img/colchao-2.jpg", "img/colchao-3.jpg", "img/colchao-4.jpg"], tam: ["Único"] },
];

// ===== Estado =====
const brl = n => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
let categoria = "Todos";
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; } catch {}
const tamEscolhido = {}; // id -> tamanho
const fotoAtual = {}; // id -> índice da foto exibida

const $ = id => document.getElementById(id);
const salvar = () => { try { localStorage.setItem("carrinho", JSON.stringify(carrinho)); } catch {} };

// ===== Catálogo =====
function renderCategorias() {
  const cats = ["Todos", ...new Set(PRODUTOS.map(p => p.cat))];
  $("categorias").innerHTML = cats
    .map(c => `<button class="chip ${c === categoria ? "ativo" : ""}" data-cat="${c}">${c}</button>`).join("");
}

function renderGrade(animar = true) {
  $("grade").classList.toggle("sem-anim", !animar);
  const q = $("busca").value.trim().toLowerCase();
  let lista = PRODUTOS.filter(p =>
    (categoria === "Todos" || p.cat === categoria) && p.nome.toLowerCase().includes(q));
  const o = $("ordem").value;
  if (o === "menor") lista.sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity));
  if (o === "maior") lista.sort((a, b) => (b.preco ?? -1) - (a.preco ?? -1));
  if (o === "nome") lista.sort((a, b) => a.nome.localeCompare(b.nome));

  $("vazio").hidden = lista.length > 0;
  $("grade").innerHTML = lista.map((p, i) => {
    const sel = tamEscolhido[p.id] || p.tam[0];
    return `<article class="card" style="--i:${Math.min(i, 8)}">
      <div class="foto" style="background:${p.cor}"${p.imgs ? ` data-zoom="${p.id}" tabindex="0" role="button" aria-label="Ampliar foto: ${p.nome}"` : ""}>${p.imgs ? `<img src="${p.imgs[fotoAtual[p.id] || 0]}" alt="${p.nome}" loading="lazy"${p.pos ? ` style="object-position:${p.pos}"` : ""}>` : p.emoji}</div>
      ${p.imgs && p.imgs.length > 1 ? `<div class="thumbs">${p.imgs.map((src, i) =>
        `<button class="thumb ${i === (fotoAtual[p.id] || 0) ? "sel" : ""}" data-foto="${p.id}" data-i="${i}" aria-label="Foto ${i + 1}"><img src="${src}" alt=""></button>`).join("")}</div>` : ""}
      <div class="info">
        <span class="cat">${p.cat}</span>
        <h3>${p.nome}</h3>
        <div class="preco">${p.preco == null ? "Valor em breve" : brl(p.preco)}</div>
        <div class="tamanhos">${p.tam.map(t =>
          `<button class="tam ${t === sel ? "sel" : ""}" data-id="${p.id}" data-tam="${t}">${t}</button>`).join("")}</div>
        <button class="btn" data-add="${p.id}"${p.preco == null ? " disabled" : ""}>${p.preco == null ? "Em breve" : "Adicionar ao carrinho"}</button>
      </div>
    </article>`;
  }).join("");
}

// ===== Carrinho =====
function adicionar(id) {
  const p = PRODUTOS.find(x => x.id === id);
  const tam = tamEscolhido[id] || p.tam[0];
  const ex = carrinho.find(i => i.id === id && i.tam === tam);
  if (ex) ex.qtd++; else carrinho.push({ id, tam, qtd: 1 });
  salvar(); renderCarrinho(); abrir(true);
}

function alterar(idx, d) {
  carrinho[idx].qtd += d;
  if (carrinho[idx].qtd <= 0) carrinho.splice(idx, 1);
  salvar(); renderCarrinho();
}

function renderCarrinho() {
  let total = 0, qtd = 0;
  $("itens").innerHTML = carrinho.length ? carrinho.map((i, idx) => {
    const p = PRODUTOS.find(x => x.id === i.id);
    total += p.preco * i.qtd; qtd += i.qtd;
    return `<div class="item">
      <div class="mini" style="background:${p.cor}">${p.imgs ? `<img src="${p.imgs[0]}" alt="">` : p.emoji}</div>
      <div class="dados">${p.nome}<br><small>Tam. ${i.tam} · ${brl(p.preco)}</small></div>
      <div class="qtd"><button data-mais="-1" data-idx="${idx}">−</button>${i.qtd}<button data-mais="1" data-idx="${idx}">+</button></div>
    </div>`;
  }).join("") : '<p class="vazio">Seu carrinho está vazio.</p>';
  $("total").textContent = brl(total);
  const badge = $("qtd-carrinho");
  if (qtd > +badge.textContent) {
    badge.classList.remove("pula");
    void badge.offsetWidth; // reinicia a animação
    badge.classList.add("pula");
  }
  badge.textContent = qtd;
  $("finalizar").disabled = !carrinho.length;
}

function abrir(v) {
  $("carrinho").classList.toggle("aberto", v);
  $("fundo").hidden = !v;
  $("carrinho").setAttribute("aria-hidden", String(!v));
}

function finalizar() {
  if (!carrinho.length) return;
  let total = 0;
  const linhas = carrinho.map(i => {
    const p = PRODUTOS.find(x => x.id === i.id);
    total += p.preco * i.qtd;
    return `• ${i.qtd}x ${p.nome} (Tam. ${i.tam}) – ${brl(p.preco * i.qtd)}`;
  });
  const msg = `Olá! Gostaria de fazer um pedido:\n\n${linhas.join("\n")}\n\nTotal: ${brl(total)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

// ===== Eventos =====
document.addEventListener("click", e => {
  const t = e.target;
  if (t.dataset.cat) { categoria = t.dataset.cat; renderCategorias(); renderGrade(); }
  if (t.dataset.tam) { tamEscolhido[t.dataset.id] = t.dataset.tam; renderGrade(false); }
  const th = t.closest("[data-foto]");
  if (th) { fotoAtual[th.dataset.foto] = +th.dataset.i; renderGrade(false); }
  if (t.dataset.add) adicionar(+t.dataset.add);
  if (t.dataset.mais) alterar(+t.dataset.idx, +t.dataset.mais);
  const zf = t.closest(".foto[data-zoom]");
  if (zf) abrirZoom(zf);
});
$("busca").addEventListener("input", () => renderGrade());
$("ordem").addEventListener("change", () => renderGrade());
$("btn-carrinho").addEventListener("click", () => abrir(true));
$("fechar").addEventListener("click", () => abrir(false));
$("fundo").addEventListener("click", () => abrir(false));
$("finalizar").addEventListener("click", finalizar);
$("limpar").addEventListener("click", () => { carrinho = []; salvar(); renderCarrinho(); });

// Efeito de profundidade: os ícones do banner acompanham o mouse
const hero = document.querySelector(".hero");
const fundoHero = document.querySelector(".hero-fundo");
if (hero && fundoHero && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("mousemove", e => {
    const r = hero.getBoundingClientRect();
    fundoHero.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5) * 40);
    fundoHero.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5) * 40);
  });
  hero.addEventListener("mouseleave", () => {
    fundoHero.style.setProperty("--px", 0);
    fundoHero.style.setProperty("--py", 0);
  });
}

// ===== Zoom das fotos: toque na foto e ela cresce até ocupar a tela =====
// (a tela do zoom está no index.html; se faltar lá, é criada aqui)
if (!$("zoom")) document.body.insertAdjacentHTML("beforeend", `
  <div id="zoom" class="zoom" role="dialog" aria-modal="true" aria-label="Foto ampliada" hidden>
    <div class="zoom-fundo"></div>
    <div class="zoom-caixa"><img id="zoom-img" alt="" draggable="false"></div>
    <button id="zoom-fechar" class="zoom-btn zoom-fechar" aria-label="Fechar foto">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
    <button id="zoom-ant" class="zoom-btn zoom-seta zoom-ant" aria-label="Foto anterior">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>
    </button>
    <button id="zoom-prox" class="zoom-btn zoom-seta zoom-prox" aria-label="Próxima foto">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
    </button>
    <div class="zoom-rodape">
      <p id="zoom-nome" class="zoom-nome"></p>
      <div id="zoom-pontos" class="zoom-pontos" aria-hidden="true"></div>
    </div>
  </div>`);
const zoom = $("zoom");
const zCaixa = zoom.querySelector(".zoom-caixa");
const zFundo = zoom.querySelector(".zoom-fundo");
const zImg = $("zoom-img");
const reduzMovimento = matchMedia("(prefers-reduced-motion: reduce)");
const SUAVE = "cubic-bezier(.2,.8,.2,1)";
const SOMBRA = "0 24px 60px rgba(0,0,0,.5)", SEM_SOMBRA = "0 0 0 rgba(0,0,0,0)";
let zProd = null, zIdx = 0;
let zAberto = false, zOcupado = false, zFechando = false, zVoltando = false;
let gesto = null, arrastou = false;

// Navegadores antigos sem animação: o zoom abre e fecha na hora, sem travar
const podeAnimar = typeof zCaixa.animate === "function" && typeof zCaixa.getAnimations === "function";
const dur = ms => (reduzMovimento.matches || !podeAnimar ? 0 : ms);
const animar = (el, quadros, opcoes) => (opcoes.duration ? el.animate(quadros, opcoes) : null);
// espera a animação acabar, com limite de tempo (aba em segundo plano não desenha quadros)
const terminou = (anim, ms) => anim
  ? Promise.race([anim.finished.catch(() => {}), new Promise(r => setTimeout(r, ms + 300))])
  : Promise.resolve();
const pararAnimacoes = (...els) => podeAnimar && els.forEach(el => el.getAnimations().forEach(a => a.cancel()));
const decodificar = im => (im.decode ? im.decode().catch(() => {}) : Promise.resolve());
const espera = ms => new Promise(r => setTimeout(r, ms));
// internet lenta: não espera a foto para sempre; ajusta o tamanho quando ela chegar
function ajustarAoCarregar() {
  if (zImg.complete && zImg.naturalWidth) return;
  zImg.addEventListener("load", () => {
    if (zAberto && !zFechando) Object.assign(zCaixa.style, areaZoom(zImg));
  }, { once: true });
}
const retangulo = el => {
  const r = el.getBoundingClientRect();
  return { left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px" };
};

// Tamanho e posição da foto ampliada (inteira na tela, sem cortar)
function areaZoom(img) {
  const vw = document.documentElement.clientWidth, vh = innerHeight;
  const nw = img.naturalWidth || 3, nh = img.naturalHeight || 4;
  const mx = vw < 640 ? 12 : 72, topo = 64;
  const base = zoom.querySelector(".zoom-rodape").offsetHeight + 12;
  const s = Math.max(Math.min((vw - 2 * mx) / nw, (vh - topo - base) / nh, 1), 0.05);
  const w = nw * s, h = nh * s;
  return { left: (vw - w) / 2 + "px", top: topo + (vh - topo - base - h) / 2 + "px", width: w + "px", height: h + "px" };
}

let larguraBarra = null; // barra de rolagem do computador (no celular é 0)
function medirBarra() {
  const d = document.createElement("div");
  d.style.cssText = "position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll";
  document.body.appendChild(d);
  const w = d.offsetWidth - d.clientWidth;
  d.remove();
  return w;
}

function travarPagina(v) {
  const html = document.documentElement;
  if (v) {
    if (larguraBarra === null) larguraBarra = medirBarra();
    // evita o "pulo" da página quando a barra de rolagem some
    if (larguraBarra > 0 && html.scrollHeight > html.clientHeight) document.body.style.paddingRight = larguraBarra + "px";
    html.style.overflow = "hidden";
  } else {
    html.style.overflow = "";
    document.body.style.paddingRight = "";
  }
  document.querySelectorAll("body > :not(#zoom):not(script)").forEach(el => (el.inert = v));
}

function montarZoomUI() {
  const n = zProd.imgs.length;
  $("zoom-nome").innerHTML = `${zProd.nome}${zProd.preco == null ? "" : `<small>${brl(zProd.preco)}</small>`}`;
  $("zoom-pontos").innerHTML = n > 1 ? zProd.imgs.map(() => "<span></span>").join("") : "";
  $("zoom-ant").hidden = $("zoom-prox").hidden = n < 2;
  marcarFotoZoom();
}

function marcarFotoZoom() {
  const n = zProd.imgs.length;
  [...$("zoom-pontos").children].forEach((s, i) => s.classList.toggle("sel", i === zIdx));
  zImg.alt = n > 1 ? `${zProd.nome} – foto ${zIdx + 1} de ${n}` : zProd.nome;
}

// Deixa o card mostrando a mesma foto que estava aberta no zoom
function sincronizarCard(id, i) {
  if ((fotoAtual[id] || 0) === i) return;
  fotoAtual[id] = i;
  const foto = document.querySelector(`.foto[data-zoom="${id}"]`);
  if (!foto) return;
  foto.querySelector("img").src = PRODUTOS.find(p => p.id === id).imgs[i];
  foto.parentElement.querySelectorAll(".thumb").forEach(b => b.classList.toggle("sel", +b.dataset.i === i));
}

async function abrirZoom(foto) {
  if (zAberto) return;
  const p = PRODUTOS.find(x => x.id === +foto.dataset.zoom);
  const img = foto.querySelector("img");
  if (!p || !p.imgs || !img) return;
  zAberto = zOcupado = true;
  zProd = p;
  zIdx = fotoAtual[p.id] || 0;
  zImg.src = img.currentSrc || img.src;
  await Promise.race([Promise.all([decodificar(img), decodificar(zImg)]), espera(1200)]);

  const estilo = getComputedStyle(img);
  const inicio = retangulo(foto);
  zImg.style.objectPosition = estilo.objectPosition;
  montarZoomUI();
  travarPagina(true);
  zoom.hidden = false;
  const fim = areaZoom(zImg);
  foto.classList.add("zoom-origem");
  Object.assign(zCaixa.style, fim, { transform: "", borderRadius: "" });
  ajustarAoCarregar();

  const t = dur(420);
  const anim = animar(zCaixa,
    [{ ...inicio, borderRadius: "13px 13px 0 0", boxShadow: SEM_SOMBRA }, { ...fim, borderRadius: "10px", boxShadow: SOMBRA }],
    { duration: t, easing: SUAVE });
  animar(zImg, [{ transform: estilo.transform }, { transform: "none" }], { duration: t, easing: SUAVE });
  animar(zFundo, [{ opacity: 0 }, { opacity: 1 }], { duration: t, easing: "ease-out" });
  void zoom.offsetWidth; // garante que os botões apareçam com transição
  zoom.classList.add("ui");
  history.pushState({ zoom: 1 }, ""); // botão "voltar" do celular fecha a foto
  $("zoom-fechar").focus({ preventScroll: true });
  await terminou(anim, t);
  if (!zFechando) zOcupado = false;
}

async function fecharZoom() {
  if (!zAberto || zFechando) return;
  zFechando = true;
  zVoltando = false;
  sincronizarCard(zProd.id, zIdx);
  const foto = document.querySelector(`.foto[data-zoom="${zProd.id}"]`);
  const inicio = retangulo(zCaixa); // de onde a foto está agora (mesmo se estiver sendo arrastada)
  const opacFundo = getComputedStyle(zFundo).opacity;
  pararAnimacoes(zCaixa, zImg, zFundo);
  zCaixa.style.transform = "";
  zFundo.style.opacity = "";
  zoom.classList.remove("ui");

  const r = foto && foto.getBoundingClientRect();
  const t = dur(360);
  let anim;
  if (r && r.width && r.bottom > 0 && r.top < innerHeight) {
    // volta encolhendo para dentro do card
    foto.classList.add("zoom-origem");
    zImg.style.objectPosition = getComputedStyle(foto.querySelector("img")).objectPosition;
    const fim = retangulo(foto);
    Object.assign(zCaixa.style, fim, { borderRadius: "13px 13px 0 0" });
    anim = animar(zCaixa,
      [{ ...inicio, borderRadius: "10px", boxShadow: SOMBRA }, { ...fim, borderRadius: "13px 13px 0 0", boxShadow: SEM_SOMBRA }],
      { duration: t, easing: SUAVE });
  } else {
    // card fora da tela: só some suavemente
    Object.assign(zCaixa.style, inicio);
    anim = animar(zCaixa, [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(.92)" }],
      { duration: dur(220), easing: "ease-in", fill: "forwards" });
  }
  animar(zFundo, [{ opacity: opacFundo }, { opacity: 0 }], { duration: t, easing: "ease-in", fill: "forwards" });
  await terminou(anim, t);

  zoom.hidden = true;
  pararAnimacoes(zCaixa, zFundo);
  zCaixa.style.borderRadius = "";
  document.querySelectorAll(".zoom-origem").forEach(el => el.classList.remove("zoom-origem"));
  travarPagina(false);
  zAberto = zOcupado = zFechando = false;
  gesto = null;
  if (foto) foto.focus({ preventScroll: true });
}

function pedirFecharZoom() {
  if (!zAberto || zFechando || zVoltando) return;
  if (history.state && history.state.zoom) {
    zVoltando = true;
    history.back(); // o "popstate" abaixo faz a animação de fechar
    setTimeout(() => { if (zVoltando) fecharZoom(); }, 500);
  } else fecharZoom();
}

async function mudarFotoZoom(dir) {
  if (!zAberto || zFechando || zOcupado) return;
  const n = zProd.imgs.length;
  if (n < 2) { voltarAoCentro(); return; }
  zOcupado = true;
  zIdx = (zIdx + dir + n) % n;
  marcarFotoZoom();
  const nova = new Image();
  nova.src = zProd.imgs[zIdx];
  const pronta = decodificar(nova);
  const de = zCaixa.style.transform || "none";
  zCaixa.style.transform = "";
  const sai = animar(zCaixa,
    [{ transform: de, opacity: 1 }, { transform: `translateX(${-dir * 45}vw)`, opacity: 0 }],
    { duration: dur(200), easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" });
  await Promise.all([terminou(sai, 200), Promise.race([pronta, espera(1500)])]);
  if (zFechando || !zAberto) return;
  zImg.src = zProd.imgs[zIdx];
  zImg.style.objectPosition = "";
  await Promise.race([decodificar(zImg), espera(300)]);
  if (zFechando || !zAberto) return;
  Object.assign(zCaixa.style, areaZoom(zImg));
  ajustarAoCarregar();
  if (sai) sai.cancel();
  const entra = animar(zCaixa,
    [{ transform: `translateX(${dir * 60}px)`, opacity: 0 }, { transform: "none", opacity: 1 }],
    { duration: dur(260), easing: SUAVE });
  await terminou(entra, 260);
  if (!zFechando) zOcupado = false;
}

function voltarAoCentro() {
  const de = zCaixa.style.transform, opac = zFundo.style.opacity;
  zCaixa.style.transform = "";
  zFundo.style.opacity = "";
  if (de) animar(zCaixa, [{ transform: de }, { transform: "none" }], { duration: dur(240), easing: SUAVE });
  if (opac) animar(zFundo, [{ opacity: opac }, { opacity: 1 }], { duration: dur(240) });
  zoom.classList.add("ui");
}

// Arrastar: para os lados troca a foto, para cima/baixo fecha
zoom.addEventListener("pointerdown", e => {
  arrastou = false;
  if (!zAberto || zOcupado || zFechando || zVoltando || e.button > 0 || e.target.closest(".zoom-btn")) return;
  gesto = { id: e.pointerId, x0: e.clientX, y0: e.clientY, t0: e.timeStamp, eixo: "", d: 0 };
  try { zoom.setPointerCapture(e.pointerId); } catch {}
});
zoom.addEventListener("pointermove", e => {
  const g = gesto;
  if (!g || e.pointerId !== g.id) return;
  const dx = e.clientX - g.x0, dy = e.clientY - g.y0;
  if (!g.eixo) {
    if (Math.hypot(dx, dy) < 10) return;
    g.eixo = Math.abs(dx) > Math.abs(dy) && zProd.imgs.length > 1 ? "x" : "y";
    arrastou = true;
  }
  if (g.eixo === "x") {
    g.d = dx;
    zCaixa.style.transform = `translateX(${dx}px)`;
  } else {
    g.d = dy;
    const k = Math.min(Math.abs(dy) / (innerHeight * 0.5), 1);
    zCaixa.style.transform = `translateY(${dy}px) scale(${1 - k * 0.2})`;
    zFundo.style.opacity = 1 - k * 0.7;
    zoom.classList.remove("ui");
  }
});
zoom.addEventListener("pointerup", e => {
  const g = gesto;
  if (!g || e.pointerId !== g.id) return;
  gesto = null;
  if (!g.eixo) return; // foi só um toque: o "click" cuida
  const v = g.d / Math.max(e.timeStamp - g.t0, 1);
  if (g.eixo === "x") {
    if (Math.abs(g.d) > 60 || Math.abs(v) > 0.45) mudarFotoZoom(g.d < 0 ? 1 : -1);
    else voltarAoCentro();
  } else if (Math.abs(g.d) > 100 || Math.abs(v) > 0.5) pedirFecharZoom();
  else voltarAoCentro();
});
zoom.addEventListener("pointercancel", e => {
  if (gesto && e.pointerId === gesto.id) { gesto = null; voltarAoCentro(); }
});
zoom.addEventListener("click", e => {
  if (arrastou) { arrastou = false; return; }
  const b = e.target.closest(".zoom-btn");
  if (b && b.id === "zoom-ant") mudarFotoZoom(-1);
  else if (b && b.id === "zoom-prox") mudarFotoZoom(1);
  else pedirFecharZoom(); // ✕, fundo ou a própria foto
});
document.addEventListener("keydown", e => {
  if (zAberto) {
    if (e.key === "Escape") { e.preventDefault(); pedirFecharZoom(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); mudarFotoZoom(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); mudarFotoZoom(-1); }
    return;
  }
  const f = e.target.closest && e.target.closest(".foto[data-zoom]");
  if (f && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrirZoom(f); }
});
addEventListener("popstate", () => { if (zAberto) fecharZoom(); });
addEventListener("resize", () => {
  if (zAberto && !zFechando && !zOcupado) Object.assign(zCaixa.style, areaZoom(zImg));
});
if (history.state && history.state.zoom) history.replaceState(null, "");

renderCategorias(); renderGrade(); renderCarrinho();

// Título do topo: letras animadas uma a uma
(() => {
  const h1 = document.querySelector(".hero h1");
  if (!h1) return;
  const txt = h1.textContent;
  h1.setAttribute("aria-label", txt);
  let i = 0;
  h1.innerHTML = txt.split(" ").map(w =>
    `<span class="w">${[...w].map(ch => `<span class="l" aria-hidden="true" style="--i:${i++}">${ch}</span>`).join("")}</span>`).join(" ");
})();
