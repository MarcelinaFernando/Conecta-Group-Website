document.addEventListener("DOMContentLoaded", () => {


//Value Proposition Section
const valueItems = [
  {
    icon: "assets/icons/education.svg",
    alt: "Ícone de educação",
    title: "Educação",
    text: "Programas educacionais inovadores que desenvolvem habilidades técnicas e socioemocionais.",
    bg: "#ffffff"
  },
  {
    icon: "assets/icons/consulting.svg",
    alt: "Ícone de consultoria",
    title: "Consultoria",
    text: "Orientação personalizada para desenvolvimento de carreira com mentoria especializada.",
    bg: "#E6ECF0"
  },
  {
    icon: "assets/icons/impact.svg",
    alt: "Ícone de impacto",
    title: "Impacto",
    text: "Projetos que promovem inclusão, diversidade e transformação nas comunidades.",
    bg: "#ffffff"
  }
];

const valueContainer = document.getElementById("valueCardsContainer");

valueItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "value-card";
  card.style.backgroundColor = item.bg;

  card.innerHTML = `
    <img src="${item.icon}" alt="${item.alt}" class="value-icon" />
    <div class="vertical-line"></div>
    <div class="value-content">
      <h3 class="value-title">${item.title}</h3>
      <p class="value-text">${item.text}</p>
    </div>
  `;

  valueContainer.appendChild(card);
});



//Courses and Workshops Section
  const courses = [
  {
    title: "Desenvolvimento Web Full Stack",
    description: "Aprenda a criar aplicações web completas, do front-end ao back-end, com as tecnologias mais demandadas pelo mercado.",
    image: "assets/images/course-web.png",
    buttonText: "Inscreva-se →"
  },
  {
    title: "Liderança e Gestão de Projetos",
    description: "Desenvolva habilidades essenciais para liderar equipes e gerenciar projetos com metodologias ágeis e tradicionais.",
    image: "assets/images/course-lead.png",
    buttonText: "Inscreva-se →"
  },
  {
    title: "Marketing Digital para Iniciantes",
    description: "Domine as principais ferramentas e estratégias de marketing digital para impulsionar sua carreira ou negócio.",
    image: "assets/images/course-marketing.png",
    buttonText: "Inscreva-se →"
  },
  {
    title: "Empreendedorismo Social",
    description: "Aprenda a criar e desenvolver negócios de impacto social que geram valor para a sociedade e sustentabilidade financeira.",
    image: "assets/images/course-social.png",
    buttonText: "Inscreva-se →"
  }
];

const courseContainer = document.getElementById("courses-container");

courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";

  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="course-image">
    <div class="course-content">
     <div class="card-left-line"></div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-description">${course.description}</p>
      <a href="#" class="course-button">${course.buttonText}</a>
    </div>
  `;

  courseContainer.appendChild(card);
});

}); // 🔚 Fecha o DOMContentLoaded aqui