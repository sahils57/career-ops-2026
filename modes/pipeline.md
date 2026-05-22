# Modo: pipeline — Inbox de URLs (Second Brain)

Procesa URLs de ofertas acumuladas en `data/pipeline.md`. El usuario agrega URLs cuando quiera y luego ejecuta `/career-ops pipeline` para procesarlas todas.

## Workflow

1. **Leer** `data/pipeline.md` → buscar items `- [ ]` en la sección "Pendientes"
2. **Para cada URL pendiente**:
   a. Calcular siguiente `REPORT_NUM` secuencial (leer `reports/`, tomar el número más alto + 1)
   b. **Extraer JD** usando Playwright (browser_navigate + browser_snapshot) → WebFetch → WebSearch
   c. Si la URL no es accesible → marcar como `- [!]` con nota y continuar
   d. **Aplicar filtros duros antes de gastar tiempo**:
      - Si el JD requiere 8+ años de experiencia, marcar como `NO APLICAR` / no-apply y no generar PDF.
      - Si el JD es pure engineering, ML engineer, data scientist, quota-carrying sales, junior, admin-only, FP&A/accounting-only, or non-tech PM without strategic/product depth, marcar como no-apply.
      - Si la empresa es una consulting/advisory/professional-services firm, marcar como `NO APLICAR` aunque el título sea strategy, product, AI, transformation, or operations. Sahil does not want to return to consulting firms.
      - Si el rol exige relocation/on-site outside Seattle with no remote/hybrid flexibility, marcar como no-apply unless the company/role is exceptional.
   e. **Ejecutar auto-pipeline completo**: Evaluación A-G → Report .md → PDF + application packet solo si score >= 4.5 → Tracker
   f. **Mover de "Pendientes" a "Procesadas"**: `- [x] #NNN | URL | Empresa | Rol | Score/5 | Packet ✅/Review/No-Apply`
3. **Si hay 3+ URLs pendientes**, lanzar agentes en paralelo (Agent tool con `run_in_background`) para maximizar velocidad.
4. **Al terminar**, mostrar tabla resumen:

```
| # | Empresa | Rol | Score | PDF | Acción recomendada |
```

## Criterios de aplicación de Sahil

Leer `modes/_profile.md` y `config/profile.yml` antes de evaluar. Para Sahil:

- **Apply-ready:** score >= 4.5. Crear full packet: report, tailored one-page PDF, short rationale, draft application answers, location/visa/experience notes, tracker entry.
- **Outreach-ready:** for every score >= 4.5, add LinkedIn outreach targets to `data/outreach-targets.md`: recruiter/talent, likely hiring manager, and one peer/similar-role employee when discoverable. For startup roles, do this before or immediately after application because referrals and warm context matter more.
- **Review queue:** score 4.0-4.49. Guardar report/tracker, pero no gastar tiempo en packet completo salvo override manual.
- **No-apply:** score < 4.0 or any hard filter.
- **Product management is in-scope:** Product Manager, Technical Product Manager, Product Operations, Product Strategy, AI Product, Platform Product, Product Growth are valid targets, especially at tech companies.
- **Company filter:** prioritize tech companies, AI/software/SaaS/platform/data companies, and tech-enabled marketplaces. Deprioritize non-tech corporate PM roles unless unusually strong.
- **No consulting firms:** eliminate roles at consulting/advisory/professional-services firms, including McKinsey, BCG, Bain, Deloitte, KPMG, EY, PwC, Accenture, Slalom, Oliver Wyman, LEK, AlixPartners, Alvarez & Marsal, Capgemini, Cognizant, Infosys, TCS, Wipro, and similar firms.
- **Startup filter:** prioritize scaleups over tiny startups. Ideal startup size is roughly 50-500+ employees, or clear Series A/B+ traction, meaningful customer base, or explicit visa sponsorship. Deprioritize teams under ~20 employees unless sponsorship is explicit.
- **Location filter:** Seattle and Remote are highest priority. Boston is acceptable for especially strong roles. Penalize mandatory non-Seattle relocation/on-site.
- **Experience filter:** eliminate roles requiring 8+ years. If 8+ is only preferred, mark borderline and do not make apply-ready unless exceptional.

## Formato de pipeline.md

```markdown
## Pendientes
- [ ] https://jobs.example.com/posting/123
- [ ] https://boards.greenhouse.io/company/jobs/456 | Company Inc | Senior PM
- [!] https://private.url/job — Error: login required

## Procesadas
- [x] #143 | https://jobs.example.com/posting/789 | Acme Corp | AI PM | 4.2/5 | PDF ✅
- [x] #144 | https://boards.greenhouse.io/xyz/jobs/012 | BigCo | SA | 2.1/5 | PDF ❌
```

## Detección inteligente de JD desde URL

1. **Playwright (preferido):** `browser_navigate` + `browser_snapshot`. Funciona con todas las SPAs.
2. **WebFetch (fallback):** Para páginas estáticas o cuando Playwright no está disponible.
3. **WebSearch (último recurso):** Buscar en portales secundarios que indexan el JD.

**Casos especiales:**
- **LinkedIn**: Puede requerir login → marcar `[!]` y pedir al usuario que pegue el texto
- **PDF**: Si la URL apunta a un PDF, leerlo directamente con Read tool
- **`local:` prefix**: Leer el archivo local. Ejemplo: `local:jds/linkedin-pm-ai.md` → leer `jds/linkedin-pm-ai.md`

## Numeración automática

1. Listar todos los archivos en `reports/`
2. Extraer el número del prefijo (e.g., `142-medispend...` → 142)
3. Nuevo número = máximo encontrado + 1

## Sincronización de fuentes

Antes de procesar cualquier URL, verificar sync:
```bash
node cv-sync-check.mjs
```
Si hay desincronización, advertir al usuario antes de continuar.
