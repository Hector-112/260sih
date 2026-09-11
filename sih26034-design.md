# SIH26034 Visual Design Document

## Working product name

**LabelLens** — a calm, evidence-led product scanning experience for packaged-commodity compliance and food transparency.

The name is provisional. The visual system is designed to work with the final project name.

## 1. Reference interpretation

This direction is based on the attached screenshot of the **Linger fragrance e-commerce website** reference, but the final visual language is adapted for packaged food, ingredients, and label evidence.

The reference is defined by:

- Editorial serif typography.
- Warm white and pale green surfaces.
- Soft-focus product photography.
- Botanical and natural visual cues.
- Large, quiet hero statements.
- Minimal black navigation and small utility icons.
- Guided discovery through questions such as “How do you want to feel?”
- Product matching based on mood and preferences.
- Alternating immersive image panels and restrained information blocks.
- A premium, slow, tactile browsing rhythm.

The SIH26034 adaptation should preserve the calm discovery pattern while replacing fragrance cues with food cues: grains, fruits, spices, leaves, seeds, packaging materials, nutrition panels, and ingredient evidence.

The goal is not to make compliance feel decorative. The goal is to make a potentially complex inspection experience feel clear, human, and easy to enter.

## 2. Design proposition

### Core idea

**Look closer. Understand what you eat.**

The user begins with a simple question:

> **What do you want to know about this product?**

Possible paths:

- Check the label.
- Understand the ingredients.
- Find allergens.
- Compare nutrition.
- Find a better-matched alternative.

### Food visual language

The central visual metaphor is **from ingredient to package to person**.

- Leaves and greenery represent visible food origins and ingredient categories.
- Grains, seeds, fruits, spices, and pulses represent the variety of packaged foods.
- Paper, foil, cardboard, and transparent packaging represent the physical label being inspected.
- Nutrition tables and ingredient lines represent the evidence layer.
- A plate, bowl, lunchbox, or grocery shelf may appear as context, but the package label remains the source of truth.

Use greenery to communicate freshness, origin, and food context—not to imply that a product is automatically healthy or safe.

This replaces a dense dashboard-first experience with a guided entry point. The system can still expose full inspection detail after the scan.

### Product personality

| Attribute | Expression |
|---|---|
| Calm | Soft surfaces, generous whitespace, slow transitions |
| Clear | Large statements and plain-language summaries |
| Credible | Evidence crops, rule references, confidence states |
| Tactile | Soft photography, subtle grain, layered panels |
| Curious | Guided questions and exploratory ingredient views |
| Responsible | Cautious alerts and visible uncertainty |

## 3. Brand language

### Recommended headline system

Primary:

> **What do you want to know about this product?**

Supporting lines:

- **Read the label in a clearer way.**
- **Understand what is declared.**
- **See the evidence behind every result.**
- **Find a product that fits your priorities.**

Compliance-specific:

- **Is the package declaration complete?**
- **Review the fields that need attention.**
- **One scan. Every visible signal.**

Consumer-specific:

- **What is inside the package?**
- **Which ingredients matter to you?**
- **Compare by what you care about.**

Use sentence case for product communication. Reserve all caps for small labels such as `SCAN`, `EVIDENCE`, `REVIEW`, and `COMPARE`.

## 4. Visual direction

### 4.1 Editorial composition

The interface should feel like a carefully composed editorial spread rather than a conventional admin dashboard.

Use:

- Large left-aligned statements.
- Offset image and information panels.
- Narrow metadata lines above headings.
- Thin rules and understated dividers.
- Full-width image moments between structured sections.
- Deliberate empty space around major decisions.

For officer screens, retain the same visual language but increase information density inside clearly bounded evidence tables.

### 4.2 Food and ingredient imagery

Use photography or generated imagery that suggests:

- Paper and packaging texture.
- Fresh leaves, grains, seeds, fruits, spices, pulses, and herbs.
- Natural light.
- Close-up label details.
- Hands holding or rotating a package.
- Bowls, lunchboxes, pantry shelves, and ingredient preparation surfaces.
- Product surfaces and material details.

Images should support understanding, not imply that a product is healthy. Do not use leaves, green colour, or natural food photography as a nutrition claim.

### 4.3 Layered panels

The reference uses angled and overlapping webpage panels. Adapt this as a controlled interface pattern:

- A hero package image or ingredient composition in one large panel.
- A smaller floating label card showing extracted values.
- A second panel showing the actual ingredient list, nutrition table, or evidence crop.
- Subtle overlap on landing and result pages.

Avoid excessive overlap in the actual officer table or report. Evidence must remain easy to read and print.

## 5. Colour system

The reference’s pale green, warm white, forest, blush, and muted product colours work well for food when they are grounded by real packaging evidence and restrained status colours.

### Core tokens

| Token | Hex | Use |
|---|---|---|
| Paper | `#F8F8F3` | Main canvas and report background |
| White | `#FFFFFF` | Cards, evidence panels, inputs |
| Ink | `#17251F` | Primary text and navigation |
| Forest | `#183E30` | Compliance context and strong headings |
| Moss | `#557565` | Secondary text, metadata, positive guidance |
| Mist | `#E3EEE8` | Soft information surfaces |
| Sage | `#C9DDD2` | Scan and ingredient surfaces |
| Blush | `#E8C7C1` | Personalisation and gentle attention states |
| Clay | `#B87865` | Review accents and active controls |
| Lavender | `#B7B7D6` | Alternative comparison or secondary categories |
| Line | `#D8DED8` | Dividers and table borders |
| Error | `#A8473D` | Explicit non-compliance only |
| Amber | `#A7752E` | Needs-review state |

### Status system

Status must always include text and an icon. Colour is supportive, not the only signal.

| Status | Label | Treatment |
|---|---|---|
| Pass | Compliant | Forest text, mist surface, check icon |
| Fail | Non-compliant | Error text, pale rose surface, alert icon |
| Review | Needs review | Amber text, pale sand surface, review icon |
| Info | Information | Ink or moss text, paper surface |

Do not use pale green as proof that a product is nutritionally healthy. Use it only for an interface state or a clearly defined comparison.

## 6. Typography

### Recommended pairing

- **Display serif:** `DM Serif Display`, `Cormorant Garamond`, `Fraunces`, or a licensed editorial serif.
- **Interface sans:** `Inter`, `Manrope`, or `Neue Haas Grotesk` equivalent.
- **Data values:** interface sans with tabular numerals.

### Type scale

| Style | Size | Weight | Use |
|---|---:|---:|---|
| Hero display | 60–84 px | 400–500 serif | Landing question |
| Section display | 40–56 px | 400–500 serif | Main result and discovery sections |
| H1 | 32 px | 500 serif or 700 sans | Screen titles |
| H2 | 24 px | 500 serif or 650 sans | Card and panel titles |
| Body | 16 px | 400 sans | Explanations |
| Metadata | 11–13 px | 600 sans | Evidence source and timestamps |
| Data | 16–18 px | 650 sans | Quantity, MRP, nutrition values |

Use generous line-height for serif headlines. Keep legal findings and raw label data in the sans-serif face for legibility.

## 7. Navigation

### Consumer navigation

Left:

- Scan
- Explore
- Compare

Centre:

- LabelLens wordmark

Right:

- Search
- Saved scans
- Preferences

### Officer navigation

Left:

- Inspections
- Reports
- Findings

Right:

- Search
- Rule version
- Profile

Keep navigation minimal and quiet. The reference’s small icon navigation is appropriate for the consumer experience; officers should also receive visible text labels on wider screens.

## 8. Information architecture

```text
Landing
  ├── Scan a product
  │     ├── Capture images
  │     ├── Processing
  │     └── Result
  │           ├── Compliance
  │           ├── Ingredients
  │           ├── Nutrition
  │           ├── Personal alerts
  │           └── Alternatives
  ├── Saved scans
  ├── Compare products
  └── Preferences

Officer workspace
  ├── New inspection
  ├── Inspection detail
  ├── Findings dashboard
  ├── Reports
  └── Rule catalogue
```

## 9. Key screen specifications

### 9.1 Landing screen: guided entry

Purpose: make the product approachable before asking the user to upload an image.

Hero composition:

- Warm paper background.
- Editorial headline: `What do you want to know about this product?`
- Large, soft package photograph or close-up label image.
- Small metadata line: `PACKAGE SCANNER · EVIDENCE-LED ANALYSIS`.
- Primary action: `Scan a product`.
- Secondary action: `See how it works`.

Below the hero, show four quiet discovery choices:

- Check compliance.
- Understand ingredients.
- Find potential allergens.
- Compare alternatives.

The choices should look like small editorial filters, not large colourful dashboard buttons.

### 9.2 Guided preference screen

Adapt the reference’s “How do you want to feel?” interaction into:

> **What matters most to you?**

Choices:

- Complete label information.
- Allergens and ingredients.
- Lower sugar.
- Lower sodium.
- Vegetarian or vegan compatibility.
- Similar product, different ingredients.

This is optional. The user must be able to skip it and scan immediately.

Use horizontal text choices, understated outlines, and a single selected state. Do not make the user fill out a long medical questionnaire.

### 9.3 Capture screen

Purpose: create reliable image evidence.

Layout:

- Large central camera or upload area.
- Small instruction line: `Capture the front and the information panel.`
- Side checklist: Front, back, MRP/quantity, ingredients/nutrition.
- Calm quality messages: `Move closer`, `Reduce glare`, `Text is partially hidden`.
- Primary action: `Continue to analysis`.

Visual treatment: white camera card on a mist-green page, with thin forest borders and clay used only for active guidance.

### 9.4 Processing screen

Use a quiet, editorial progress experience:

```text
Reading the package image        Complete
Finding declarations              Complete
Checking applicable requirements  In progress
Understanding ingredients        Waiting
```

Use a slowly moving line, crop frame, or soft image focus effect instead of a loud spinner.

### 9.5 Result overview

Purpose: show the decision while preserving the calm tone.

Top section:

- Product name.
- Product image.
- Scan date and inspection ID.
- Large serif result: `Needs review` or `Compliant`.
- One-line explanation.

Main body:

1. `Label check` — mandatory declarations and rule findings.
2. `Inside the package` — ingredients and nutrition.
3. `Relevant to you` — optional profile-based alerts.
4. `Closest matches` — alternatives and comparison.

The result should feel like a product story unfolding, not a single opaque score.

### 9.6 Label check screen

Use the reference’s product-detail composition:

- Large left evidence image.
- Right-side field summary.
- Thin horizontal rules.
- Small source labels above each field.

Example field treatment:

```text
NET QUANTITY
500 g
Pass · high confidence
Back panel · crop 03 · rule LM-NQ-001
```

Selecting a field opens the corresponding image crop. A low-confidence field receives a subtle clay marker and the action `Review this field`.

### 9.7 Ingredient detail screen

Use a food-ingredient layout without implying healthiness:

- Pale sage background.
- Ingredient list in a clean white panel.
- One highlighted ingredient at a time.
- Explanation below the label wording.
- Small tags for `sweetener`, `emulsifier`, `allergen`, or `flavour`.

Optional visual category tags may include `grain`, `fruit`, `spice`, `pulse`, `leaf`, or `seed` when they are supported by the extracted ingredient data.

Example:

```text
LABEL WORDING
Maltodextrin

PLAIN-LANGUAGE EXPLANATION
A carbohydrate-based ingredient often used for texture or bulk.

SOURCE
Ingredients panel · confidence 94%
```

### 9.8 Personal alert screen

The design should feel considered rather than alarming.

Alert structure:

- Small category label: `YOUR PREFERENCES`.
- Clear title: `Potential milk match`.
- Explanation of what was detected.
- Source crop.
- Confidence and matching method.
- Disclosure: `Why am I seeing this?`.

Recommended language:

> Milk solids were detected in the ingredients list. This matches your saved milk-avoidance preference. Confirm the label or consult a qualified professional if this is medically important.

Never use phrases such as `This product is dangerous for you` or `This product is healthy`.

### 9.9 Alternatives screen

Adapt the reference’s “closest match” concept into a comparison surface.

Heading:

> **Your closest matches**

Each alternative card shows:

- Product image or neutral placeholder.
- Same-category relationship.
- Two or three measurable comparisons.
- Preference match.
- Why it was suggested.

Example:

> Same snack category and similar pack size; lower sugar per 100 g; no detected match to your saved peanut preference.

Avoid a generic `healthier` badge. Use measurable, qualified comparisons.

### 9.10 Officer inspection screen

The consumer experience is editorial; the officer experience is editorial plus operational.

Structure:

- Header with inspection ID, location, date, and rule version.
- Evidence viewer on the left.
- Field result table on the right.
- Bottom action row: Correct, Re-run rules, Add note, Generate report.

Use the same typography and colours, but reduce image softness and increase table contrast.

### 9.11 Officer dashboard

Use a calm analytics board:

- Large inspection total.
- Review queue.
- Failures by rule.
- Recurring product categories.
- Average inspection duration.
- Repeat manufacturer or brand signals.

Charts should use forest, moss, amber, and error red with direct labels. Avoid decorative gradients that make trends difficult to interpret.

## 10. Component system

### Core components

- `EditorialHero`
- `GuidedChoice`
- `ScanCaptureCard`
- `ProcessingTimeline`
- `ResultHeader`
- `EvidencePanel`
- `FieldSummary`
- `ConfidenceLabel`
- `IngredientDetail`
- `NutritionMetric`
- `PreferenceAlert`
- `ClosestMatchCard`
- `RuleReference`
- `InspectionTable`
- `ReportActionBar`
- `QuietDivider`
- `PatternTexture`

### Component styling

- Borders are thin and low contrast.
- Shadows are soft and used only to separate layers.
- Most cards use square or lightly rounded corners, not playful pills.
- Tags may use compact rounded rectangles.
- Buttons should be understated: ink-filled primary, outline secondary.
- Icons should be small, precise, and secondary to typography.

## 11. Image and motion direction

### Image treatment

- Use soft focus for brand imagery.
- Keep evidence images sharp and unfiltered.
- Use natural daylight and pale backgrounds.
- Prefer close-up food textures over generic stock photos.
- Use real ingredient objects to explain categories, not to imply safety.
- Prefer food packages, pantry scenes, ingredient bowls, grain textures, and market produce over perfume bottles or beauty imagery.

### Motion

- Slow fade and slide transitions: 250–500 ms.
- Gentle image focus when moving from capture to analysis.
- Highlight evidence crops with a restrained border animation.
- Avoid bouncing, confetti, loud progress animations, or alarming shake effects.

## 12. Accessibility

- Maintain WCAG AA contrast, especially for sage and blush surfaces.
- Use dark ink text on pale backgrounds by default.
- Never use a soft green background alone to indicate pass.
- Provide text and icons for all result states.
- Support keyboard navigation through evidence crops and tables.
- Provide alt text for package images.
- Maintain 44 px minimum touch targets.
- Support 200% text scaling.
- Provide English and Hindi for primary actions and result states.

## 13. Design tokens starter file

```css
:root {
  --color-paper: #f8f8f3;
  --color-white: #ffffff;
  --color-ink: #17251f;
  --color-forest: #183e30;
  --color-moss: #557565;
  --color-mist: #e3eee8;
  --color-sage: #c9ddd2;
  --color-blush: #e8c7c1;
  --color-clay: #b87865;
  --color-lavender: #b7b7d6;
  --color-line: #d8ded8;
  --color-error: #a8473d;
  --color-review: #a7752e;

  --font-display: "DM Serif Display", Georgia, serif;
  --font-ui: Inter, Arial, sans-serif;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  --radius-card: 12px;
  --radius-image: 2px;
  --shadow-soft: 0 12px 36px rgba(23, 37, 31, 0.08);
}
```

## 14. Demo flow using this direction

1. Open on the calm hero: `What do you want to know about this product?`
2. Select `Understand ingredients` or `Check the label`.
3. Capture front and back package images.
4. Show the soft, guided processing timeline.
5. Reveal the result in a large serif headline.
6. Open the label evidence panel and show a field-level result.
7. Move to ingredients and explain one detected ingredient.
8. Turn on a user preference and show a cautious alert.
9. Open `Your closest matches` and compare alternatives.
10. Switch to the officer view and generate the inspection report.

The narrative should be:

```text
Curiosity → Scan → Evidence → Understanding → Personal relevance → Comparison
```

## 15. Do and do not

### Do

- Use calm editorial typography to make the product approachable.
- Let questions guide the first interaction.
- Use large images for atmosphere and sharp crops for evidence.
- Keep legal findings and food alerts separate.
- Explain every alert and recommendation.
- Use whitespace to create confidence and focus.
- Make the officer workflow denser without abandoning the visual language.

### Do not

- Copy the Linger logo, product photography, exact layout, or branding.
- Make compliance feel like luxury shopping.
- Use leaves, green colour, or botanical imagery as proof that a food is healthy.
- Hide mandatory findings inside a visual carousel.
- Use vague labels such as `good`, `bad`, or `clean` without definitions.
- Turn a nutrition comparison into a medical recommendation.
- Use blur or soft focus on label evidence.

## 16. Success criteria

The design succeeds when:

1. A new user understands the product purpose within five seconds.
2. The first action feels inviting rather than bureaucratic.
3. The user can scan without reading a manual.
4. The result feels calm but not ambiguous.
5. Every important decision can be traced to evidence.
6. Ingredient explanations are easy to understand.
7. Personal alerts feel relevant without sounding medical or absolute.
8. Alternatives explain measurable reasons for their ranking.
9. Officers can move from image evidence to report without losing context.

The final product should feel like a thoughtful editorial food-discovery experience, backed by a serious inspection engine.
