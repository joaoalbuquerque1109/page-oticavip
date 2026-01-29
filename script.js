// ===== CONFIG: seu WhatsApp (só números, com DDI) =====
const WHATSAPP_NUMBER = "5581999999999"; // TROQUE AQUI (ex: 55819994891208)

// ===== Menu mobile =====
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== WhatsApp =====
function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function formatBR(num) {
  if (!num || num.length < 12) return num;
  const ddi = num.slice(0, 2);
  const ddd = num.slice(2, 4);
  const rest = num.slice(4);
  const a = rest.slice(0, 5);
  const b = rest.slice(5, 9);
  return `+${ddi} (${ddd}) ${a}-${b}`;
}

const waShow = document.getElementById("waShow");
const waBtn = document.getElementById("waBtn");

if (waShow) waShow.textContent = formatBR(WHATSAPP_NUMBER);
if (waBtn) waBtn.href = waLink("Olá! Vim pelo site da Ótica VIP. Quero ver modelos e preços 😊");

// ===== Form -> WhatsApp =====
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome")?.value?.trim() || "Cliente";
    const msg = document.getElementById("mensagem")?.value?.trim() || "Quero ver modelos disponíveis.";
    window.open(waLink(`Olá! Aqui é ${nome}. ${msg}`), "_blank");
  });
}

// ===== Slider depoimentos =====
const track = document.getElementById("tTrack");
const prev = document.getElementById("tPrev");
const next = document.getElementById("tNext");

function scrollByCard(dir) {
  if (!track) return;
  const card = track.querySelector(".tcard");
  const gap = 14;
  const w = card ? card.getBoundingClientRect().width : 320;
  track.scrollBy({ left: dir * (w + gap), behavior: "smooth" });
}

prev?.addEventListener("click", () => scrollByCard(-1));
next?.addEventListener("click", () => scrollByCard(1));
