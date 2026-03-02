import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { versionDetails, versions, workflows } from './data/opsData';

type Lang = 'zh-TW' | 'en';

function getVersionKey(releaseTrack: string, version: string): string {
  return `${releaseTrack}::${version}`;
}

function buildVersionUrl(releaseTrack: string, version: string, lang: Lang): string {
  return `/ops-version/${version}?track=${encodeURIComponent(releaseTrack)}&lang=${lang}`;
}

function getDefaultVersion() {
  return versions[0];
}

function getLang(search: string): string {
  return new URLSearchParams(search).get('lang') || 'zh-TW';
}

function normalizeLang(search: string): Lang {
  return getLang(search) === 'en' ? 'en' : 'zh-TW';
}

type VersionSortOrder = 'asc' | 'desc';

function parseVersionParts(version: string): number[] {
  return version
    .replace(/^v/i, '')
    .split('.')
    .map((part) => Number.parseInt(part, 10))
    .map((part) => (Number.isFinite(part) ? part : 0));
}

function compareVersion(a: string, b: string): number {
  const aParts = parseVersionParts(a);
  const bParts = parseVersionParts(b);
  const maxLen = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < maxLen; i += 1) {
    const av = aParts[i] ?? 0;
    const bv = bParts[i] ?? 0;
    if (av !== bv) {
      return av - bv;
    }
  }
  return 0;
}

const i18n: Record<Lang, Record<string, string>> = {
  'zh-TW': {
    brand: 'AAA',
    homePageTitle: 'AAA',
    governanceStatus: '治理狀態',
    qualityGrade: '品質等級 A+',
    workflow: '工作流程',
    versionList: '版本清單',
    dailyOps: '每日治理營運',
    twoLoopCenter: '雙迴圈控制中心',
    versionDashboard: '版本儀表板',
    signIn: 'Google帳戶 登入',
    homeSub: 'AAA Admin entry point',
    workflowListTitle: '工作流程清單',
    workflowListDesc: '比對 workflow 定義、用途、觸發與模式。',
    versionListTitle: '版本清單',
    versionListDesc: '查看版本目的、狀態、run_ref、evidence。',
    versionDashDesc: 'Step1~Step4 全鏈觀測與契約真相。',
    registryTitle: 'Ops Registry',
    registrySubtitle: '部署內可讀清單（runtime 不讀 docs）',
    generatedAt: '產生時間',
    generatorVersion: '生成器版本',
    sourceCommit: '來源 Commit',
    inputDigest: '輸入摘要',
    colDateVersionName: '日期/版本/名稱',
    colMeaning: '意義 / 為何要做 / 版本落地處',
    colStatus: '狀態',
    colAvailability: '可用性驗證',
    colDateId: '日期 / ID',
    colWorkflow: '工作流程',
    colPurpose: '目的 / 目標 / 場合',
    colTrigger: '觸發 / 時機',
    colMode: '模式',
    openDashboard: '查看儀表板',
    evidenceCount: '證據檔',
    runRef: 'Run Ref',
    versionStepSubtitle: 'Step1~Step4 全鏈觀測（契約真相）',
    dataSource: '資料來源：version-dashboard-record.v0.1',
    backToVersionList: '回版本清單',
    dateVersion: '日期/版本',
    name: '名稱',
    selectVersion: '選擇版本',
    meaning: '版本意義',
    whyThisVersion: '為何要做此版本',
    purpose: '目的',
    target: '目標',
    workflowUseCase: 'WORKFLOW 名稱 與 使用場合',
    verificationStatus: '驗證狀態',
    dataMode: '資料模式',
    updatedAt: '更新時間',
    digest: '摘要',
    stepOverview: '步驟總覽',
    completed: '已完成',
    path: '路徑',
    ioObserve: '輸入/輸出觀測',
    input: '輸入',
    output: '輸出',
    summaryDesc: '摘要說明',
    note: '備註',
    references: '引用關聯',
    open: '開啟',
    twoLoopTitle: 'Two-Loop Dashboard',
    twoLoopPlaceholder: 'AAA template placeholder',
    backToDashboard: '回治理總覽',
    statusReplayVerified: 'REPLAY_VERIFIED',
    autoManual: '自動+手動',
  },
  en: {
    brand: 'AAA',
    homePageTitle: 'AAA',
    governanceStatus: 'Governance Status',
    qualityGrade: 'Quality Grade A+',
    workflow: 'Workflow',
    versionList: 'Versions',
    dailyOps: 'Daily Ops',
    twoLoopCenter: 'Two-loop Center',
    versionDashboard: 'Version Dashboard',
    signIn: 'Sign in with Google',
    homeSub: 'AAA Admin entry point',
    workflowListTitle: 'Workflow Registry',
    workflowListDesc: 'Review workflow definitions, usage, triggers and modes.',
    versionListTitle: 'Version Registry',
    versionListDesc: 'Review purpose, status, run_ref and evidence.',
    versionDashDesc: 'Step1~Step4 chain observability and contract truth.',
    registryTitle: 'Ops Registry',
    registrySubtitle: 'Runtime-readable list (no docs read at runtime)',
    generatedAt: 'Generated At',
    generatorVersion: 'Generator Version',
    sourceCommit: 'Source Commit',
    inputDigest: 'Input Digest',
    colDateVersionName: 'Date/Version/Name',
    colMeaning: 'Meaning / Why / Landing',
    colStatus: 'Status',
    colAvailability: 'Availability',
    colDateId: 'Date / ID',
    colWorkflow: 'Workflow',
    colPurpose: 'Purpose / Target / Use Case',
    colTrigger: 'Trigger / Timing',
    colMode: 'Mode',
    openDashboard: 'Open Dashboard',
    evidenceCount: 'Evidence',
    runRef: 'Run Ref',
    versionStepSubtitle: 'Step1~Step4 chain observability (contract truth)',
    dataSource: 'Data source: version-dashboard-record.v0.1',
    backToVersionList: 'Back to Version List',
    dateVersion: 'Date/Version',
    name: 'Name',
    selectVersion: 'Select Version',
    meaning: 'Meaning',
    whyThisVersion: 'Why this version',
    purpose: 'Purpose',
    target: 'Target',
    workflowUseCase: 'Workflow Name and Use Case',
    verificationStatus: 'Verification',
    dataMode: 'Data Mode',
    updatedAt: 'Updated At',
    digest: 'Digest',
    stepOverview: 'Step Overview',
    completed: 'Completed',
    path: 'Path',
    ioObserve: 'Input / Output Observability',
    input: 'Input',
    output: 'Output',
    summaryDesc: 'Summary',
    note: 'Note',
    references: 'References',
    open: 'Open',
    twoLoopTitle: 'Two-Loop Dashboard',
    twoLoopPlaceholder: 'AAA template placeholder',
    backToDashboard: 'Back to Dashboard',
    statusReplayVerified: 'REPLAY_VERIFIED',
    autoManual: 'Auto+Manual',
  },
};

function t(lang: Lang, key: string): string {
  return i18n[lang][key] || i18n['zh-TW'][key] || key;
}

function icon(name: 'workflow' | 'version' | 'dashboard' | 'loop' | 'detail') {
  if (name === 'workflow') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h6v4H4zM14 6h6v4h-6zM9 14h6v4H9z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === 'version') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4h12v16H6z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 8h6M9 12h6M9 16h4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === 'dashboard') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13h4v7H4zM10 9h4v11h-4zM16 5h4v15h-4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === 'loop') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7a6 6 0 1 1-2 4.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 4v6h6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5h14v14H5z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h8v8H8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HeaderNav() {
  const location = useLocation();
  const lang = normalizeLang(location.search);
  const defaultVersion = getDefaultVersion();
  const nextLang: Lang = lang === 'zh-TW' ? 'en' : 'zh-TW';
  const search = new URLSearchParams(location.search);
  search.set('lang', nextLang);

  return (
    <header className="ops-header">
      <div className="ops-header-inner">
        <Link to={`/?lang=${lang}`} className="brand-link" title="home page">
          {t(lang, 'brand')}
        </Link>
        <div className="header-right">
          <div className="header-status-group">
            <button className="ui-btn ui-btn-sm ui-btn-outline">{t(lang, 'governanceStatus')}</button>
            <span className="ui-pill ui-pill-primary">{t(lang, 'statusReplayVerified')}</span>
            <span className="ui-pill ui-pill-secondary">{t(lang, 'qualityGrade')}</span>
          </div>

          <Link className="ui-btn ui-btn-icon" to={`/ops-registry?tab=workflows&lang=${lang}`} title={t(lang, 'workflow')} aria-label={t(lang, 'workflow')}>
            {icon('workflow')}
          </Link>
          <Link className="ui-btn ui-btn-icon" to={`/ops-registry?tab=versions&lang=${lang}`} title={t(lang, 'versionList')} aria-label={t(lang, 'versionList')}>
            {icon('version')}
          </Link>
          <Link className="ui-btn ui-btn-sm ui-btn-outline" to={`${location.pathname}?${search.toString()}`}>
            {lang === 'zh-TW' ? 'EN' : '繁中'}
          </Link>
          <Link className="ui-btn ui-btn-icon" to={`/ops-dashboard?lang=${lang}`} title={t(lang, 'dailyOps')} aria-label={t(lang, 'dailyOps')}>
            {icon('dashboard')}
          </Link>
          <Link className="ui-btn ui-btn-icon" to={`/ops/two-loop-dashboard?lang=${lang}`} title={t(lang, 'twoLoopCenter')} aria-label={t(lang, 'twoLoopCenter')}>
            {icon('loop')}
          </Link>
          <Link className="ui-btn ui-btn-icon" to={buildVersionUrl(defaultVersion.releaseTrack, defaultVersion.version, lang)} title={t(lang, 'versionDashboard')} aria-label={t(lang, 'versionDashboard')}>
            {icon('detail')}
          </Link>
          <button className="ui-btn ui-btn-primary">{t(lang, 'signIn')}</button>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  const location = useLocation();
  const lang = normalizeLang(location.search);
  const defaultVersion = getDefaultVersion();
  return (
    <main className="ops-main-light">
      <section className="home-wrap">
        <h1 className="home-title">{t(lang, 'governanceStatus')}</h1>
        <p className="home-sub">{t(lang, 'homeSub')}</p>
        <div className="home-grid">
          <Link to={`/ops-registry?tab=workflows&lang=${lang}`} className="home-card">
            <h3>{t(lang, 'workflowListTitle')}</h3>
            <p>{t(lang, 'workflowListDesc')}</p>
          </Link>
          <Link to={`/ops-registry?tab=versions&lang=${lang}`} className="home-card">
            <h3>{t(lang, 'versionListTitle')}</h3>
            <p>{t(lang, 'versionListDesc')}</p>
          </Link>
          <Link to={buildVersionUrl(defaultVersion.releaseTrack, defaultVersion.version, lang)} className="home-card">
            <h3>{t(lang, 'versionDashboard')}</h3>
            <p>{t(lang, 'versionDashDesc')}</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

function RegistryPage() {
  const location = useLocation();
  const lang = normalizeLang(location.search);
  const tab = new URLSearchParams(location.search).get('tab') === 'workflows' ? 'workflows' : 'versions';

  return (
    <main className="ops-surface">
      <div className="ops-container ops-container-registry">
        <div className="ops-title-wrap">
          <h1 className="ops-title">{t(lang, 'registryTitle')}</h1>
          <p className="ops-subtitle">{t(lang, 'registrySubtitle')}</p>
        </div>

        <div className="ops-tab-wrap">
          <Link className={`ui-btn ui-btn-md ${tab === 'workflows' ? 'ui-btn-primary' : 'ui-btn-outline'}`} to={`/ops-registry?tab=workflows&lang=${lang}`}>
            {t(lang, 'workflowListTitle')} ({workflows.length})
          </Link>
          <Link className={`ui-btn ui-btn-md ${tab === 'versions' ? 'ui-btn-primary' : 'ui-btn-outline'}`} to={`/ops-registry?tab=versions&lang=${lang}`}>
            {t(lang, 'versionListTitle')} ({versions.length})
          </Link>
        </div>

        <div className="ops-meta-grid">
          <div>{t(lang, 'generatedAt')}: 2026-03-02T10:30:00+08:00</div>
          <div>{t(lang, 'generatorVersion')}: v1.1.0</div>
          <div>{t(lang, 'sourceCommit')}: local-template</div>
          <div>{t(lang, 'inputDigest')}: sha256:aaa-ops-registry-v201</div>
        </div>

        <div className="ops-table-wrap">
          {tab === 'versions' ? <VersionTable lang={lang} /> : <WorkflowTable lang={lang} />}
        </div>
      </div>
    </main>
  );
}

function VersionTable({ lang }: { lang: Lang }) {
  const [sortOrder, setSortOrder] = useState<VersionSortOrder>('desc');
  const sortedVersions = useMemo(() => {
    const next = [...versions].sort((a, b) => compareVersion(a.version, b.version));
    return sortOrder === 'desc' ? next.reverse() : next;
  }, [sortOrder]);

  return (
    <table className="ops-table ops-table-versions">
      <colgroup>
        <col className="col-idx" />
        <col className="col-v-main" />
        <col className="col-v-meaning" />
        <col className="col-v-status" />
        <col className="col-v-avail" />
      </colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <div className="th-sort-wrap">
              <span>{t(lang, 'colDateVersionName')}</span>
              <span className="th-sort-buttons" aria-label="sort by version">
                <button
                  type="button"
                  className="th-sort-btn is-active"
                  onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
                  aria-label={sortOrder === 'desc' ? 'sort version ascending' : 'sort version descending'}
                  title={sortOrder === 'desc' ? 'sort version ascending' : 'sort version descending'}
                >
                  {sortOrder === 'desc' ? '↓' : '↑'}
                </button>
              </span>
            </div>
          </th>
          <th>{t(lang, 'colMeaning')}</th>
          <th>{t(lang, 'colStatus')}</th>
          <th>{t(lang, 'colAvailability')}</th>
        </tr>
      </thead>
      <tbody>
        {sortedVersions.map((row, idx) => (
          <tr key={getVersionKey(row.releaseTrack, row.version)}>
            <td className="muted">{idx + 1}</td>
            <td>
              <div className="line-1">{row.date}</div>
              <div className="line-2">{row.version}</div>
              <div className="line-1">{row.name}</div>
              <div className="mt-8">
                <Link className="link-chip" to={buildVersionUrl(row.releaseTrack, row.version, lang)}>
                  {t(lang, 'openDashboard')}
                </Link>
              </div>
            </td>
            <td>
              <div className="line-main">{row.meaning}</div>
              <div className="line-warn">{row.why}</div>
              <div className="line-path">{row.landing}</div>
            </td>
            <td>
              <span className={`status-pill ${row.status === 'PASS' ? 'is-pass' : row.status === 'FAIL' ? 'is-fail' : 'is-pending'}`}>{row.status}</span>
            </td>
            <td className="small-cell">
              <div className="line-main">{row.availability}</div>
              <div className="line-main">{t(lang, 'runRef')}: {row.runRef}</div>
              <div className="line-main">{t(lang, 'evidenceCount')}: {row.evidenceRefs.length}</div>
              {row.evidenceRefs.slice(0, 2).map((path) => (
                <div key={path} className="line-path">
                  {path}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WorkflowTable({ lang }: { lang: Lang }) {
  return (
    <table className="ops-table ops-table-workflows">
      <colgroup>
        <col className="col-idx" />
        <col className="col-w-dateid" />
        <col className="col-w-workflow" />
        <col className="col-w-purpose" />
        <col className="col-w-trigger" />
        <col className="col-w-mode" />
      </colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>{t(lang, 'colDateId')}</th>
          <th>{t(lang, 'colWorkflow')}</th>
          <th>{t(lang, 'colPurpose')}</th>
          <th>{t(lang, 'colTrigger')}</th>
          <th>{t(lang, 'colMode')}</th>
        </tr>
      </thead>
      <tbody>
        {workflows.map((row, idx) => (
          <tr key={row.idPath}>
            <td className="muted">{idx + 1}</td>
            <td className="wf-date-id-cell">
              <div className="line-main wf-multiline">{row.createdUpdated}</div>
              <div className="line-path wf-multiline">{row.idPath}</div>
            </td>
            <td>
              <div className="line-1">{row.workflow}</div>
              <div className="line-main">{row.trigger}</div>
            </td>
            <td>
              <div className="line-main">{row.purpose}</div>
              <div className="line-warn">{row.objective}</div>
              <div className="line-main">{row.useCase}</div>
            </td>
            <td className="small-cell">
              <div>{row.triggerWhen}</div>
              <div>{row.source}</div>
            </td>
            <td>
              <span className="status-pill is-pass">{lang === 'en' ? t(lang, 'autoManual') : row.mode}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function VersionPage() {
  const { version } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const lang = normalizeLang(location.search);
  const track = new URLSearchParams(location.search).get('track') || '';
  const current =
    versionDetails.find((item) => item.version === version && item.releaseTrack === track) ||
    versionDetails.find((item) => item.version === version) ||
    versionDetails[0];

  return (
    <main className="ops-surface ops-surface-version">
      <div className="ops-version-wrap">
        <div className="version-head">
          <div>
            <h1 className="ops-title">{t(lang, 'versionDashboard')}</h1>
            <p className="ops-subtitle">{t(lang, 'versionStepSubtitle')}</p>
            <p className="ops-source">{t(lang, 'dataSource')}</p>
          </div>
          <Link className="ui-btn ui-btn-sm ui-btn-outline ops-version-back-btn" to={`/ops-registry?tab=versions&lang=${lang}`}>
            {t(lang, 'backToVersionList')}
          </Link>
        </div>

        <section className="version-card">
          <div className="version-grid-top">
            <div className="tile">
              <div className="tile-label">{t(lang, 'dateVersion')}</div>
              <div className="tile-value">{current.date}</div>
              <div className="tile-value">{current.version}</div>
            </div>
            <div className="tile">
              <div className="tile-label">{t(lang, 'name')}</div>
              <div className="tile-value">{current.name}</div>
            </div>
            <div className="tile">
              <div className="tile-label">{t(lang, 'selectVersion')}</div>
              <select
                className="picker"
                value={current.versionKey}
                onChange={(e) => {
                  const [nextTrack, nextVersion] = e.target.value.split('::');
                  navigate(buildVersionUrl(nextTrack, nextVersion, lang));
                }}
              >
                {versions.map((v) => (
                  <option key={getVersionKey(v.releaseTrack, v.version)} value={getVersionKey(v.releaseTrack, v.version)}>
                    {v.date} · {v.version} · {v.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="version-grid-2">
            <div className="tile"><div className="tile-label">{t(lang, 'meaning')}</div><div className="tile-value">{current.meaning}</div></div>
            <div className="tile"><div className="tile-label">{t(lang, 'whyThisVersion')}</div><div className="tile-value">{current.why}</div></div>
          </div>

          <div className="version-grid-3">
            <div className="tile"><div className="tile-label">{t(lang, 'purpose')}</div><div className="tile-value">{current.purpose}</div></div>
            <div className="tile">
              <div className="tile-label">{t(lang, 'target')}</div>
              <div className="goal-line"><span className="status-pill is-pass">PASS</span><span>{current.targets.pass}</span></div>
              <div className="goal-line"><span className="status-pill is-fail">FAIL</span><span>{current.targets.fail}</span></div>
            </div>
            <div className="tile">
              <div className="tile-label">{t(lang, 'workflowUseCase')}</div>
              <div className="tile-value">{current.workflowName}</div>
              <div className="tile-value">{current.workflowUseCase}</div>
            </div>
          </div>

        </section>

        <section className="version-status-block">
          <div className="version-meta-row">
            <span className="meta-key">{t(lang, 'colStatus')}</span>
            <span className="version-meta-status-pill is-completed">{current.status}</span>
            <span className="meta-key meta-key-spaced">{t(lang, 'verificationStatus')}</span>
            <span className="meta-val">{current.verificationStatus}</span>
            <span className="meta-key meta-key-spaced">{t(lang, 'dataMode')}</span>
            <span className="meta-val">{current.dataMode}</span>
            <span className="meta-key meta-key-spaced">{t(lang, 'updatedAt')}</span>
            <span className="meta-val">{current.updatedAt}</span>
            <span className="meta-key meta-key-spaced">{t(lang, 'digest')}</span>
            <span className="meta-val">{current.digest}</span>
          </div>
        </section>

        <h2 className="ops-h2 ops-h2-step">{t(lang, 'stepOverview')}</h2>
        <div className="step-grid">
          {current.steps.map((step) => (
            <section key={step.step} className="step-panel">
              <div className="step-head">
                <h3>Step{step.step} {step.title}</h3>
                <span className={`status-pill ${step.status === 'PASS' ? 'is-pass' : step.status === 'FAIL' ? 'is-fail' : 'is-pending'}`}>{step.status === 'PASS' ? t(lang, 'completed') : step.status}</span>
              </div>
              {step.lines.map((line) => (
                <p key={line} className="line-main">{line}</p>
              ))}
              <div className="artifact-block">
                <div className="tile-label">{t(lang, 'path')}</div>
                {step.artifacts.map((item) => (
                  <a key={item} className="artifact-link" href="#">
                    {item}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <h2 className="ops-h2 ops-h2-io">{t(lang, 'ioObserve')}</h2>
        <section className="table-panel">
          <h3>{t(lang, 'input')}</h3>
          <table className="ops-table">
            <thead>
              <tr><th>{t(lang, 'path')}</th><th>{t(lang, 'digest')}</th><th>{t(lang, 'summaryDesc')}</th><th>{t(lang, 'note')}</th></tr>
            </thead>
            <tbody>
              {current.inputs.map((item) => (
                <tr key={item.path}><td>{item.path}</td><td>{item.digest}</td><td>{item.summary}</td><td>{item.note}</td></tr>
              ))}
            </tbody>
          </table>
          <h3>{t(lang, 'output')}</h3>
          <table className="ops-table">
            <thead>
              <tr><th>{t(lang, 'path')}</th><th>{t(lang, 'digest')}</th><th>{t(lang, 'summaryDesc')}</th><th>{t(lang, 'note')}</th></tr>
            </thead>
            <tbody>
              {current.outputs.map((item) => (
                <tr key={item.path}><td>{item.path}</td><td>{item.digest}</td><td>{item.summary}</td><td>{item.note}</td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <h2 className="ops-h2 ops-h2-ref">{t(lang, 'references')}</h2>
        <section className="ref-panel">
          {current.references.map((item) => (
            <div key={item.path} className="ref-row">
              <div className="tile-label">{item.title}</div>
              <a href="#" className="ui-btn ui-btn-sm ui-btn-outline">{t(lang, 'open')}</a>
              <div className="line-main">{item.desc}</div>
              <div className="line-path">{item.path}</div>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}

function TwoLoopPage() {
  const location = useLocation();
  const lang = normalizeLang(location.search);
  return (
    <main className="ops-surface">
      <div className="ops-container">
        <h1 className="ops-title">{t(lang, 'twoLoopTitle')}</h1>
        <p className="ops-subtitle">{t(lang, 'twoLoopPlaceholder')}</p>
        <Link to={`/ops-dashboard?lang=${lang}`} className="ui-btn ui-btn-sm ui-btn-outline">{t(lang, 'backToDashboard')}</Link>
      </div>
    </main>
  );
}

function AppRouter() {
  const location = useLocation();
  const lang = normalizeLang(location.search);
  useEffect(() => {
    document.title = t(lang, 'homePageTitle');
  }, [lang]);

  return (
    <div className="app-root">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ops-registry" element={<RegistryPage />} />
        <Route path="/ops-version/:version" element={<VersionPage />} />
        <Route path="/ops-dashboard" element={<HomePage />} />
        <Route path="/ops/two-loop-dashboard" element={<TwoLoopPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
