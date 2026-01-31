// Animação navbar

$(document).ready(function () {
  const sections = $("main, section"); // inclui main (#inicio)
  const navItems = $(".nav-item");
  const header = $(".navegacao");

  $(window).on("scroll", function () {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();
    const documentHeight = $(document).height();

    let activeSectionIndex = 0;

    // Sombra da navbar
    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 1px 5px rgba(0,0,0,0.1)");
    }

    // Checa qual seção está ativa
    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - header.outerHeight() - 20;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false; // para o each
      }
    });

    // Se estiver no fim da página, marca última seção
    if (scrollPosition + windowHeight >= documentHeight - 10) {
      activeSectionIndex = sections.length - 1;
    }

    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  // Função para mostrar/animar redes sociais
  const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard);
    const social = document.getElementById(socialCard);

    toggle.addEventListener("click", () => {
      if (social.classList.contains("animation")) {
        social.classList.add("down-animation");
        setTimeout(() => {
          social.classList.remove("down-animation");
        }, 1000);
      }
      social.classList.toggle("animation");
    });
  };

  showSocial("card-toggle", "card-social");

});