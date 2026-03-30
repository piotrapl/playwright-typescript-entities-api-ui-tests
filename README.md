Cross-layer Playwright testing combining **UI validation with API verification** to detect defects earlier and increase test reliability.

---

## Abstract (po polsku)

Projekt demonstracyjny automatyzacji testów wykorzystujący **Playwright + TypeScript** do testowania wyszukiwania numeru **REGON**.  
Testy realizują podejście **cross-layer testing**, w którym działania użytkownika w interfejsie są weryfikowane poprzez dane zwracane przez API.  
Pozwala to wykrywać błędy szybciej i zwiększać wiarygodność testów.  
Projekt zawiera również raportowanie **Allure** z artefaktami testowymi (screenshots, trace).

---

## Project structure

```text
playwright-typescript-entities-ui-api-tests/
│
├─ .github/
│   └─ workflows/
│       └─ cross-layer-e2e.yml        # CI pipeline (optional)
├─ api/
│   └─ regon.api.ts
├─ assertions/
│   └─ regon.asert.ts
├─ data/
│   └─ [_graphic files (screenshots etc.)_]
├─ docs/
│   └─ invalid-regons.ts
├─ fixtures/
│   └─ test-fixtures.ts          # shared Playwright fixtures
├─ flows/
│   └─ regon.flow.ts
├─ pages/
│   └─ regon.page.ts             # Page Object for REGON search
├─ tests/
│   └─ negative/
│       └─ regon-cross-layer-negative.spec.ts
├─ types/
│   └─ api.types.ts 
├─ utils/
│   └─ env.ts                    # environment configuration
│
├─ playwright.config.ts
├─ package.json
├─ package-lock.json
└─ tsconfig.json
```
