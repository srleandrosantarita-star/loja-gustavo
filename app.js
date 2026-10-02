// ===== Configuração =====
const WHATSAPP = "5551992084071"; // número da loja (DDI+DDD+número)

const PRODUTOS = [
  { id: 1, nome: "Camiseta Calvin Klein Verde", cat: "Camisetas", preco: 100, emoji: "👕", cor: "#d5e8dc", imgs: ["img/camiseta-verde-frente.jpg", "img/camiseta-verde-costas.jpg"], tam: ["G", "GG"] },
  { id: 2, nome: "Camiseta Calvin Klein Marrom", cat: "Camisetas", preco: 100, emoji: "👕", cor: "#eadfd2", imgs: ["img/camiseta-marrom-frente.jpg", "img/camiseta-marrom-costas.jpg"], tam: ["G", "GG"] },
  { id: 3, nome: "Calça Jeans Azul Escuro", cat: "Calças", preco: 159.9, emoji: "👖", cor: "#cfd8e6", imgs: ["img/calca-jeans-look.jpg", "img/calca-jeans-detalhe.jpg", "img/calca-jeans-etiqueta.jpg"], pos: "50% 72%", tam: ["38", "40", "42", "44"] },
  { id: 4, nome: "Calça Sarja Chino", cat: "Calças", preco: 139.9, emoji: "👖", cor: "#eadfc8", tam: ["38", "40", "42", "44"] },
  { id: 7, nome: "Jaqueta Under Armour Preta", cat: "Casacos", preco: 250, emoji: "🧥", cor: "#d5e6dc", imgs: ["img/jaqueta-preta.jpg", "img/jaqueta-preta-costas.jpg"], tam: ["GG"] },
  { id: 8, nome: "Moletom Canguru", cat: "Casacos", preco: 179.9, emoji: "🧥", cor: "#e6dccf", imgs: ["img/moletom-canguru-frente.jpg", "img/moletom-canguru.jpg"], tam: ["P", "M", "G", "GG"] },
  { id: 13, nome: "Jaqueta Champion Corta-vento Camuflada Cinza", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#d9d9de", imgs: ["img/jaqueta-camuflada-frente.jpg", "img/jaqueta-camuflada.jpg","img/jaqueta-camuflada-detalhe.jpg", "img/jaqueta-camuflada-costas.jpg", "img/jaqueta-camuflada-barra.jpg"], tam: ["G"] },
  { id: 14, nome: "Jaqueta Champion Corta-vento Camuflada Verde", cat: "Casacos", preco: 200, emoji: "🧥", cor: "#d5e0cf", imgs: ["img/jaqueta-camuflada-verde.jpg", "img/jaqueta-camuflada-verde-look.jpg", "img/jaqueta-camuflada-verde-costas.jpg","img/jaqueta-camuflada-verde-detalhe.jpg"], tam: ["G"] },
  { id: 15, nome: "Tênis Oakley Flint Azul", cat: "Calçados", preco: 120, emoji: "👟", cor: "#dbe7f3", imgs: ["img/tenis-azul-3-4.jpg", "img/tenis-azul-frente.jpg","img/tenis-azul-lado.jpg", "img/tenis-azul.jpg", "img/tenis-azul-sola.jpg"], tam: ["43"] },
  { id: 16, nome: "Agasalho Umbro Azul-marinho", cat: "Conjuntos", preco: 200, emoji: "🥋", cor: "#cfd8e6", imgs: ["img/conjunto-azul.jpg"], tam: ["GG"] },
  { id: 17, nome: "Moletom Careca Lilás", cat: "Casacos", preco: 169.9, emoji: "🧥", cor: "#e6e0ee", imgs: ["img/moletom-lilas-frente.jpg", "img/moletom-lilas-modelo.jpg", "img/moletom-lilas.jpg", "img/moletom-lilas-costas.jpg"], tam: ["P", "M", "G", "GG"] },
  { id: 18, nome: "Tênis Adidas Branco", cat: "Calçados", preco: 200, emoji: "👟", cor: "#e8edf0", imgs: ["img/tenis-branco-lado.jpg", "img/tenis-branco.jpg", "img/tenis-branco-uso.jpg", "img/tenis-branco-cima.jpg"], tam: ["39"] },
  { id: 19, nome: "Camiseta Calvin Klein Preta", cat: "Camisetas", preco: 100, emoji: "👕", cor: "#dcdcdf", imgs: ["img/camiseta-preta-frente.jpg", "img/camiseta-preta-costas.jpg", "img/camiseta-preta.jpg"], tam: ["G", "GG"] },
  { id: 9, nome: "Bermuda Praia", cat: "Bermudas", preco: 79.9, emoji: "🩳", cor: "#d6eef0", tam: ["P", "M", "G"] },
  { id: 10, nome: "Bermuda Jeans", cat: "Bermudas", preco: 99.9, emoji: "🩳", cor: "#cfd8e6", tam: ["38", "40", "42"] },
  { id: 11, nome: "Boné Aba Curva", cat: "Acessórios", preco: 39.9, emoji: "🧢", cor: "#f1e3c7", tam: ["Único"] },
  { id: 12, nome: "Cachecol de Lã", cat: "Acessórios", preco: 59.9, emoji: "🧣", cor: "#f0d5d0", tam: ["Único"] },
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
  if (o === "menor") lista.sort((a, b) => a.preco - b.preco);
  if (o === "maior") lista.sort((a, b) => b.preco - a.preco);
  if (o === "nome") lista.sort((a, b) => a.nome.localeCompare(b.nome));

  $("vazio").hidden = lista.length > 0;
  $("grade").innerHTML = lista.map((p, i) => {
    const sel = tamEscolhido[p.id] || p.tam[0];
    return `<article class="card" style="--i:${Math.min(i, 8)}">
      <div class="foto" style="background:${p.cor}">${p.imgs ? `<img src="${p.imgs[fotoAtual[p.id] || 0]}" alt="${p.nome}" loading="lazy"${p.pos ? ` style="object-position:${p.pos}"` : ""}>` : p.emoji}</div>
      ${p.imgs && p.imgs.length > 1 ? `<div class="thumbs">${p.imgs.map((src, i) =>
        `<button class="thumb ${i === (fotoAtual[p.id] || 0) ? "sel" : ""}" data-foto="${p.id}" data-i="${i}" aria-label="Foto ${i + 1}"><img src="${src}" alt=""></button>`).join("")}</div>` : ""}
      <div class="info">
        <span class="cat">${p.cat}</span>
        <h3>${p.nome}</h3>
        <div class="preco">${brl(p.preco)} <small>ou 3x de ${brl(p.preco / 3)}</small></div>
        <div class="tamanhos">${p.tam.map(t =>
          `<button class="tam ${t === sel ? "sel" : ""}" data-id="${p.id}" data-tam="${t}">${t}</button>`).join("")}</div>
        <button class="btn" data-add="${p.id}">Adicionar ao carrinho</button>
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

renderCategorias(); renderGrade(); renderCarrinho();
