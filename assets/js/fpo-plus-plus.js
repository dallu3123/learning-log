const translations = {
  ko: {
    back: "← Back to RL notes",
    badge: "FPO++ 정리",
    title: "FPO++",
    subtitle: "로봇 제어를 위한 Improved Flow Policy Optimization.",
    introKicker: "Introduction",
    introTitle: "FPO는 해결했지만, 왜 FPO++가 필요한가?",
    introP1: "로봇 제어에서는 PPO처럼 action likelihood를 이용하는 policy gradient 방법이 널리 쓰인다. 하지만 이 방식은 likelihood를 쉽게 계산할 수 있는 Gaussian policy 같은 단순한 action distribution에 주로 묶인다.",
    introP2: "Flow policy는 더 복잡하고 multimodal한 action distribution을 표현할 수 있지만, action likelihood를 계산하려면 flow field의 volume change를 추적해야 해서 RL 학습에서는 너무 비싸다.",
    introP3: "FPO는 conditional flow matching loss로 likelihood 계산을 우회하면서 이 문제를 해결했다. 하지만 기존 FPO는 단순한 synthetic benchmark에서는 가능성을 보였어도, high-DoF 로봇 제어에서는 학습이 쉽게 불안정해졌다.",
    introItem1Title: "FPO++ 알고리즘 제안",
    introItem1Desc: "기존 FPO에 per-sample ratio clipping과 asymmetric trust region을 추가해, 어려운 로봇 제어에서도 더 안정적으로 학습되게 만든다.",
    introItem2Title: "로봇 제어에서 검증",
    introItem2Desc: "Legged locomotion, humanoid motion tracking, single-arm 및 bimanual manipulation에서 FPO++가 from-scratch 학습, sim-to-real transfer, pretrained policy fine-tuning에 성공함을 보인다.",
    introItem3Title: "알고리즘 선택 분석",
    introItem3Desc: "제안한 objective 변경들이 실제로 어떤 영향을 주는지 ablation하고, 평가 및 sim-to-real transfer에서 쓰는 test-time sampling 전략도 함께 분석한다.",
    introItem4Title: "학습 dynamics 분석",
    introItem4Desc: "같은 reward를 쓰더라도 quadruped gait가 Gaussian PPO보다 개선되는 현상과, fine-tuning에서 base policy 선택에 더 robust해지는 현상을 분석한다.",
    relatedKicker: "Related Work",
    relatedTitle: "FPO++는 어떤 흐름 위에 있는가?",
    relatedP1: "이 논문은 Related Work를 단순히 선행연구 나열로 쓰기보다는, 왜 FPO++가 필요한지 보여주는 배경으로 정리한다. 핵심은 로봇 제어에서 강한 성능을 보인 PPO 계열과, 더 expressive한 action distribution을 만들 수 있는 flow/diffusion policy 사이의 간극이다.",
    relatedItem1Title: "Policy Gradient와 PPO",
    relatedItem1Desc: "로봇 continuous control에서는 PPO가 표준처럼 쓰인다. 구현이 단순하고 성능이 강하며, reward나 environment dynamics의 differentiability는 요구하지 않는다. 대신 policy update에는 action likelihood가 필요하다.",
    relatedItem2Title: "Flow/Diffusion Policy",
    relatedItem2Desc: "Flow와 diffusion model은 continuous action space에서 복잡한 분포를 표현할 수 있어 imitation learning과 robot manipulation에서 강하게 쓰인다. 하지만 대부분 expert action label을 기반으로 학습되며, online RL처럼 reward만으로 새 행동을 배우는 설정과는 다르다.",
    relatedItem3Title: "Generative Policy를 위한 RL",
    relatedItem3Desc: "최근에는 diffusion/flow policy를 RL과 결합하려는 연구들이 나오지만, 많은 방법이 sampling noise likelihood, denoising step unroll, 특정 architecture에 의존한다. FPO 계열은 conditional flow matching으로 likelihood 계산 자체를 우회한다는 점에서 방향이 다르다.",
    relatedP2: "그래서 FPO++의 위치는 명확하다. PPO처럼 reward 기반 online RL을 하고 싶지만, Gaussian policy보다 더 표현력이 큰 flow policy를 쓰고 싶다. 기존 FPO가 likelihood 문제를 우회했다면, FPO++는 그 아이디어를 실제 high-DoF 로봇 제어에서도 안정적으로 작동하게 만드는 쪽에 초점을 둔다.",
    methodKicker: "Improved Flow Policy Optimization",
    methodTitle: "FPO++ 알고리즘",
    methodP1: "이 장은 두 부분으로 나눠서 보는 게 좋다. A에서는 기존 FPO가 PPO-style policy gradient를 flow policy에 어떻게 연결하는지 정리하고, B에서는 FPO++가 안정적인 로봇 제어를 위해 무엇을 바꾸는지 본다.",
    prelimKicker: "A. Preliminaries",
    prelimTitle: "FPO 기본 정리",
    prelimDesc: "FPO의 목표는 explicit likelihood 없이 flow model로 parameterize된 policy를 policy gradient 방식으로 학습하는 것이다. 직접 action likelihood를 계산하려면 flow의 volume change를 추적해야 해서 RL loop에서는 계산 비용이 너무 크다.",
    prelimP1: "먼저 기준점은 PPO다. PPO는 현재 policy와 old policy의 action likelihood ratio \\(\\rho_\\theta\\)를 만들고, 이 ratio가 너무 크게 변하지 않도록 clipping한 objective를 최적화한다.",
    ppoObjectiveTitle: "PPO clipped objective",
    ppoObjectiveDesc: "Advantage가 양수이면 ratio를 키워 좋은 action의 확률을 올리고, 음수이면 줄인다. 다만 update가 너무 커지지 않도록 ratio를 clip한다.",
    ppoObjectiveFormula: "\\[\\psi_{\\mathrm{PPO}}(\\rho_\\theta,\\hat{A}_t)=\\min\\left(\\rho_\\theta\\hat{A}_t,\\,\\mathrm{clip}(\\rho_\\theta,1\\pm\\epsilon_{\\mathrm{clip}})\\hat{A}_t\\right)\\]",
    ppoRatioTitle: "PPO optimization과 ratio",
    ppoRatioDesc: "전체 objective는 old policy rollout에서 계산한 expectation을 최대화한다. 여기서 ratio는 current policy likelihood를 old policy likelihood로 나눈 값이다.",
    ppoOptimizeFormula: "\\[\\max_\\theta\\ \\mathbb{E}_{\\pi_{\\theta_{\\mathrm{old}}}}\\left[\\psi_{\\mathrm{PPO}}(\\rho_\\theta,\\hat{A}_t)\\right]\\]",
    ppoRatioFormula: "\\[\\rho_\\theta=\\frac{\\pi_\\theta(a_t\\mid o_t)}{\\pi_{\\theta_{\\mathrm{old}}}(a_t\\mid o_t)}\\]",
    prelimFormulaTitle: "FPO ratio 근사",
    prelimFormulaDesc: "Flow policy에서는 likelihood ratio를 직접 계산하기 어렵다. 그래서 FPO는 old/current CFM loss 차이를 exponential로 감싸 PPO ratio 자리에 넣는다.",
    prelimFormula: "\\[\\hat{\\rho}_{\\mathrm{FPO}}(\\theta)=\\exp\\left(\\hat{\\mathcal{L}}_{\\mathrm{CFM},\\theta_{\\mathrm{old}}}(a_t;o_t)-\\hat{\\mathcal{L}}_{\\mathrm{CFM},\\theta}(a_t;o_t)\\right)\\]",
    cfmInterpTitle: "CFM interpolation과 target velocity",
    cfmInterpDesc: "CFM loss를 계산하려면 action과 noise 사이의 중간 지점 \\(a_{\\tau_i}\\)를 만들고, 그 지점에서 맞춰야 할 target velocity를 정의한다.",
    cfmInterpFormula: "\\[a_{\\tau_i}=\\tau_i a_t+(1-\\tau_i)\\epsilon_i,\\qquad u_{\\tau_i}=a_t-\\epsilon_i\\]",
    cfmLossTitle: "CFM loss 정의",
    cfmLossDesc: "Policy velocity prediction이 target velocity를 얼마나 잘 맞추는지 squared error로 재고, 여러 Monte Carlo sample에 대해 평균낸다.",
    cfmLossFormula: "\\[\\begin{aligned}\\hat{\\mathcal{L}}_{\\mathrm{CFM},\\theta}(a_t;o_t)&=\\frac{1}{N_{\\mathrm{mc}}}\\sum_{i=1}^{N_{\\mathrm{mc}}}\\left\\lVert \\hat{v}_{\\theta}(a_{\\tau_i},\\tau_i;o_t)-u_{\\tau_i}\\right\\rVert_2^2\\end{aligned}\\]",
    cfmLossNote: "즉, \\(\\hat{\\mathcal{L}}_{\\mathrm{CFM}}\\)이 낮아진다는 것은 해당 action path를 더 잘 설명하게 된다는 뜻이고, FPO ratio에서는 이것을 likelihood가 커지는 방향으로 사용한다.",
    prelimProofLink: "FPO ratio 증명은 FPO 정리에서 보기",
    prelimP2: "Flow policy에서는 \\(\\pi_\\theta(a_t\\mid o_t)\\)를 직접 계산하기 어렵기 때문에, FPO는 PPO의 \\(\\rho_\\theta\\) 자리에 \\(\\hat{\\rho}_{\\mathrm{FPO}}\\)를 넣는다. 이때 CFM loss가 작아지는 방향은 해당 action의 likelihood가 커지는 방향처럼 해석되므로, advantage가 큰 action 쪽으로 probability flow를 밀어주는 업데이트가 가능해진다.",
    fpoPlusKicker: "B. FPO++",
    fpoPlusTitle: "FPO++에서 바꾸는 것",
    fpoPlusP1: "기존 FPO는 synthetic benchmark에서는 가능성을 보였지만, high-DoF 로봇 제어에서는 학습이 쉽게 불안정해졌다. FPO++는 이 문제를 줄이기 위해 objective에 두 가지 안정화 장치를 추가한다. 먼저 per-sample ratio로 clipping 단위를 세밀하게 만들고, 그 다음 asymmetric trust region으로 업데이트 방향을 더 조심스럽게 제한한다.",
    fpoPlusItem1Title: "Per-sample ratio",
    fpoPlusItem1Desc: "기존 FPO처럼 sample들을 평균낸 뒤 하나의 ratio를 만드는 대신, 각 CFM sample마다 ratio를 따로 계산해서 clipping을 더 세밀하게 적용한다.",
    fpoPlusItem2Title: "Asymmetric trust region",
    fpoPlusItem2Desc: "두 번째 변경점은 다음에 이어서 보면 된다. Positive advantage와 negative advantage를 같은 방식으로 제한하지 않고, flow policy 학습이 무너지기 쉬운 방향을 더 조심스럽게 다룬다.",
    perSampleVisualTitle: "Per-sample ratio를 그림으로 보면",
    perSampleVisualDesc: "하나의 action \\(a_t\\)에 대해 CFM은 여러 \\((\\tau_i,\\epsilon_i)\\) sample을 뽑는다. 기존 FPO는 이 sample들을 먼저 평균내고 하나의 ratio만 clip하지만, FPO++는 sample마다 ratio를 만든 뒤 각각 clip한다.",
    perSampleOldTitle: "기존 FPO",
    perSampleOldAverage: "CFM loss를 먼저 평균",
    perSampleOldRatio: "action 하나당 ratio 1개",
    perSampleOldClip: "한 번에 clip",
    perSampleNewTitle: "FPO++",
    perSampleNewRatio: "sample별 ratio",
    perSampleNewAdvantage: "같은 advantage 공유",
    perSampleNewClip: "sample마다 따로 clip",
    perSampleNewAverage: "clip된 항들을 평균",
    perSampleVisualTakeaway: "핵심은 clipping의 단위가 action 전체에서 CFM sample 하나하나로 내려간다는 점이다. 그래서 어떤 sample은 trust region 밖이면 막고, 아직 괜찮은 sample은 계속 학습에 쓰는 더 세밀한 안정화가 가능하다.",
    perSampleOldFormulaTitle: "기존 FPO: 평균낸 뒤 하나의 ratio",
    perSampleOldFormulaDesc: "각 CFM sample의 loss 차이를 먼저 평균낸 다음 exponential을 취한다. 그래서 action 하나에 대해 ratio가 하나만 생긴다.",
    perSampleOldFormula: "\\[\\hat{\\rho}_{\\mathrm{FPO}}(\\theta)=\\exp\\left(\\frac{1}{N_{\\mathrm{mc}}}\\sum_{i=1}^{N_{\\mathrm{mc}}}\\left(\\ell_{\\theta_{\\mathrm{old}}}^{(i,t)}-\\ell_{\\theta}^{(i,t)}\\right)\\right)\\]",
    perSampleNewFormulaTitle: "FPO++: sample마다 ratio",
    perSampleNewFormulaDesc: "FPO++는 평균내기 전에 sample별 ratio를 만든다. 같은 \\(\\hat{A}_t\\)를 공유하지만, clipping은 \\(\\hat{\\rho}^{(i)}_{\\mathrm{FPO++}}\\)마다 따로 적용된다.",
    perSampleNewFormula: "\\[\\hat{\\rho}_{\\mathrm{FPO++}}^{(i)}(\\theta)=\\exp\\left(\\ell_{\\theta_{\\mathrm{old}}}^{(i,t)}-\\ell_{\\theta}^{(i,t)}\\right)\\]",
    perSampleFormulaNote: "여기서 \\(\\ell_{\\theta}^{(i,t)}=\\left\\lVert \\hat{v}_{\\theta}(a_{\\tau_i},\\tau_i;o_t)-(a_t-\\epsilon_i)\\right\\rVert_2^2\\) 이고, \\((i,t)\\)는 time step \\(t\\)의 \\(i\\)번째 CFM sample을 뜻한다.",
    aspoSPOFormulaTitle: "Negative advantage에는 Simple Policy Optimization (SPO)를 사용",
    aspoSPOFormulaDesc: "FPO++는 \\(\\hat{A}_t<0\\)인 action에 대해 PPO clipping 대신 SPO objective를 쓴다. 단순히 gradient를 0으로 만드는 것이 아니라, ratio가 1에서 멀어질수록 quadratic penalty가 커져 다시 trust region 안쪽으로 끌어온다.",
    aspoSPOFormula: "\\[\\psi_{\\mathrm{SPO}}(\\rho_\\theta,\\hat{A}_t)=\\rho_\\theta\\hat{A}_t-\\frac{|\\hat{A}_t|}{2\\epsilon_{\\mathrm{clip}}}(\\rho_\\theta-1)^2\\]",
    aspoPiecewiseFormulaTitle: "Asymmetric Simple Policy Optimization (ASPO): advantage sign에 따라 objective를 바꿈",
    aspoPiecewiseFormulaDesc: "\\(\\hat{A}_t\\ge 0\\)이면 좋은 action을 더 잘 만들도록 PPO clipping을 그대로 쓰고, \\(\\hat{A}_t<0\\)이면 CFM loss를 과하게 키우지 않도록 SPO를 쓴다. 그래서 trust region이 positive/negative 방향에 대해 비대칭이 된다.",
    aspoPiecewiseFormula: "\\[\\psi_{\\mathrm{ASPO}}(\\rho_\\theta,\\hat{A}_t)=\\begin{cases}\\psi_{\\mathrm{PPO}}(\\rho_\\theta,\\hat{A}_t), & \\hat{A}_t \\ge 0,\\\\\\psi_{\\mathrm{SPO}}(\\rho_\\theta,\\hat{A}_t), & \\hat{A}_t < 0.\\end{cases}\\]",
    aspoPiecewiseNote: "FPO++에서는 위 식의 \\(\\rho_\\theta\\) 자리에 앞에서 본 sample별 ratio \\(\\hat{\\rho}^{(i)}_{\\mathrm{FPO++}}(\\theta)\\)를 넣는다. 즉 각 CFM sample마다 ratio를 만들고, advantage sign에 따라 PPO 또는 SPO 방식으로 trust region을 적용한다.",
    aspoObjectiveFormulaTitle: "FPO++ objective",
    aspoObjectiveFormulaDesc: "최종적으로는 하나의 action \\(a_t\\)에서 뽑은 여러 CFM sample에 대해 ASPO 값을 더해 policy를 업데이트한다.",
    aspoObjectiveFormula: "\\[\\max_\\theta\\ \\mathbb{E}_{\\pi_{\\theta_{\\mathrm{old}}}}\\left[\\sum_{i=1}^{N_{\\mathrm{mc}}}\\psi_{\\mathrm{ASPO}}\\left(\\hat{\\rho}^{(i)}_{\\mathrm{FPO++}}(\\theta),\\hat{A}_t\\right)\\right]\\]",
    aspoObjectiveNote: "직관적으로는 positive advantage 쪽에서는 좋은 action을 더 잘 따라가게 하고, negative advantage 쪽에서는 action likelihood를 너무 공격적으로 낮추다가 entropy가 무너지는 것을 막는 역할을 한다."
  },
  en: {
    back: "← Back to RL notes",
    badge: "FPO++ Notes",
    title: "FPO++",
    subtitle: "Improved Flow Policy Optimization for robot control.",
    introKicker: "Introduction",
    introTitle: "FPO solves the likelihood issue, so why FPO++?",
    introP1: "Robot control commonly relies on policy gradient methods such as PPO, which use action likelihoods for policy updates. This works well when the policy distribution is simple, such as a Gaussian policy with tractable likelihoods.",
    introP2: "Flow policies can represent richer and multimodal action distributions, but computing action likelihood requires tracking volume changes in the flow field, which is too expensive for reinforcement learning loops.",
    introP3: "FPO addresses this issue by avoiding explicit likelihood computation with the conditional flow matching loss. However, while vanilla FPO worked in simpler synthetic settings, it became unstable on high-DoF robotics tasks.",
    introItem1Title: "FPO++ Algorithm",
    introItem1Desc: "FPO++ adds per-sample ratio clipping and an asymmetric trust region to vanilla FPO, making training more stable for challenging robot control tasks.",
    introItem2Title: "Robot Control Validation",
    introItem2Desc: "The paper shows FPO++ working for legged locomotion, humanoid motion tracking, and both single-arm and bimanual manipulation, including training from scratch, sim-to-real transfer, and fine-tuning pretrained policies.",
    introItem3Title: "Algorithmic Choice Analysis",
    introItem3Desc: "It ablates the proposed objective changes and also studies test-time sampling strategies used for evaluation and sim-to-real transfer.",
    introItem4Title: "Training Dynamics Analysis",
    introItem4Desc: "It analyzes how FPO++ improves quadruped gaits compared to Gaussian PPO under the same rewards, and how it becomes more robust to base policy choice during fine-tuning.",
    relatedKicker: "Related Work",
    relatedTitle: "What line of work does FPO++ build on?",
    relatedP1: "The paper uses Related Work not just as a list of prior papers, but as the background that explains why FPO++ is needed. The core gap is between PPO-style methods that work well in robot control and flow/diffusion policies that can represent more expressive action distributions.",
    relatedItem1Title: "Policy Gradients and PPO",
    relatedItem1Desc: "PPO is a standard choice for continuous robot control. It is simple to implement, performs strongly in practice, and does not require differentiable rewards or environment dynamics. However, the policy update still depends on action likelihoods.",
    relatedItem2Title: "Flow/Diffusion Policies",
    relatedItem2Desc: "Flow and diffusion models can represent complex distributions in continuous action spaces, which makes them powerful for imitation learning and robot manipulation. Most of these systems, however, are trained from expert action labels rather than learning new behaviors online from rewards alone.",
    relatedItem3Title: "RL for Generative Policies",
    relatedItem3Desc: "Recent work has started combining diffusion or flow policies with RL, but many approaches depend on sampling-noise likelihoods, unrolled denoising steps, or specific architectures. The FPO line is different because conditional flow matching bypasses likelihood computation entirely.",
    relatedP2: "This gives FPO++ a clear role. We want online reward-based RL like PPO, but with a more expressive flow policy instead of a Gaussian policy. If FPO bypasses the likelihood problem, FPO++ focuses on making that idea stable enough for real high-DoF robot control.",
    methodKicker: "Improved Flow Policy Optimization",
    methodTitle: "FPO++ Algorithm",
    methodP1: "This section is easier to read in two parts. Part A reviews how vanilla FPO connects PPO-style policy gradients to flow policies, and Part B shows what FPO++ changes to make robot control training more stable.",
    prelimKicker: "A. Preliminaries",
    prelimTitle: "FPO Basics",
    prelimDesc: "FPO aims to train flow-parameterized policies with policy gradients without explicit likelihoods. Directly computing action likelihoods requires tracking volume changes in the flow, which is too expensive inside an RL loop.",
    prelimP1: "The starting point is PPO. PPO forms an action likelihood ratio \\(\\rho_\\theta\\) between the current policy and the old policy, then optimizes a clipped objective so the ratio does not change too aggressively.",
    ppoObjectiveTitle: "PPO clipped objective",
    ppoObjectiveDesc: "When the advantage is positive, increasing the ratio raises the probability of a good action; when it is negative, the ratio is pushed down. Clipping keeps the update from becoming too large.",
    ppoObjectiveFormula: "\\[\\psi_{\\mathrm{PPO}}(\\rho_\\theta,\\hat{A}_t)=\\min\\left(\\rho_\\theta\\hat{A}_t,\\,\\mathrm{clip}(\\rho_\\theta,1\\pm\\epsilon_{\\mathrm{clip}})\\hat{A}_t\\right)\\]",
    ppoRatioTitle: "PPO optimization and ratio",
    ppoRatioDesc: "The full objective maximizes the expectation under rollouts from the old policy. The ratio is the current policy likelihood divided by the old policy likelihood.",
    ppoOptimizeFormula: "\\[\\max_\\theta\\ \\mathbb{E}_{\\pi_{\\theta_{\\mathrm{old}}}}\\left[\\psi_{\\mathrm{PPO}}(\\rho_\\theta,\\hat{A}_t)\\right]\\]",
    ppoRatioFormula: "\\[\\rho_\\theta=\\frac{\\pi_\\theta(a_t\\mid o_t)}{\\pi_{\\theta_{\\mathrm{old}}}(a_t\\mid o_t)}\\]",
    prelimFormulaTitle: "FPO ratio approximation",
    prelimFormulaDesc: "For flow policies, the likelihood ratio is hard to compute directly. FPO replaces the PPO ratio with an exponential of the old/current CFM loss difference.",
    prelimFormula: "\\[\\hat{\\rho}_{\\mathrm{FPO}}(\\theta)=\\exp\\left(\\hat{\\mathcal{L}}_{\\mathrm{CFM},\\theta_{\\mathrm{old}}}(a_t;o_t)-\\hat{\\mathcal{L}}_{\\mathrm{CFM},\\theta}(a_t;o_t)\\right)\\]",
    cfmInterpTitle: "CFM interpolation and target velocity",
    cfmInterpDesc: "To compute the CFM loss, FPO samples an intermediate point \\(a_{\\tau_i}\\) between the action and noise, then defines the target velocity at that point.",
    cfmInterpFormula: "\\[a_{\\tau_i}=\\tau_i a_t+(1-\\tau_i)\\epsilon_i,\\qquad u_{\\tau_i}=a_t-\\epsilon_i\\]",
    cfmLossTitle: "CFM loss definition",
    cfmLossDesc: "The loss measures how well the policy velocity prediction matches the target velocity, averaged across Monte Carlo samples.",
    cfmLossFormula: "\\[\\begin{aligned}\\hat{\\mathcal{L}}_{\\mathrm{CFM},\\theta}(a_t;o_t)&=\\frac{1}{N_{\\mathrm{mc}}}\\sum_{i=1}^{N_{\\mathrm{mc}}}\\left\\lVert \\hat{v}_{\\theta}(a_{\\tau_i},\\tau_i;o_t)-u_{\\tau_i}\\right\\rVert_2^2\\end{aligned}\\]",
    cfmLossNote: "A lower \\(\\hat{\\mathcal{L}}_{\\mathrm{CFM}}\\) means the model explains that action path better. In the FPO ratio, this is used like an increase in likelihood.",
    prelimProofLink: "See the FPO notes for the FPO ratio derivation",
    prelimP2: "Because flow policies make \\(\\pi_\\theta(a_t\\mid o_t)\\) difficult to compute directly, FPO places \\(\\hat{\\rho}_{\\mathrm{FPO}}\\) where PPO would use \\(\\rho_\\theta\\). If the CFM loss decreases, FPO treats that as moving in the direction of higher action likelihood, enabling updates that push probability flow toward high-advantage actions.",
    fpoPlusKicker: "B. FPO++",
    fpoPlusTitle: "What FPO++ Changes",
    fpoPlusP1: "Vanilla FPO showed promise on synthetic benchmarks, but it became unstable on high-DoF robot control tasks. FPO++ adds two stabilizing changes to the objective. First, the per-sample ratio makes clipping more fine-grained; then the asymmetric trust region constrains update directions more carefully.",
    fpoPlusItem1Title: "Per-sample ratio",
    fpoPlusItem1Desc: "Instead of averaging samples first and forming one ratio as in vanilla FPO, FPO++ computes a separate ratio for each CFM sample so clipping can act more precisely.",
    fpoPlusItem2Title: "Asymmetric trust region",
    fpoPlusItem2Desc: "The second change follows here. FPO++ does not constrain positive-advantage and negative-advantage updates in the same way; it treats the directions that can destabilize flow policy training more carefully.",
    perSampleVisualTitle: "Per-sample ratio at a glance",
    perSampleVisualDesc: "For one action \\(a_t\\), CFM draws multiple \\((\\tau_i,\\epsilon_i)\\) samples. Vanilla FPO averages these samples first and clips one ratio, while FPO++ forms and clips a ratio for each sample.",
    perSampleOldTitle: "Vanilla FPO",
    perSampleOldAverage: "Average CFM losses first",
    perSampleOldRatio: "One ratio per action",
    perSampleOldClip: "Clip once",
    perSampleNewTitle: "FPO++",
    perSampleNewRatio: "Ratio per sample",
    perSampleNewAdvantage: "Shared advantage",
    perSampleNewClip: "Clip each sample",
    perSampleNewAverage: "Average clipped terms",
    perSampleVisualTakeaway: "The key change is that clipping moves from the whole action down to each individual CFM sample. Samples outside the trust region can be blocked while still using samples that remain valid for learning.",
    perSampleOldFormulaTitle: "Vanilla FPO: one ratio after averaging",
    perSampleOldFormulaDesc: "Vanilla FPO first averages the loss differences across CFM samples, then applies the exponential. This creates one ratio for the whole action.",
    perSampleOldFormula: "\\[\\hat{\\rho}_{\\mathrm{FPO}}(\\theta)=\\exp\\left(\\frac{1}{N_{\\mathrm{mc}}}\\sum_{i=1}^{N_{\\mathrm{mc}}}\\left(\\ell_{\\theta_{\\mathrm{old}}}^{(i,t)}-\\ell_{\\theta}^{(i,t)}\\right)\\right)\\]",
    perSampleNewFormulaTitle: "FPO++: one ratio per sample",
    perSampleNewFormulaDesc: "FPO++ forms a ratio for each sample before averaging. The samples share the same \\(\\hat{A}_t\\), but clipping is applied separately to each \\(\\hat{\\rho}^{(i)}_{\\mathrm{FPO++}}\\).",
    perSampleNewFormula: "\\[\\hat{\\rho}_{\\mathrm{FPO++}}^{(i)}(\\theta)=\\exp\\left(\\ell_{\\theta_{\\mathrm{old}}}^{(i,t)}-\\ell_{\\theta}^{(i,t)}\\right)\\]",
    perSampleFormulaNote: "Here, \\(\\ell_{\\theta}^{(i,t)}=\\left\\lVert \\hat{v}_{\\theta}(a_{\\tau_i},\\tau_i;o_t)-(a_t-\\epsilon_i)\\right\\rVert_2^2\\), and \\((i,t)\\) denotes the \\(i\\)-th CFM sample at time step \\(t\\).",
    aspoSPOFormulaTitle: "Use Simple Policy Optimization (SPO) for negative advantages",
    aspoSPOFormulaDesc: "For actions with \\(\\hat{A}_t<0\\), FPO++ uses the SPO objective instead of PPO clipping. Rather than zeroing the gradient, the quadratic penalty grows as the ratio moves away from 1 and pulls it back toward the trust region.",
    aspoSPOFormula: "\\[\\psi_{\\mathrm{SPO}}(\\rho_\\theta,\\hat{A}_t)=\\rho_\\theta\\hat{A}_t-\\frac{|\\hat{A}_t|}{2\\epsilon_{\\mathrm{clip}}}(\\rho_\\theta-1)^2\\]",
    aspoPiecewiseFormulaTitle: "Asymmetric Simple Policy Optimization (ASPO): switch objectives by advantage sign",
    aspoPiecewiseFormulaDesc: "When \\(\\hat{A}_t\\ge 0\\), ASPO keeps PPO clipping so the policy can better reproduce good actions. When \\(\\hat{A}_t<0\\), it uses SPO to avoid increasing the CFM loss too aggressively. This makes the trust region asymmetric across positive and negative directions.",
    aspoPiecewiseFormula: "\\[\\psi_{\\mathrm{ASPO}}(\\rho_\\theta,\\hat{A}_t)=\\begin{cases}\\psi_{\\mathrm{PPO}}(\\rho_\\theta,\\hat{A}_t), & \\hat{A}_t \\ge 0,\\\\\\psi_{\\mathrm{SPO}}(\\rho_\\theta,\\hat{A}_t), & \\hat{A}_t < 0.\\end{cases}\\]",
    aspoPiecewiseNote: "In FPO++, the \\(\\rho_\\theta\\) in this expression is replaced by the per-sample ratio \\(\\hat{\\rho}^{(i)}_{\\mathrm{FPO++}}(\\theta)\\). In other words, each CFM sample gets its own ratio, and the trust region uses PPO or SPO depending on the sign of the advantage.",
    aspoObjectiveFormulaTitle: "FPO++ objective",
    aspoObjectiveFormulaDesc: "Finally, the policy update sums the ASPO terms over the CFM samples drawn for each action \\(a_t\\).",
    aspoObjectiveFormula: "\\[\\max_\\theta\\ \\mathbb{E}_{\\pi_{\\theta_{\\mathrm{old}}}}\\left[\\sum_{i=1}^{N_{\\mathrm{mc}}}\\psi_{\\mathrm{ASPO}}\\left(\\hat{\\rho}^{(i)}_{\\mathrm{FPO++}}(\\theta),\\hat{A}_t\\right)\\right]\\]",
    aspoObjectiveNote: "Intuitively, positive advantages still encourage the policy to better follow good actions, while negative advantages avoid pushing action likelihoods down so aggressively that the flow policy collapses in entropy."
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
    indicator.textContent = index === 0 ? "−" : "+";

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
      indicator.textContent = isOpen ? "−" : "+";

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
