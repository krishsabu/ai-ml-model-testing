# AI Evaluation Harness — Quality and Release Governance

A reference architecture for evaluating changes to AI systems before release.

This project explains how teams can assess quality, safety and regression risks when changing models, prompts, retrieval settings or agent workflows.

## Project Status

This folder contains a static documentation website built with HTML, CSS and JavaScript.

It presents an evaluation and governance approach. It does not include a backend evaluation service, automated model scoring or an enforced deployment gate.

## What the Framework Describes

- **Method-based evaluation:** Assess the combined configuration of the model, prompt, retriever and workflow—not just the model.
- **Tiered evaluation:** Choose evaluation methods based on available evidence and ground-truth data.
- **Risk-based checks:** Apply more detailed evaluation to higher-risk changes.
- **Release decisions:** Define criteria for GO, REVIEW and NO-GO outcomes.
- **Regression checks:** Compare results against an agreed baseline.
- **Evidence records:** Design traceable records of results, configuration and release decisions.

These are documented design principles, not verified capabilities of an executable evaluation engine in this folder.

## Explore the Documentation

- [Framework overview](index.html)
- [How evaluation works](how-it-works.html)
- [Method changes and release gates](method-change.html)

## View Locally

Open `index.html` in your browser to view the website.

The other pages explain the evaluation approach and proposed release process.

## Implementation Roadmap

Possible next steps include:

- An executable evaluation service.
- Automated tests for verdict rules.
- Versioned evaluation datasets and baseline comparisons.
- Persistent evidence storage.
- CI/CD integration for release checks.

## Scope

This project demonstrates an AI quality engineering design approach. It does not, by itself, verify production deployment, employer adoption or business outcomes.