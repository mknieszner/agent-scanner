# Agent Scanner

**Improve the efficiency, cost control and safety of AI-assisted development with evidence from real agent sessions.**

[Open the browser demo](https://mknieszner.github.io/agent-scanner/) · **English** · [Polski](README.pl.md)

## Executive summary

Agent Scanner helps engineering teams turn AI adoption into a practice they can examine and improve. It supports five decisions: **where to improve efficiency, what to optimize, which data and actions need closer review, how repository configuration aligns with team standards, and which agent capabilities are actually being used.**

It brings together two sources of evidence: **recorded GitHub Copilot sessions** and **repository AI configuration**. Session analysis reveals the captured course of work; configuration review documents the instructions, skills, agents and tools prepared for that work. Together, they give developers, technical leads and people responsible for AI adoption a concrete basis for choosing improvements.

| Objective | Outcome Agent Scanner supports | Evidence to work with |
|---|---|---|
| **Increase efficiency** | Find repeated work and bottlenecks worth investigating; choose changes to task instructions, tools or delegation. | Model rounds, call durations, repeated tool calls, subagent activity and compaction. |
| **Optimize consumption and costs** | Understand where tokens and Copilot AI credits are consumed and prioritize optimization experiments. | Main-agent, subagent and compaction balances; input, output, cache measurements and clearly marked estimates. |
| **Strengthen security review** | Review the information and operations exposed to agents, and decide where tighter data or tool boundaries are needed. | Captured model requests, tool arguments and results, and repository declarations of instructions and MCP tools. |
| **Review engineering standards** | Identify configuration gaps and prepare a shared baseline for working with agents. | An inventory of instructions, skills, agents, MCP, prompts and supported IDE settings, with source previews and a PDF report. |
| **Assess AI adoption** | Distinguish configured capabilities from observed use, and identify areas for better configuration, guidance or training. | Session-level evidence of mechanisms available, passed to model requests and used, with explicit capture gaps. |

Scanner supplies evidence for human decisions. Efficiency and consumption gains depend on the changes made and the tasks evaluated; its security view supports review of captured activity, without certifying compliance or performing a vulnerability audit.

### Turn observations into improvements

Review a representative session, identify a specific issue, and change one part of the working setup: an instruction, a skill description, a tool selection or a delegation pattern. Then record another comparable task and review its results, consumption and execution. Scanner makes the evidence available for that comparison; task quality and the value of any trade-off still require your assessment.

## Explore the evidence

Agent Scanner turns **GitHub Copilot OpenTelemetry session files** into interactive views of agent activity and inventories selected AI configuration files from repositories.

The public demo processes imported files in your browser. No backend setup or AI API key is required. The application interface is currently in Polish.

<!-- SCREENSHOT 01: screenshots/session-workflow.png
Hero: Mapa pracy / Workflow map, with main-agent rounds and a linked subagent.
Use synthetic telemetry. Show one readable interaction with the Context or Tokens layer.
Add the image here when available; do not publish a broken image link.
-->

## Analyze agent sessions

### Follow the agent's work

The **Workflow map** connects model rounds, tool activity, related subagents and context compaction. Switch between context, token and credit layers, select an interaction, and open the evidence behind a round.

The **Cost and execution** view combines a session balance with a timeline. Main-agent calls, linked subagents and compaction are accounted for separately, so a nested call is not counted twice. Model-call duration is kept separate from elapsed session time.

<!-- SCREENSHOT 02: screenshots/session-cost-timeline.png
Cost and execution: expanded balance plus a few rounds. Include the main agent,
a subagent or compaction, and visible token/cache/credit columns.
-->

### Inspect the context and tools

Open a round to examine captured instructions, messages, model requests and responses, tool arguments and results. For compaction, inspect the request and summary; a before/after context comparison is shown only when later telemetry confirms that the summary was received.

The tools overview separates available definitions from observed use. Inspect definition versions and repeated calls with the same canonical arguments, and see which rounds contained them. This helps investigate context overhead and repeated work without treating every repetition as a mistake.

<!-- SCREENSHOT 03: screenshots/session-round-details.png
Round details: a readable captured request or tool result next to its timeline.
Optionally replace this with the tools overview and its repeated-call details.
-->

### See which capabilities were actually used

The **Summary** view surfaces evidence of repository instructions, skills, custom agents, MCP tools, subagents and compaction. It distinguishes mechanisms found in the captured context, definitions passed to model requests, and observed use. Missing capture remains visible rather than being treated as proof that a capability was absent.

<!-- SCREENSHOT 04: screenshots/session-capabilities.png
Summary: capability cards and expanded Available vs used rows, on the same synthetic session.
-->

For deeper inspection, **Technical data** exposes a searchable list of spans, recorded attributes and raw telemetry. The original evidence remains available alongside the interpreted views.

## Review repository configuration

Choose a local repository folder, or use **AI Agent Scanner Capture** from a GitLab repository page. The bookmarklet reads selected configuration files through that GitLab instance's REST API using your existing browser session, then transfers them to Scanner.

- Browse instructions, skills, custom agents, MCP definitions, prompts and supported VS Code / JetBrains AI settings.
- Preview captured configuration files and follow source links when repository metadata is available.
- Keep snapshots locally and return to them later.
- Generate a PDF with repository metadata, category navigation, configuration details, source excerpts and links.

Files merely linked from a configuration are listed as references; Scanner does not recursively download their contents. This is an inventory of selected AI configuration, not a whole-codebase audit. GitLab browser policies can restrict the bookmarklet.

<!-- SCREENSHOT 05: screenshots/repository-report.png
Repository report: instructions, skills and MCP, with one expanded configuration.
Use the synthetic playground. Optional companion: screenshots/repository-pdf.png,
showing the PDF cover and a detail page in a single image.
-->

## Try it with a Copilot session

1. [Open Agent Scanner](https://mknieszner.github.io/agent-scanner/).
2. Copy the file-export configuration from the start screen into **VS Code User Settings (JSON)**. Set your own path in `github.copilot.chat.otel.outfile`, reload VS Code, and work with Copilot.
3. Select **Wczytaj plik Copilot OTel JSONL** or the import icon beside **Sesje**. Choose the generated `.jsonl` or `.ndjson` file, up to **64 MiB**.
4. Review the preview, select one or more main conversations, and confirm. Scanner includes their unambiguously linked subagents and supporting calls.
5. Explore **Podsumowanie**, **Koszt i przebieg**, **Mapa pracy** and **Dane techniczne**.

Detailed content views depend on what the exporter captured. Content capture can include source code, prompts and tool outputs; enable it only for material you intend to record.

The session importer supports **Copilot OTel JSONL**, not arbitrary OTLP files. Session export uses Scanner's own JSON format for inspection and sharing; that export cannot currently be re-imported through the Copilot JSONL importer. Keep the original JSONL if you need to import the session again.

## Browser demo and full application

| Capability | Public browser demo | Full application |
|---|---|---|
| Session-file import, timeline, workflow map, tools and raw evidence | Available locally | Available |
| Repository inventory, local folder / GitLab capture and PDF | Available locally | Available |
| Storage | This browser's IndexedDB | Local backend database |
| Receiving telemetry through OTLP/HTTP | Not available | Available with a configured backend |
| AI Hub: action classification, session chat and optimization advice | Not available | Explicitly invoked through configured Copilot integration |
| AI assessment of repository configuration | Not available | Explicitly invoked after selecting inputs and a model |

The public demo is useful without model inference. Full-application AI actions are separate from the deterministic session views and may send the selected material to Copilot. This repository publishes the demo distribution; it does not contain the full application's source or installation package.

## Reading the results

- **Measured values, calculations and estimates are distinct.** `≈` marks estimates; a missing measurement is not zero.
- **Credits means GitHub Copilot AI credits.** It is not currency or a billing statement.
- **Recorded evidence sets the limits.** Scanner does not reconstruct missing messages or hidden reasoning, and it is not an exact tokenizer.
- **Telemetry is not a live connection to the IDE.** A session describes the data that was captured and imported; available tools do not prove execution, and a tool request does not by itself prove success.

## Data and privacy

In the demo, session parsing and analysis run locally, with work delegated to a browser worker and data saved in IndexedDB. Imported session and repository content is not uploaded to a Scanner backend or an AI service. Loading the app still contacts GitHub Pages, and GitLab capture makes authenticated requests to the GitLab instance you are browsing.

Saved data belongs to this site address and browser profile. Clearing site data, browser storage eviction or switching profiles can make it unavailable. You can delete sessions and repository snapshots from the application.

Telemetry and exports may contain code, prompts, file paths, arguments and results. Recognized secrets in repository configuration are masked, but this is not a guarantee of anonymization. Review any JSON, PDF or screenshot before sharing it.

## About this repository

This is the **public distribution repository** for Agent Scanner. The `gh-pages` branch contains the static demo, this documentation and, when added, illustrative screenshots. Application source code is maintained separately in a private repository.

[Launch Agent Scanner](https://mknieszner.github.io/agent-scanner/)
