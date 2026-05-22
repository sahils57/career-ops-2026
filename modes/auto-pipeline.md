# Modo: auto-pipeline — Pipeline Completo Automático

Cuando el usuario pega un JD (texto o URL) sin sub-comando explícito, ejecutar TODO el pipeline en secuencia:

## Paso 0 — Extraer JD

Si el input es una **URL** (no texto de JD pegado), seguir esta estrategia para extraer el contenido:

**Orden de prioridad:**

1. **Playwright (preferido):** La mayoría de portales de empleo (Lever, Ashby, Greenhouse, Workday) son SPAs. Usar `browser_navigate` + `browser_snapshot` para renderizar y leer el JD.
2. **WebFetch (fallback):** Para páginas estáticas (ZipRecruiter, WeLoveProduct, company career pages).
3. **WebSearch (último recurso):** Buscar título del rol + empresa en portales secundarios que indexan el JD en HTML estático.

**Si ningún método funciona:** Pedir al candidato que pegue el JD manualmente o comparta un screenshot.

**Si el input es texto de JD** (no URL): usar directamente, sin necesidad de fetch.

## Paso 1 — Evaluación A-G
Ejecutar exactamente igual que el modo `oferta` (leer `modes/oferta.md` para todos los bloques A-F + Block G Posting Legitimacy).

Antes de generar PDF o application packet, aplicar los filtros específicos de Sahil desde `modes/_profile.md` y `config/profile.yml`:

- **Eliminar / no-apply** si el JD requiere 8+ años de experiencia. Sahil tiene ~6 años total y ~3 post-MBA.
- **Borderline** si 8+ años aparece solo como preferencia y el resto del rol es excepcional.
- **Priorizar** roles de Product Manager, Technical Product Manager, Product Operations, Product Strategy, AI Product, Platform Product, Product Growth, GTM Strategy, Business Operations, Revenue Operations, Pricing/Monetization, and AI Strategy.
- **Priorizar compañías tech**: AI/software/SaaS/platform/data companies and tech-enabled marketplaces.
- **Priorizar ubicación**: Seattle and Remote; Boston acceptable for strong roles. Deprioritize mandatory non-Seattle relocation/on-site.
- **Descartar** pure engineering, ML engineering, data science, quota-carrying sales, junior/admin-only roles, FP&A/accounting-only roles, and non-tech PM roles without strategic/product depth.

## Paso 2 — Guardar Report .md
Guardar la evaluación completa en `reports/{###}-{company-slug}-{YYYY-MM-DD}.md` (ver formato en `modes/oferta.md`).
Include Block G in the saved report. Add `**Legitimacy:** {tier}` to the report header.

## Paso 3 — Generar PDF
Ejecutar el pipeline completo de `pdf` (leer `modes/pdf.md`).

## Paso 4 — Full Application Packet (solo si score >= 4.5)

Si el score final es >= 4.5, generar un full application packet:

1. **Short rationale**: 3-5 bullets explaining why this is a high-priority fit for Sahil.
2. **Tailored PDF**: one-page resume using `templates/cv-template.html`.
   - Preserve the classic template's role spacing. If the resume is too dense, reduce or combine older-role bullets before compressing spacing, margins, or font size.
3. **Draft application answers**: tailored answers for application-form questions.
4. **Risk notes**: location, sponsorship, experience fit, compensation, and any application concerns.
5. **Tracker entry**: register as apply-ready / evaluated in `data/applications.md`.

Para roles con score 4.0-4.49, guardar report and tracker entry but mark as review queue. Para <4.0 or hard-filtered roles, mark no-apply and do not generate a packet.

Para draft application answers:

1. **Extraer preguntas del formulario**: Usar Playwright para navegar al formulario y hacer snapshot. Si no se pueden extraer, usar las preguntas genéricas.
2. **Generar respuestas** siguiendo el tono (ver abajo).
3. **Guardar en el report** como sección `## H) Draft Application Answers`.

### Preguntas genéricas (usar si no se pueden extraer del formulario)

- Why are you interested in this role?
- Why do you want to work at [Company]?
- Tell us about a relevant project or achievement
- What makes you a good fit for this position?
- How did you hear about this role?

### Tono para Form Answers

**Posición: "I'm choosing you."** el candidato tiene opciones y está eligiendo esta empresa por razones concretas.

**Reglas de tono:**
- **Confiado sin arrogancia**: "I've spent the past year building production AI agent systems — your role is where I want to apply that experience next"
- **Selectivo sin soberbia**: "I've been intentional about finding a team where I can contribute meaningfully from day one"
- **Específico y concreto**: Siempre referenciar algo REAL del JD o de la empresa, y algo REAL de la experiencia del candidato
- **Directo, sin fluff**: 2-4 frases por respuesta. Sin "I'm passionate about..." ni "I would love the opportunity to..."
- **El hook es la prueba, no la afirmación**: En vez de "I'm great at X", decir "I built X that does Y"

**Framework por pregunta:**
- **Why this role?** → "Your [specific thing] maps directly to [specific thing I built]."
- **Why this company?** → Mencionar algo concreto sobre la empresa. "I've been using [product] for [time/purpose]."
- **Relevant experience?** → Un proof point cuantificado. "Built [X] that [metric]. Sold the company in 2025."
- **Good fit?** → "I sit at the intersection of [A] and [B], which is exactly where this role lives."
- **How did you hear?** → Honesto: "Found through [portal/scan], evaluated against my criteria, and it scored highest."

**Idioma**: Siempre en el idioma del JD (EN default). Aplicar `/tech-translate`.

## Paso 5 — Actualizar Tracker
Registrar en `data/applications.md` con todas las columnas incluyendo Report y PDF en ✅.

**Si algún paso falla**, continuar con los siguientes y marcar el paso fallido como pendiente en el tracker.

## Límite de automatización

Este workflow es semi-automatizado. Puede preparar packets, abrir formularios, draft/fill visible fields with user review, and track status. **Never submit an application automatically. Stop before the final Submit/Apply button and ask Sahil to review/click.**
