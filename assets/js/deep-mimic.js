const setupCollapsibleSections = () => {
  document.querySelectorAll("main > .section").forEach((section, index) => {
    if (section.classList.contains("collapsible")) return;

    const kicker = section.querySelector(":scope > .section-kicker");
    const title = section.querySelector(":scope > h2");
    if (!kicker || !title) return;

    const content = document.createElement("div");
    content.className = "section-content";

    const header = document.createElement("button");
    header.className = "section-header";
    header.type = "button";
    header.setAttribute("aria-expanded", index === 0 ? "true" : "false");

    const heading = document.createElement("div");
    heading.className = "section-heading";

    const indicator = document.createElement("span");
    indicator.className = "section-indicator";
    indicator.setAttribute("aria-hidden", "true");
    indicator.textContent = index === 0 ? "-" : "+";

    section.insertBefore(header, kicker);
    heading.append(kicker, title);
    header.append(heading, indicator);

    while (header.nextSibling) {
      content.append(header.nextSibling);
    }

    section.append(content);
    section.classList.add("collapsible");
    section.classList.toggle("is-open", index === 0);
    content.hidden = index !== 0;

    header.addEventListener("click", () => {
      const isOpen = section.classList.toggle("is-open");
      header.setAttribute("aria-expanded", String(isOpen));
      content.hidden = !isOpen;
      indicator.textContent = isOpen ? "-" : "+";

      if (isOpen && window.MathJax?.typesetPromise) {
        MathJax.typesetPromise([content]);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupCollapsibleSections();

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise();
  }
});
