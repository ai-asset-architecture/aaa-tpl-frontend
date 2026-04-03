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
