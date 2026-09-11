# SIH26034 Product Requirements Document

## Product

**LabelLens** — an image-based packaged-commodity compliance and food-transparency platform.

## 1. Summary

LabelLens scans product packaging and produces two separate outputs:

1. A deterministic Legal Metrology compliance assessment.
2. A food transparency summary with ingredient explanations, personalized alerts, and comparable alternatives.

AI and OCR extract and explain information. Versioned deterministic rules decide compliance.

## 2. Problem statement

Inspectors must manually read package declarations such as product name, manufacturer, net quantity, MRP, dates, importer information, country of origin, and consumer-care details. Consumers also struggle to understand small-print ingredients, nutrition information, allergens, and product differences.

The system should reduce inspection effort while making packaged-food information easier to understand.

## 3. Goals

- Scan product images and identify relevant label regions.
- Extract structured Legal Metrology fields.
- Check fields against configurable rules.
- Show evidence and confidence for every important result.
- Explain ingredients and nutrition values in plain language.
- Alert users about explicit or potentially relevant dietary conflicts.
- Recommend similar products using visible comparison reasons.
- Generate officer-ready reports.
- Provide inspection history and enforcement dashboards.

## 4. Non-goals

- Issuing legally binding penalties automatically.
- Replacing an authorised officer or laboratory testing.
- Diagnosing allergies or medical conditions.
- Prescribing diets or treatment.
- Certifying a product as universally safe or healthy.
- Deciding compliance from an unexplained AI score.

## 5. Personas

### Legal Metrology officer

Needs fast capture, field-level findings, rule references, evidence crops, correction tools, and reports.

### Food or consumer-protection officer

Needs ingredient analysis, allergen visibility, recurring violation trends, and product/category comparisons.

### Consumer

Needs readable ingredients, nutrition summaries, dietary preference alerts, and comparable alternatives.

### Administrator

Maintains rule versions, thresholds, taxonomies, translations, and audit history.

## 6. Core user journeys

### Officer

1. Start a new inspection.
2. Capture front, back, side, and close-up images.
3. Receive image-quality feedback.
4. Review OCR-extracted fields and confidence.
5. Correct uncertain values.
6. Run the compliance engine.
7. Review findings and evidence.
8. Add notes and generate a PDF report.

### Consumer

1. Scan a food package.
2. Review extracted ingredients and nutrition.
3. Optionally set preferences such as peanut avoidance, vegetarian preference, low sugar, or low sodium.
4. View cautious, evidence-backed alerts.
5. Compare similar or better-matched products.

## 7. Functional requirements

### Capture and OCR

- Accept camera images, uploads, and optional barcodes.
- Support multiple images per inspection.
- Detect blur, glare, low contrast, perspective, and cropped text.
- Detect text regions and preserve bounding boxes.
- Support English and at least two Indian languages in the MVP.
- Preserve raw OCR text, normalized values, confidence, and source image.
- Flag conflicting values across images.
- Allow manual correction of every extracted field.

### Legal Metrology extraction

Support, where applicable:

- Product/common name
- Manufacturer, packer, importer, and addresses
- Country of origin
- Net quantity and unit
- MRP
- Date of manufacture, packing, or import
- Best-before or use-by information
- Consumer-care details
- Batch or lot number
- Applicable declarations and marks

### Compliance engine

Each field must produce one of:

- `PASS`
- `FAIL`
- `REVIEW`
- `NOT_APPLICABLE`
- `NOT_DETECTED`

Each finding must include:

- Rule ID
- Rule version
- Source reference
- Severity
- Explanation
- Evidence image or OCR span
- Confidence

Low-confidence extraction must produce `REVIEW`, not an automatic legal failure.

### Food intelligence

- Detect and parse ingredient lists.
- Normalize synonyms and spelling variants.
- Classify ingredient function, additive category, allergen category, and dietary tags.
- Extract nutrition values per serving, per 100 g, per 100 ml, and per package where available.
- Preserve original label wording.
- Explain unfamiliar ingredients without declaring them universally safe or unsafe.
- Separate explicit label claims from model inference.

### Personalization and alerts

Users may configure allergens, ingredients to avoid, dietary preferences, and nutrition priorities.

Alert types:

- `INFO`
- `CAUTION`
- `HIGH_ATTENTION`
- `REVIEW`

Alert language must use terms such as “potential match,” “may be relevant,” and “confirm the label.” The product must not diagnose, prescribe, or claim medical safety.

### Alternatives

Rank candidates by category similarity, dietary compatibility, nutrition comparison, ingredient similarity, price range, and data confidence.

Every alternative must show why it was suggested, for example:

> Same category and pack size; lower sugar per 100 g; no detected match to the saved peanut preference.

### Reports and dashboards

Reports must include images, extracted fields, evidence crops, findings, rule references, corrections, timestamps, and officer notes.

Dashboards should show inspection totals, pass/fail/review rates, recurring rules, product categories, manufacturers, geography, average inspection time, and pending reviews.

## 8. Data model

Core entities:

- User
- UserPreference
- Inspection
- Product
- ImageAsset
- OCRSpan
- ExtractedField
- Ingredient
- NutritionFact
- Rule
- Finding
- Alternative
- AuditEvent

Every inspection stores the OCR/model version, rule version, timestamp, and verification status.

## 9. API outline

```text
POST /api/v1/inspections
POST /api/v1/inspections/{id}/images
POST /api/v1/inspections/{id}/process
GET  /api/v1/inspections/{id}
GET  /api/v1/inspections/{id}/fields
PATCH /api/v1/inspections/{id}/fields/{field_id}
POST /api/v1/inspections/{id}/compliance/evaluate
GET  /api/v1/inspections/{id}/ingredients
GET  /api/v1/inspections/{id}/nutrition
GET  /api/v1/inspections/{id}/alternatives
POST /api/v1/inspections/{id}/reports
GET  /api/v1/dashboard/summary
```

## 10. MVP scope

- Web-based scan workflow
- Multi-image upload
- Image-quality feedback
- OCR and structured field extraction
- Core Legal Metrology rules
- Manual correction and rerun
- Ingredient and nutrition extraction
- Allergen and dietary alerts
- Three or more alternative products from a seeded catalogue
- Evidence-backed PDF report
- Officer dashboard
- English and Hindi primary flows

## 11. Acceptance criteria

- A user can scan at least two package views.
- Extracted fields link to evidence and confidence.
- Officers can correct and rerun analysis.
- Compliance findings reference deterministic rules.
- Uncertain results become `REVIEW`.
- Ingredient explanations preserve raw label text.
- Alerts explain what matched and why.
- Alternatives show measurable comparison reasons.
- Reports distinguish extracted from manually confirmed values.
- No screen makes a diagnosis or unsupported medical claim.

## 12. Risks and mitigations

| Risk | Mitigation |
|---|---|
| OCR misreads critical values | Confidence, evidence crops, manual confirmation |
| Regulations change | Versioned configurable rules |
| False failure | Use review states and officer confirmation |
| Health overclaim | Controlled language and safety review |
| Poor images | Quality checks and guided recapture |
| Privacy exposure | Encryption, access control, deletion controls |
| Weak alternatives | Seeded, reviewed catalogue with data warnings |

## 13. Demo flow

Scan a deliberately imperfect food package, show image-quality feedback, extract fields, correct one uncertain value, run deterministic compliance rules, explain one ingredient, enable a dietary preference, show a cautious alert, compare alternatives, and generate the report.
