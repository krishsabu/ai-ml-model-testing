# AI Evaluation Harness — Method Change Governance Framework

A framework for governing AI method changes from development to production.
Delivers GO / REVIEW / NO-GO verdicts backed by immutable evidence records
across every AI use case type — RAG, agentic pipelines, multi-hop retrieval,
and generative assistants.

## What This Is

Most AI teams have no systematic gate between "built" and "deployed."
This framework defines one — structured around the concept of an **AI method**
(a versioned configuration of model + retriever + prompt + graph topology)
rather than the underlying model in isolation.

## Core Ideas

- **Method-centric governance** — a model upgrade triggers method re-evaluation
- **Tiered evaluation** — works without ground truth from day one; builds toward it
- **Evidence-first verdicts** — every verdict is an immutable audit record, not just a score
- **Proportionate gates** — evaluation depth scales with risk, not with team size
- **Regression detection** — every metric delta vs a locked baseline; regressions block promotion

## Pages

- `index.html` — Framework overview and principles
- `how-it-works.html` — Evaluation tiers, verdict engine, ground truth path
- `method-change.html` — What triggers re-evaluation and every gate to production

## Live Demo

[View on GitHub Pages →](https://your-username.github.io/ai-eval-harness)

---

Designed as a reference architecture. Adaptable to any enterprise AI portfolio.
