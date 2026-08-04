const eq4Explainer = document.querySelector("#eq4-explainer");

if (eq4Explainer) {
  const button = eq4Explainer.querySelector(".section-header");
  const content = eq4Explainer.querySelector(".section-content");
  const indicator = eq4Explainer.querySelector(".section-indicator");

  button.addEventListener("click", () => {
    const isOpen = eq4Explainer.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    content.hidden = !isOpen;
    indicator.textContent = isOpen ? "−" : "+";

    if (isOpen && window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([content]);
    }
  });
}
