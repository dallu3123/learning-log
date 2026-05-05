const translations = {
  ko: {
    back: "← Back to Humanoid notes",
    badge: "BeyondMimic 정리",
    title: "BeyondMimic",
    subtitle: "From Motion Tracking to Versatile Humanoid Control via Guided Diffusion.",
    introKicker: "Introduction",
    introTitle: "BeyondMimic은 어떤 문제에서 출발하는가?",
    introP1: "BeyondMimic은 휴머노이드가 사람처럼 민첩하고 자연스럽게 움직이는 것뿐 아니라, 배운 동작들을 조합해서 새로운 task까지 해결할 수 있어야 한다는 문제에서 출발한다.",
    introP2: "기존 방법들은 각각 뚜렷한 한계를 가진다. Model-based control은 계산을 다루기 쉽지만, 단순화된 동역학 때문에 움직임이 제한적이고 부자연스러워지기 쉽다. RL 기반 humanoid control은 걷기, 달리기, 계단 오르기 같은 행동을 만들 수 있지만, 보통 task마다 reward를 새로 설계해야 하고 인간다운 움직임을 직접 reward로 표현하기 어렵다.",
    introP3: "Human motion imitation 계열은 자연스러운 동작을 만들 수 있지만, 특정 motion이나 task에 묶이기 쉽다. 즉, 학습한 motion을 넘어 새로운 상황에서 여러 skill을 자연스럽게 조합하는 능력이 부족하다.",
    introItem1Title: "Compact motion tracking formulation",
    introItem1Desc: "복잡한 reward shaping이나 과도한 domain randomization 대신, 로봇 actuation과 시스템 구현을 정확히 맞추고 단순한 reward 구조로 다양한 human motion을 하나의 세팅에서 학습한다.",
    introItem2Title: "Guided diffusion for test-time adaptation",
    introItem2Desc: "Diffusion model이 배운 motion skill의 분포를 prior처럼 사용하고, classifier guidance를 통해 inference time에 새로운 objective를 만족하도록 future state/action trajectory를 조정한다.",
    introP4: "결국 BeyondMimic의 핵심 메시지는 사람 motion을 따라 하는 humanoid를 넘어서, 사람 motion에서 배운 skill들을 조합해 새로운 task까지 zero-shot으로 해결하는 versatile humanoid control framework를 만드는 것이다.",
    resultsKicker: "Results",
    resultsTitle: "BeyondMimic은 무엇을 보여줬는가?",
    resultsP1: "Results는 크게 두 가지를 보여준다. 첫째, BeyondMimic이 다양한 human motion을 하나의 motion tracking formulation으로 안정적으로 학습할 수 있는지, 둘째, 이렇게 배운 skill을 diffusion guidance로 조합해 학습하지 않은 task까지 수행할 수 있는지다.",
    resultsItem1Title: "Scalable learning from human motions",
    resultsItem1Desc: "약 2.5시간 분량의 다양한 human motion을 학습하고, 시뮬레이션에서는 전체 motion을 검증한다. 실제 로봇에는 대표 clip들을 배포해 single-leg balance, get-up, kick, jump, cartwheel, dance, running 같은 동작이 sim-to-real로 전이됨을 보인다.",
    resultsItem2Title: "Human-level agility and naturalness",
    resultsItem2Desc: "야외의 불균일한 지면에서도 cartwheel이나 martial-arts motion 같은 고난도 동작을 수행한다. walking/running에서는 ground reaction force와 user study를 통해 기존 controller보다 더 인간답고 자연스럽게 보인다는 결과를 제시한다.",
    resultsItem3Title: "Versatile humanoid control",
    resultsItem3Desc: "학습된 skill을 diffusion prior로 사용하고, test time에 cost guidance를 적용해 joystick teleoperation, waypoint navigation, obstacle avoidance, motion inpainting 같은 unseen task를 별도 retraining 없이 수행한다.",
    resultsP2: "즉 Results의 핵심은 BeyondMimic이 단순히 motion을 잘 따라 하는 데서 끝나지 않는다는 점이다. 다양한 인간 동작을 실제 휴머노이드에 안정적으로 옮기고, 그 동작들을 새 목표에 맞게 재조합해 범용적인 humanoid control로 확장한다.",
    discussionKicker: "Discussion",
    discussionTitle: "BeyondMimic의 의미와 한계",
    discussionP1: "Discussion에서는 BeyondMimic이 humanoid control의 기존 가정을 어떻게 바꾸는지 강조한다. 핵심은 heavy domain randomization, motion-specific tuning, 복잡한 reward shaping 없이도 다양한 인간 동작을 실제 로봇으로 옮기고, 이를 새로운 task에 맞게 합성할 수 있다는 점이다.",
    discussionItem1Title: "Motion-specific policy를 넘어섬",
    discussionItem1Desc: "하나의 원칙적인 RL formulation과 공유 hyperparameter로 수많은 motion을 학습하고, motion마다 따로 튜닝하지 않아도 민첩성과 자연스러움을 유지한다.",
    discussionItem2Title: "Imitation을 넘어 task-directed control로 확장",
    discussionItem2Desc: "모델은 motion sequence를 단순히 외우는 것이 아니라, denoising 과정의 guidance를 통해 future trajectory를 조정하면서 obstacle avoidance, joystick command, recovery 같은 새로운 목표를 해결한다.",
    discussionItem3Title: "General-purpose humanoid control로 가는 기반",
    discussionItem3Desc: "학습은 task-agnostic이고 labeled data가 필요하지 않기 때문에, 새로운 human motion data를 추가하면 skill set을 계속 확장할 수 있다. 논문은 이를 humanoid behavior foundation model로 가는 한 단계로 본다.",
    discussionP2: "한계도 분명하다. Diffusion model은 state estimation 품질에 영향을 받고, 현재 0.64초 정도의 짧은 horizon은 장기 계획에는 부족하다. 또한 history conditioning이 안정성에는 도움이 되지만 반복적인 motion pattern에 갇히게 만들 수 있고, guidance weight는 아직 task마다 가볍게 조정해야 한다.",
    discussionP3: "따라서 앞으로는 sensor fusion이나 learned estimator로 state estimation을 개선하고, 더 긴 horizon의 planning과 세밀한 diffusion control을 다루는 방향이 중요하다. Supervised fine-tuning이나 adapter-style control layer 같은 방법도 fine-grained trajectory control을 위해 고려할 수 있다.",
    methodsKicker: "Materials and Methods",
    methodsTitle: "Overview",
    methodsP1: "BeyondMimic의 목표는 여러 unseen downstream task에서 민첩하고 자연스러운 humanoid control을 수행하는 것이다. 이를 위해 전체 시스템을 크게 두 단계 pipeline으로 구성한다.",
    methodsItem1Title: "Scalable Human Motion Tracking via RL",
    methodsItem1Desc: "다양한 human motion을 휴머노이드가 따라 하도록 RL policy를 학습한다. 각 motion은 개별 policy로 학습하지만, reward, hyperparameter, training setup은 공유하는 one-recipe-fits-all 방식을 사용한다. 덕분에 motion마다 새로 튜닝하지 않고도 human-level agility와 naturalness를 유지한다.",
    methodsItem2Title: "Versatile Humanoid Control via Guided Diffusion",
    methodsItem2Desc: "첫 단계에서 배운 다양한 motion skill을 하나의 diffusion model로 통합한다. 이 모델은 다음 action만 예측하는 것이 아니라 future state와 action trajectory를 함께 예측하는 latent state-action diffusion model이며, classifier guidance를 통해 test time에 새로운 objective에 맞게 조정된다.",
    methodsItem3Title: "Zero-shot sim-to-real deployment",
    methodsItem3Desc: "학습은 모두 simulation에서 이루어지고, 추가 system identification 없이 실제 로봇에 zero-shot으로 배포된다. Real-time C++ deployment framework가 policy inference와 hardware execution을 낮은 latency로 동기화해 sim-to-real gap을 줄인다.",
    methodsP2: "요약하면 RL motion tracking으로 다양한 human skill을 안정적으로 얻고, VAE와 latent state-action diffusion으로 그 skill들을 통합한 뒤, classifier guidance를 통해 unseen task에 맞게 online으로 조합한다.",
    trackingKicker: "Scalable Human Motion Tracking via RL",
    trackingTitle: "Motion tracking을 MDP로 정의하기",
    trackingP1: "이 파트는 다양한 human motion을 휴머노이드가 안정적으로 따라 하게 만드는 RL formulation을 설명한다. 핵심은 motion마다 reward나 hyperparameter를 새로 설계하지 않고, 같은 MDP와 같은 학습 recipe를 여러 motion에 적용하는 것이다.",
    trackingMdpTitle: "MDP objective",
    trackingMdpDesc: "Policy는 observation을 보고 action을 내고, reference motion을 얼마나 잘 따라갔는지에 따라 reward를 받는다. RL은 이 누적 reward의 기대값을 최대화한다.",
    trackingMdpFormula: "\\[\\max_{\\pi}\\ \\mathbb{E}_{\\pi}\\left[\\sum_{t=0}^{T}\\gamma^t r_t\\right]\\]",
    trackingRefTitle: "Reference motion",
    trackingRefDesc: "Retargeting된 human motion은 generalized position과 velocity로 표현된다. Forward kinematics를 적용하면 각 body link의 pose와 twist를 얻을 수 있다.",
    trackingRefFormula: "\\[q^{ref}=(p^{ref},R^{ref},\\theta^{ref})\\in \\mathbb{R}^{3}\\times SO(3)\\times\\mathbb{R}^{n_{jnt}}\\]",
    trackingVelFormula: "\\[\\nu^{ref}=(v^{ref},\\omega^{ref},\\dot{\\theta}^{ref})\\in \\mathbb{R}^{3}\\times\\mathbb{R}^{3}\\times\\mathbb{R}^{n_{jnt}}\\]",
    trackingBodyFormula: "\\[T_b^{ref}=(p_b^{ref},R_b^{ref}),\\qquad V_b^{ref}=(v_b^{ref},\\omega_b^{ref})\\]",
    trackingAnchorTitle: "Anchor-centered tracking objective",
    trackingAnchorDesc: "실제 로봇은 perturbation이나 sim-to-real mismatch 때문에 global drift가 생길 수 있다. 그래서 모든 body를 world frame에서 딱딱하게 맞추지 않고, anchor 기준의 상대 pose를 따라가게 한다.",
    trackingAnchorFormula: "\\[T_{anchor}^{des}=T_{anchor}^{ref},\\qquad T_b^{des}=A(T_b^{ref},T_{anchor}),\\quad b\\ne b_{anchor}\\]",
    trackingTwistFormula: "\\[V_b^{des}=V_b^{ref}\\]",
    trackingAnchorNote: "즉, motion style은 보존하되 global drift는 어느 정도 허용해서 robustness와 sim-to-real transfer를 높인다.",
    trackingObsTitle: "Observation and action",
    trackingObsDesc: "Observation은 reference phase와 robot proprioception으로 구성된다. Action은 normalized joint command이고, joint position setpoint로 변환되어 low-level PD controller에 전달된다.",
    trackingObsFormula: "\\[o=[\\psi,\\ e_{anchor},\\ V_{imu},\\ \\theta-\\theta_0,\\ \\dot{\\theta},\\ a_{last}]\\]",
    trackingActionFormula: "\\[\\theta^{sp}=\\theta_0+\\alpha\\odot a,\\qquad a\\in\\mathbb{R}^{n_{jnt}}\\]",
    trackingRewardTitle: "Reward",
    trackingRewardDesc: "Target body들의 position, orientation, linear velocity, angular velocity error를 Gaussian-shaped score로 바꿔 task reward를 만들고, 여기에 세 가지 regularization만 더한다.",
    trackingScoreFormula: "\\[r(\\bar{e}_s,\\sigma_s)=\\exp\\left(-\\frac{\\bar{e}_s}{\\sigma_s^2}\\right),\\qquad s\\in\\{p,R,v,\\omega\\}\\]",
    trackingTaskFormula: "\\[r_{task}=\\sum_{s\\in\\{p,R,v,\\omega\\}}r(\\bar{e}_s,\\sigma_s)\\]",
    trackingTotalFormula: "\\[r=r_{task}-\\lambda_l r_{limit}-\\lambda_s r_{smooth}-\\lambda_c r_{contact}\\]",
    trackingP2: "정리하면 policy는 reference phase와 robot proprioception을 보고 joint setpoint action을 출력한다. Reward는 target body들의 pose/velocity tracking을 중심으로 하되, joint limit, smoothness, self-contact만 최소한으로 regularize한다. Anchor-centered objective는 motion style을 유지하면서도 global drift에 robust하게 만드는 장치다.",
    diffusionKicker: "Versatile Humanoid Control via Guided Diffusion",
    diffusionTitle: "배운 skill을 새로운 task에 맞게 조합하기",
    diffusionP1: "앞 단계의 RL motion tracking은 다양한 human motion을 실제 로봇이 따라 할 수 있는 skill로 만든다. 하지만 motion tracking만으로는 학습 때 본 motion을 재생하는 데 머물기 쉽다. 이 파트의 목표는 배운 skill들을 하나의 generative model에 넣고, test time에 새로운 objective를 주면 그 목표에 맞게 skill을 조합해 future trajectory를 만들어내는 것이다.",
    diffusionItem1Title: "Why diffusion?",
    diffusionItem1Desc: "Diffusion model은 걷기, 뛰기, 차기, 회전, cartwheel 같은 multimodal motion distribution을 담을 수 있다. 또한 denoising 과정에서 classifier guidance를 사용하면, 생성 결과를 새로운 task objective 방향으로 밀 수 있다.",
    diffusionItem2Title: "State-action co-diffusion",
    diffusionItem2Desc: "Waypoint, joystick, obstacle avoidance 같은 objective는 보통 action이 아니라 future state에 정의된다. 그래서 BeyondMimic은 action만 생성하지 않고, future state와 action trajectory를 함께 생성하는 latent state-action diffusion model을 사용한다.",
    diffusionItem3Title: "VAE latent space",
    diffusionItem3Desc: "Humanoid trajectory는 차원이 크기 때문에, 먼저 VAE가 state/action trajectory를 compact한 latent representation으로 압축한다. Diffusion model은 이 latent space에서 skill distribution을 학습한다.",
    diffusionTrajectoryTitle: "Future state-action trajectory",
    diffusionTrajectoryDesc: "Diffusion sample은 단일 action이 아니라 짧은 horizon의 future states와 actions를 함께 포함한다. 그래서 future state에 task cost를 걸 수 있고, 그에 맞는 action도 함께 생성된다.",
    diffusionTrajectoryFormula: "\\[\\tau_t=(s_{t:t+H},a_{t:t+H})\\]",
    diffusionVaeTitle: "VAE compression",
    diffusionVaeDesc: "VAE는 고차원 trajectory를 latent code로 압축하고, decoder가 다시 trajectory/action 표현으로 복원한다.",
    diffusionVaeFormula: "\\[z=E(x),\\qquad \\hat{x}=D(z)\\]",
    diffusionGuidanceTitle: "Classifier guidance at test time",
    diffusionGuidanceDesc: "Inference 중에는 task-specific cost의 gradient를 사용해 predicted trajectory를 조정한다. 직관적으로는 그럴듯한 human motion prior를 유지하면서 목표를 만족하는 방향으로 sample을 밀어준다.",
    diffusionCostFormula: "\\[G(\\hat{\\tau}_t)=\\sum_{i=0}^{H}\\left\\lVert P_{xy,i}(\\hat{\\tau}_t)-g_p\\right\\rVert^2\\]",
    diffusionUpdateFormula: "\\[\\hat{\\tau}\\leftarrow\\hat{\\tau}-\\eta\\nabla_{\\hat{\\tau}}G(\\hat{\\tau})\\]",
    diffusionP2: "결과적으로 diffusion model은 human motion prior 역할을 하고, guidance는 task objective 역할을 한다. 이 구조 덕분에 joystick teleoperation, waypoint navigation, obstacle avoidance, motion inpainting, skill transition 같은 task를 별도 task-specific training 없이 수행할 수 있다."
  },
  en: {
    back: "← Back to Humanoid notes",
    badge: "BeyondMimic Notes",
    title: "BeyondMimic",
    subtitle: "From Motion Tracking to Versatile Humanoid Control via Guided Diffusion.",
    introKicker: "Introduction",
    introTitle: "What problem does BeyondMimic start from?",
    introP1: "BeyondMimic starts from the idea that humanoids should not only move with human-like agility and naturalness, but also compose learned motions to solve new tasks.",
    introP2: "Existing approaches each have clear limits. Model-based control keeps computation manageable, but simplified dynamics can make motions restricted and unnatural. RL-based humanoid control can produce behaviors such as walking, running, and stair climbing, but it usually needs task-specific reward design, and human-likeness is difficult to express directly as a reward.",
    introP3: "Human motion imitation can produce natural motions, but it is often tied to specific motions or tasks. In other words, it lacks the ability to naturally compose multiple skills in situations beyond the motions seen during training.",
    introItem1Title: "Compact motion tracking formulation",
    introItem1Desc: "Instead of relying on complex reward shaping or excessive domain randomization, BeyondMimic carefully models robot actuation and system implementation, then learns diverse human motions with a simple reward structure under one shared setup.",
    introItem2Title: "Guided diffusion for test-time adaptation",
    introItem2Desc: "The diffusion model uses the distribution of learned motion skills as a prior, then uses classifier guidance at inference time to adjust future state/action trajectories toward new objectives.",
    introP4: "The core message is that BeyondMimic moves beyond humanoids that merely imitate human motions: it builds a versatile humanoid control framework that composes skills learned from human motion to solve new tasks zero-shot.",
    resultsKicker: "Results",
    resultsTitle: "What does BeyondMimic demonstrate?",
    resultsP1: "The Results section shows two main things. First, BeyondMimic can stably learn diverse human motions with one motion tracking formulation. Second, the learned skills can be composed with diffusion guidance to solve tasks that were not trained directly.",
    resultsItem1Title: "Scalable learning from human motions",
    resultsItem1Desc: "The system trains on about 2.5 hours of diverse human motions and validates the full motion set in simulation. Representative clips are deployed on the physical robot, showing sim-to-real transfer for single-leg balance, get-up motions, kicks, jumps, cartwheels, dance, and running.",
    resultsItem2Title: "Human-level agility and naturalness",
    resultsItem2Desc: "The robot performs difficult motions such as cartwheels and martial-arts movements even on uneven outdoor terrain. For walking and running, ground reaction force comparisons and a user study indicate that the motions appear more human-like and natural than the baseline controller.",
    resultsItem3Title: "Versatile humanoid control",
    resultsItem3Desc: "The learned skills are used as a diffusion prior, and test-time cost guidance enables unseen tasks such as joystick teleoperation, waypoint navigation, obstacle avoidance, and motion inpainting without task-specific retraining.",
    resultsP2: "The key point is that BeyondMimic does more than track motions well. It transfers diverse human motions to a real humanoid and recomposes those skills toward new objectives, extending motion imitation into versatile humanoid control.",
    discussionKicker: "Discussion",
    discussionTitle: "What BeyondMimic means, and where it is limited",
    discussionP1: "The Discussion emphasizes how BeyondMimic changes some assumptions in humanoid control. The key point is that diverse human motions can be transferred to real robots and synthesized for new tasks without heavy domain randomization, motion-specific tuning, or complex reward shaping.",
    discussionItem1Title: "Beyond motion-specific policies",
    discussionItem1Desc: "A single principled RL formulation with shared hyperparameters learns many motions while preserving agility and naturalness, without retuning each motion separately.",
    discussionItem2Title: "From imitation to task-directed control",
    discussionItem2Desc: "The model does not merely memorize motion sequences. Through guidance during denoising, it adjusts future trajectories to solve new objectives such as obstacle avoidance, joystick commands, and recovery.",
    discussionItem3Title: "A path toward general-purpose humanoid control",
    discussionItem3Desc: "Because training is task-agnostic and does not require labeled data, new human motion data can continually expand the skill set. The paper frames this as a step toward foundation models for humanoid behavior.",
    discussionP2: "The approach still has limitations. The diffusion model depends on state estimation quality, and the current 0.64-second horizon is too short for long-horizon planning. History conditioning improves stability but can trap the model in repetitive motion patterns, and guidance weights still need lightweight task-level tuning.",
    discussionP3: "Future work should improve state estimation through sensor fusion or learned estimators, extend planning over longer horizons, and support finer diffusion control. Methods such as supervised fine-tuning or adapter-style control layers could help enable fine-grained trajectory control.",
    methodsKicker: "Materials and Methods",
    methodsTitle: "Overview",
    methodsP1: "BeyondMimic aims to achieve agile and natural humanoid control across unseen downstream tasks. The full system is organized as a two-stage pipeline.",
    methodsItem1Title: "Scalable Human Motion Tracking via RL",
    methodsItem1Desc: "The first stage trains RL policies that make the humanoid track diverse human motions. Each motion is trained with its own policy, but the reward, hyperparameters, and training setup are shared in a one-recipe-fits-all framework, preserving human-level agility and naturalness without retuning each motion.",
    methodsItem2Title: "Versatile Humanoid Control via Guided Diffusion",
    methodsItem2Desc: "The second stage integrates the learned motion skills into one diffusion model. Rather than predicting only the next action, it predicts future state and action trajectories as a latent state-action diffusion model, then uses classifier guidance at test time to steer them toward new objectives.",
    methodsItem3Title: "Zero-shot sim-to-real deployment",
    methodsItem3Desc: "Training is performed entirely in simulation, then deployed zero-shot to the real robot without additional system identification. A real-time C++ deployment framework synchronizes policy inference and hardware execution with low latency, reducing the sim-to-real gap.",
    methodsP2: "In short, RL motion tracking provides a stable library of human skills, VAE and latent state-action diffusion integrate those skills, and classifier guidance composes them online for unseen tasks.",
    trackingKicker: "Scalable Human Motion Tracking via RL",
    trackingTitle: "Formulating motion tracking as an MDP",
    trackingP1: "This section describes the RL formulation that lets the humanoid track diverse human motions reliably. The key idea is to use the same MDP and training recipe across motions, without redesigning rewards or hyperparameters for each motion.",
    trackingMdpTitle: "MDP objective",
    trackingMdpDesc: "The policy observes the current state, outputs an action, and receives reward based on how well it tracks the reference motion. RL maximizes the expected cumulative reward.",
    trackingMdpFormula: "\\[\\max_{\\pi}\\ \\mathbb{E}_{\\pi}\\left[\\sum_{t=0}^{T}\\gamma^t r_t\\right]\\]",
    trackingRefTitle: "Reference motion",
    trackingRefDesc: "The retargeted human motion is represented by generalized positions and velocities. Applying forward kinematics gives each body link's pose and twist.",
    trackingRefFormula: "\\[q^{ref}=(p^{ref},R^{ref},\\theta^{ref})\\in \\mathbb{R}^{3}\\times SO(3)\\times\\mathbb{R}^{n_{jnt}}\\]",
    trackingVelFormula: "\\[\\nu^{ref}=(v^{ref},\\omega^{ref},\\dot{\\theta}^{ref})\\in \\mathbb{R}^{3}\\times\\mathbb{R}^{3}\\times\\mathbb{R}^{n_{jnt}}\\]",
    trackingBodyFormula: "\\[T_b^{ref}=(p_b^{ref},R_b^{ref}),\\qquad V_b^{ref}=(v_b^{ref},\\omega_b^{ref})\\]",
    trackingAnchorTitle: "Anchor-centered tracking objective",
    trackingAnchorDesc: "Real robots can drift globally because of perturbations and sim-to-real mismatch. Instead of rigidly matching every body in the world frame, BeyondMimic tracks body poses relative to an anchor.",
    trackingAnchorFormula: "\\[T_{anchor}^{des}=T_{anchor}^{ref},\\qquad T_b^{des}=A(T_b^{ref},T_{anchor}),\\quad b\\ne b_{anchor}\\]",
    trackingTwistFormula: "\\[V_b^{des}=V_b^{ref}\\]",
    trackingAnchorNote: "This preserves motion style while allowing benign global drift, improving robustness and sim-to-real transfer.",
    trackingObsTitle: "Observation and action",
    trackingObsDesc: "The observation combines reference phase and robot proprioception. The action is a normalized joint command that is converted into a joint position setpoint for the low-level PD controller.",
    trackingObsFormula: "\\[o=[\\psi,\\ e_{anchor},\\ V_{imu},\\ \\theta-\\theta_0,\\ \\dot{\\theta},\\ a_{last}]\\]",
    trackingActionFormula: "\\[\\theta^{sp}=\\theta_0+\\alpha\\odot a,\\qquad a\\in\\mathbb{R}^{n_{jnt}}\\]",
    trackingRewardTitle: "Reward",
    trackingRewardDesc: "Position, orientation, linear velocity, and angular velocity errors over target bodies are converted into Gaussian-shaped scores for the task reward, with only three additional regularization terms.",
    trackingScoreFormula: "\\[r(\\bar{e}_s,\\sigma_s)=\\exp\\left(-\\frac{\\bar{e}_s}{\\sigma_s^2}\\right),\\qquad s\\in\\{p,R,v,\\omega\\}\\]",
    trackingTaskFormula: "\\[r_{task}=\\sum_{s\\in\\{p,R,v,\\omega\\}}r(\\bar{e}_s,\\sigma_s)\\]",
    trackingTotalFormula: "\\[r=r_{task}-\\lambda_l r_{limit}-\\lambda_s r_{smooth}-\\lambda_c r_{contact}\\]",
    trackingP2: "In short, the policy uses reference phase and robot proprioception to output joint setpoint actions. The reward mainly tracks target body poses and velocities, with minimal regularization for joint limits, smoothness, and self-contact. The anchor-centered objective preserves style while making the policy robust to global drift.",
    diffusionKicker: "Versatile Humanoid Control via Guided Diffusion",
    diffusionTitle: "Composing learned skills for new tasks",
    diffusionP1: "The RL motion tracking stage turns diverse human motions into skills that the real robot can execute. But motion tracking alone mostly reproduces motions seen during training. This stage places those skills into one generative model so that, at test time, a new objective can guide the model to compose skills into a future trajectory.",
    diffusionItem1Title: "Why diffusion?",
    diffusionItem1Desc: "A diffusion model can represent multimodal motion distributions such as walking, running, kicking, turning, and cartwheeling. During denoising, classifier guidance can also push generated samples toward a new task objective.",
    diffusionItem2Title: "State-action co-diffusion",
    diffusionItem2Desc: "Objectives such as waypoints, joystick commands, and obstacle avoidance are usually defined over future states rather than raw actions. BeyondMimic therefore generates future state and action trajectories together with a latent state-action diffusion model.",
    diffusionItem3Title: "VAE latent space",
    diffusionItem3Desc: "Humanoid trajectories are high-dimensional, so a VAE first compresses state/action trajectories into compact latent representations. The diffusion model learns the skill distribution in this latent space.",
    diffusionTrajectoryTitle: "Future state-action trajectory",
    diffusionTrajectoryDesc: "A diffusion sample contains future states and actions over a short horizon, not just a single action. This lets the model apply task costs to future states while generating corresponding actions.",
    diffusionTrajectoryFormula: "\\[\\tau_t=(s_{t:t+H},a_{t:t+H})\\]",
    diffusionVaeTitle: "VAE compression",
    diffusionVaeDesc: "The VAE compresses high-dimensional trajectories into latent codes, and the decoder reconstructs the trajectory/action representation.",
    diffusionVaeFormula: "\\[z=E(x),\\qquad \\hat{x}=D(z)\\]",
    diffusionGuidanceTitle: "Classifier guidance at test time",
    diffusionGuidanceDesc: "At inference time, the gradient of a task-specific cost adjusts the predicted trajectory. Intuitively, the model keeps the human motion prior while nudging the sample toward the objective.",
    diffusionCostFormula: "\\[G(\\hat{\\tau}_t)=\\sum_{i=0}^{H}\\left\\lVert P_{xy,i}(\\hat{\\tau}_t)-g_p\\right\\rVert^2\\]",
    diffusionUpdateFormula: "\\[\\hat{\\tau}\\leftarrow\\hat{\\tau}-\\eta\\nabla_{\\hat{\\tau}}G(\\hat{\\tau})\\]",
    diffusionP2: "As a result, the diffusion model acts as a human motion prior, while guidance acts as the task objective. This enables joystick teleoperation, waypoint navigation, obstacle avoidance, motion inpainting, and skill transitions without task-specific training."
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
