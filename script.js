// Smooth Scroll
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Particles.js
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 70 },
    color: { value: ["#00eaff", "#6a5acd"] },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 5 } },
    move: { enable: true, speed: 2 },
    links: {
      enable: true,
      color: "#00eaff",
      distance: 150,
      opacity: 0.5,
      width: 1,
    },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } },
  },
  detectRetina: true,
});

// Data anggota
const members = {
  mikail: {
    name: "Mikail",
    role: "Fullstack Developer",
    img: "assets/tanjiro.png",
    github: "https://github.com/Almalik777",
    ig: "https://www.instagram.com/alk3neistent/",
  },
  raffa: {
    name: "Raffa",
    role: "UI/UX Designer",
    img: "assets/zenitsu.png",
    github: "https://github.com/raffa",
    ig: "https://instagram.com/raffa",
  },
  chakra: {
    name: "Chakra",
    role: "Data Engineer",
    img: "assets/giyu.png",
    github: "https://github.com/chakra",
    ig: "https://instagram.com/chakra",
  },
  rizal: {
    name: "Rizal",
    role: "Game Developer",
    img: "assets/inosuke.png",
    github: "https://github.com/rizal",
    ig: "https://instagram.com/rizal",
  },
  nisa: {
    name: "Nisa",
    role: "Project Manager",
    img: "assets/nezuko.png",
    github: "https://github.com/nisa",
    ig: "https://www.instagram.com/90spyloft?igsh=MXZydTE2OWo1ejBkZw==",
  },
};

// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const githubLink = document.getElementById("github-link");
const igLink = document.getElementById("ig-link");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const data = members[card.dataset.member];
    modal.style.display = "flex";
    modalImg.src = data.img;
    modalName.textContent = data.name;
    modalRole.textContent = data.role;
    githubLink.href = data.github;
    igLink.href = data.ig;
  });
});
document
  .querySelector(".close")
  .addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// EmailJS Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs
    .send("service_0hrm5jz", "template_gooj1ct", {
      from_name: document.getElementById("nama").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("pesan").value,
    })
    .then(() => {
      document.getElementById("status").textContent =
        "✅ Pesan berhasil terkirim!";
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      document.getElementById("status").textContent = "❌ Gagal mengirim!";
      console.error("FAILED...", error);
    });
});

// Typing Effect for "DIGITAL"
const typingText = "DIGITAL";
const typingElement = document.getElementById("typing");
let index = 0;

function typeWriter() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 180); // kecepatan ketik
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      typeWriter();
    }, 3000); // jeda sebelum ulangi
  }
}

if (typingElement) {
  typeWriter();
}

const projectCards = document.querySelectorAll(".project-card");

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  projectCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add("visible");
      }, index * 600); // delay bertahap untuk setiap kartu
    }
  });
}

window.addEventListener("scroll", showCardsOnScroll);
showCardsOnScroll();
