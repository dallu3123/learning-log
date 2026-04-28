const rlToggle = document.querySelector("#rl-toggle");
const rlPanel = document.querySelector("#rl-panel");

rlToggle.addEventListener("click", () => {
  const expanded = rlToggle.getAttribute("aria-expanded") === "true";
  rlToggle.setAttribute("aria-expanded", String(!expanded));
  rlPanel.classList.toggle("open", !expanded);
});
