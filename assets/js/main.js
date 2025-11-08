const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open")
    );
  });
}

const actionButtons = document.querySelectorAll("[data-action]");
actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "remind") {
      button.textContent = "Added ✅";
    }
    if (action === "tickets") {
      window.location.href = "#tickets";
    }
    if (action === "read") {
      button.textContent = "Coming soon";
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document
  .querySelectorAll(
    ".panel, .news-card, .timeline-list li, .rail-card, .notables-grid article, .kits-grid article, .why-grid article"
  )
  .forEach((el) => {
    observer.observe(el);
  });
