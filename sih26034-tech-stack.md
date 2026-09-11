# SIH26034 Recommended Technology Stack

## 1. Recommendation

Use a TypeScript web frontend and Python AI/OCR backend.

```text
Next.js + TypeScript
        |
FastAPI API
        |
Supabase PostgreSQL + Storage + Auth
        |
Redis job queue
        |
OpenCV + PaddleOCR + extraction services
        |
Deterministic Python rule engine
```

This keeps the visual product fast to build while preserving access to Python’s OCR, computer-vision, and data-processing ecosystem.

## 2. Stack by layer

| Layer | Technology | Why |
|---|---|---|
| Web app | Next.js App Router + TypeScript | Routing, dashboards, server/client rendering, type safety |
| Styling | Tailwind CSS + shadcn/ui | Rapid, consistent implementation of the editorial design system |
| API | FastAPI + Pydantic | Typed Python APIs and validation |
| Database | PostgreSQL | Structured inspections, rules, findings, ingredients, analytics |
| Auth | Supabase Auth | Consumer and officer login flows |
| File storage | Supabase Storage | Product images, evidence crops, reports |
| Image processing | OpenCV | Rotation, cropping, contrast, blur and glare checks |
| OCR | PaddleOCR | Multilingual text detection and recognition with confidence values |
| Extraction | Python services + structured model output | Maps text into fields, ingredients, and nutrition values |
| Compliance | Python rule modules | Deterministic, versioned Legal Metrology rules |
| Queue | Redis + RQ | Background OCR and report jobs without unnecessary infrastructure |
| Reports | HTML/CSS + Playwright PDF | Print-friendly evidence reports |
| Testing | Pytest, Vitest, Playwright | Backend, component, and end-to-end tests |
| Packaging | Docker Compose | Reproducible local development and deployment |

## 3. Architecture

```text
Browser
  |
  v
Next.js frontend
  |
  v
FastAPI API -------------------- Supabase Auth
  |                              Supabase Storage
  v
PostgreSQL inspection data
  |
  v
Redis queue
  |
  v
Python worker
  ├── OpenCV preprocessing
  ├── PaddleOCR
  ├── Field extraction
  ├── Ingredient normalization
  ├── Nutrition parsing
  ├── Rule evaluation
  └── PDF report generation
```

## 4. Repository structure

```text
sih26034/
├── web/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
├── api/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── rules/
│   │   └── models/
│   └── tests/
├── worker/
│   ├── image_processing/
│   ├── ocr/
│   ├── extraction/
│   ├── ingredients/
│   └── reports/
├── rules/
├── database/
│   └── migrations/
├── docker-compose.yml
└── README.md
```

## 5. Processing flow

1. Frontend requests an inspection ID.
2. Images upload to a private storage bucket.
3. API creates a processing job.
4. Worker validates and preprocesses images.
5. OCR returns text, boxes, languages, and confidence.
6. Extraction service maps OCR spans into structured fields.
7. Officer can correct uncertain fields.
8. Deterministic rule engine evaluates compliance.
9. Food intelligence service parses ingredients and nutrition.
10. Alert service evaluates user preferences.
11. Recommendation service ranks alternatives.
12. Report service generates PDF evidence.

## 6. Rule-engine design

Store rules as versioned records or JSON/YAML definitions.

```json
{
  "rule_id": "LM_NET_QUANTITY_UNIT_001",
  "category": "food",
  "jurisdiction": "IN",
  "severity": "high",
  "effective_from": "2026-01-01",
  "condition": "net_quantity.unit in accepted_units",
  "result_if_false": "FAIL",
  "review_if_uncertain": true
}
```

The rule engine should never depend on a free-form language-model answer.

## 7. AI boundaries

Use AI for:

- OCR cleanup
- Structured field extraction
- Ingredient explanations
- Translation
- Alternative explanations

Do not use AI as the final authority for:

- Legal compliance
- Medical diagnosis
- Allergen certainty
- Universal health claims

## 8. MVP implementation order

### Phase 1

- Next.js shell and scan flow
- Supabase project
- FastAPI health endpoint
- Image upload
- Seeded product dataset

### Phase 2

- OpenCV quality checks
- PaddleOCR integration
- Structured extraction
- Manual correction UI

### Phase 3

- Deterministic Legal Metrology rules
- Evidence viewer
- Compliance result screen

### Phase 4

- Ingredient and nutrition analysis
- Preference alerts
- Alternative comparison
- PDF report

### Phase 5

- Officer dashboard
- Audit events
- Multilingual polish
- End-to-end testing

## 9. What to avoid initially

- Kubernetes
- Kafka
- Many independent microservices
- A native mobile app before the web flow works
- Training a custom OCR model from scratch
- A separate vector database
- Automatic medical recommendations
- Allowing an LLM to decide compliance

## 10. Deployment recommendation

- Use Docker Compose locally.
- Deploy the Next.js frontend to a managed web host.
- Deploy the FastAPI API and worker as Docker services.
- Use managed PostgreSQL, object storage, and Redis.
- Store secrets only in environment variables.
- Keep uploaded package images private and expose them through signed URLs.

## 11. Initial environment variables

```text
NEXT_PUBLIC_API_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
REDIS_URL=
OCR_MODEL_PATH=
MODEL_API_KEY=
```

Never commit production keys to source control.
