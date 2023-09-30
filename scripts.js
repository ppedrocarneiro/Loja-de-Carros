document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetBrand = link.textContent.toLowerCase();

      // Se o link clicado for "Home"
      if (targetBrand === "home") {
        // Exiba todas as seções de carros
        const carSections = document.querySelectorAll(".car-section");
        carSections.forEach((section) => {
          section.style.display = "block";
        });
        // Role a página para o topo
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Oculte todas as seções de carros, exceto a seção da marca correspondente
        const carSections = document.querySelectorAll(".car-section");
        carSections.forEach((section) => {
          section.style.display = "none";
        });
        document.getElementById(targetBrand).style.display = "block";
      }

      // Verifique se o link clicado é "Contatos"
      if (targetBrand === "contatos") {
        // Role a página para a seção de contatos (rodapé)
        const contatosSection = document.getElementById("contatos");
        contatosSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
