# aaa-tpl-frontend

## Purpose / Scope
Template repo for frontend apps that follow aaa governance and CI patterns.

## Ownership / CODEOWNERS
Owned by frontend maintainers. See `CODEOWNERS` (to be added).

## Versioning / Release
Templates are versioned by git tags. Consumers should use a specific tag when generating new repos.

## How to Consume / Use
Use this repo as a template for new frontend repos, then wire CI to `aaa-actions`.

## Contribution / Promotion Rules
Template changes must preserve required docs links and CI wiring guidance.

## Repo Scope
Frontend UI implementation only. API contracts and shared schemas live in their designated aaa repos.

## Docs Link to <org>-docs
Project documentation lives in `<org>-docs`. Link to it from this repo's README and contributing docs.

## CI wiring to aaa-actions
Use reusable workflows from `aaa-actions` with tag pins for lint/test/eval gates.
