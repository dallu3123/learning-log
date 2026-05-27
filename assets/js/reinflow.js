const translations = {
  ko: {
    back: "← Back to RL notes",
    badge: "ReinFlow 정리",
    title: "ReinFlow",
    subtitle: "Flow matching policy를 online reinforcement learning으로 fine-tuning하는 방법.",
    introKicker: "Introduction",
    introTitle: "ReinFlow는 어떤 문제를 보나?",
    introP1: "Flow matching policy는 diffusion policy보다 빠른 inference와 단순한 구현을 장점으로, robot action generation에서 강한 대안으로 떠오르고 있다.",
    introP2: "하지만 imitation learning으로 학습한 policy는 demonstration 품질, 데이터 부족, embodiment gap에 묶인다. 데이터를 더 모아도 성능이 금방 plateau에 닿을 수 있고, imperfect expert를 넘어서는 행동은 배우기 어렵다.",
    introP3: "그래서 online RL fine-tuning이 자연스러운 다음 선택지가 된다. 문제는 flow policy가 deterministic ODE path로 action을 만들기 때문에, policy gradient에 필요한 log probability와 exploration을 설계하기가 쉽지 않다는 점이다.",
    introP4: "ReinFlow의 핵심은 이 deterministic flow path에 learnable noise를 주입해 discrete-time Markov process로 바꾸는 것이다. 그러면 각 transition이 Gaussian probability를 갖게 되어 likelihood 계산이 가능해지고, noise 자체가 exploration 역할도 한다.",
    introItem1Title: "왜 Flow Policy인가?",
    introItem1Desc: "Flow matching model은 precise modeling, fast inference, simple implementation을 동시에 노리는 action generator다.",
    introItem2Title: "왜 Online RL인가?",
    introItem2Desc: "Imitation policy가 imperfect data에 묶일 때, reward 기반 trial-and-error로 demonstration을 넘어서는 개선을 노린다.",
    introItem3Title: "어디가 어려운가?",
    introItem3Desc: "Conditional flow는 deterministic ODE path라 stochastic policy의 log probability를 얻기 어렵고, sparse reward에서 exploration 설계도 막힌다.",
    introItem4Title: "ReinFlow의 한 줄 답",
    introItem4Desc: "Learnable noise injection으로 flow를 Gaussian transition을 갖는 Markov process로 바꿔, likelihood와 exploration을 같이 해결한다.",
    problemKicker: "Problem Formulation",
    problemTitle: "논문이 문제를 어떻게 수식화하나?",
    problemP1: "이 섹션은 ReinFlow 알고리즘에 들어가기 전에 notation을 맞추는 부분이다. 큰 흐름은 세 단계다. 먼저 robot learning을 POMDP로 두고, 다음으로 flow matching model을 정의한 뒤, 마지막으로 그것을 robot action policy로 해석한다.",
    problemItem1Title: "Robot learning = POMDP",
    problemItem1Desc: "Agent는 observation \\(o_h\\)를 보고 action \\(a_h\\)를 내며, reward의 discounted sum을 최대화한다. 논문은 최신 observation만 보는 reactive policy를 사용한다.",
    problemItem2Title: "Flow matching = noise에서 data로 이동",
    problemItem2Desc: "Flow model은 \\(p_0\\)의 sample을 \\(p_1\\)의 sample로 옮기는 trajectory를 만들고, velocity field \\(v_\\theta\\)가 그 이동 방향을 예측한다.",
    problemItem3Title: "Flow policy = action generator",
    problemItem3Desc: "Robot control에서는 \\(X\\)를 action space로 보고, \\(p_0\\)는 Gaussian noise, \\(p_1\\)는 action distribution이 된다. Velocity field는 observation \\(o\\)에 condition된다.",
    objectiveFormulaTitle: "RL objective",
    objectiveFormulaDesc: "Policy의 목표는 interaction에서 얻는 discounted reward를 최대화하는 것이다.",
    objectiveFormula: "\\[J(\\pi)=\\mathbb{E}^{\\pi}\\left[\\sum_{h=0}^{\\infty}\\gamma^h r_h(a_h,o_h)\\right]\\]",
    flowTrainFormulaTitle: "Rectified Flow training",
    flowTrainFormulaDesc: "Straight path에서는 중간점 \\(X_t=tX_1+(1-t)X_0\\)에서 target velocity가 \\(X_1-X_0\\)가 된다.",
    flowTrainFormula: "\\[\\hat{\\theta}=\\arg\\min_{\\theta}\\mathbb{E}_{X_0,X_1,t}\\left[\\left\\lVert X_1-X_0-v_\\theta(t,X_t)\\right\\rVert_2^2\\right]\\]",
    flowInferFormulaTitle: "Few-step inference",
    flowInferFormulaDesc: "Inference에서는 velocity field를 여러 step 적분해서 최종 action을 얻는다. Step 수 \\(K\\)가 작을수록 빠르지만 discretization error가 커질 수 있다.",
    flowInferFormula: "\\[\\hat{X}_1 = X_0+\\sum_{k=0}^{K-1}v_\\theta(t_k,X_{t_k})\\Delta t_k\\]",
    problemP2: "여기서 ReinFlow의 목표가 선명해진다. Flow policy는 빠른 robot control에 유리하므로 denoising step을 줄이고 싶다. 하지만 step을 너무 줄이면 action quality가 떨어진다. 이 논문은 RL fine-tuning으로 few-step, 가능하면 one-step flow policy의 속도와 성공률을 동시에 얻으려 한다.",
    methodKicker: "Method",
    methodTitle: "ReinFlow 알고리즘",
    methodP1: "이 장은 두 부분으로 나눠서 보면 좋다. A에서는 flow matching policy가 왜 RL에서 다루기 어려운지 정리하고, B에서는 ReinFlow가 noise injection으로 policy gradient 학습을 어떻게 가능하게 만드는지 본다.",
    prelimKicker: "A. Preliminaries",
    prelimTitle: "Flow policy와 likelihood 문제",
    prelimP1: "Flow matching policy는 noise에서 action으로 가는 ODE trajectory를 velocity field로 정의한다. 하지만 online RL에서는 sampled action의 likelihood와 entropy가 필요하고, 이 값을 안정적으로 계산하기 어렵다.",
    flowFormulaTitle: "Flow policy trajectory",
    flowFormulaDesc: "Action은 초기 noise에서 시작해 learned velocity field를 따라 denoising된다.",
    flowFormula: "\\[a_{t_{k+1}} = a_{t_k} + v_\\theta(a_{t_k}, t_k; o)\\Delta t_k\\]",
    reinflowKicker: "B. ReinFlow",
    reinflowTitle: "Noise-injected Markov process",
    reinflowP1: "ReinFlow는 각 denoising transition에 learnable Gaussian noise를 넣어 stochastic transition을 만든다. 이러면 flow trajectory를 discrete-time Markov process로 볼 수 있고, 각 step의 Gaussian transition probability를 곱해 likelihood를 계산할 수 있다.",
    reinflowP2: "보통 flow matching model은 다음 방향을 나타내는 velocity vector \\(v_\\theta\\)만 출력한다. ReinFlow에서는 이 velocity가 Gaussian transition의 평균 위치를 만들고, 새 noise network \\(\\sigma_{\\theta'}\\)가 표준편차를 출력한다.",
    meanFormulaTitle: "Mean: 기존 flow가 가리키는 다음 위치",
    meanFormulaDesc: "Velocity network가 평균을 직접 출력하는 것은 아니고, 현재 action에서 velocity 방향으로 이동한 위치가 transition mean이 된다.",
    meanFormula: "\\[\\mu_k = a_k + v_\\theta(t_k,a_k,o)\\Delta t_k\\]",
    stdFormulaTitle: "Std: 새 noise network가 정하는 흔들림",
    stdFormulaDesc: "Noise network는 각 denoising step에서 얼마나 크게 탐색할지, 즉 Gaussian의 표준편차를 만든다.",
    stdFormula: "\\[\\sigma_k = \\sigma_{\\theta'}(t_k,a_k,o)\\]",
    gaussianFormulaTitle: "Likelihood: 이제 Gaussian이라 바로 계산 가능",
    gaussianFormulaDesc: "각 transition은 mean과 std를 아는 Gaussian이므로, 복잡한 flow likelihood 대신 Gaussian log likelihood를 더하면 된다.",
    gaussianFormula: "\\[a_{k+1}\\sim\\mathcal{N}(\\mu_k,\\sigma_k^2),\\qquad\\log \\pi(a_0,\\dots,a_K|o)=\\log p(a_0)+\\sum_{k=0}^{K-1}\\log \\mathcal{N}(a_{k+1};\\mu_k,\\sigma_k^2)\\]",
    reinflowItem1Title: "Tractable likelihood",
    reinflowItem1Desc: "Noise transition이 Gaussian 형태가 되므로 policy gradient objective에 필요한 log probability를 직접 계산할 수 있다.",
    reinflowItem2Title: "Adaptive exploration",
    reinflowItem2Desc: "Noise scale을 network가 학습하기 때문에, task와 denoising step에 따라 exploration 강도를 조절할 수 있다.",
    experimentsKicker: "Experiments",
    experimentsTitle: "어디서 검증했나?",
    experimentsP1: "논문은 locomotion, state-input manipulation, visual manipulation에서 ReinFlow를 평가한다. Rectified Flow와 Shortcut Model policy를 few-step 또는 one-step setting에서 fine-tuning하는 점이 핵심이다.",
    pdfLink: "원문 PDF 열기"
  },
  en: {
    back: "← Back to RL notes",
    badge: "ReinFlow Notes",
    title: "ReinFlow",
    subtitle: "Fine-tuning flow matching policies with online reinforcement learning.",
    introKicker: "Introduction",
    introTitle: "What problem does ReinFlow target?",
    introP1: "Flow matching policies are becoming a strong alternative to diffusion policies for robot action generation because they combine fast inference with relatively simple implementation.",
    introP2: "However, policies trained by imitation learning are tied to demonstration quality, data scarcity, and the embodiment gap. Adding more data can plateau quickly, and imperfect demonstrations make it hard to learn behavior beyond the expert.",
    introP3: "Online RL fine-tuning is the natural next step. The difficulty is that flow policies generate actions through deterministic ODE paths, so the log probability needed by policy gradients and the exploration mechanism are both hard to design.",
    introP4: "ReinFlow injects learnable noise into this deterministic path and converts the flow into a discrete-time Markov process. Each transition then has a Gaussian probability, making likelihood computation tractable while the noise also supports exploration.",
    introItem1Title: "Why flow policies?",
    introItem1Desc: "Flow matching models aim to combine precise modeling, fast inference, and simple implementation for action generation.",
    introItem2Title: "Why online RL?",
    introItem2Desc: "When imitation policies are limited by imperfect data, reward-driven trial and error can push performance beyond demonstrations.",
    introItem3Title: "What is hard?",
    introItem3Desc: "Conditional flows follow deterministic ODE paths, which makes stochastic-policy log probabilities difficult and leaves sparse-reward exploration under-specified.",
    introItem4Title: "ReinFlow in one line",
    introItem4Desc: "Learnable noise injection turns the flow into a Markov process with Gaussian transitions, addressing likelihood and exploration together.",
    problemKicker: "Problem Formulation",
    problemTitle: "How does the paper formulate the problem?",
    problemP1: "This section sets up notation before the ReinFlow algorithm. The flow is simple: formulate robot learning as a POMDP, define the flow matching model, then interpret it as a robot action policy.",
    problemItem1Title: "Robot learning = POMDP",
    problemItem1Desc: "The agent observes \\(o_h\\), takes action \\(a_h\\), and maximizes discounted reward. The paper uses a reactive policy that maps the latest observation to an action distribution.",
    problemItem2Title: "Flow matching = moving noise to data",
    problemItem2Desc: "A flow model builds a trajectory that transports samples from \\(p_0\\) to \\(p_1\\), and the velocity field \\(v_\\theta\\) predicts the direction of that movement.",
    problemItem3Title: "Flow policy = action generator",
    problemItem3Desc: "For robot control, \\(X\\) becomes the action space, \\(p_0\\) is Gaussian noise, and \\(p_1\\) is the action distribution. The velocity field is conditioned on observation \\(o\\).",
    objectiveFormulaTitle: "RL objective",
    objectiveFormulaDesc: "The policy objective is to maximize discounted reward from interaction.",
    objectiveFormula: "\\[J(\\pi)=\\mathbb{E}^{\\pi}\\left[\\sum_{h=0}^{\\infty}\\gamma^h r_h(a_h,o_h)\\right]\\]",
    flowTrainFormulaTitle: "Rectified Flow training",
    flowTrainFormulaDesc: "For a straight path, the intermediate point is \\(X_t=tX_1+(1-t)X_0\\), and the target velocity is \\(X_1-X_0\\).",
    flowTrainFormula: "\\[\\hat{\\theta}=\\arg\\min_{\\theta}\\mathbb{E}_{X_0,X_1,t}\\left[\\left\\lVert X_1-X_0-v_\\theta(t,X_t)\\right\\rVert_2^2\\right]\\]",
    flowInferFormulaTitle: "Few-step inference",
    flowInferFormulaDesc: "At inference time, the velocity field is integrated over multiple steps to produce the final action. Smaller \\(K\\) is faster, but can increase discretization error.",
    flowInferFormula: "\\[\\hat{X}_1 = X_0+\\sum_{k=0}^{K-1}v_\\theta(t_k,X_{t_k})\\Delta t_k\\]",
    problemP2: "This makes ReinFlow's target clear. Flow policies are attractive for fast robot control, so we want fewer denoising steps. But too few steps can hurt action quality. The paper uses RL fine-tuning to get both speed and high success rates from few-step, ideally one-step, flow policies.",
    methodKicker: "Method",
    methodTitle: "ReinFlow Algorithm",
    methodP1: "This section is easier to read in two parts. Part A reviews why flow matching policies are difficult to use in RL, and Part B shows how ReinFlow enables policy-gradient training with noise injection.",
    prelimKicker: "A. Preliminaries",
    prelimTitle: "Flow policy and the likelihood problem",
    prelimP1: "A flow matching policy defines an ODE trajectory from noise to action through a velocity field. Online RL, however, needs likelihoods and entropy for sampled actions, and these are difficult to compute stably.",
    flowFormulaTitle: "Flow policy trajectory",
    flowFormulaDesc: "The action starts from initial noise and is denoised along the learned velocity field.",
    flowFormula: "\\[a_{t_{k+1}} = a_{t_k} + v_\\theta(a_{t_k}, t_k; o)\\Delta t_k\\]",
    reinflowKicker: "B. ReinFlow",
    reinflowTitle: "Noise-injected Markov process",
    reinflowP1: "ReinFlow adds learnable Gaussian noise to each denoising transition. The trajectory can then be viewed as a discrete-time Markov process, and the likelihood is computed by multiplying Gaussian transition probabilities.",
    reinflowP2: "A standard flow matching model outputs only the velocity vector \\(v_\\theta\\), which points to the next direction. In ReinFlow, that velocity defines the mean of a Gaussian transition, while the new noise network \\(\\sigma_{\\theta'}\\) outputs the standard deviation.",
    meanFormulaTitle: "Mean: the next point indicated by the original flow",
    meanFormulaDesc: "The velocity network does not directly output the mean. The mean is the current action moved along the velocity direction.",
    meanFormula: "\\[\\mu_k = a_k + v_\\theta(t_k,a_k,o)\\Delta t_k\\]",
    stdFormulaTitle: "Std: exploration scale from the noise network",
    stdFormulaDesc: "The noise network decides how much stochasticity to inject at each denoising step, which becomes the Gaussian standard deviation.",
    stdFormula: "\\[\\sigma_k = \\sigma_{\\theta'}(t_k,a_k,o)\\]",
    gaussianFormulaTitle: "Likelihood: easy because it is Gaussian",
    gaussianFormulaDesc: "Each transition is a Gaussian with known mean and standard deviation, so ReinFlow can sum Gaussian log likelihoods instead of computing a difficult flow likelihood.",
    gaussianFormula: "\\[a_{k+1}\\sim\\mathcal{N}(\\mu_k,\\sigma_k^2),\\qquad\\log \\pi(a_0,\\dots,a_K|o)=\\log p(a_0)+\\sum_{k=0}^{K-1}\\log \\mathcal{N}(a_{k+1};\\mu_k,\\sigma_k^2)\\]",
    reinflowItem1Title: "Tractable likelihood",
    reinflowItem1Desc: "Because each transition has a Gaussian form, the log probability needed for policy-gradient objectives can be computed directly.",
    reinflowItem2Title: "Adaptive exploration",
    reinflowItem2Desc: "The noise scale is learned by a network, so exploration strength can adapt across tasks and denoising steps.",
    experimentsKicker: "Experiments",
    experimentsTitle: "Where is it evaluated?",
    experimentsP1: "The paper evaluates ReinFlow on locomotion, state-input manipulation, and visual manipulation. A key focus is fine-tuning Rectified Flow and Shortcut Model policies in few-step or one-step settings.",
    pdfLink: "Open original PDF"
  }
};

const setLanguage = (language) => {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = translations[language][key] ?? translations.ko[key];
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

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setupCollapsibleSections();
setLanguage("ko");
