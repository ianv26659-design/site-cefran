function abrirMenu() {
    const menu = document.getElementById("menuLateral");
    menu.classList.toggle("ativo");
}

// FECHAR AO CLICAR FORA
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menuLateral");
    const btn = document.querySelector(".menu-btn");

    if (!menu || !btn) return;

    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove("ativo");
    }
});

function carregarEventos() {
    const container = document.getElementById("listaEventos");

    const eventos = [
        {
            titulo: "Oficina Infantil",
            data: "05 de Maio",
            descricao: "Atividades educativas para crianças."
        },
        {
            titulo: "Feira de Cursos",
            data: "10 de Maio",
            descricao: "Apresentação dos cursos disponíveis."
        },
        {
            titulo: "Palestra SENAC",
            data: "15 de Maio",
            descricao: "Profissionais falando sobre mercado."
        }
    ];

    eventos.forEach(evento => {
        const card = document.createElement("div");
        card.className = "evento-card";

        card.innerHTML = `
            <h3>${evento.titulo}</h3>
            <p class="data">${evento.data}</p>
            <p>${evento.descricao}</p>
        `;

        container.appendChild(card);
    });
}

window.onload = carregarEventos;

// TRANSIÇÃO ENTRE PÁGINAS
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href && this.href.includes(".html")) {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);