export type OpsVersionRow = {
  releaseTrack: string;
  date: string;
  version: string;
  name: string;
  meaning: string;
  why: string;
  landing: string;
  status: 'PLANNED' | 'UNVERIFIED' | 'PASS' | 'FAIL';
  availability: string;
  runRef: string;
  evidenceRefs: string[];
};

export type WorkflowRow = {
  createdUpdated: string;
  idPath: string;
  workflow: string;
  trigger: string;
  purpose: string;
  objective: string;
  useCase: string;
  triggerWhen: string;
  source: string;
  mode: string;
};

export type StepBlock = {
  step: 1 | 2 | 3 | 4;
  title: string;
  status: 'PENDING' | 'PASS' | 'FAIL';
  lines: string[];
  artifacts: string[];
};

export type VersionDetail = {
  releaseTrack: string;
  versionKey: string;
  date: string;
  version: string;
  name: string;
  meaning: string;
  why: string;
  purpose: string;
  targets: { pass: string; fail: string };
  workflowName: string;
  workflowUseCase: string;
  status: string;
  verificationStatus: string;
  dataMode: string;
  updatedAt: string;
  digest: string;
  steps: StepBlock[];
  inputs: Array<{ path: string; digest: string; summary: string; note: string }>;
  outputs: Array<{ path: string; digest: string; summary: string; note: string }>;
  references: Array<{ title: string; path: string; desc: string }>;
  contractSummary: {
    sourceOfTruth: string;
    verdict: string;
    reasonCode: string;
    dataSource: string;
    dataDate: string;
  };
};

type HistoricalVersionSeed = {
  date: string;
  version: string;
  name: string;
  status: 'PLANNED' | 'PASS';
  evidencePath: string;
  extraEvidencePaths?: string[];
  meaning?: string;
  why?: string;
  landing?: string;
};

const historicalVersionSeeds: HistoricalVersionSeed[] = [
  { date: '2026-01-31', version: 'v2.0.5', name: 'Repo Type Map SSOT + Soft Enum', status: 'PASS', evidencePath: 'milestones/20260131_v2.0.5_repo_type_map_ssot.md' },
  { date: '2026-01-30', version: 'v2.0.4', name: 'Init Plan Presets', status: 'PASS', evidencePath: 'milestones/20260130_v2.0.4_init_plan_presets.md' },
  { date: '2026-01-30', version: 'v2.0.3', name: 'Repo-Checks Runtime Hint', status: 'PASS', evidencePath: 'milestones/20260130_v2.0.3_repo_checks_runtime_hint.md' },
  { date: '2026-01-29', version: 'v2.0.2', name: 'Nightly Governance Recovery', status: 'PASS', evidencePath: 'milestones/20260129_v2.0.2_nightly_governance_recovery.md' },
  {
    date: '2026-01-29',
    version: 'v2.0',
    name: 'The Agent OS',
    status: 'PASS',
    evidencePath: 'milestones/20260129_v2.0_the_agent_os.md',
    extraEvidencePaths: [
      'milestones/20260129_omega_acceptance_summary.md',
      'milestones/AAA_roadmap.md',
      'milestones/AAA_ROADMAP_V2_V3_ENTERPRISE.md',
    ],
  },
  { date: '2026-01-29', version: 'v1.9', name: 'Supreme Court Interface', status: 'PASS', evidencePath: 'milestones/20260129_v1.9_supreme_court_interface.md' },
  { date: '2026-01-29', version: 'v1.8', name: 'Observability 2.0', status: 'PASS', evidencePath: 'milestones/20260129_v1.8_observability_2.0.md' },
  { date: '2026-01-29', version: 'v1.7', name: 'Federated Governance', status: 'PASS', evidencePath: 'milestones/20260129_v1.7_federated_governance.md' },
  { date: '2026-01-29', version: 'v1.6', name: 'Multi-Agent Orchestration', status: 'PASS', evidencePath: 'milestones/20260129_v1.6_Multi_Agent_Orchestration.md' },
  { date: '2026-01-28', version: 'v1.5', name: 'Self-Healing Engine', status: 'PASS', evidencePath: 'milestones/20260128_v1.5_Self_Healing_Engine.md' },
  { date: '2026-01-28', version: 'v1.4', name: 'Policy Distribution', status: 'PASS', evidencePath: 'milestones/20260128_v1.4_Policy_Distribution.md' },
  { date: '2026-01-28', version: 'v1.3', name: 'Governance Compiler', status: 'PASS', evidencePath: 'milestones/20260128_v1.3_Governance_Compiler.md' },
  { date: '2026-01-28', version: 'v1.2', name: 'Semantic Registry', status: 'PASS', evidencePath: 'milestones/20260128_v1.2_semantic_registry.md' },
  { date: '2026-01-28', version: 'v1.1', name: 'Semantic Era', status: 'PASS', evidencePath: 'milestones/20260128_v1.1_semantic_era.md' },
  { date: '2026-01-24', version: 'v1.0', name: 'Enterprise Delivery', status: 'PASS', evidencePath: 'milestones/20260124_v1.0_architecture_definition.md' },
  { date: '2026-01-24', version: 'v0.9', name: 'Governance Compliance Dashboard', status: 'PLANNED', evidencePath: 'milestones/20260124_v0.9_architecture_definition.md' },
  { date: '2026-01-24', version: 'v0.8', name: 'Marketplace Assets', status: 'PASS', evidencePath: 'milestones/20260124_v0.8_architecture_definition.md' },
  { date: '2026-01-23', version: 'v0.7', name: 'Architecture Definition', status: 'PASS', evidencePath: 'milestones/20260123_v0.7_architecture_definition.md' },
  { date: '2026-01-22', version: 'v0.6', name: 'Architecture Definition', status: 'PASS', evidencePath: 'milestones/20260122_v0.6_architecture_definition.md' },
  { date: '2026-01-22', version: 'v0.5', name: 'Architecture Definition', status: 'PASS', evidencePath: 'milestones/20260122_v0.5_architecture_definition.md' },
  { date: '2026-01-21', version: 'v0.4', name: 'Architecture Definition', status: 'PASS', evidencePath: 'milestones/20260121_v0.4_architecture_definition.md' },
  { date: '2026-01-21', version: 'v0.3', name: 'Architecture Definition', status: 'PASS', evidencePath: 'milestones/20260121_v0.3_architecture_definition.md' },
  { date: '2026-01-20', version: 'v0.2', name: 'Architecture Definition', status: 'PASS', evidencePath: 'milestones/20260120_v0.2_architecture_definition.md' },
  { date: '2026-01-18', version: 'v0.1', name: 'Executable Architecture', status: 'PASS', evidencePath: 'milestones/20260118_v0.1_executable_architecture.md' },
];

const legacyRegistryContextByVersion: Record<string, { meaning: string; why: string; landing: string }> = {
  'v2.0.5': {
    meaning: '以 repo_type_map.json 建立 nightly repo_type 單一真相，加入缺失 mapping fail-fast 與 unknown soft WARN。',
    why: '修復 repo_type 漂移造成的治理失真，確保 nightly 稽核可穩定重放。',
    landing: 'internal/development/plans/2026-01-31-v2.0.5-repo-type-map-plan.md',
  },
  'v2.0.4': {
    meaning: '以 presets + default_preset 升級 init 計畫，預設 Governance-Native 並強制包含 .github。',
    why: '讓新專案初始化具一致治理預設並保留 legacy fallback，降低導入分歧。',
    landing: 'internal/development/plans/2026-01-30-v2.0.4-init-plan-presets.md',
  },
  'v2.0.3': {
    meaning: '將「repo-checks 必跑」提示內建到 CLI 成功輸出，補強 post-init 治理引導。',
    why: '降低人/AI 在初始化後遺漏治理驗證步驟的風險。',
    landing: 'internal/development/plans/2026-01-30-v2.0.3-repo-checks-remote-hints-plan.md',
  },
  'v2.0.2': {
    meaning: '修復 Nightly 治理鏈路與 Dashboard 同步失敗，強化 repo_type 錨點與 runbook 穩定性。',
    why: '確保 nightly evidence、dashboard 與治理檢查可持續產出且可追溯。',
    landing: 'internal/development/plans/2026-01-29-v2.0.2-dashboard-visual-governance-plan.md',
  },
  'v2.0': {
    meaning: '完成 Agent OS 核心整合，建立 Guardian / Semantic / Constitution 三位一體治理運行面。',
    why: '將 AAA 從治理工具升級為可自我治理作業系統。',
    landing: 'internal/development/plans/2026-01-29-v2.0-init-plan.md',
  },
  'v1.9': {
    meaning: '交付 Supreme Court Interface（aaa court），建立人機共治裁決機制。',
    why: '避免 agent deadlock，在規則衝突時保留人類主權裁決通道。',
    landing: 'internal/development/plans/2026-01-29-v1.9-init-plan.md',
  },
  'v1.8': {
    meaning: '導入 Observability 2.0：MetricStore 時序化、RiskLedger 與趨勢視覺化。',
    why: '把治理從靜態快照升級為可觀測歷史趨勢，支援風險回溯。',
    landing: 'internal/development/plans/2026-01-29-v1.8-init-plan.md',
  },
  'v1.7': {
    meaning: '完成 Federated Governance：remote audit 與 ruleset inheritance。',
    why: '讓 AAA 從單 repo 工具升級為可跨 repo 聯邦治理協定。',
    landing: 'internal/development/plans/2026-01-29-v1.7-init-plan.md',
  },
  'v1.6': {
    meaning: '實作 Multi-Agent Orchestration 鎖協調層（LockManager + TTL）。',
    why: '避免多代理並行時的競態與死鎖，確保治理流程可協同。',
    landing: 'internal/development/plans/2026-01-29-v1.6-init-plan.md',
  },
  'v1.5': {
    meaning: '交付 Self-Healing Engine 與語義檢查，支持自動修復與意圖級治理檢核。',
    why: '讓治理由被動檢測升級為可主動修復，縮短故障恢復路徑。',
    landing: 'internal/development/plans/2026-01-28-v1.5-init-plan.md',
  },
  'v1.4': {
    meaning: '建立 Policy Distribution 基礎設施，落地 registry-based policy propagation。',
    why: '讓治理更新可向下游自動傳播，形成可繼承效果。',
    landing: 'internal/development/plans/2026-01-28-v1.4-init-plan.md',
  },
  'v1.3': {
    meaning: '完成 Governance Compiler 與技術債償還，提升核心穩定度。',
    why: '將政策定義轉為可執行治理檢查，同步補足核心模組品質。',
    landing: 'internal/development/plans/2026-01-28-v1.3-init-plan.md',
  },
  'v1.2': {
    meaning: '交付 Semantic Registry 與 Version Handshake，建立語義註冊與版本相容防線。',
    why: '讓能力查詢與版本兼容可機械驗證，避免舊版客戶端誤接入。',
    landing: 'internal/development/plans/2026-01-28-v1.2-init-plan.md',
  },
  'v1.1': {
    meaning: '完成 Semantic Era（Pillar A/B）：自動化里程碑流與 AI-native 介面。',
    why: '建立語義化診斷與格式協定，讓 AAA 可被 agent 原生消費。',
    landing: 'internal/development/plans/2026-01-28-v1.1-ai-native-interface-plan.md',
  },
  'v1.0': {
    meaning: '完成 Gate-First Enterprise Governance：org ruleset 強制 gate 與 release integrity。',
    why: '把治理由建議升級為可強制執行，建立企業級交付信任鏈。',
    landing: 'internal/development/plans/2026-01-24-v1.0-implementation-plan.md',
  },
  'v0.9': {
    meaning: '完成合規率儀表板 MVP（nightly JSON + MD/HTML + threshold gate）。',
    why: '建立每日治理營運可視化與門檻化決策基礎。',
    landing: 'internal/development/plans/2026-01-24-aaa-v0.9-implementation-plan.md',
  },
  'v0.8': {
    meaning: '建立可插拔資產市場（Pack build/index/install/checks）。',
    why: '讓治理能力模組化交付並可重用擴充。',
    landing: 'internal/development/plans/2026-01-24-aaa-v0.8-plan.md',
  },
  'v0.7': {
    meaning: '落地 SSOT checks 與 repo_type 持久化治理。',
    why: '把治理依據統一到可驗證單一真相。',
    landing: 'internal/development/plans/2026-01-23-aaa-v0.7-plan.md',
  },
  'v0.6': {
    meaning: '完成 agent safety 邊界與安全測試基線。',
    why: '先建立安全與失敗模式防線，再擴展自動化能力。',
    landing: 'internal/development/plans/2026-01-22-aaa-v0.6-action-registry-plan.md',
  },
  'v0.5': {
    meaning: '完成 runbooks runtime、schema/registry 與可組合執行基線。',
    why: '讓治理流程可執行、可重放、可擴展。',
    landing: 'internal/development/plans/2026-01-22-aaa-v0.5-runtime-engine-plan.md',
  },
  'v0.4': {
    meaning: '完成 SOP 與 CLI contract 對齊，導入 post-init audit 閉環。',
    why: '確保專案啟動後能持續驗證治理一致性。',
    landing: 'internal/development/plans/2026-01-21-aaa-v0.4-implementation-plan.md',
  },
  'v0.3': {
    meaning: '完成 onboarding 一致性治理與 CI 穩定化。',
    why: '避免文件與流程漂移，建立可持續交付基線。',
    landing: 'internal/development/plans/2026-01-21-aaa-v0.3-plan.md',
  },
  'v0.2': {
    meaning: '完成治理架構改進摘要與強化措施落地。',
    why: '建立決策樹與可治理/可路由/可降級的基礎結構。',
    landing: 'internal/development/milestones/completion-reports/aaa_v0.2_improvement_report_20260120_0322.md',
  },
  'v0.1': {
    meaning: '完成可執行架構與治理模板初始基線。',
    why: '作為後續版本演進的最小可運行治理核心。',
    landing: 'internal/development/milestones/completion-reports/v0.1_completion_report_20260118_1235.md',
  },
};

const historicalBackfilledVersions: OpsVersionRow[] = historicalVersionSeeds.map((item) => {
  const registryCtx = legacyRegistryContextByVersion[item.version];
  return {
  releaseTrack: 'historical_milestone',
  date: item.date,
  version: item.version,
  name: item.name,
  meaning: item.meaning ?? registryCtx?.meaning ?? `歷史里程碑回填：${item.name}`,
  why: item.why ?? registryCtx?.why ?? '補齊歷史版本可追溯性，避免僅有單一新流程版本可查。',
  landing: item.landing ?? registryCtx?.landing ?? 'governance:historical_milestone',
  status: item.status === 'PLANNED' ? 'PLANNED' : 'PASS',
  availability: 'historical-backfilled-row',
  runRef: 'legacy:N/A',
  evidenceRefs: [item.evidencePath, ...(item.extraEvidencePaths ?? [])],
  };
});

function parseVersionParts(version: string): number[] {
  return version
    .replace(/^v/i, '')
    .split('.')
    .map((part) => Number.parseInt(part, 10))
    .map((part) => (Number.isFinite(part) ? part : 0));
}

function compareVersionDesc(a: string, b: string): number {
  const aParts = parseVersionParts(a);
  const bParts = parseVersionParts(b);
  const maxLen = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < maxLen; i += 1) {
    const av = aParts[i] ?? 0;
    const bv = bParts[i] ?? 0;
    if (av !== bv) {
      return bv - av;
    }
  }
  return 0;
}

const unsortedVersions: OpsVersionRow[] = [
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.17',
    name: 'Agent Delegation and Task Lifecycle Runtime Baseline',
    meaning: '將 task / delegation / handoff 收斂為 shared execution lifecycle，固定 verification closure 與 ownership scope。',
    why: '讓 AAA 有可驗證的 task lifecycle，而不是只有 command 被執行過的痕跡，並阻擋未驗證 handoff 完成。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-17-agent-delegation-and-task-lifecycle-runtime.yml#23973580941',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.17-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.17-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.17-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.17-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.16',
    name: 'Workflow and Runbook Orchestration Runtime Baseline',
    meaning: '將單 command orchestration 擴成 workflow / runbook runtime，固定 step graph、handoff artifact 與 workflow-level gate。',
    why: '讓 AAA 能以 shared runtime 方式執行多步任務，而不只是單點 command，同時阻擋 step pass 直接替代 workflow gate。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-16-workflow-and-runbook-orchestration-runtime.yml#23973393809',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.16-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.16-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.16-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.16-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.15',
    name: 'Structured Output and Result Normalization Plane',
    meaning: '將 runtime result 收斂為 shared normalization plane，固定 normalized result envelope 與 output classes。',
    why: '讓 shared runtime 不再依賴 path-specific output，並防止 prose-only result 奪權。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-15-structured-output-and-result-normalization-plane.yml#23973216576',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.15-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.15-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.15-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.15-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.14',
    name: 'Runtime Budget, Retry, and Recovery Control',
    meaning: '將 runtime budget、retry 與 recovery 收斂為 shared control plane。',
    why: '讓 AAA 從「能跑」提升到「失敗時能有治理地重試、退避、停下來」，並阻擋 fallback recursion 與 provider business expansion。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-14-runtime-budget-retry-and-recovery-control.yml#23972955667',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.14-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.14-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.14-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.14-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.13',
    name: 'Session Persistence and Transcript Compaction Baseline',
    meaning: '將 session persistence、transcript boundary 與 compaction-safe replay 收斂為 shared session plane。',
    why: '讓 AAA 不只會跑 turn，也能可信保存、壓縮、重放，並阻擋 transcript 奪取 canonical truth。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-13-session-persistence-and-transcript-compaction.yml#23972678968',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.13-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.13-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.13-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.13-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.12',
    name: 'Tool Progress and Runtime Event Stream',
    meaning: '將 tool progress 與 runtime progress 收斂為 shared event stream，固定 progress/result/evidence signal 分層。',
    why: '建立 shared execution signal plane，讓後續 workflow、delegation 與 operator surface 可共同消費 progress/event，並阻擋 raw stream record 冒充正式 evidence。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-12-tool-progress-and-runtime-event-stream.yml#23972546415',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.12-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.12-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.12-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.12-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.11',
    name: 'Permission and Authorization Runtime Gate',
    meaning: '將既有 authority / permission model 收斂為 shared runtime gate，固定 decision mode 與 interactive/non-interactive boundary。',
    why: '把 authority model 變成執行前可判定、可記錄、可審計的 runtime gate，避免 permission 判斷退回 path-local heuristic。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-11-permission-and-authorization-runtime-gate.yml#23972342747',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.11-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.11-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.11-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.11-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.10',
    name: 'Query Orchestration Runtime Baseline',
    meaning: '將 shared dispatch、result/evidence gate 與 session snapshot 收斂成最小可重放的 query orchestration runtime loop。',
    why: '把既有 law 與前兩條 consumer 進一步收斂成 shared orchestration loop，而不是停在零散 validators。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-10-query-orchestration-runtime.yml#23971728965',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.10-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.10-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.10-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.10-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.9',
    name: 'Session Context Snapshot Runtime Baseline',
    meaning: '將既有 context law 收斂為 session context snapshot runtime plane，固定 snapshot、reload 與 replay 邊界。',
    why: '讓 context 不再只是前置驗證，而成為 session runtime 的正式輸入面，並阻擋 snapshot 反向奪取 canonical truth。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-9-session-context-snapshot.yml#23971546565',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.9-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.9-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.9-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.9-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.8',
    name: 'Result Artifact Eligibility and Evidence Promotion Gate',
    meaning: '將 runtime result 收斂為 artifact eligibility 與 evidence promotion gate，固定 promotion decision source。',
    why: '不是所有 result 都能進 evidence，更不是所有 evidence 都能 promotion；本版將守門條件變成可執行 runtime gate。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-8-result-evidence-promotion-gate.yml#23971353018',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.8-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.8-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.8-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.8-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.7',
    name: 'Shared Command Dispatch Runtime Baseline',
    meaning: '將 `readiness-inspect` 與 `repo-check` 兩條既有 adoption consumer 收斂到 shared command dispatch runtime。',
    why: '讓 command registry 真正成為共同 runtime 入口，避免 runtime 還停留在 path-specific wiring。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-7-shared-command-dispatch.yml#23968268431',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.7-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.7-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.7-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.7-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.5',
    name: 'Runtime Adoption Baseline',
    meaning: '將 `readiness-inspect` 提升成第一條可執行 runtime adoption path，串接 capability、target、truth 與 readiness 四段治理鏈。',
    why: '讓前四版治理底座第一次共同生效，避免後續 CLI 或 agent runtime 再退回 ad hoc command flow。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-5-runtime-adoption-baseline.yml#23961062180',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.5-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.5-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.5-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.5-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.4',
    name: 'Session Query Orchestration + Readiness State',
    meaning: '將 session-facing readiness state 轉成可執行 validator，固定 orchestration mode、surface、state store 與 gating checks。',
    why: '避免 readiness 判斷只靠操作者感覺，讓後續 operator surface 與 query orchestration 可依 readiness-law fail-closed。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-4-session-readiness-state.yml#23959496478',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.4-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.4-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.4-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.4-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.3',
    name: 'Context Assembly Preflight',
    meaning: '將 context assembly 與 source precedence 轉成可執行 preflight validator，阻擋 local logs 非法升格為 current truth。',
    why: '避免 runtime convenience、generated summaries 或 local operation logs 污染 canonical truth，讓 truth-law 可以 fail-closed。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-3-context-runtime-preflight.yml#23959028416',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.3-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.3-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.3-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.3-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.2',
    name: 'Multi-Repo Worktree Identity Guard',
    meaning: '將 multi-repo/worktree identity law 轉成可執行 validator 與 runtime guard baseline，明確 canonical repo root 與合法 worktree target。',
    why: '避免 workspace root、repo root、worktree instance 混用，讓 target-law 從一開始就可驗證與可 fail-closed。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-2-multi-repo-worktree-identity.yml#23958123189',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.2-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.2-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.2-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.2-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-04-04',
    version: 'v2.1.1',
    name: 'Tool Contract Executable Adoption + Command Registry Binding',
    meaning: '將 tool contract 與 command registry 綁成可執行 validator 與 machine-parseable adoption bundle。',
    why: '避免 canonical 規格退化為 prose-only 描述，並為後續 validator、dispatcher、preflight 建立 capability-law 地基。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tools@.github/workflows/v2-1-1-tool-command-adoption.yml#23957470365',
    evidenceRefs: [
      'internal/development/reviews/2026-04-04-v2.1.1-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-04-04-v2.1.1-step4-mcp-evidence.md',
      'internal/development/reviews/2026-04-04-v2.1.1-step4-exit-checklist.md',
      'internal/development/reviews/2026-04-04-v2.1.1-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-03-01',
    version: 'v2.1.0',
    name: 'Guide Parity Gate (Core vs Template)',
    meaning: '建立 workflow law 雙來源（core/template）長期一致的 CI parity gate。',
    why: '避免兩份 operate_maintain_guide 長期漂移，造成繼承專案語義分叉。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'PASS',
    availability: 'step4-pass-mcp9003-gate-satisfied',
    runRef:
      'gh-actions:ai-asset-architecture/aaa-tpl-docs@.github/workflows/v2-1-0-guide-parity-gate.yml#22546764942',
    evidenceRefs: [
      'internal/development/reviews/2026-03-02-v2.1.0-step4-dashboard-baseline.md',
      'internal/development/reviews/2026-03-02-v2.1.0-step4-mcp-evidence.md',
      'internal/development/reviews/2026-03-02-v2.1.0-step4-exit-checklist.md',
      'internal/development/reviews/2026-03-02-v2.1.0-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'legacy_trust_boundary',
    date: '2026-01-29',
    version: 'v2.0.1',
    name: 'Trust Boundary',
    meaning: '建立 AAA 信任邊界基線（Identity/Scope/Replay/Revocation）與證據鏈。',
    why: '作為 Connectivity Era 安全基座，確保 agent 連線與授權可驗證。',
    landing: 'governance:trust_boundary_v1',
    status: 'PASS',
    availability: 'historical-backfilled-row',
    runRef: 'legacy:N/A',
    evidenceRefs: [
      'milestones/20260129_v2.0.1_trust_boundary.md',
      'internal/development/milestones/completion-reports/aaa_v2.0.1_completion_report_20260129.md',
    ],
  },
  ...historicalBackfilledVersions,
];

export const versions: OpsVersionRow[] = [...unsortedVersions].sort((a, b) => compareVersionDesc(a.version, b.version));

export const workflows: WorkflowRow[] = [
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-17-agent-delegation-and-task-lifecycle-runtime.yml',
    workflow: 'v2.1.17 Agent Delegation and Task Lifecycle Runtime',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 delegation lifecycle runtime 可固定 task state、ownership scope、handoff evidence 與 verification closure。',
    objective: 'PASS：verification-required task 的 handoff closure 可被 validator 收斂；FAIL：未經 verification 即 handoff 完成、ownership 越界或 prose fallback 被阻擋。',
    useCase: 'v2.1.17 agent delegation and task lifecycle runtime smoke gate。',
    triggerWhen: 'delegation lifecycle runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-16-workflow-and-runbook-orchestration-runtime.yml',
    workflow: 'v2.1.16 Workflow and Runbook Orchestration Runtime',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 workflow/runtime validator 可固定 step dependency、handoff artifact、per-step outcome 與 workflow-level gate。',
    objective: 'PASS：workflow-level gate 與 per-step outcome 可被獨立收斂；FAIL：step pass 直接替代 gate、ungoverned handoff 或 prose fallback 被阻擋。',
    useCase: 'v2.1.16 workflow and runbook orchestration runtime smoke gate。',
    triggerWhen: 'workflow runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-15-structured-output-and-result-normalization-plane.yml',
    workflow: 'v2.1.15 Structured Output and Result Normalization Plane',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 normalized result envelope 可固定 shared output class、error/warning/artifact shape 與 normalized payload precedence。',
    objective: 'PASS：normalized result envelope 與 output classes 可被 validator 收斂；FAIL：path-specific artifact 奪權或 prose-only result 被阻擋。',
    useCase: 'v2.1.15 structured output and result normalization smoke gate。',
    triggerWhen: 'result normalization runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-14-runtime-budget-retry-and-recovery-control.yml',
    workflow: 'v2.1.14 Runtime Budget Retry and Recovery Control',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 runtime budget / retry / recovery control 可固定 budget envelope、failure class、retry/fallback boundary 與 stop condition。',
    objective: 'PASS：budget scope、failure class、retry path 與 stop condition 可被 validator 收斂；FAIL：provider business expansion、fallback recursion 或 prose fallback 被阻擋。',
    useCase: 'v2.1.14 runtime budget retry and recovery control smoke gate。',
    triggerWhen: 'runtime control、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-13-session-persistence-and-transcript-compaction.yml',
    workflow: 'v2.1.13 Session Persistence and Transcript Compaction',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 session persistence runtime 可固定 session store、transcript class、compaction boundary 與 replay input law，並拒絕 transcript 奪取 canonical truth。',
    objective: 'PASS：session store、transcript class、compaction boundary 與 replay input enum 可被 validator 收斂；FAIL：canonical truth promotion、audit reproducibility 缺口或 prose fallback 被阻擋。',
    useCase: 'v2.1.13 session persistence and transcript compaction smoke gate。',
    triggerWhen: 'session persistence runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-12-tool-progress-and-runtime-event-stream.yml',
    workflow: 'v2.1.12 Tool Progress and Runtime Event Stream',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 shared event stream runtime 可固定 progress/result/evidence signal 分層，並拒絕 raw stream record 被誤當正式 evidence artifact。',
    objective: 'PASS：event stream 只作 runtime signal 與 evidence source reference；FAIL：formal evidence artifact promotion、canonical truth promotion 或 prose fallback 被阻擋。',
    useCase: 'v2.1.12 tool progress and runtime event stream smoke gate。',
    triggerWhen: 'event stream runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-11-permission-and-authorization-runtime-gate.yml',
    workflow: 'v2.1.11 Permission and Authorization Runtime Gate',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 runtime permission gate 可把 authority / permission model 收斂為 shared execution gate，並固定 interactive 與 non-interactive boundary。',
    objective: 'PASS：decision mode、authority boundary 與 non-interactive gate 可被 validator 收斂；FAIL：未授權 allow、non-interactive prompt 要求或 primary law 增殖被阻擋。',
    useCase: 'v2.1.11 permission gate runtime smoke gate。',
    triggerWhen: 'permission gate runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-10-query-orchestration-runtime.yml',
    workflow: 'v2.1.10 Query Orchestration Runtime',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 query orchestration runtime 可把 shared dispatch、result/evidence gate 與 session snapshot 收斂為最小可重放 orchestration loop。',
    objective: 'PASS：request/turn lifecycle、write-back boundary 與 gating semantics 可被 validator 收斂；FAIL：promotion gate bypass、snapshot boundary bypass 或 primary law 增殖被阻擋。',
    useCase: 'v2.1.10 query orchestration runtime smoke gate。',
    triggerWhen: 'query orchestration runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-9-session-context-snapshot.yml',
    workflow: 'v2.1.9 Session Context Snapshot',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 session context snapshot runtime 可固定 snapshot、reload 與 replay 邊界，並拒絕 canonical truth promotion。',
    objective: 'PASS：snapshot/reload/replay semantics 與 writeback boundary 可被 validator 收斂；FAIL：implicit reload、replay without recheck 或 canonical truth promotion 被阻擋。',
    useCase: 'v2.1.9 session context snapshot smoke gate。',
    triggerWhen: 'snapshot runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-8-result-evidence-promotion-gate.yml',
    workflow: 'v2.1.8 Result Evidence Promotion Gate',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 result artifact eligibility 與 evidence promotion gate 可拒絕人工敘事單獨決策，並固定 promotion decision source。',
    objective: 'PASS：eligible/ineligible、promotion decision source 與 evidence gate 可被 validator 收斂；FAIL：manual review note、completion report 或 operator narrative 單獨決策 promotion 會被阻擋。',
    useCase: 'v2.1.8 result/evidence promotion gate smoke gate。',
    triggerWhen: 'promotion gate runtime、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-7-shared-command-dispatch.yml',
    workflow: 'v2.1.7 Shared Command Dispatch',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 shared command dispatch runtime 可把 `readiness-inspect` 與 `repo-check` 收斂到共同 routing、common output envelope 與 fail-closed exit semantics。',
    objective: 'PASS：shared dispatch 可穩定路由既有兩條 path，並維持 common envelope；FAIL：未登錄 command path、family expansion 或 fail-open exit semantics 被阻擋。',
    useCase: 'v2.1.7 shared command runtime adoption smoke gate。',
    triggerWhen: 'shared dispatch runtime、repo-check adoption validator、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-5-runtime-adoption-baseline.yml',
    workflow: 'v2.1.5 Runtime Adoption Baseline',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 `readiness-inspect` adoption validator 可串接 capability、target、truth 與 readiness 四段治理鏈，並拒絕 workspace-root 與 truth contamination。',
    objective: 'PASS：machine-parseable command binding、target legality、preflight 與 readiness output 可共同收斂；FAIL：workspace target、local truth promotion 或 readiness gating 缺口被阻擋。',
    useCase: 'v2.1.5 runtime-adoption baseline smoke gate。',
    triggerWhen: 'readiness-inspect validator、CLI binding、workflow smoke run 或 canonical fixtures 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-4-session-readiness-state.yml',
    workflow: 'v2.1.4 Session Readiness State',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 session readiness validator 可辨識合法 orchestration mode、readiness surface、state store 與 gating checks。',
    objective: 'PASS：readiness surface、state store 與 required checks 可被 validator 收斂；FAIL：invalid surface、缺少 required checks 或 gating 綁定錯誤。',
    useCase: 'v2.1.4 readiness-law baseline smoke gate。',
    triggerWhen: 'session readiness validator、CLI binding、workflow smoke run 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-3-context-runtime-preflight.yml',
    workflow: 'v2.1.3 Context Runtime Preflight',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 context runtime preflight validator 可辨識合法 current truth source、允許 supporting source，並阻擋 local logs 非法升格。',
    objective: 'PASS：canonical truth source 與 anti-contamination checks 可被 validator 收斂；FAIL：local_operation_logs 被提升為 current truth 或 preflight checks 缺失。',
    useCase: 'v2.1.3 truth-law 與 anti-contamination baseline smoke gate。',
    triggerWhen: 'context preflight validator、CLI binding、workflow smoke run 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-2-multi-repo-worktree-identity.yml',
    workflow: 'v2.1.2 Multi Repo Worktree Identity',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 multi-repo/worktree identity validator 可辨識 canonical repo root、拒絕 workspace-level target，並產生穩定 pass/fail 結果。',
    objective: 'PASS：canonical root 與 worktree target 可被 validator 收斂；FAIL：workspace-level target、缺 root 或未知 worktree target 被 fail-closed。',
    useCase: 'v2.1.2 target-law validator 與 runtime guard baseline smoke gate。',
    triggerWhen: 'identity validator、CLI binding、workflow smoke run 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-04-04 / 更新 2026-04-04',
    idPath: 'aaa-tools/.github/workflows/v2-1-1-tool-command-adoption.yml',
    workflow: 'v2.1.1 Tool Command Adoption',
    trigger: 'push(main) + workflow_dispatch',
    purpose: '驗證 aaa-tools 的 tool/command adoption validator 可執行，並能拒絕 prose-only binding。',
    objective: 'PASS：pass/fail bundles 產生穩定結果且 remote run 成功；FAIL：tool refs、authority map 或 evidence targets 無法被 validator 收斂。',
    useCase: 'v2.1.1 capability-law executable adoption 與 command binding smoke gate。',
    triggerWhen: 'tool-command adoption validator、CLI binding、workflow smoke run 變更時。',
    source: '來源：aaa-tools CI + aaa-tpl-docs canonical fixtures',
    mode: 'auto+manual',
  },
  {
    createdUpdated: '建立 2026-03-01 / 更新 2026-03-02',
    idPath: 'governance:operate_maintain_workflow_v2',
    workflow: 'Operate & Maintain 4-Step Workflow',
    trigger: 'manual dispatch + approval gate',
    purpose: '把版本開發流程固化為 Step1~Step4 並可機器審核。',
    objective: 'PASS：每步均有 exit checklist + evidence + run_ref；FAIL：任一步阻擋即不得宣稱完成。',
    useCase: 'AAA 核心與繼承專案做版本治理、交付審核、可回放證據檢查。',
    triggerWhen: '版本開發啟動、跨 repo 導入 workflow、release 前關卡驗收。',
    source: '來源：aaa-docs/bootstrap + aaa-tpl-docs',
    mode: '自動+手動',
  },
  {
    createdUpdated: '建立 2026-03-01 / 更新 2026-03-02',
    idPath: '.github/workflows/v2-1-0-guide-parity-gate.yml',
    workflow: 'Guide Parity Gate (Core vs Template)',
    trigger: 'pull_request + workflow_dispatch',
    purpose: '比對兩份 guide canonical sections，防止治理法規漂移。',
    objective: 'PASS：section digest 全匹配；FAIL：任一 section 漂移即 fail-closed。',
    useCase: '當 `aaa-docs` 或 `aaa-tpl-docs` guide 變更時自動守門。',
    triggerWhen: 'guide 文案調整、section 新增刪除、release 前一致性檢查。',
    source: '來源：aaa-tpl-docs CI',
    mode: '自動+手動',
  },
  {
    createdUpdated: '建立 2026-01-29 / 更新 2026-03-02',
    idPath: 'governance:legacy_trust_boundary_archive',
    workflow: 'Legacy Trust-Boundary Archive Workflow',
    trigger: 'historical backfill / index sync',
    purpose: '將既有 v2.0.1 Trust Boundary 以歷史軌方式納入現行 registry/detail。',
    objective: '讓 legacy 版本可在同一治理介面中可視、可追溯、可比對。',
    useCase: 'legacy_trust_boundary historical records。',
    triggerWhen: '歷史版本補齊、索引修復、治理追溯查核。',
    source: '來源：aaa-tpl-docs internal/development',
    mode: '手動回填 + 唯讀維護',
  },
  {
    createdUpdated: '建立 2026-01-18 / 更新 2026-03-02',
    idPath: 'governance:historical_milestone_archive',
    workflow: 'Legacy Milestone Archive Workflow',
    trigger: 'historical backfill / index sync',
    purpose: '將 v0.1~v2.0.5 既有 milestone 資產回填到版本清單與版本儀表板。',
    objective: '補齊歷史版本可追溯性，避免僅有新流程版本可查。',
    useCase: 'historical_milestone historical records。',
    triggerWhen: '歷史版本補齊、索引修復、治理追溯查核。',
    source: '來源：aaa-tpl-docs internal/development',
    mode: '手動回填 + 唯讀維護',
  },
];

const explicitVersionDetails: VersionDetail[] = [
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.17',
    date: '2026-04-04',
    version: 'v2.1.17',
    name: 'Agent Delegation and Task Lifecycle Runtime Baseline',
    meaning: '把 task state、ownership scope、handoff evidence 與 verification closure 從 Step1 contract 收斂為 shared execution lifecycle plane。',
    why: '讓 AAA 有可驗證的 task lifecycle 與 handoff closure，同時避免未驗證 delegation 結果被視為完成。',
    purpose: '驗證 Step1 到 Step4 對 agent delegation and task lifecycle runtime 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.17 detail 全部呈現一致 Step1~Step4 與 delegation lifecycle evidence。',
      fail: 'delegation lifecycle run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared delegation lifecycle plane 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T14:51:18+08:00',
    digest: 'sha256:aaa-v2-1-17-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'agent delegation and task lifecycle schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.17-agent-delegation-and-task-lifecycle-runtime-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.17-agent-delegation-and-task-lifecycle-runtime-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.17-agent-delegation-and-task-lifecycle-runtime-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.17-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 delegation lifecycle validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23973580941，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/agent_delegation_and_task_lifecycle_runtime.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_agent_delegation_and_task_lifecycle_runtime.py',
          'aaa-tools/.github/workflows/v2-1-17-agent-delegation-and-task-lifecycle-runtime.yml',
          'internal/development/reviews/2026-04-04-v2.1.17-agent-delegation-and-task-lifecycle-runtime-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.17-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 delegation lifecycle contracts 與 Step2 runtime/evidence 已封裝為 v2.1.17 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.17/agent-delegation-and-task-lifecycle-runtime/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.17/agent-delegation-and-task-lifecycle-runtime/result.json',
          'internal/development/evidence/v2.1.17/agent-delegation-and-task-lifecycle-runtime/index.json',
          'internal/development/evidence/v2.1.17/agent-delegation-and-task-lifecycle-runtime/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.17-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.17_agent_delegation_and_task_lifecycle_runtime.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.17 detail 可呈現 Step1~Step4 全區塊、artifacts 與 delegation lifecycle evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.17-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.17-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.17-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.17-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'aaa-tpl-docs/ops/index/version_index.md',
      verdict: 'PASS',
      reasonCode: 'step4-pass-mcp9003-gate-satisfied',
      dataSource: 'operate_maintain_workflow_v2',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.16',
    date: '2026-04-04',
    version: 'v2.1.16',
    name: 'Workflow and Runbook Orchestration Runtime Baseline',
    meaning: '把 step graph、handoff artifact、per-step outcome 與 workflow-level gate 從 Step1 contract 收斂為 shared workflow runtime plane。',
    why: '讓 AAA 能以 shared runtime 執行多步任務，同時避免用 step pass 隱性替代 workflow-level gate。',
    purpose: '驗證 Step1 到 Step4 對 workflow and runbook orchestration runtime 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.16 detail 全部呈現一致 Step1~Step4 與 workflow runtime evidence。',
      fail: 'workflow runtime run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared workflow/runbook runtime plane 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T14:41:28+08:00',
    digest: 'sha256:aaa-v2-1-16-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'workflow and runbook orchestration schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.16-workflow-and-runbook-orchestration-runtime-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.16-workflow-and-runbook-orchestration-runtime-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.16-workflow-and-runbook-orchestration-runtime-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.16-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 workflow runtime validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23973393809，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/workflow_and_runbook_orchestration_runtime.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_workflow_and_runbook_orchestration_runtime.py',
          'aaa-tools/.github/workflows/v2-1-16-workflow-and-runbook-orchestration-runtime.yml',
          'internal/development/reviews/2026-04-04-v2.1.16-workflow-and-runbook-orchestration-runtime-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.16-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 workflow contracts 與 Step2 runtime/evidence 已封裝為 v2.1.16 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.16/workflow-and-runbook-orchestration-runtime/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.16/workflow-and-runbook-orchestration-runtime/result.json',
          'internal/development/evidence/v2.1.16/workflow-and-runbook-orchestration-runtime/index.json',
          'internal/development/evidence/v2.1.16/workflow-and-runbook-orchestration-runtime/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.16-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.16_workflow_and_runbook_orchestration_runtime.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.16 detail 可呈現 Step1~Step4 全區塊、artifacts 與 workflow runtime evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.16-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.16-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.16-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.16-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'aaa-tpl-docs/ops/index/version_index.md',
      verdict: 'PASS',
      reasonCode: 'step4-pass-mcp9003-gate-satisfied',
      dataSource: 'operate_maintain_workflow_v2',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.15',
    date: '2026-04-04',
    version: 'v2.1.15',
    name: 'Structured Output and Result Normalization Plane',
    meaning: '把 normalized result envelope、artifact precedence 與 output classes 從 Step1 contract 收斂為 shared normalization plane。',
    why: '讓 shared runtime 的結果來源不再依賴 path-specific output，同時阻擋 prose-only result 與 artifact precedence grab。',
    purpose: '驗證 Step1 到 Step4 對 structured output and result normalization plane 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.15 detail 全部呈現一致 Step1~Step4 與 shared result normalization evidence。',
      fail: 'result normalization run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared result normalization plane 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T14:44:00+08:00',
    digest: 'sha256:aaa-v2-1-15-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'structured output normalization schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.15-structured-output-and-result-normalization-plane-plan.md',
          'internal/development/audits/2026-04-04-v2.1.15-structured-output-and-result-normalization-plane-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.15-structured-output-and-result-normalization-plane-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.15-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 result normalization validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23973216576，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/structured_output_and_result_normalization_plane.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_structured_output_and_result_normalization_plane.py',
          'aaa-tools/.github/workflows/v2-1-15-structured-output-and-result-normalization-plane.yml',
          'internal/development/reviews/2026-04-04-v2.1.15-structured-output-and-result-normalization-plane-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.15-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 result normalization contracts 與 Step2 runtime/evidence 已封裝為 v2.1.15 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.15/structured-output-and-result-normalization-plane/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.15/structured-output-and-result-normalization-plane/result.json',
          'internal/development/evidence/v2.1.15/structured-output-and-result-normalization-plane/index.json',
          'internal/development/evidence/v2.1.15/structured-output-and-result-normalization-plane/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.15-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.15_structured_output_and_result_normalization_plane.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.15 detail 可呈現 Step1~Step4 全區塊、artifacts 與 shared result normalization evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.15-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.15-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.15-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.15-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'aaa-tpl-docs/ops/index/version_index.md',
      verdict: 'PASS',
      reasonCode: 'step4-pass-mcp9003-gate-satisfied',
      dataSource: 'operate_maintain_workflow_v2',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.14',
    date: '2026-04-04',
    version: 'v2.1.14',
    name: 'Runtime Budget, Retry, and Recovery Control',
    meaning: '把 runtime budget、retry 與 recovery 從 Step1 contract 收斂為 shared control plane。',
    why: '讓 AAA 在失敗時能有治理地重試、退避與停下來，同時阻擋 fallback recursion 與 provider business layer 擴張。',
    purpose: '驗證 Step1 到 Step4 對 runtime budget、retry 與 recovery control 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.14 detail 全部呈現一致 Step1~Step4 與 shared runtime control evidence。',
      fail: 'runtime control run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared runtime control plane 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T15:28:00+08:00',
    digest: 'sha256:aaa-v2-1-14-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'runtime control schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.14-runtime-budget-retry-and-recovery-control-plan.md',
          'internal/development/audits/2026-04-04-v2.1.14-runtime-budget-retry-and-recovery-control-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.14-runtime-budget-retry-and-recovery-control-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.14-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 runtime budget / retry / recovery control validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23972955667，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/runtime_budget_retry_and_recovery_control.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_runtime_budget_retry_and_recovery_control.py',
          'aaa-tools/.github/workflows/v2-1-14-runtime-budget-retry-and-recovery-control.yml',
          'internal/development/reviews/2026-04-04-v2.1.14-runtime-budget-retry-and-recovery-control-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.14-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 runtime control contracts 與 Step2 runtime/evidence 已封裝為 v2.1.14 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.14/runtime-budget-retry-and-recovery-control/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.14/runtime-budget-retry-and-recovery-control/result.json',
          'internal/development/evidence/v2.1.14/runtime-budget-retry-and-recovery-control/index.json',
          'internal/development/evidence/v2.1.14/runtime-budget-retry-and-recovery-control/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.14-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.14_runtime_budget_retry_and_recovery_control.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.14 detail 可呈現 Step1~Step4 全區塊、artifacts 與 shared runtime control evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.14-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.14-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.14-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.14-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'aaa-tpl-docs/ops/index/version_index.md',
      verdict: 'PASS',
      reasonCode: 'step4-pass-mcp9003-gate-satisfied',
      dataSource: 'operate_maintain_workflow_v2',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.13',
    date: '2026-04-04',
    version: 'v2.1.13',
    name: 'Session Persistence and Transcript Compaction Baseline',
    meaning: '把 session persistence、transcript boundary 與 compaction-safe replay 從 Step1 contract 收斂為 shared session plane。',
    why: '讓 AAA 的 session 不只可執行，也可可信保存、壓縮與重放，同時阻擋 compacted transcript 或 transcript store 反向奪取 canonical truth。',
    purpose: '驗證 Step1 到 Step4 對 session persistence and transcript compaction 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.13 detail 全部呈現一致 Step1~Step4 與 shared session runtime evidence。',
      fail: 'session persistence run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared session persistence runtime 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T14:53:00+08:00',
    digest: 'sha256:aaa-v2-1-13-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'session persistence schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.13-session-persistence-and-transcript-compaction-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.13-session-persistence-and-transcript-compaction-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.13-session-persistence-and-transcript-compaction-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.13-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 session persistence and transcript compaction validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23972678968，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/session_persistence_and_transcript_compaction.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_session_persistence_and_transcript_compaction.py',
          'aaa-tools/.github/workflows/v2-1-13-session-persistence-and-transcript-compaction.yml',
          'internal/development/reviews/2026-04-04-v2.1.13-session-persistence-and-transcript-compaction-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.13-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 session persistence contracts 與 Step2 runtime/evidence 已封裝為 v2.1.13 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.13/session-persistence-and-transcript-compaction/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.13/session-persistence-and-transcript-compaction/result.json',
          'internal/development/evidence/v2.1.13/session-persistence-and-transcript-compaction/index.json',
          'internal/development/evidence/v2.1.13/session-persistence-and-transcript-compaction/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.13-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.13_session_persistence_and_transcript_compaction.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.13 detail 可呈現 Step1~Step4 全區塊、artifacts 與 shared session runtime evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.13-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.13-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.13-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.13-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'aaa-tpl-docs/ops/index/version_index.md',
      verdict: 'PASS',
      reasonCode: 'step4-pass-mcp9003-gate-satisfied',
      dataSource: 'operate_maintain_workflow_v2',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.12',
    date: '2026-04-04',
    version: 'v2.1.12',
    name: 'Tool Progress and Runtime Event Stream',
    meaning: '把 tool progress 與 runtime progress 從 path-local 狀態收斂為 shared event stream，固定 progress/result/evidence signal 分層。',
    why: '讓 AAA 後續 workflow、delegation 與 operator surface 可共同消費 execution signal，同時阻擋 raw event stream record 直接冒充正式 evidence artifact。',
    purpose: '驗證 Step1 到 Step4 對 tool progress and runtime event stream 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.12 detail 全部呈現一致 Step1~Step4 與 shared event stream evidence。',
      fail: 'event stream run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared event stream runtime 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T14:24:00+08:00',
    digest: 'sha256:aaa-v2-1-12-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'event stream schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.12-tool-progress-and-runtime-event-stream-plan.md',
          'internal/development/audits/2026-04-04-v2.1.12-tool-progress-and-runtime-event-stream-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.12-tool-progress-and-runtime-event-stream-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.12-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 tool progress and runtime event stream validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23972546415，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/tool_progress_and_runtime_event_stream.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_tool_progress_and_runtime_event_stream.py',
          'aaa-tools/.github/workflows/v2-1-12-tool-progress-and-runtime-event-stream.yml',
          'internal/development/reviews/2026-04-04-v2.1.12-tool-progress-and-runtime-event-stream-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.12-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 event stream contracts 與 Step2 runtime/evidence 已封裝為 v2.1.12 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.12/tool-progress-and-runtime-event-stream/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.12/tool-progress-and-runtime-event-stream/result.json',
          'internal/development/evidence/v2.1.12/tool-progress-and-runtime-event-stream/index.json',
          'internal/development/evidence/v2.1.12/tool-progress-and-runtime-event-stream/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.12-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.12_tool_progress_and_runtime_event_stream.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.12 detail 可呈現 Step1~Step4 全區塊、artifacts 與 shared event stream evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.12-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.12-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.12-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.12-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'aaa-tpl-docs/ops/index/version_index.md',
      verdict: 'PASS',
      reasonCode: 'step4-pass-mcp9003-gate-satisfied',
      dataSource: 'operate_maintain_workflow_v2',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.11',
    date: '2026-04-04',
    version: 'v2.1.11',
    name: 'Permission and Authorization Runtime Gate',
    meaning: '把 authority / permission 從靜態 contract 提升為 shared runtime gate，固定 decision mode 與 interactive/non-interactive boundary。',
    why: '讓 AAA 在執行前就能判定、記錄並審計授權結果，而不是把 permission 判斷留給 path-local runtime 自由發揮。',
    purpose: '驗證 Step1 到 Step4 對 permission and authorization runtime gate 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.11 detail 全部呈現一致 Step1~Step4 與 permission gate evidence。',
      fail: 'permission gate run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 permission gate runtime 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T13:40:00+08:00',
    digest: 'sha256:aaa-v2-1-11-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'permission gate schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.11-permission-and-authorization-runtime-gate-plan.md',
          'internal/development/audits/2026-04-04-v2.1.11-permission-and-authorization-runtime-gate-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.11-permission-and-authorization-runtime-gate-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.11-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 permission and authorization runtime gate、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23972342747，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/permission_and_authorization_runtime_gate.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_permission_and_authorization_runtime_gate.py',
          'aaa-tools/.github/workflows/v2-1-11-permission-and-authorization-runtime-gate.yml',
          'internal/development/reviews/2026-04-04-v2.1.11-permission-and-authorization-runtime-gate-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.11-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 permission gate contracts 與 Step2 runtime/evidence 已封裝為 v2.1.11 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.11/permission-and-authorization-runtime-gate/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.11/permission-and-authorization-runtime-gate/result.json',
          'internal/development/evidence/v2.1.11/permission-and-authorization-runtime-gate/index.json',
          'internal/development/evidence/v2.1.11/permission-and-authorization-runtime-gate/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.11-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.11_permission_and_authorization_runtime_gate.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.11 detail 可呈現 Step1~Step4 全區塊、artifacts 與 permission gate evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.11-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.11-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.11-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.11-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.10',
    date: '2026-04-04',
    version: 'v2.1.10',
    name: 'Query Orchestration Runtime Baseline',
    meaning: '把 shared dispatch、result/evidence gate 與 session snapshot 收斂為最小可重放 orchestration loop，固定 request/turn lifecycle 與 write-back boundary。',
    why: '讓 AAA 真正開始形成 shared orchestration runtime，而不再只是一組分散 validator。',
    purpose: '驗證 Step1 到 Step4 對 query orchestration runtime 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.10 detail 全部呈現一致 Step1~Step4 與 orchestration evidence。',
      fail: 'orchestration run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 query orchestration runtime 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T13:30:00+08:00',
    digest: 'sha256:aaa-v2-1-10-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'query orchestration schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.10-query-orchestration-runtime-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.10-query-orchestration-runtime-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.10-query-orchestration-runtime-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.10-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 query orchestration runtime、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23971728965，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/query_orchestration_runtime.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_query_orchestration_runtime.py',
          'aaa-tools/.github/workflows/v2-1-10-query-orchestration-runtime.yml',
          'internal/development/reviews/2026-04-04-v2.1.10-query-orchestration-runtime-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.10-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 orchestration contracts 與 Step2 runtime/evidence 已封裝為 v2.1.10 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.10/query-orchestration-runtime/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.10/query-orchestration-runtime/result.json',
          'internal/development/evidence/v2.1.10/query-orchestration-runtime/index.json',
          'internal/development/evidence/v2.1.10/query-orchestration-runtime/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.10-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.10_query_orchestration_runtime.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.10 detail 可呈現 Step1~Step4 全區塊、artifacts 與 orchestration evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.10-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.10-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.10-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.10-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.9',
    date: '2026-04-04',
    version: 'v2.1.9',
    name: 'Session Context Snapshot Runtime Baseline',
    meaning: '把既有 context law 收斂為 session context snapshot runtime plane，固定 snapshot、reload、replay 與 writeback boundary。',
    why: '讓 context 變成 session runtime 的正式輸入面，同時阻擋 snapshot 反向升格為 canonical truth source。',
    purpose: '驗證 Step1 到 Step4 對 session context snapshot runtime 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.9 detail 全部呈現一致 Step1~Step4 與 snapshot evidence。',
      fail: 'snapshot run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 session context snapshot runtime 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T12:55:00+08:00',
    digest: 'sha256:aaa-v2-1-9-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'snapshot schema 與 pass/fail fixtures 已完成 canonical baseline。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.9-session-context-snapshot-runtime-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.9-session-context-snapshot-runtime-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.9-session-context-snapshot-runtime-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.9-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 session context snapshot runtime、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23971546565，並完成 canonical pass/fail bundle smoke gate。',
        ],
        artifacts: [
          'aaa-tools/aaa/session_context_snapshot_runtime.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_session_context_snapshot_runtime.py',
          'aaa-tools/.github/workflows/v2-1-9-session-context-snapshot.yml',
          'internal/development/reviews/2026-04-04-v2.1.9-session-context-snapshot-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.9-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 snapshot contracts 與 Step2 runtime/evidence 已封裝為 v2.1.9 evidence bundle。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.9/session-context-snapshot/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.9/session-context-snapshot/result.json',
          'internal/development/evidence/v2.1.9/session-context-snapshot/index.json',
          'internal/development/evidence/v2.1.9/session-context-snapshot/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.9-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.9_session_context_snapshot.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.9 detail 可呈現 Step1~Step4 全區塊、artifacts 與 snapshot evidence。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.9-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.9-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.9-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.9-step4-completion-report.md',
        ],
      },
    ],
    inputs: [],
    outputs: [],
    references: [],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.8',
    date: '2026-04-04',
    version: 'v2.1.8',
    name: 'Result Artifact Eligibility and Evidence Promotion Gate',
    meaning: '把 runtime result 收斂為 artifact eligibility 與 evidence promotion gate，固定 promotion decision source，並阻擋人工敘事單獨決策 promotion。',
    why: '讓 truth/evidence 守門從文件約束提升成可執行 runtime gate，避免 command output 自動被升格為正式 evidence。',
    purpose: '驗證 Step1 到 Step4 對 result/evidence promotion gate 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.8 detail 全部呈現一致 Step1~Step4 與 promotion gate evidence。',
      fail: 'promotion gate run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 result/evidence promotion gate 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T12:40:00+08:00',
    digest: 'sha256:aaa-v2-1-8-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'promotion gate schema 與 pass/fail fixtures 已完成 canonical baseline。',
          'version_index 已追加 v2.1.8 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.8-result-artifact-eligibility-and-evidence-promotion-gate-plan.md',
          'internal/development/audits/2026-04-04-v2.1.8-result-artifact-eligibility-and-evidence-promotion-gate-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.8-result-artifact-eligibility-and-evidence-promotion-gate-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.8-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 result/evidence promotion gate runtime、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23971353018，並完成 canonical pass/fail bundle smoke gate。',
          'Step2 exit checklist 已確認 promotion gate runtime baseline 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/result_artifact_eligibility_and_evidence_promotion_gate.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/aaa/__init__.py',
          'aaa-tools/tests/test_result_artifact_eligibility_and_evidence_promotion_gate.py',
          'aaa-tools/.github/workflows/v2-1-8-result-evidence-promotion-gate.yml',
          'internal/development/reviews/2026-04-04-v2.1.8-result-evidence-promotion-gate-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.8-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 promotion gate contracts 與 Step2 runtime/evidence 已封裝為 v2.1.8 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.8/result-evidence-promotion-gate/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.8/result-evidence-promotion-gate/result.json',
          'internal/development/evidence/v2.1.8/result-evidence-promotion-gate/index.json',
          'internal/development/evidence/v2.1.8/result-evidence-promotion-gate/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.8-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.8_result_evidence_promotion_gate.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.8 detail 可呈現 Step1~Step4 全區塊、artifacts 與 promotion gate evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.8-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.8-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.8-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.8-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v218',
        summary: 'Canonical version matrix for v2.1.8 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v218',
        summary: 'Workflow registry source for v2.1.8 promotion gate workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/result-artifact-eligibility-and-evidence-promotion-gate.v0.1.schema.json',
        digest: 'sha256:result-evidence-promotion-gate-schema-v0-1',
        summary: 'Canonical schema that defines result artifact eligibility, promotion decision source, and evidence gate constraints',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.8/result-evidence-promotion-gate/result.json',
        digest: 'sha256:step3-result-v218',
        summary: 'Step3 preserved evidence result for v2.1.8 result/evidence promotion gate bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.8-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v218',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.8-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v218',
        summary: 'Step4 completion claim for result/evidence promotion gate delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.8 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.8 remote workflow.',
      },
      {
        title: 'Promotion Gate Contract',
        path: 'aaa-tpl-docs/internal/development/contracts/ops/result-artifact-eligibility-and-evidence-promotion-gate.v0.1.schema.json',
        desc: 'Canonical result/evidence promotion gate baseline consumed by the v2.1.8 runtime.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.7',
    date: '2026-04-04',
    version: 'v2.1.7',
    name: 'Shared Command Dispatch Runtime Baseline',
    meaning: '把 `readiness-inspect` 與 `repo-check` 兩條既有 adoption consumer 收斂到 shared command dispatch runtime，固定共同 routing、common output envelope 與 fail-closed exit semantics。',
    why: '讓 AAA 從多條 path 各自直連 runtime，提升成 command registry 可共同消費的 shared dispatch plane。',
    purpose: '驗證 Step1 到 Step4 對 shared command dispatch baseline 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.7 detail 全部呈現一致 Step1~Step4 與 shared command dispatch evidence。',
      fail: 'shared dispatch run_ref、repo-check adoption evidence、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 shared command runtime baseline 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T09:30:00+08:00',
    digest: 'sha256:aaa-v2-1-7-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'shared command dispatch schema 與 pass/fail fixtures 已完成 canonical baseline。',
          'version_index 已追加 v2.1.7 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.7-shared-command-dispatch-runtime-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.7-shared-command-dispatch-runtime-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.7-shared-command-dispatch-runtime-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.7-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 shared command dispatch runtime、repo-check adoption validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23968268431，並完成 canonical dispatch pass/fail 與 repo-check pass bundle smoke gate。',
          'Step2 exit checklist 已確認 shared dispatch runtime baseline 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/shared_command_dispatch_runtime.py',
          'aaa-tools/aaa/repo_check_runtime_adoption.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/tests/test_repo_check_runtime_adoption.py',
          'aaa-tools/tests/test_shared_command_dispatch_runtime.py',
          'aaa-tools/.github/workflows/v2-1-7-shared-command-dispatch.yml',
          'internal/development/reviews/2026-04-04-v2.1.7-shared-command-dispatch-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.7-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 shared dispatch contracts 與 Step2 runtime/evidence 已封裝為 v2.1.7 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.7/shared-command-dispatch/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.7/shared-command-dispatch/result.json',
          'internal/development/evidence/v2.1.7/shared-command-dispatch/index.json',
          'internal/development/evidence/v2.1.7/shared-command-dispatch/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.7-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.7_shared_command_dispatch.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.7 detail 可呈現 Step1~Step4 全區塊、artifacts 與 shared dispatch / repo-check evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.7-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.7-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.7-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.7-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v217',
        summary: 'Canonical version matrix for v2.1.7 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v217',
        summary: 'Workflow registry source for v2.1.7 shared dispatch workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/shared-command-dispatch-runtime-bundle.v0.1.schema.json',
        digest: 'sha256:shared-command-dispatch-runtime-schema-v0-1',
        summary: 'Canonical schema that defines legal shared dispatch routing, common output envelope, and fail-closed exit semantics',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.7/shared-command-dispatch/result.json',
        digest: 'sha256:step3-result-v217',
        summary: 'Step3 preserved evidence result for v2.1.7 shared command dispatch bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.7-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v217',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.7-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v217',
        summary: 'Step4 completion claim for shared command dispatch delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.7 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.7 remote workflow.',
      },
      {
        title: 'Shared Dispatch Contract',
        path: 'aaa-tpl-docs/internal/development/contracts/ops/shared-command-dispatch-runtime-bundle.v0.1.schema.json',
        desc: 'Canonical shared dispatch baseline consumed by the v2.1.7 runtime.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.5',
    date: '2026-04-04',
    version: 'v2.1.5',
    name: 'Runtime Adoption Baseline',
    meaning: '把 `readiness-inspect` 提升成第一條可執行 runtime adoption path，將 capability、target、truth 與 readiness 四段治理鏈串成單一路徑。',
    why: '讓前四版治理底座第一次共同生效，後續 CLI、agent runtime 與 readiness gate 不必再重新發明語義。',
    purpose: '驗證 Step1 到 Step4 對 runtime-adoption baseline 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.5 detail 全部呈現一致 Step1~Step4 與 remote readiness-inspect evidence。',
      fail: 'readiness-inspect run_ref、evidence bundle、frontend detail 或 9003 任一路由不一致或不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 runtime-adoption baseline 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T04:35:00+08:00',
    digest: 'sha256:aaa-v2-1-5-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'runtime adoption schema 與 pass/fail fixtures 已完成 canonical baseline。',
          'version_index 已追加 v2.1.5 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.5-runtime-adoption-baseline-plan.md',
          'internal/development/audits/2026-04-04-v2.1.5-runtime-adoption-baseline-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.5-runtime-adoption-baseline-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.5-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 readiness-inspect adoption validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23961062180，並完成 canonical pass/fail bundle smoke gate。',
          'Step2 exit checklist 已確認 runtime-adoption executable baseline 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/runtime_adoption_readiness_inspect.py',
          'aaa-tools/aaa/tool_command_adoption.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/tests/test_runtime_adoption_readiness_inspect.py',
          'aaa-tools/.github/workflows/v2-1-5-runtime-adoption-baseline.yml',
          'internal/development/reviews/2026-04-04-v2.1.5-runtime-adoption-baseline-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.5-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 runtime adoption contracts 與 Step2 runtime/evidence 已封裝為 v2.1.5 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.5/runtime-adoption-baseline/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.5/runtime-adoption-baseline/result.json',
          'internal/development/evidence/v2.1.5/runtime-adoption-baseline/index.json',
          'internal/development/evidence/v2.1.5/runtime-adoption-baseline/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.5-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.5_runtime_adoption_baseline.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.5 detail 可呈現 Step1~Step4 全區塊、artifacts 與 remote readiness-inspect evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.5-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.5-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.5-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.5-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v215',
        summary: 'Canonical version matrix for v2.1.5 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v215',
        summary: 'Workflow registry source for v2.1.5 readiness-inspect workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/runtime-adoption-readiness-inspect-bundle.v0.1.schema.json',
        digest: 'sha256:runtime-adoption-readiness-inspect-schema-v0-1',
        summary: 'Canonical schema that defines legal readiness-inspect binding, target scope, preflight chain, and readiness output',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.5/runtime-adoption-baseline/result.json',
        digest: 'sha256:be71bc82ef27012eb3f15c0768de6597d505dcfce5a9ab430a6b595aaa8402e9',
        summary: 'Step3 preserved evidence result for v2.1.5 runtime adoption bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.5-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v215',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.5-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v215',
        summary: 'Step4 completion claim for runtime-adoption baseline delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.5 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.5 remote workflow.',
      },
      {
        title: 'Cross-Version Governance Note',
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-v2.1.4-old-system-vs-new-system.md',
        desc: 'Interpretive note describing the four-version foundation that v2.1.5 adopts at runtime.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.4',
    date: '2026-04-04',
    version: 'v2.1.4',
    name: 'Session Query Orchestration + Readiness State',
    meaning: '把 session-facing readiness state 提升成可執行 validator，固定 orchestration mode、surface boundary、state store 與 gating semantics。',
    why: '讓 readiness law 不再靠 operator 主觀判斷，後續 query orchestration 與 operator surface 都能在合法 readiness 上運作。',
    purpose: '驗證 Step1 到 Step4 對 readiness-law foundation 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.4 detail 全部呈現一致 Step1~Step4 與 remote readiness evidence。',
      fail: 'readiness surface / gating checks 證據不完整、run_ref 不一致，或 9003 任一路由不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 readiness-law adoption 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T03:45:00+08:00',
    digest: 'sha256:aaa-v2-1-4-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'session readiness schema 與 pass/fail fixtures 已完成 canonical baseline。',
          'version_index 已追加 v2.1.4 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.4-session-readiness-state-plan.md',
          'internal/development/audits/2026-04-04-v2.1.4-session-readiness-state-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.4-session-readiness-state-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.4-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 session readiness validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23959496478，並完成 canonical pass/fail bundle smoke gate。',
          'Step2 exit checklist 已確認 readiness-law executable adoption 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/session_readiness_state.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/tests/test_session_readiness_state.py',
          'aaa-tools/.github/workflows/v2-1-4-session-readiness-state.yml',
          'internal/development/reviews/2026-04-04-v2.1.4-session-readiness-state-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.4-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 session readiness contracts 與 Step2 runtime/evidence 已封裝為 v2.1.4 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.4/session-readiness-state/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.4/session-readiness-state/result.json',
          'internal/development/evidence/v2.1.4/session-readiness-state/index.json',
          'internal/development/evidence/v2.1.4/session-readiness-state/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.4-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.4_session_readiness_state.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.4 detail 可呈現 Step1~Step4 全區塊、artifacts 與 remote readiness evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.4-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.4-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.4-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.4-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v214',
        summary: 'Canonical version matrix for v2.1.4 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v214',
        summary: 'Workflow registry source for v2.1.4 readiness workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/session-readiness-state.v0.1.schema.json',
        digest: 'sha256:session-readiness-state-schema-v0-1',
        summary: 'Canonical schema that defines legal readiness surface, state store, and gating checks',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.4/session-readiness-state/result.json',
        digest: 'sha256:08abd1d6b4f39809c315097afc910a59cf0cf413f297418a61f7d79735ae2be8',
        summary: 'Step3 preserved evidence result for v2.1.4 session readiness bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.4-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v214',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.4-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v214',
        summary: 'Step4 completion claim for readiness-law foundation delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.4 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.4 remote workflow.',
      },
      {
        title: 'Cross-Version Governance Note',
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-v2.1.4-old-system-vs-new-system.md',
        desc: 'Interpretive note for readiness-law positioning within the four-version foundation.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.3',
    date: '2026-04-04',
    version: 'v2.1.3',
    name: 'Context Assembly Preflight',
    meaning: '把 context assembly 與 source precedence law 提升成可執行 preflight validator，固定 current truth source 與 anti-contamination 邊界。',
    why: '讓 truth law 不再靠 operator 記憶，後續 session、readiness、dispatcher 都能以合法 current truth source 運作。',
    purpose: '驗證 Step1 到 Step4 對 truth-law foundation 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.3 detail 全部呈現一致 Step1~Step4 與 remote preflight evidence。',
      fail: 'current truth source / anti-contamination 證據不完整、run_ref 不一致，或 9003 任一路由不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 truth-law adoption 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T03:30:00+08:00',
    digest: 'sha256:aaa-v2-1-3-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'context preflight schema 與 pass/fail fixtures 已完成 canonical baseline。',
          'version_index 已追加 v2.1.3 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.3-context-assembly-preflight-plan.md',
          'internal/development/audits/2026-04-04-v2.1.3-context-assembly-preflight-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.3-context-assembly-preflight-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.3-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 context runtime preflight validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23959028416，並完成 canonical pass/fail bundle smoke gate。',
          'Step2 exit checklist 已確認 truth-law executable adoption 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/context_runtime_preflight.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/tests/test_context_runtime_preflight.py',
          'aaa-tools/.github/workflows/v2-1-3-context-runtime-preflight.yml',
          'internal/development/reviews/2026-04-04-v2.1.3-context-runtime-preflight-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.3-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 preflight contracts 與 Step2 runtime/evidence 已封裝為 v2.1.3 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.3/context-runtime-preflight/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.3/context-runtime-preflight/result.json',
          'internal/development/evidence/v2.1.3/context-runtime-preflight/index.json',
          'internal/development/evidence/v2.1.3/context-runtime-preflight/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.3-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.3_context_runtime_preflight.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.3 detail 可呈現 Step1~Step4 全區塊、artifacts 與 remote preflight evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.3-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.3-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.3-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.3-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v213',
        summary: 'Canonical version matrix for v2.1.3 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v213',
        summary: 'Workflow registry source for v2.1.3 preflight workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/context-runtime-preflight-bundle.v0.1.schema.json',
        digest: 'sha256:context-runtime-preflight-schema-v0-1',
        summary: 'Canonical schema that defines legal current-truth sources and anti-contamination checks',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.3/context-runtime-preflight/result.json',
        digest: 'sha256:372604089febc4a4aec763859f877e8a56507cf275a3026c9b9be4d8ed7014b8',
        summary: 'Step3 preserved evidence result for v2.1.3 context preflight bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.3-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v213',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.3-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v213',
        summary: 'Step4 completion claim for truth-law foundation delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.3 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.3 remote workflow.',
      },
      {
        title: 'Cross-Version Governance Note',
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-v2.1.4-old-system-vs-new-system.md',
        desc: 'Interpretive note for truth-law positioning within the four-version foundation.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.2',
    date: '2026-04-04',
    version: 'v2.1.2',
    name: 'Multi-Repo Worktree Identity Guard',
    meaning: '把 multi-repo/worktree identity law 提升成可執行 validator 與 runtime guard baseline，固定 canonical repo root 與 worktree target legality。',
    why: '讓 target law 不再靠操作者記憶，後續 mutation、preflight、readiness 都能在合法 target 上運作。',
    purpose: '驗證 Step1 到 Step4 對 target-law foundation 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.2 detail 全部呈現一致 Step1~Step4 與 remote identity-guard evidence。',
      fail: 'canonical repo root / worktree target 證據不完整、run_ref 不一致，或 9003 任一路由不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 target-law adoption 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T03:02:00+08:00',
    digest: 'sha256:aaa-v2-1-2-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'identity guard schema 與 pass/fail fixtures 已完成 canonical baseline。',
          'version_index 已追加 v2.1.2 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.2-multi-repo-worktree-identity-plan.md',
          'internal/development/audits/2026-04-04-v2.1.2-multi-repo-worktree-identity-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.2-multi-repo-worktree-identity-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.2-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 multi-repo/worktree identity validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23958123189，並完成 canonical pass/fail bundle smoke gate。',
          'Step2 exit checklist 已確認 target-law executable adoption 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/multi_repo_worktree_identity.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/tests/test_multi_repo_worktree_identity.py',
          'aaa-tools/.github/workflows/v2-1-2-multi-repo-worktree-identity.yml',
          'internal/development/reviews/2026-04-04-v2.1.2-multi-repo-worktree-identity-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.2-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 identity contracts 與 Step2 runtime/evidence 已封裝為 v2.1.2 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.2/multi-repo-worktree-identity/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.2/multi-repo-worktree-identity/result.json',
          'internal/development/evidence/v2.1.2/multi-repo-worktree-identity/index.json',
          'internal/development/evidence/v2.1.2/multi-repo-worktree-identity/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.2-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.2_multi_repo_worktree_identity.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.2 detail 可呈現 Step1~Step4 全區塊、artifacts 與 remote identity-guard evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.2-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.2-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.2-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.2-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v212',
        summary: 'Canonical version matrix for v2.1.2 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v212',
        summary: 'Workflow registry source for v2.1.2 identity workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/multi-repo-worktree-identity-guard.v0.1.schema.json',
        digest: 'sha256:multi-repo-worktree-identity-schema-v0-1',
        summary: 'Canonical schema that defines canonical repo root and worktree target legality',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.2/multi-repo-worktree-identity/result.json',
        digest: 'sha256:91361e7ee3627f89e0cab908bb30490f78fe16182208c8d83e726f20d8eb8ae1',
        summary: 'Step3 preserved evidence result for v2.1.2 identity guard bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.2-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v212',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.2-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v212',
        summary: 'Step4 completion claim for target-law foundation delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.2 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.2 remote workflow.',
      },
      {
        title: 'Cross-Version Governance Note',
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-v2.1.4-old-system-vs-new-system.md',
        desc: 'Interpretive note for target-law positioning within the four-version foundation.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.1',
    date: '2026-04-04',
    version: 'v2.1.1',
    name: 'Tool Contract Executable Adoption + Command Registry Binding',
    meaning: '把 tool contract 與 command registry 從文字規格提升成可執行 adoption validator 與 machine-parseable binding。',
    why: '讓 capability law 不再靠 prose 綁定，後續 validator、dispatcher、preflight 能直接消費穩定接口。',
    purpose: '驗證 Step1 到 Step4 對 capability-law foundation 的完整閉環與證據可追溯。',
    targets: {
      pass: '9003 版本清單、流程清單、dashboard 與 v2.1.1 detail 全部呈現一致 Step1~Step4 與 remote run evidence。',
      fail: 'tool/command binding 無法在 detail 顯示完整 artifacts、run_ref 不一致，或 9003 任一路由不可達。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理與 capability-law adoption 的單版閉環。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-04-04T03:18:00+08:00',
    digest: 'sha256:aaa-v2-1-1-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/diff-paths 與 Step1 exit checklist。',
          'tool contract、command registry 與 adoption bundle schema 已完成 canonical baseline。',
          'version_index 已追加 v2.1.1 並完成 Step1 approval-ready 審核。',
        ],
        artifacts: [
          'internal/development/plans/2026-04-04-v2.1.1-tool-command-adoption-plan.md',
          'internal/development/audits/2026-04-04-v2.1.1-tool-command-adoption-audit.md',
          'internal/development/reviews/2026-04-04-v2.1.1-tool-command-adoption-diff-paths.md',
          'internal/development/reviews/2026-04-04-v2.1.1-step1-exit-checklist.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'aaa-tools 已上線 tool-command adoption validator、CLI binding 與 remote workflow。',
          'remote run_ref 已固定為 23957470365，並留下 retry/fix evidence。',
          'Step2 exit checklist 已確認 executable adoption 與 machine-parseable binding 全項 PASS。',
        ],
        artifacts: [
          'aaa-tools/aaa/tool_command_adoption.py',
          'aaa-tools/aaa/governance_commands.py',
          'aaa-tools/aaa/cli.py',
          'aaa-tools/tests/test_tool_command_adoption.py',
          'aaa-tools/.github/workflows/v2-1-1-tool-command-adoption.yml',
          'internal/development/reviews/2026-04-04-v2.1.1-tool-command-adoption-run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.1-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'Step1 contract fixtures 與 Step2 runtime/evidence 已封裝為 v2.1.1 evidence bundle。',
          'asset-manifest、result、index、run-evidence 與 milestone 摘要均已落檔。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.1/tool-command-adoption/asset-manifest.v0.1.json',
          'internal/development/evidence/v2.1.1/tool-command-adoption/result.json',
          'internal/development/evidence/v2.1.1/tool-command-adoption/index.json',
          'internal/development/evidence/v2.1.1/tool-command-adoption/run-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.1-step3-exit-checklist.md',
          'internal/development/milestones/20260404_v2.1.1_tool-command-adoption.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 已通過 Global 5 頁 MCP 驗證。',
          'v2.1.1 detail 可呈現 Step1~Step4 全區塊、artifacts 與 remote run evidence。',
          'completion report、dashboard baseline、MCP evidence 與 exit checklist 已互相可追溯。',
        ],
        artifacts: [
          'internal/development/reviews/2026-04-04-v2.1.1-step4-dashboard-baseline.md',
          'internal/development/reviews/2026-04-04-v2.1.1-step4-mcp-evidence.md',
          'internal/development/reviews/2026-04-04-v2.1.1-step4-exit-checklist.md',
          'internal/development/reviews/2026-04-04-v2.1.1-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v211',
        summary: 'Canonical version matrix for v2.1.1 status, run_ref, and evidence references',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v211',
        summary: 'Workflow registry source for v2.1.1 adoption workflow row',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/contracts/ops/tool-command-adoption-bundle.v0.1.schema.json',
        digest: 'sha256:tool-command-adoption-schema-v0-1',
        summary: 'Canonical schema that defines machine-parseable adoption bundle shape',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/evidence/v2.1.1/tool-command-adoption/result.json',
        digest: 'sha256:6776051347f6ff59e69ab1f55d954b1ac0a4acfe17017d0b59e42b08709ab9e2',
        summary: 'Step3 preserved evidence result for v2.1.1 adoption bundle',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence-v211',
        summary: 'MCP gate evidence covering 9003 validation for the global 5 pages',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-step4-completion-report.md',
        digest: 'sha256:step4-completion-report-v211',
        summary: 'Step4 completion claim for capability-law foundation delivery',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Canonical row for v2.1.1 status, run_ref and evidence set.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Canonical row for the v2.1.1 remote workflow.',
      },
      {
        title: 'Cross-Version Governance Note',
        path: 'aaa-tpl-docs/internal/development/reviews/2026-04-04-v2.1.1-v2.1.4-old-system-vs-new-system.md',
        desc: 'Interpretive note for capability-law positioning within the four-version foundation.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-04-04',
    },
  },
  {
    releaseTrack: 'operate_maintain_v2',
    versionKey: 'operate_maintain_v2::v2.1.0',
    date: '2026-03-01',
    version: 'v2.1.0',
    name: 'Guide Parity Gate (Core vs Template)',
    meaning: '把 AAA 治理文件一致性與 admin front-end 驗證能力產品化。',
    why: '讓 Step4 不只文件宣告，而是可在 9003 實機驗證。',
    purpose: '驗證 Step1~Step4 全鏈交付與 evidence 可追溯。',
    targets: {
      pass: '9003 MCP 5 頁全 PASS，version/detail 呈現完整 Step 區塊。',
      fail: '任何 route 不可達、Step 區塊缺欄位、evidence 不一致。',
    },
    workflowName: 'governance:operate_maintain_workflow_v2',
    workflowUseCase: 'AAA 版本治理、繼承專案可選擇匯入同流程。',
    status: 'COMPLETED',
    verificationStatus: 'VERIFIED',
    dataMode: 'runtime-template',
    updatedAt: '2026-03-02T10:30:00+08:00',
    digest: 'sha256:aaa-v2-1-0-step4-pass-mcp9003',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線',
        status: 'PASS',
        lines: [
          '已建立 plan/audit/review 文件與差異路徑。',
          'version_index/workflow_index 已同步 append。',
          'Step1 exit checklist 與 approval 已完成。',
        ],
        artifacts: [
          'internal/development/plans/2026-03-01-v2.1.0-guide-parity-gate-plan.md',
          'internal/development/audits/2026-03-01-v2.1.0-guide-parity-gate-audit.md',
          'internal/development/reviews/2026-03-01-v2.1.0-guide-parity-gate-diff-paths.md',
        ],
      },
      {
        step: 2,
        title: 'Step2 實作與執行',
        status: 'PASS',
        lines: [
          'guide parity workflow 與 gate script 已上線。',
          'run_ref 已寫回 index 並完成 smoke rerun。',
          'Step2 exit checklist 全項 PASS。',
        ],
        artifacts: [
          '.github/workflows/v2-1-0-guide-parity-gate.yml',
          'scripts/gates/verify_operate_maintain_guides.py',
          'internal/development/reviews/2026-03-01-v2.1.0-step2-exit-checklist.md',
        ],
      },
      {
        step: 3,
        title: 'Step3 資產保存',
        status: 'PASS',
        lines: [
          'asset-manifest.v0.1 已產出並標註 source_step。',
          'milestone 與 evidence index 已完成封裝。',
        ],
        artifacts: [
          'internal/development/evidence/v2.1.0/guide-parity-gate/asset-manifest.v0.1.json',
          'internal/development/milestones/20260301_v2.1.0_guide-parity-gate.md',
        ],
      },
      {
        step: 4,
        title: 'Step4 結案交付',
        status: 'PASS',
        lines: [
          'localhost:9003 5 頁 MCP 正式驗證全 PASS。',
          'completion report / exit checklist / version_index 同步完成。',
        ],
        artifacts: [
          'internal/development/reviews/2026-03-02-v2.1.0-step4-mcp-evidence.md',
          'internal/development/reviews/2026-03-02-v2.1.0-step4-exit-checklist.md',
          'internal/development/reviews/2026-03-02-v2.1.0-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-v201',
        summary: 'Version matrix source of status/evidence metadata',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        digest: 'sha256:workflow-index-v201',
        summary: 'Workflow registry source for ops-registry workflows tab',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-03-02-v2.1.0-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence',
        summary: 'MCP gate evidence including 9003 validation',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/internal/development/reviews/2026-03-02-v2.1.0-step4-completion-report.md',
        digest: 'sha256:step4-completion-report',
        summary: 'Step4 completion claim with gate mapping',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        desc: 'Backfilled from canonical version index row.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/ops/index/workflow_index.md',
        desc: 'Derived from workflow registry raw index.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY',
      verdict: 'GO',
      reasonCode: 'STEP4_MCP_9003_PASS',
      dataSource: 'RUNTIME_TEMPLATE',
      dataDate: '2026-03-02',
    },
  },
  {
    releaseTrack: 'legacy_trust_boundary',
    versionKey: 'legacy_trust_boundary::v2.0.1',
    date: '2026-01-29',
    version: 'v2.0.1',
    name: 'Trust Boundary',
    meaning: '建立 AAA 信任邊界基線與最小可審計證據鏈。',
    why: '確保連線與授權具可驗證身份與 scope 控制。',
    purpose: '把高風險操作納入可重放與可追責治理框架。',
    targets: {
      pass: 'Identity/Scope/Replay/Revocation 核心控制可運作且可審計。',
      fail: '任何核心控制不可驗證、缺證據或無法重放。',
    },
    workflowName: 'governance:trust_boundary_v1',
    workflowUseCase: '歷史安全基線版本，供治理回溯使用。',
    status: 'COMPLETED',
    verificationStatus: 'BACKFILLED',
    dataMode: 'historical-milestone',
    updatedAt: '2026-01-29T23:59:59+08:00',
    digest: 'sha256:legacy-v2-0-1-trust-boundary',
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線（Legacy）',
        status: 'PASS',
        lines: ['歷史版本以里程碑文檔回填，已建立基本治理描述。'],
        artifacts: ['milestones/20260129_v2.0.1_trust_boundary.md'],
      },
      {
        step: 2,
        title: 'Step2 實作與執行（Legacy）',
        status: 'PASS',
        lines: ['完成信任邊界核心控制實作，證據由歷史完成報告承載。'],
        artifacts: ['internal/development/milestones/completion-reports/aaa_v2.0.1_completion_report_20260129.md'],
      },
      {
        step: 3,
        title: 'Step3 資產保存（Legacy）',
        status: 'PENDING',
        lines: ['舊版未採用 v2 workflow 標準資產封裝；目前僅提供 historical backfill。'],
        artifacts: ['N/A (legacy track)'],
      },
      {
        step: 4,
        title: 'Step4 結案交付（Legacy）',
        status: 'PASS',
        lines: ['歷史里程碑與 completion report 已可供追溯。'],
        artifacts: ['milestones/20260129_v2.0.1_trust_boundary.md'],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/milestones/20260129_v2.0.1_trust_boundary.md',
        digest: 'sha256:legacy-milestone-v201',
        summary: 'Legacy milestone source',
        note: 'backfilled',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: 'sha256:version-index-legacy-backfill',
        summary: 'Legacy track row backfilled into canonical index',
        note: 'historical-backfill',
      },
    ],
    references: [
      {
        title: 'Legacy Milestone',
        path: 'aaa-tpl-docs/milestones/20260129_v2.0.1_trust_boundary.md',
        desc: 'Historical trust boundary milestone.',
      },
      {
        title: 'Legacy Completion Report',
        path: 'aaa-tpl-docs/internal/development/milestones/completion-reports/aaa_v2.0.1_completion_report_20260129.md',
        desc: 'Historical completion report.',
      },
    ],
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY (BACKFILLED)',
      verdict: 'GO',
      reasonCode: 'LEGACY_BACKFILLED',
      dataSource: 'MILESTONE_BACKFILL',
      dataDate: '2026-01-29',
    },
  },
];

type LegacyInternalAssets = {
  plans: string[];
  audits: string[];
  completion: string[];
};

const legacyInternalAssetsByVersion: Record<string, LegacyInternalAssets> = {
  'v2.0.5': {
    plans: ['internal/development/plans/2026-01-31-v2.0.5-repo-type-map-plan.md'],
    audits: ['internal/development/audits/2026-01-31-v2.0.5-repo-type-map-audit.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v2.0.5_completion_report_20260131.md'],
  },
  'v2.0.4': {
    plans: ['internal/development/plans/2026-01-30-v2.0.4-init-plan-presets.md'],
    audits: ['internal/development/audits/2026-01-30-v2.0.4-audit-presets.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v2.0.4_completion_report_20260130.md'],
  },
  'v2.0.3': {
    plans: [
      'internal/development/plans/2026-01-30-v2.0.3-a2a-repo-checks-hints-plan.md',
      'internal/development/plans/2026-01-30-v2.0.3-mcp-repo-checks-hints-plan.md',
      'internal/development/plans/2026-01-30-v2.0.3-repo-checks-remote-hints-plan.md',
    ],
    audits: [
      'internal/development/audits/2026-01-30-v2.0.3-a2a-repo-checks-hints-audit.md',
      'internal/development/audits/2026-01-30-v2.0.3-mcp-repo-checks-hints-audit.md',
      'internal/development/audits/2026-01-30-v2.0.3-repo-checks-remote-hints-audit.md',
    ],
    completion: ['internal/development/milestones/completion-reports/aaa_v2.0.3_completion_report_20260130.md'],
  },
  'v2.0.2': {
    plans: [
      'internal/development/plans/2026-01-29-v2.0.2-dashboard-visual-governance-plan.md',
      'internal/development/plans/2026-01-29-v2.0.2-postmortem-assets-plan.md',
      'internal/development/plans/2026-01-29-v2.0.2-runbook-recovery-plan.md',
    ],
    audits: [
      'internal/development/audits/2026-01-29-v2.0.2-assets-audit.md',
      'internal/development/audits/2026-01-29-v2.0.2-runbook-recovery-audit.md',
    ],
    completion: ['internal/development/milestones/completion-reports/aaa_v2.0.2_completion_report_20260129.md'],
  },
  'v2.0.1': {
    plans: ['internal/development/plans/2026-01-29-v2.0.1-trust-boundary-plan.md'],
    audits: ['internal/development/audits/2026-01-29-v2.0.1-init-audit.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v2.0.1_completion_report_20260129.md'],
  },
  'v2.0': {
    plans: [
      'internal/development/plans/2026-01-28-architecture-evolution-v2.0.md',
      'internal/development/plans/2026-01-28-update-policy-v2.0-alignment.md',
      'internal/development/plans/2026-01-29-v2.0-init-plan.md',
    ],
    audits: ['internal/development/audits/2026-01-29-v2.0-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v2.0_completion_report_20260129.md'],
  },
  'v1.9': {
    plans: ['internal/development/plans/2026-01-29-v1.9-init-plan.md'],
    audits: ['internal/development/audits/2026-01-29-v1.9-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.9_completion_report_20260129.md'],
  },
  'v1.8': {
    plans: ['internal/development/plans/2026-01-29-v1.8-init-plan.md'],
    audits: ['internal/development/audits/2026-01-29-v1.8-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.8_completion_report_20260129.md'],
  },
  'v1.7': {
    plans: ['internal/development/plans/2026-01-29-v1.7-init-plan.md'],
    audits: ['internal/development/audits/2026-01-29-v1.7-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.7_completion_report_20260129.md'],
  },
  'v1.6': {
    plans: ['internal/development/plans/2026-01-29-v1.6-init-plan.md'],
    audits: ['internal/development/audits/2026-01-29-v1.6-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.6_completion_report_20260129.md'],
  },
  'v1.5': {
    plans: ['internal/development/plans/2026-01-28-v1.5-init-plan.md'],
    audits: ['internal/development/audits/2026-01-28-v1.5-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.5_completion_report_20260128.md'],
  },
  'v1.4': {
    plans: ['internal/development/plans/2026-01-28-v1.4-init-plan.md'],
    audits: ['internal/development/audits/2026-01-28-v1.4-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.4_completion_report_20260128.md'],
  },
  'v1.3': {
    plans: ['internal/development/plans/2026-01-28-v1.3-init-plan.md'],
    audits: [
      'internal/development/audits/2026-01-28-v1.3-initial-validation.md',
      'internal/development/audits/v1.3_tech_debt_baseline.md',
      'internal/development/audits/v1.3_tech_debt_repayment.md',
    ],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.3_completion_report_20260128.md'],
  },
  'v1.2': {
    plans: ['internal/development/plans/2026-01-28-v1.2-init-plan.md'],
    audits: ['internal/development/audits/2026-01-28-v1.2-initial-validation.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.2_completion_report_20260128.md'],
  },
  'v1.1': {
    plans: [
      'internal/development/plans/2026-01-28-aaa-v1.1-milestone-automation-plan.md',
      'internal/development/plans/2026-01-28-aaa-v1.1-policy-enforcement-plan.md',
      'internal/development/plans/2026-01-28-v1.1-ai-native-interface-plan.md',
      'internal/development/plans/2026-01-28-v1.1-pillar-b-ai-native-interface-plan.md',
    ],
    audits: [
      'internal/development/audits/2026-01-28-v1.1-pillar-b-validation-report.md',
      'internal/development/audits/v1.1_initial_validation_report.md',
    ],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.1_completion_report_20260128.md'],
  },
  'v1.0': {
    plans: [
      'internal/development/plans/2026-01-24-v1.0-implementation-plan.md',
      'internal/development/plans/2026-01-24-v1.0-remediation-and-roadmap-reports.md',
      'internal/development/plans/2026-01-24-v1.0-remediation-plan.md',
    ],
    audits: ['internal/development/audits/v1.0_final_validation_report.md'],
    completion: ['internal/development/milestones/completion-reports/aaa_v1.0_completion_report_20260124.md'],
  },
  'v0.9': {
    plans: [
      'internal/development/plans/2026-01-24-aaa-v0.9-implementation-plan.md',
      'internal/development/plans/2026-01-24-aaa-v0.9-plan.md',
      'internal/development/plans/2026-01-24-milestones-index-and-v0.9-summaries.md',
    ],
    audits: [],
    completion: [
      'internal/development/milestones/completion-reports/aaa_v0.9_completion_report_20260123.md',
      'internal/development/milestones/completion-reports/aaa_v0.9_gate_evidence_20260123.md',
      'internal/development/milestones/completion-reports/aaa_v0.9_observability_upgrade_20260124.md',
      'internal/development/milestones/completion-reports/aaa_v0.9_one_pager_20260123.md',
    ],
  },
  'v0.8': {
    plans: [
      'internal/development/plans/2026-01-24-aaa-v0.8-design.md',
      'internal/development/plans/2026-01-24-aaa-v0.8-plan.md',
    ],
    audits: [],
    completion: ['internal/development/milestones/completion-reports/aaa_v0.8_completion_report_20260124.md'],
  },
  'v0.7': {
    plans: ['internal/development/plans/2026-01-23-aaa-v0.7-plan.md'],
    audits: [
      'internal/development/audits/aaa_v0.7_delivery_summary_20260123.md',
      'internal/development/audits/aaa_v0.7_one_pager_20260123.md',
    ],
    completion: [
      'internal/development/milestones/completion-reports/aaa_v0.7_completion_report_20260123_0915.md',
      'internal/development/milestones/completion-reports/aaa_v0.7_gate_evidence_20260123.md',
    ],
  },
  'v0.6': {
    plans: ['internal/development/plans/2026-01-22-aaa-v0.6-action-registry-plan.md'],
    audits: [
      'internal/development/audits/aaa_v0.6_gateA_failure_modes_20260123.md',
      'internal/development/audits/aaa_v0.6_gate_runbook_20260122_2348.md',
      'internal/development/audits/aaa_v0.6_gate_summary_for_diplomat.md',
      'internal/development/audits/aaa_v0.6_readiness_gate_20260122_2310.md',
    ],
    completion: ['internal/development/milestones/completion-reports/aaa_v0.6_completion_report_20260122_2300.md'],
  },
  'v0.5': {
    plans: [
      'internal/development/plans/2026-01-21-aaa-v0.5-modular-runbooks-adr.md',
      'internal/development/plans/2026-01-22-aaa-v0.5-complete-milestone-plan.md',
      'internal/development/plans/2026-01-22-aaa-v0.5-reindex-assets-plan.md',
      'internal/development/plans/2026-01-22-aaa-v0.5-runtime-engine-plan.md',
    ],
    audits: [],
    completion: [
      'internal/development/milestones/completion-reports/aaa_v0.5_completion_report_20260121_2348.md',
      'internal/development/milestones/completion-reports/aaa_v0.5_reindex_backfill_report_20260122.md',
      'internal/development/milestones/completion-reports/aaa_v0.5_upgrade_audit_runbooks_20260124.md',
    ],
  },
  'v0.4': {
    plans: [
      'internal/development/plans/2026-01-21-aaa-v0.4-design.md',
      'internal/development/plans/2026-01-21-aaa-v0.4-implementation-plan.md',
      'internal/development/plans/2026-01-21-aaa-v0.4-post-init-assets-plan.md',
    ],
    audits: [],
    completion: ['internal/development/milestones/completion-reports/aaa_v0.4_completion_report_20260121_2128.md'],
  },
  'v0.3': {
    plans: ['internal/development/plans/2026-01-21-aaa-v0.3-plan.md'],
    audits: [],
    completion: ['internal/development/milestones/completion-reports/aaa_v0.3_completion_report_20260121_1737.md'],
  },
  'v0.2': {
    plans: [],
    audits: [],
    completion: ['internal/development/milestones/completion-reports/aaa_v0.2_improvement_report_20260120_0322.md'],
  },
  'v0.1': {
    plans: [],
    audits: [],
    completion: ['internal/development/milestones/completion-reports/v0.1_completion_report_20260118_1235.md'],
  },
};

function buildBackfilledDetail(row: OpsVersionRow): VersionDetail {
  const legacyAssets = legacyInternalAssetsByVersion[row.version] ?? { plans: [], audits: [], completion: [] };
  const step1Artifacts = [...legacyAssets.plans, ...legacyAssets.audits];
  const step2Artifacts = [...legacyAssets.completion];
  const step3Artifacts = [...legacyAssets.audits, ...legacyAssets.completion];
  const step4Artifacts = [...row.evidenceRefs, ...legacyAssets.completion];
  const isPlanned = row.status === 'PLANNED';
  const status = isPlanned ? 'PLANNED' : 'COMPLETED';
  const verify = isPlanned ? 'UNVERIFIED' : 'BACKFILLED';
  return {
    releaseTrack: row.releaseTrack,
    versionKey: `${row.releaseTrack}::${row.version}`,
    date: row.date,
    version: row.version,
    name: row.name,
    meaning: row.meaning,
    why: row.why,
    purpose: row.meaning,
    targets: {
      pass: '歷史版本回填可追溯。',
      fail: '歷史版本證據缺失或索引不一致。',
    },
    workflowName: row.landing,
    workflowUseCase: 'Historical backfill for governance traceability.',
    status,
    verificationStatus: verify,
    dataMode: 'historical-backfill+internal-evidence',
    updatedAt: `${row.date}T23:59:59+08:00`,
    digest: `sha256:${row.releaseTrack}-${row.version}-backfill`,
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線（Backfill）',
        status: step1Artifacts.length > 0 ? 'PASS' : 'PENDING',
        lines: ['已從 internal/development 回填對應的 plan/audit，建立可審計基線。'],
        artifacts: step1Artifacts.length > 0 ? step1Artifacts : row.evidenceRefs,
      },
      {
        step: 2,
        title: 'Step2 實作與執行（Backfill）',
        status: isPlanned ? 'PENDING' : step2Artifacts.length > 0 ? 'PASS' : 'PENDING',
        lines: ['已回填 completion report 作為歷史執行結果證據。'],
        artifacts: step2Artifacts.length > 0 ? step2Artifacts : ['legacy:N/A'],
      },
      {
        step: 3,
        title: 'Step3 資產保存（Backfill）',
        status: step3Artifacts.length > 0 ? 'PASS' : 'PENDING',
        lines: ['已回填 internal/development 證據資產；舊版若無標準封裝則以歷史資產替代。'],
        artifacts: step3Artifacts.length > 0 ? step3Artifacts : ['N/A (historical backfill)'],
      },
      {
        step: 4,
        title: 'Step4 結案交付（Backfill）',
        status: isPlanned ? 'PENDING' : step4Artifacts.length > 0 ? 'PASS' : 'PENDING',
        lines: ['歷史版本以 milestone + completion report + index 列形成結案追溯鏈。'],
        artifacts: step4Artifacts.length > 0 ? step4Artifacts : row.evidenceRefs,
      },
    ],
    inputs: [...new Set([...row.evidenceRefs, ...legacyAssets.plans, ...legacyAssets.audits])].map((path) => ({
      path,
      digest: `sha256:${row.version}-input`,
      summary: 'Historical source evidence (milestone/plan/audit)',
      note: 'backfilled',
    })),
    outputs: [
      {
        path: 'aaa-tpl-docs/ops/index/version_index.md',
        digest: `sha256:${row.version}-row`,
        summary: 'Canonical version index row',
        note: 'backfilled',
      },
      ...legacyAssets.completion.map((path) => ({
        path: `aaa-tpl-docs/${path}`,
        digest: `sha256:${row.version}-completion`,
        summary: 'Legacy completion report evidence',
        note: 'backfilled',
      })),
    ],
    references: [...new Set([...row.evidenceRefs, ...legacyAssets.plans, ...legacyAssets.audits, ...legacyAssets.completion])].map((path) => ({
      title: 'Historical Evidence',
      path,
      desc: 'Backfilled source record.',
    })),
    contractSummary: {
      sourceOfTruth: 'AAA OPS REGISTRY (BACKFILLED)',
      verdict: isPlanned ? 'HOLD' : 'GO',
      reasonCode: isPlanned ? 'LEGACY_PLANNED' : 'LEGACY_BACKFILLED',
      dataSource: 'MILESTONE_BACKFILL',
      dataDate: row.date,
    },
  };
}

export const versionDetails: VersionDetail[] = [
  ...explicitVersionDetails,
  ...versions
    .filter((v) => !explicitVersionDetails.some((d) => d.releaseTrack === v.releaseTrack && d.version === v.version))
    .map(buildBackfilledDetail),
];
