const setupTopicToggle = (toggleSelector, panelSelector) => {
  const toggle = document.querySelector(toggleSelector);
  const panel = document.querySelector(panelSelector);

  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("open", !expanded);
  });
};

setupTopicToggle("#rl-toggle", "#rl-panel");
setupTopicToggle("#humanoid-toggle", "#humanoid-panel");
setupTopicToggle("#diffusion-toggle", "#diffusion-panel");
