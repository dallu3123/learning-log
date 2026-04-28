const translations = {
  ko: {
    back: "← Back to RL notes",
    badge: "FPO 핵심 설명",
    title: "왜 FPO는 likelihood 대신 CFM loss를 사용하는가?",
    subtitle: "발표 핵심은 다음 흐름이다. 기존 PPO는 action likelihood가 필요하지만, Flow policy에서는 그것을 직접 계산하기 어렵다. 그래서 FPO는 log-likelihood의 하한인 ELBO를 사용하고, 다시 ELBO를 CFM loss로 바꿔 PPO ratio처럼 사용한다.",
    flowLikelihood: "Flow likelihood 문제",
    flowElbo: "ELBO 도입",
    flowCfm: "CFM loss 연결",
    section1Title: "우리가 원래 하고 싶은 것",
    section1P1: "일반적인 Policy Gradient나 PPO에서는, 어떤 상태 <b>s</b>에서 선택한 action <b>a</b>의 확률을 높이거나 낮추면서 policy를 학습한다.",
    section1P2: "좋은 action이면 이 값을 키우고, 나쁜 action이면 이 값을 줄이고 싶다. Gaussian policy에서는 policy가 평균과 분산을 출력하므로, 아래 Gaussian pdf를 통해 action likelihood를 직접 구할 수 있다.",
    section1P3: "PPO에서는 이 값을 이용해 현재 policy와 이전 policy의 likelihood ratio를 사용한다.",
    section1Note: "즉, PPO의 출발점은 “action likelihood를 계산할 수 있다”는 가정이다.",
    section2Title: "문제: Flow policy는 likelihood 계산이 어렵다",
    section2P1: "Gaussian policy는 평균과 분산만 알면 action의 확률밀도를 바로 계산할 수 있다. 하지만 Flow policy는 noise를 여러 단계의 flow를 통해 action으로 변환한다.",
    section2P2: "따라서 어떤 action <b>a</b>가 나왔을 때, 그 action이 현재 flow policy에서 얼마나 높은 확률로 나오는지 직접 계산하기 어렵다.",
    deepTitle: "왜 마지막 action만 보면 안 되는가?",
    deepP1: "우리가 알고 싶은 값은 state <b>s</b>에서 최종 action <b>a</b>가 나올 확률밀도다. 그런데 Flow policy에서는 <b>a</b>가 바로 샘플링되는 것이 아니라, 쉬운 noise 분포에서 시작한 점이 flow를 따라 이동한 결과로 만들어진다.",
    deepP2: "따라서 <b>a</b>의 likelihood를 계산하려면 “어떤 <b>z₀</b>가 <b>a</b>가 되었는가?”뿐만 아니라, 그 변환 과정에서 확률밀도가 얼마나 압축되거나 팽창했는지도 알아야 한다.",
    deepP3: "예를 들어 1차원에서 <b>a = 2z</b>처럼 공간을 두 배로 늘리는 변환을 생각하면, 같은 확률 질량이 더 넓은 구간에 퍼지므로 밀도는 절반으로 줄어든다.",
    deepP4: "고차원에서는 이 압축과 팽창 정도가 Jacobian determinant로 표현된다.",
    deepP5: "Continuous flow에서는 변환이 한 번에 끝나지 않고 ODE처럼 연속적으로 진행된다.",
    deepP6: "이때 확률밀도의 변화는 velocity field의 divergence로 결정된다. 주변 점들이 퍼지면 밀도가 낮아지고, 모이면 밀도가 높아진다.",
    deepLi1: "<b>a</b>에 대응되는 시작점 <b>z₀</b>를 찾아야 한다.",
    deepLi2: "<b>zₜ</b>가 지나가는 경로를 ODE로 따라가야 한다.",
    deepLi3: "각 시간에서 divergence 또는 Jacobian 관련 값을 계산해야 한다.",
    deepLi4: "그 값을 전체 시간 구간에 대해 적분해야 한다.",
    deepNote: "즉, likelihood 계산은 처음 noise의 확률과 flow가 공간을 얼마나 압축/팽창시켰는지를 모두 추적하는 문제다. 특히 action dimension이 커질수록 Jacobian이나 divergence 관련 계산이 더 비싸진다.",
    diagramZSpace: "z 공간",
    diagramASpace: "a 공간",
    diagramCaption: "같은 5개 점이 더 넓게 퍼짐 → 밀도 감소",
    section2Warning: "그래서 기존 PPO ratio를 그대로 쓰기 어렵다.",
    section3Title: "핵심 아이디어: log-likelihood 대신 ELBO를 사용한다",
    section3P1: "Flow / diffusion 모델에서는 정확한 log-likelihood 대신, 그 하한인 ELBO를 최적화하는 방식이 많이 사용된다.",
    section3P2: "여기서 중요한 관계는 다음과 같다.",
    section3P3: "KL divergence는 항상 0 이상이므로, ELBO는 log-likelihood보다 작거나 같은 값이 된다.",
    section3Note: "즉, ELBO는 log π와 같은 값이 아니라, log π를 아래에서 근사하는 계산 가능한 proxy이다.",
    section3DeepTitle: "왜 ELBO가 나오는가?",
    section3DeepP1: "2번에서 문제가 된 것은 최종 action \\(a\\)의 likelihood를 계산하려면, 그 action이 만들어질 수 있는 hidden noise나 latent path를 모두 고려해야 한다는 점이었다.",
    section3DeepP2: "여기서 \\(z\\)는 action을 만들기 위해 거쳐간 hidden variable 또는 path를 의미한다. 문제는 가능한 \\(z\\)를 모두 적분한 뒤 log를 취해야 하므로, 아래 값이 직접 계산하기 어렵다는 것이다.",
    section3DeepP3: "그래서 variational inference에서는 계산 가능한 보조 분포 \\(q(z \\mid a,s)\\)를 도입한다. 이 \\(q\\)는 “이 action \\(a\\)가 어떤 latent path에서 왔을까?”를 설명하는 분포로 볼 수 있다.",
    section3DeepP4: "\\(q\\)를 넣는 이유는 어려운 적분을 \\(q\\)에 대한 기대값 형태로 바꾸기 위해서다. 원래 식에 \\(q(z \\mid a,s)\\)를 곱하고 다시 나누면 값은 변하지 않는다.",
    section3DeepP5: "이렇게 쓰면 같은 식을 \\(q\\)에 대한 expectation으로 볼 수 있다.",
    section3DeepP6: "이제 log를 취하면 \\(\\log \\mathbb{E}_q[\\cdot]\\) 형태가 된다. 여기서 Jensen inequality를 사용하면 log를 expectation 안쪽으로 넣은 lower bound를 얻을 수 있다.",
    section3DeepP7: "따라서 다음 오른쪽 항이 진짜 log-likelihood보다 작거나 같은 값이 되고, 이 값을 ELBO라고 부른다.",
    section3DeepP8: "직관적으로는 “모든 가능한 \\(z\\)를 무작정 다 보지 말고, action \\(a\\)를 만들었을 법한 \\(z\\)들을 중심으로 보자”는 것이다. \\(q\\)가 진짜 posterior에 가까울수록 ELBO는 실제 log-likelihood에 가까워진다.",
    section3KlTitle: "왜 \\(\\log \\pi = \\mathrm{ELBO} + \\mathrm{KL}\\)인가?",
    section3KlP1: "ELBO 정의에서 시작하면 다음과 같다.",
    section3KlP2: "joint probability는 posterior를 이용해 다음처럼 분해할 수 있다.",
    section3KlP3: "이걸 ELBO 정의에 넣으면,",
    section3KlP4: "\\(\\log \\pi_\\theta(a\\mid s)\\)는 \\(z\\)에 의존하지 않으므로 expectation 밖으로 빠질 수 있다.",
    section3KlP5: "그런데 KL divergence의 정의는 다음과 같다.",
    section3KlP6: "따라서 ELBO의 두 번째 항은 \\(-\\mathrm{KL}\\)이 된다.",
    section3KlP7: "이 식을 정리하면 다음 관계가 나온다.",
    section3KlNote: "즉, 진짜 log-likelihood는 ELBO에 \\(q\\)와 진짜 posterior 사이의 오차인 KL을 더한 값이다.",
    section4Title: "왜 ELBO를 올리면 좋은가?",
    section4P1: "ELBO는 log-likelihood의 lower bound이므로, ELBO를 크게 만들면 해당 action을 policy가 더 잘 설명하도록 만드는 효과가 있다.",
    goodAction: "좋은 action",
    goodActionDesc: "advantage가 양수라면, 그 action의 likelihood를 높이고 싶다.",
    elboMax: "ELBO 최대화",
    elboMaxDesc: "log π를 직접 계산하지 않고, 대신 ELBO를 올리는 방향으로 학습한다.",
    section4Formula: "log π 계산 어려움 → ELBO로 대체",
    section5Title: "ELBO와 CFM loss의 연결",
    section5P1: "Flow matching에서는 action에 noise를 섞은 뒤, 모델이 올바른 velocity 또는 denoising 방향을 예측하도록 학습한다.",
    section5P2: "diffusion / flow matching 이론에서 이 denoising 계열 loss는 ELBO와 연결된다. 직관적으로는, noise를 잘 제거할수록 해당 action distribution을 잘 모델링한다는 뜻이다.",
    section5Note: "따라서 CFM loss가 작아지면 ELBO가 커지고, 결과적으로 action likelihood를 높이는 효과가 난다.",
    section6Title: "최종 결론: FPO ratio",
    section6P1: "PPO는 원래 likelihood ratio를 사용한다. 하지만 FPO는 likelihood를 직접 계산하지 않고, ELBO ratio를 사용한다.",
    section6P2: "그리고 ELBO는 CFM loss의 음수와 연결되므로 다음과 같이 바뀐다.",
    section6P3: "결국 FPO의 핵심은 이것이다.",
    section6Formula: "좋은 action → CFM loss 감소 → ELBO 증가 → likelihood 증가"
  },
  en: {
    back: "← Back to RL notes",
    badge: "FPO Core Explanation",
    title: "Why does FPO use CFM loss instead of likelihood?",
    subtitle: "The main flow is this: standard PPO needs action likelihood, but a Flow policy makes that likelihood hard to compute directly. FPO therefore uses ELBO, a lower bound on log-likelihood, and then connects ELBO to CFM loss so it can build a PPO-like ratio.",
    flowLikelihood: "Flow likelihood issue",
    flowElbo: "Introduce ELBO",
    flowCfm: "Connect CFM loss",
    section1Title: "What we originally want to do",
    section1P1: "In standard Policy Gradient or PPO, we train the policy by increasing or decreasing the probability of the selected action <b>a</b> in state <b>s</b>.",
    section1P2: "If the action is good, we want to increase this value; if it is bad, we want to decrease it. In a Gaussian policy, the policy outputs a mean and variance, so the action likelihood can be computed directly from the Gaussian distribution.",
    section1P3: "PPO then uses this value to form the likelihood ratio between the current policy and the old policy.",
    section1Note: "So PPO starts from the assumption that the action likelihood can be computed.",
    section2Title: "Problem: Flow policy likelihood is hard to compute",
    section2P1: "For a Gaussian policy, the action density can be computed directly once we know the mean and variance. A Flow policy, however, transforms noise into an action through multiple flow steps.",
    section2P2: "Therefore, when an action <b>a</b> appears, it is hard to directly compute how likely that action is under the current flow policy.",
    deepTitle: "Why is the final action alone not enough?",
    deepP1: "The quantity we want is the density of the final action <b>a</b> in state <b>s</b>. But in a Flow policy, <b>a</b> is not sampled directly; it is produced by starting from an easy noise distribution and moving through the flow.",
    deepP2: "To compute the likelihood of <b>a</b>, we need to know not only which initial point <b>z₀</b> became <b>a</b>, but also how much the transformation compressed or expanded probability density along the way.",
    deepP3: "For example, in one dimension, if the transformation is <b>a = 2z</b>, the same probability mass is spread over a region twice as wide, so the density becomes half as large.",
    deepP4: "In higher dimensions, this compression or expansion is represented by the Jacobian determinant.",
    deepP5: "In a continuous flow, the transformation does not happen in one step. It evolves continuously like an ODE.",
    deepP6: "The change in probability density is determined by the divergence of the velocity field. If nearby points spread out, density decreases; if they gather, density increases.",
    deepLi1: "Find the initial point <b>z₀</b> that corresponds to <b>a</b>.",
    deepLi2: "Follow the trajectory of <b>zₜ</b> by solving the ODE.",
    deepLi3: "Compute divergence or Jacobian-related quantities at each time.",
    deepLi4: "Integrate those values across the full time interval.",
    deepNote: "In short, likelihood computation requires tracking both the initial noise probability and how the flow compresses or expands space. As the action dimension grows, Jacobian- or divergence-related computations become more expensive.",
    diagramZSpace: "z space",
    diagramASpace: "a space",
    diagramCaption: "The same 5 points spread over a wider region → lower density",
    section2Warning: "That is why the original PPO ratio is difficult to use directly.",
    section3Title: "Core idea: use ELBO instead of log-likelihood",
    section3P1: "In flow and diffusion models, it is common to optimize ELBO, a lower bound, instead of the exact log-likelihood.",
    section3P2: "The important relationship is:",
    section3P3: "Since KL divergence is always non-negative, ELBO is less than or equal to the log-likelihood.",
    section3Note: "So ELBO is not the same as log π; it is a computable proxy that approximates log π from below.",
    section3DeepTitle: "Why does ELBO appear here?",
    section3DeepP1: "The problem in section 2 was that computing the likelihood of the final action \\(a\\) requires considering all hidden noise variables or latent paths that could have produced that action.",
    section3DeepP2: "Here, \\(z\\) denotes the hidden variable or path used to generate the action. The difficulty is that we must integrate over all possible \\(z\\) and then take the log, which makes the following value hard to compute directly.",
    section3DeepP3: "Variational inference introduces a computable auxiliary distribution \\(q(z \\mid a,s)\\). You can think of \\(q\\) as a distribution that explains which latent path may have produced action \\(a\\).",
    section3DeepP4: "The reason for inserting \\(q\\) is to rewrite the hard integral as an expectation under \\(q\\). Multiplying and dividing by \\(q(z \\mid a,s)\\) does not change the value.",
    section3DeepP5: "Written this way, the same expression can be viewed as an expectation under \\(q\\).",
    section3DeepP6: "After taking the log, we get a \\(\\log \\mathbb{E}_q[\\cdot]\\) form. Jensen's inequality lets us move the log inside the expectation to obtain a lower bound.",
    section3DeepP7: "Therefore, the term on the right is less than or equal to the true log-likelihood. This lower bound is called ELBO.",
    section3DeepP8: "Intuitively, instead of looking at all possible \\(z\\) values blindly, we focus on latent paths that plausibly produced action \\(a\\). The closer \\(q\\) is to the true posterior, the closer ELBO is to the actual log-likelihood.",
    section3KlTitle: "Why is \\(\\log \\pi = \\mathrm{ELBO} + \\mathrm{KL}\\)?",
    section3KlP1: "Start from the definition of ELBO.",
    section3KlP2: "The joint probability can be decomposed using the posterior.",
    section3KlP3: "Substituting this into the ELBO definition gives:",
    section3KlP4: "\\(\\log \\pi_\\theta(a\\mid s)\\) does not depend on \\(z\\), so it can be pulled outside the expectation.",
    section3KlP5: "Now recall the definition of KL divergence.",
    section3KlP6: "Therefore, the second term in the ELBO is \\(-\\mathrm{KL}\\).",
    section3KlP7: "Rearranging this expression gives the key relationship.",
    section3KlNote: "In other words, the true log-likelihood equals ELBO plus the KL error between \\(q\\) and the true posterior.",
    section4Title: "Why does increasing ELBO help?",
    section4P1: "Because ELBO is a lower bound on log-likelihood, increasing ELBO makes the policy explain the action better.",
    goodAction: "Good action",
    goodActionDesc: "If the advantage is positive, we want to increase the likelihood of that action.",
    elboMax: "Maximize ELBO",
    elboMaxDesc: "Instead of directly computing log π, we train in the direction that increases ELBO.",
    section4Formula: "Hard to compute log π → replace it with ELBO",
    section5Title: "Connecting ELBO and CFM loss",
    section5P1: "In flow matching, we add noise to the action and train the model to predict the correct velocity or denoising direction.",
    section5P2: "In diffusion and flow matching theory, this denoising-style loss is connected to ELBO. Intuitively, better denoising means better modeling of the action distribution.",
    section5Note: "Therefore, when CFM loss decreases, ELBO increases, which has the effect of increasing action likelihood.",
    section6Title: "Final conclusion: FPO ratio",
    section6P1: "PPO normally uses a likelihood ratio. FPO does not compute likelihood directly; instead, it uses an ELBO ratio.",
    section6P2: "Because ELBO is connected to the negative of CFM loss, the ratio becomes:",
    section6P3: "The core of FPO is:",
    section6Formula: "Good action → lower CFM loss → higher ELBO → higher likelihood"
  }
};

const setLanguage = (language) => {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (element instanceof SVGTextElement) {
      element.textContent = translations[language][key];
    } else {
      element.innerHTML = translations[language][key];
    }
  });

  document.querySelectorAll("[data-lang-scope]").forEach((element) => {
    element.hidden = element.dataset.langScope !== language;
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (window.MathJax?.typesetPromise) {
    MathJax.typesetPromise();
  }
};

document.querySelectorAll(".num-button").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const openPanelFromHash = () => {
  if (!window.location.hash) {
    return;
  }

  const panel = document.querySelector(window.location.hash);
  if (!panel?.classList.contains("detail-panel")) {
    return;
  }

  panel.classList.add("is-open");
  const button = document.querySelector(`[aria-controls="${panel.id}"]`);
  button?.setAttribute("aria-expanded", "true");
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("ko");
openPanelFromHash();
window.addEventListener("hashchange", openPanelFromHash);
