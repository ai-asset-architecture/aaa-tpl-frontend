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
};

const historicalVersionSeeds: HistoricalVersionSeed[] = [
  { date: '2026-01-31', version: 'v2.0.5', name: 'Repo Type Map SSOT + Soft Enum', status: 'PASS', evidencePath: 'milestones/20260131_v2.0.5_repo_type_map_ssot.md' },
  { date: '2026-01-30', version: 'v2.0.4', name: 'Init Plan Presets', status: 'PASS', evidencePath: 'milestones/20260130_v2.0.4_init_plan_presets.md' },
  { date: '2026-01-30', version: 'v2.0.3', name: 'Repo-Checks Runtime Hint', status: 'PASS', evidencePath: 'milestones/20260130_v2.0.3_repo_checks_runtime_hint.md' },
  { date: '2026-01-29', version: 'v2.0.2', name: 'Nightly Governance Recovery', status: 'PASS', evidencePath: 'milestones/20260129_v2.0.2_nightly_governance_recovery.md' },
  { date: '2026-01-29', version: 'v2.0', name: 'The Agent OS', status: 'PASS', evidencePath: 'milestones/20260129_v2.0_the_agent_os.md' },
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

const historicalBackfilledVersions: OpsVersionRow[] = historicalVersionSeeds.map((item) => ({
  releaseTrack: 'legacy_milestone',
  date: item.date,
  version: item.version,
  name: item.name,
  meaning: `歷史里程碑回填：${item.name}`,
  why: '補齊歷史版本可追溯性，避免僅有單一新流程版本可查。',
  landing: 'governance:legacy_milestone',
  status: item.status === 'PLANNED' ? 'PLANNED' : 'PASS',
  availability: 'historical-backfilled-row',
  runRef: 'legacy:N/A',
  evidenceRefs: [item.evidencePath],
}));

export const versions: OpsVersionRow[] = [
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
      'docs/reviews/2026-03-02-v2.1.0-step4-dashboard-baseline.md',
      'docs/reviews/2026-03-02-v2.1.0-step4-mcp-evidence.md',
      'docs/reviews/2026-03-02-v2.1.0-step4-exit-checklist.md',
      'docs/reviews/2026-03-02-v2.1.0-step4-completion-report.md',
    ],
  },
  {
    releaseTrack: 'operate_maintain_v2',
    date: '2026-03-01',
    version: 'v2.0.0',
    name: 'AAA Operate-Maintain Workflow Law Adoption',
    meaning: '將 AAA 版本開發流程統一為 4-Step v2.0.0 並定義可匯入能力。',
    why: '讓 AAA 本體與繼承專案共享 machine-checkable 版本治理。',
    landing: 'governance:operate_maintain_workflow_v2',
    status: 'UNVERIFIED',
    availability: 'bootstrap-row',
    runRef: 'N/A (step2-pending)',
    evidenceRefs: ['operate_maintain_guide.md', 'workflow_index.md', 'version_index.md'],
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

export const workflows: WorkflowRow[] = [
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
];

const explicitVersionDetails: VersionDetail[] = [
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
          'docs/plans/2026-03-01-v2.1.0-guide-parity-gate-plan.md',
          'docs/audits/2026-03-01-v2.1.0-guide-parity-gate-audit.md',
          'docs/reviews/2026-03-01-v2.1.0-guide-parity-gate-diff-paths.md',
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
          'docs/reviews/2026-03-01-v2.1.0-step2-exit-checklist.md',
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
          'docs/evidence/v2.1.0/guide-parity-gate/asset-manifest.v0.1.json',
          'docs/milestones/20260301_v2.1.0_guide-parity-gate.md',
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
          'docs/reviews/2026-03-02-v2.1.0-step4-mcp-evidence.md',
          'docs/reviews/2026-03-02-v2.1.0-step4-exit-checklist.md',
          'docs/reviews/2026-03-02-v2.1.0-step4-completion-report.md',
        ],
      },
    ],
    inputs: [
      {
        path: 'aaa-tpl-docs/version_index.md',
        digest: 'sha256:version-index-v201',
        summary: 'Version matrix source of status/evidence metadata',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/workflow_index.md',
        digest: 'sha256:workflow-index-v201',
        summary: 'Workflow registry source for ops-registry workflows tab',
        note: '-',
      },
    ],
    outputs: [
      {
        path: 'aaa-tpl-docs/docs/reviews/2026-03-02-v2.1.0-step4-mcp-evidence.md',
        digest: 'sha256:step4-mcp-evidence',
        summary: 'MCP gate evidence including 9003 validation',
        note: '-',
      },
      {
        path: 'aaa-tpl-docs/docs/reviews/2026-03-02-v2.1.0-step4-completion-report.md',
        digest: 'sha256:step4-completion-report',
        summary: 'Step4 completion claim with gate mapping',
        note: '-',
      },
    ],
    references: [
      {
        title: 'Version Index Source',
        path: 'aaa-tpl-docs/version_index.md',
        desc: 'Backfilled from canonical version index row.',
      },
      {
        title: 'Workflow Index Source',
        path: 'aaa-tpl-docs/workflow_index.md',
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
        path: 'aaa-tpl-docs/version_index.md',
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

function buildBackfilledDetail(row: OpsVersionRow): VersionDetail {
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
    dataMode: 'historical-backfill',
    updatedAt: `${row.date}T23:59:59+08:00`,
    digest: `sha256:${row.releaseTrack}-${row.version}-backfill`,
    steps: [
      {
        step: 1,
        title: 'Step1 契約基線（Backfill）',
        status: isPlanned ? 'PENDING' : 'PASS',
        lines: ['歷史版本由 milestones/index 回填至版本索引。'],
        artifacts: row.evidenceRefs,
      },
      {
        step: 2,
        title: 'Step2 實作與執行（Backfill）',
        status: isPlanned ? 'PENDING' : 'PASS',
        lines: ['歷史資料僅提供回填證據，不重新執行舊版 pipeline。'],
        artifacts: ['legacy:N/A'],
      },
      {
        step: 3,
        title: 'Step3 資產保存（Backfill）',
        status: 'PENDING',
        lines: ['舊版未套用 v2 workflow 資產封裝格式。'],
        artifacts: ['N/A (historical backfill)'],
      },
      {
        step: 4,
        title: 'Step4 結案交付（Backfill）',
        status: isPlanned ? 'PENDING' : 'PASS',
        lines: ['歷史版本以索引列 + 里程碑證據提供可追溯性。'],
        artifacts: row.evidenceRefs,
      },
    ],
    inputs: row.evidenceRefs.map((path) => ({
      path,
      digest: `sha256:${row.version}-input`,
      summary: 'Historical source evidence',
      note: 'backfilled',
    })),
    outputs: [
      {
        path: 'aaa-tpl-docs/version_index.md',
        digest: `sha256:${row.version}-row`,
        summary: 'Canonical version index row',
        note: 'backfilled',
      },
    ],
    references: row.evidenceRefs.map((path) => ({
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
