# LabelLens · SIH26034

A dependency-light functional prototype for the SIH26034 packaged-commodity compliance and food transparency solution.

## Included workflow

- Product image upload and preview
- Demo package analysis
- Processing timeline
- Deterministic label checks with confidence and evidence labels
- Editable field corrections
- Ingredient explanations
- Nutrition values
- Optional dietary preferences and cautious alerts
- Similar-product recommendations
- Saved scans in browser local storage
- Officer dashboard with demo metrics
- Downloadable HTML inspection report

## Run locally

Requires Node.js 18 or later.

```bash
npm run dev
```

Open [http://localhost:4173](http://localhost:4173).

The app intentionally runs without external dependencies so the complete demo works offline. OCR and model extraction are represented by the demo processing pipeline; the production integration boundary is documented in `sih26034-tech-stack.md`.

## Project structure

```text
src/index.html   UI structure
src/styles.css   visual system and responsive layout
src/app.js       state, interactions, analysis demo, alerts, reports
server.mjs       dependency-free local server
```

## Safety boundary

The prototype does not diagnose medical conditions, certify products, or replace laboratory testing. Legal Metrology results are presented as inspection aids and should be reviewed by an authorised officer.
