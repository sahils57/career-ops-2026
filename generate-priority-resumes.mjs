#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const outDir = resolve('output/tailored-resumes');
mkdirSync(outDir, { recursive: true });
const template = readFileSync(resolve('templates/cv-template.html'), 'utf8');
const runDate = process.env.RUN_DATE || '2026-05-21';

const base = {
  name: 'SAHIL (SUNNY) SHARMA',
  phone: '(857) 352-4577',
  email: 'sharma5555sahil@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/sahils57',
  linkedinDisplay: 'linkedin.com/in/sahils57',
  location: 'Seattle, WA',
  skills: 'Python, SQL, Alteryx, Tableau, Power BI, Pandas, NumPy, Java, MATLAB, ML, AI, pricing strategy, GTM analytics',
};

const bulletSets = {
  product: {
    kpmgTitle: 'Sr Associate - Product, AI, and GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather product requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm by analyzing 3 years of CRM, financial, and operations data to diagnose seller coverage, support intensity, and segment-level scalability gaps; designed enterprise/mid-market sales motions and a 3-year GTM roadmap.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap, including retention logic and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
  },
  gtm: {
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm by analyzing 3 years of CRM, financial, and operations data to diagnose seller coverage, support intensity, and segment-level scalability gaps; designed enterprise/mid-market sales motions and a 3-year GTM roadmap.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and designed offer price book.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Quantified $5B-$7B in cost synergies for a large public-to-public media acquisition bid; modeled synergy levers across content generation, distribution, and SG&A.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap; identified $1.1M/year in storage savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75%.',
    ],
  },
  pricing: {
    kpmgTitle: 'Sr Associate - Pricing, Product, and GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested consumption, and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm by analyzing 3 years of CRM, financial, and operations data to diagnose seller coverage, support intensity, and segment-level scalability gaps; designed enterprise/mid-market sales motions and a 3-year GTM roadmap.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap; identified $1.1M/year in storage savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75%.',
    ],
  },
  retailGtmExecution: {
    kpmgTitle: 'Sr Associate - GTM and Commercial Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm by analyzing 3 years of CRM, financial, and operations data to diagnose seller coverage, support intensity, and segment-level scalability gaps; designed enterprise/mid-market sales motions and a 3-year GTM roadmap.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested usage, and designed a simplified offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Quantified $5B-$7B in cost synergies for a large public-to-public media acquisition bid; modeled synergy levers across content generation, distribution, and SG&A.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap, including retention logic and deletion workflows; identified $1.1M/year in storage savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
  },
  aiGtmSpecialProjects: {
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm by analyzing 3 years of CRM, financial, and operations data to diagnose seller coverage, support intensity, and segment-level scalability gaps; designed enterprise/mid-market sales motions and a 3-year GTM roadmap.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested usage, and designed a simplified offer price book.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Quantified $5B-$7B in cost synergies for a large public-to-public media acquisition bid; modeled synergy levers across content generation, distribution, and SG&A.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap, including retention logic and deletion workflows; identified $1.1M/year in storage savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
  },
};

const jsHeld = [
  'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
  'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
  'Positively positioned client to save $45M by analyzing resources and construction sequence to prevent inefficiencies and COVID-19 delays on projects valued above $1B.',
  'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through a cross-division pay requisition process.',
  "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
];

const roles = [
  {
    slug: 'sentilink-new-leader-pitch-us',
    company: 'SentiLink',
    title: 'New Leader - Pitch Us',
    type: 'product',
    summary: 'Product-oriented strategy and operations leader with experience turning ambiguous AI, product, GTM, and risk/business problems into roadmaps, business cases, and executable operating plans. MBA + engineering background with strong fit for defining new identity-risk product/GTM opportunities.',
    competencies: ['Product Strategy', 'AI Product Roadmaps', 'GTM Strategy', 'Business Cases', 'Customer Discovery', 'Risk / Fintech', 'Cross-functional Execution', 'Analytics'],
    focus: 'New product pitches, identity/risk strategy, AI workflows, GTM motions, customer discovery, business case development',
  },
  {
    slug: 'anaconda-product-operations-manager',
    company: 'Anaconda',
    title: 'Product Operations Manager',
    type: 'product',
    summary: 'Product operations and AI strategy operator with experience translating user needs, technical workflows, and executive priorities into product roadmaps, PRDs, operating rhythms, and AI-enabled execution systems. MBA + engineering background with hands-on data and automation fluency.',
    competencies: ['Product Operations', 'AI Workflows', 'Product Lifecycle', 'Roadmap Execution', 'PRDs', 'Technical Stakeholders', 'Operational Metrics', 'Cross-functional Rhythm'],
    focus: 'Product ops, lifecycle workflows, AI-enabled coordination, PM/engineering operating cadence, launch readiness',
  },
  {
    slug: 'popl-senior-product-manager',
    company: 'Popl',
    title: 'Senior Product Manager',
    type: 'product',
    summary: 'AI-native product and GTM strategist with experience building product requirements, customer discovery insights, launch narratives, and revenue-growth systems across product, engineering, sales, and customer-facing teams. Strong fit for B2B SaaS product roles that blend PM, product marketing, and GTM execution.',
    competencies: ['Product Management', 'AI Workflows', 'Customer Discovery', 'B2B SaaS', 'Launch Narratives', 'Revenue Operations', 'Product Marketing', 'GTM Enablement'],
    focus: 'B2B SaaS PM, AI workflows, event/GTM products, launch storytelling, sales and CS enablement',
  },
  {
    slug: 'scribd-product-operations-lead',
    company: 'Scribd',
    title: 'Product Operations Lead',
    type: 'product',
    summary: 'Product operations and technical strategy operator with experience building systems, AI-enabled workflows, resource/capacity insights, and cross-functional operating models across product, engineering, analytics, finance, and executive stakeholders.',
    competencies: ['Product Operations', 'Technical Program Management', 'AI Tooling', 'Resource Planning', 'Vendor / Ops Systems', 'Executive Visibility', 'Cross-functional Leadership', 'Analytics'],
    focus: 'EPDA/product operations, AI internal tooling, resource planning, vendor programs, technical org operations',
  },
  {
    slug: 'tiktok-product-ops-seller-tools',
    company: 'TikTok',
    title: 'Product Operations Manager, Seller Business Tools',
    type: 'product',
    summary: 'Product operations and growth strategy professional with experience translating merchant/customer insights, product analytics, and GTM priorities into adoption strategies, product improvements, and cross-functional execution plans.',
    competencies: ['Product Operations', 'Merchant Growth', 'Product Adoption', 'Customer Insights', 'Data Analysis', 'GTM Execution', 'Enablement', 'AI Efficiency'],
    focus: 'Seller tools, merchant CRM, product adoption, feature growth, enablement systems, marketplace operations',
  },
  {
    slug: 'gainsight-strategy-business-operations',
    company: 'Gainsight',
    title: 'Senior Associate of Strategy & Business Operations',
    type: 'gtm',
    summary: 'Strategy and business operations professional with experience building executive operating cadences, cross-functional initiatives, KPI systems, and growth roadmaps across product, GTM, finance, and senior leadership teams.',
    competencies: ['Business Operations', 'Strategic Planning', 'Executive Cadence', 'KPI Dashboards', 'Board / Investor Materials', 'Cross-functional Initiatives', 'GTM Analytics', 'Operating Rhythm'],
    focus: 'Corporate strategy, CEO/CFO operating cadence, planning cycles, executive decks, KPI systems',
  },
  {
    slug: 'hyperproof-partner-strategy-operations',
    company: 'Hyperproof',
    title: 'Manager, Partner Strategy and Operations',
    type: 'gtm',
    summary: 'Partner strategy and GTM operations professional with experience designing scalable programs, dashboards, partner/customer enablement, revenue analytics, and cross-functional operating systems across sales, marketing, finance, RevOps, and product teams.',
    competencies: ['Partner Strategy', 'GTM Operations', 'Revenue Analytics', 'Program Design', 'Partner Onboarding', 'Dashboards', 'Cross-functional Execution', 'B2B SaaS'],
    focus: 'Partner programs, revenue/pipeline goals, onboarding workflows, dashboards, B2B SaaS ecosystem operations',
  },
  {
    slug: 'grafana-channel-strategy-operations',
    company: 'Grafana Labs',
    title: 'Senior Channel Strategy & Operations Manager',
    type: 'gtm',
    summary: 'GTM strategy and channel operations professional with experience designing growth programs, business planning processes, partner/sales productivity insights, and executive-ready operating cadences for B2B technology organizations.',
    competencies: ['Channel Strategy', 'GTM Planning', 'Partner Programs', 'Sales Productivity', 'Forecasting Cadence', 'Business Reviews', 'SaaS GTM', 'Executive Analytics'],
    focus: 'Channel GTM, partner route-to-market, business planning, forecasting, partner scorecards',
  },
  {
    slug: 'docusign-monetization-strategy-specialist',
    company: 'Docusign',
    title: 'Monetization Strategy Specialist',
    type: 'pricing',
    summary: 'Pricing and monetization strategist with experience designing consumption models, packaging changes, value-based pricing analyses, and GTM strategies for SaaS and AI-enabled products.',
    competencies: ['Monetization Strategy', 'Pricing & Packaging', 'Usage-based Models', 'SaaS Business Models', 'Product Strategy', 'Customer Analytics', 'Executive Storytelling', 'GTM Launches'],
    focus: 'SaaS monetization, AI/agentic pricing, packaging, usage analytics, cross-functional implementation',
  },
  {
    slug: 'microsoft-business-planner',
    company: 'Microsoft',
    title: 'Business Planner',
    type: 'pricing',
    summary: 'Business planning and monetization operator with experience designing pricing/GTM processes, launch workflows, operating cadences, and AI-enabled process improvements across product, marketing, sales, finance, and engineering stakeholders.',
    competencies: ['Business Planning', 'Monetization Processes', 'Product Launch Operations', 'Pricing Strategy', 'Process Design', 'Change Management', 'AI Automation', 'Cross-functional Governance'],
    focus: 'Microsoft 365 monetization, offer launches, pricing operations, process governance, AI-enabled workflow improvement',
  },
  {
    slug: 'microsoft-gtm-retail-execution-category-manager',
    company: 'Microsoft',
    title: 'Go-to-Market Retail Execution Category Manager',
    type: 'retailGtmExecution',
    summary: 'GTM and commercial strategy operator with experience translating complex growth, pricing, product, and customer insights into execution-ready roadmaps, operating recommendations, and measurable performance analyses. MBA + engineering background with hands-on analytics across CRM, financial, operational, customer, pricing, and product-usage data.',
    competencies: ['GTM Strategy', 'Commercial Planning', 'Execution Roadmaps', 'Pricing & Offer Analysis', 'Customer Insights', 'Performance Analytics', 'Cross-functional Alignment', 'Portfolio / Product Strategy'],
    focus: 'GTM planning, portfolio and customer insights, pricing and offer analysis, activation-readiness adjacent work, performance KPIs, cross-functional execution',
  },
  {
    slug: 'amazon-sub-same-day-central-ops',
    company: 'Amazon',
    title: 'Program Manager, Sub Same Day Delivery - Central Operations Strategy',
    type: 'gtm',
    summary: 'Operations strategy and product-adjacent program leader with experience translating messy operational problems into automated workflows, product requirements, analytics, and cross-functional execution plans.',
    competencies: ['Operations Strategy', 'Program Management', 'Process Automation', 'SQL / Python Analytics', 'Product Requirements', 'Customer Experience', 'Cost / Quality Metrics', 'Cross-functional Delivery'],
    focus: 'Same-day delivery operations, automation, process improvement, SQL/Python analytics, product/engineering partnership',
  },
  {
    slug: 'snowflake-storage-platform-pricing-pm',
    company: 'Snowflake',
    title: 'Product Manager - Storage Platform & Pricing',
    type: 'pricing',
    summary: 'Technical product and pricing strategist with experience translating customer usage, platform economics, AI workflows, and engineering tradeoffs into product requirements, monetization strategy, and executive-ready business cases.',
    competencies: ['Technical Product Management', 'Pricing Strategy', 'Storage / Data Platforms', 'Usage-based Pricing', 'Product Requirements', 'AI Analytics', 'Cost Optimization', 'GTM Enablement'],
    focus: 'Storage platform, pricing, cost transparency, usage-based product strategy, technical PM execution',
  },
  {
    slug: 'anthropic-gtm-strategy-operations-special-projects',
    company: 'Anthropic',
    title: 'GTM Strategy & Operations, Special Projects',
    type: 'aiGtmSpecialProjects',
    summary: 'GTM strategy and revenue operations professional with experience turning ambiguous AI, SaaS, and fintech growth problems into segmentation models, operating frameworks, executive deliverables, and cross-functional execution plans. MBA + engineering background with hands-on analytics across CRM, financial, operational, pricing, AI, and product usage data.',
    competencies: ['GTM Strategy', 'Revenue Operations', 'Segmentation Models', 'Capacity Planning', 'Executive Deliverables', 'AI Automation', 'Consumption Pricing', 'Cross-functional Special Projects'],
    focus: 'AI GTM strategy, cross-segment special projects, CRM and KPI dashboards, capacity planning, consumption pricing, pipeline diagnostics',
  },
];

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function list(items) {
  return items.map(item => `<li>${esc(item)}</li>`).join('\n');
}

function replaceAll(text, replacements) {
  let out = text;
  for (const [key, value] of Object.entries(replacements)) {
    out = out.split(`{{${key}}}`).join(value);
  }
  return out;
}

function md(role) {
  const set = bulletSets[role.type];
  return `# ${base.name}\n${base.email} | ${base.location} | ${base.phone} | ${base.linkedinDisplay}\n\n## Professional Summary\n${role.summary}\n\n## Core Competencies\n${role.competencies.join(' | ')}\n\n## Work Experience\n\n### KPMG, Seattle, WA | 2023-Present\n${set.kpmgTitle}\n${set.kpmg.map(x => `- ${x}`).join('\n')}\n\n### Amazon Devices - Alexa AI, Boston, MA | 2022\nSr Product Manager - Technical Intern - SAIF Data\n${set.amazon.map(x => `- ${x}`).join('\n')}\n\n### J.S. Held & Perry Associates LLC, Boston, MA | 2018-2021\nConsultant / Project Controls Engineer\n${jsHeld.map(x => `- ${x}`).join('\n')}\n\n## Education\n- FOSTER SCHOOL OF BUSINESS, UNIVERSITY OF WASHINGTON - MBA, Management Science (STEM), 2023; Dean's Merit Fellowship\n- BOSTON UNIVERSITY - BS Mechanical Engineering; Minor in Computer Science; Magna Cum Laude; GPA: 3.72/4\n\n## Skills\n${base.skills}\n`;
}

function html(role) {
  const set = bulletSets[role.type];
  const education = `
    <div class="edu-item">
      <div class="edu-header"><div class="edu-title">FOSTER SCHOOL OF BUSINESS, UNIVERSITY OF WASHINGTON</div><div class="edu-year">Seattle, WA | June 2023</div></div>
      <div class="edu-desc"><strong><em>Master of Business Administration - Management Science (STEM)</em></strong>; Dean's Merit Fellowship</div>
    </div>
    <div class="edu-item">
      <div class="edu-header"><div class="edu-title">BOSTON UNIVERSITY</div><div class="edu-year">Boston, MA | May 2018</div></div>
      <div class="edu-desc"><strong><em>Bachelor of Science, Mechanical Engineering</em></strong>; Minor in Computer Science; Magna Cum Laude; GPA: 3.72/4</div>
    </div>`;
  const experience = `
    <div class="job">
      <div class="job-header"><div><span class="job-company">KPMG</span><span class="job-location">Seattle, WA</span></div><div class="job-period">2023-Present</div></div>
      <div class="job-role">${esc(set.kpmgTitle)}</div>
      <ul>${list(set.kpmg)}</ul>
    </div>
    <div class="job">
      <div class="job-header"><div><span class="job-company">AMAZON DEVICES - ALEXA AI</span><span class="job-location">Boston, MA</span></div><div class="job-period">2022</div></div>
      <div class="job-role">Sr Product Manager - Technical Intern - SAIF Data</div>
      <ul>${list(set.amazon)}</ul>
    </div>
    <div class="job">
      <div class="job-header"><div><span class="job-company">J.S. HELD & PERRY ASSOCIATES LLC</span><span class="job-location">Boston, MA</span></div><div class="job-period">2018-2021</div></div>
      <div class="job-role">Consultant / Project Controls Engineer</div>
      <ul>${list(jsHeld)}</ul>
    </div>`;
  const skills = `<span class="skill-item"><span class="skill-category">Technology:</span> ${esc(base.skills)}</span><span class="skill-item"><span class="skill-category">Focus:</span> ${esc(role.focus)}</span>`;

  return replaceAll(template, {
    LANG: 'en',
    NAME: base.name,
    PHONE: base.phone,
    EMAIL: base.email,
    LINKEDIN_URL: base.linkedinUrl,
    LINKEDIN_DISPLAY: base.linkedinDisplay,
    LOCATION: base.location,
    SECTION_SUMMARY: 'Professional Summary',
    SUMMARY_TEXT: esc(role.summary),
    SECTION_COMPETENCIES: 'Core Competencies',
    COMPETENCIES: role.competencies.map(c => `<span class="competency-tag">${esc(c)}</span>`).join('\n'),
    SECTION_EDUCATION: 'Education',
    EDUCATION: education,
    SECTION_EXPERIENCE: 'Experience',
    EXPERIENCE: experience,
    SECTION_PROJECTS: 'Projects',
    PROJECTS: '',
    SECTION_CERTIFICATIONS: 'Certifications',
    CERTIFICATIONS: '',
    SECTION_SKILLS: 'Skills and Activities',
    SKILLS: skills,
  });
}

const browser = await chromium.launch({ headless: true });
try {
  const selectedSlugs = new Set(process.argv.slice(2));
  const rolesToGenerate = selectedSlugs.size ? roles.filter(role => selectedSlugs.has(role.slug)) : roles;
  for (const role of rolesToGenerate) {
    const name = `sahil-sharma-${role.slug}-${runDate}`;
    const htmlPath = resolve(outDir, `${name}.html`);
    const mdPath = resolve(outDir, `${name}.md`);
    const pdfPath = resolve(outDir, `${name}.pdf`);
    const htmlText = html(role);
    writeFileSync(htmlPath, htmlText, 'utf8');
    writeFileSync(mdPath, md(role), 'utf8');

    const page = await browser.newPage();
    await page.setContent(htmlText, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const pdf = await page.pdf({
      format: 'letter',
      printBackground: true,
      margin: { top: '0.42in', right: '0.48in', bottom: '0.36in', left: '0.48in' },
    });
    writeFileSync(pdfPath, pdf);
    const pageCount = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    console.log(`${pageCount} page(s) - ${pdfPath}`);
    await page.close();
  }
} finally {
  await browser.close();
}
