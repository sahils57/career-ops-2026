#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const outDir = resolve('output/tailored-resumes');
mkdirSync(outDir, { recursive: true });
const template = readFileSync(resolve('templates/cv-template.html'), 'utf8');
const runDate = '2026-05-20';

const base = {
  name: 'SAHIL (SUNNY) SHARMA',
  contact: 'sharma5555sahil@gmail.com | Seattle, WA | (857) 352-4577 | linkedin.com/in/sahils57',
  education: [
    "FOSTER SCHOOL OF BUSINESS, UNIVERSITY OF WASHINGTON - MBA, Management Science (STEM), 2023; Dean's Merit Fellowship",
    'BOSTON UNIVERSITY - BS Mechanical Engineering; Minor in Computer Science; Magna Cum Laude; GPA: 3.72/4',
  ],
  skills: 'Python, SQL, Alteryx, Tableau, Power BI, Pandas, NumPy, Java, MATLAB, ML, AI, pricing strategy, GTM analytics',
};

const roles = [
  {
    slug: 'doordash-product-ops-gtm',
    title: 'DoorDash - Associate Manager, Product Operations GTM',
    summary: 'GTM strategy and product operations professional with experience launching pricing, AI, and revenue-growth initiatives across product, data, engineering, sales, and operations teams. MBA + engineering background with hands-on analytics, roadmap, and executive-storytelling experience for B2B SaaS and marketplace-style growth.',
    competencies: ['Product Operations', 'GTM Launch Strategy', 'Pricing Updates', 'B2B SaaS', 'Roadmap Execution', 'Revenue Analytics', 'Cross-functional Enablement', 'AI Product Strategy'],
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed separate enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, and operational support intensity.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested consumption, and designed offer price book.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Positively positioned client to save $45M by analyzing resources and construction sequence to prevent inefficiencies and COVID-19 delays on projects valued above $1B.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'doordash-parcel-strategy-operations',
    title: 'DoorDash - Manager, Parcel - Strategy & Operations',
    summary: 'Strategy and product operations leader with experience building growth roadmaps, service differentiation strategies, business cases, and cross-functional execution plans across product, engineering, operations, sales, and executive stakeholders. MBA + engineering background with hands-on analytics and marketplace-style operating experience.',
    competencies: ['Strategy & Operations', 'Product Strategy', 'Business Cases', 'Marketplace Operations', 'Roadmap Execution', 'Revenue Analytics', 'Cross-functional Leadership', 'Service Launches'],
    focus: 'Product/service strategy, marketplace operations, business cases, adoption strategy, implementation planning, stakeholder alignment',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed separate enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Positively positioned client to save $45M by analyzing resources and construction sequence to prevent inefficiencies and COVID-19 delays on projects valued above $1B.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'salesforce-manager-gtm-growth-strategy',
    title: 'Salesforce - Manager, GTM Growth Strategy',
    summary: 'GTM growth strategy professional with experience diagnosing sales performance, building revenue models, designing GTM frameworks, and translating analysis into executive-ready growth recommendations. MBA + engineering background with consulting experience across SaaS, AI, pricing, operations, and cross-functional execution.',
    competencies: ['GTM Growth Strategy', 'Revenue Models', 'Business Case Modeling', 'Market Segmentation', 'Sales Productivity', 'Executive Storytelling', 'Consumption GTM', 'Cross-functional Influence'],
    focus: 'GTM model design, sales performance analysis, market segmentation, business cases, executive presentations, consumption strategy',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed separate enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and designed offer price book.',
      'Quantified $5B-$7B in cost synergies for a large public-to-public media acquisition bid; established and modeled synergy levers across content generation, distribution, and corporate SG&A.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'sensor-tower-technical-product-manager',
    title: 'Sensor Tower - Technical Product Manager',
    summary: 'Technical product and strategy operator with an engineering foundation, MBA, and experience translating customer needs into data-product requirements. Built AI/pricing analytics roadmaps across Snowflake, BigQuery, Vertex AI, REST APIs, ML researcher workflows, and executive-facing commercial strategy.',
    competencies: ['Technical Product Management', 'Data Products', 'AI Workflows', 'Customer Discovery', 'PRDs', 'Analytics Products', 'SQL / BI Fluency', 'Enterprise SaaS'],
    focus: 'Product discovery, PRDs, technical requirements, data products, AI product strategy, roadmap execution, pricing analytics',
    kpmgTitle: 'Sr Associate - Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather customer requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, enhancing customer experience and reducing ~30% of time inefficiencies from frequent tool switching.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, and operational support intensity.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap, including retention logic and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'supabase-product-manager-pricing-billing',
    title: 'Supabase - Product Manager, Pricing & Billing',
    summary: 'Product, pricing, and monetization strategist with experience translating customer needs, usage patterns, and technical workflows into pricing systems, product requirements, and revenue growth plans. MBA + engineering background with hands-on analytics across AI, data products, consumption models, and executive-ready commercial strategy.',
    competencies: ['Product Management', 'Pricing & Billing', 'Monetization', 'Consumption Models', 'Customer Discovery', 'Product Analytics', 'Technical Requirements', 'Growth Strategy'],
    focus: 'Pricing and packaging, billing products, consumption strategy, product requirements, customer discovery, growth analytics',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested consumption, and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'doordash-ads-promotions-monetization',
    title: 'DoorDash - Strategy & Operations Manager, Ads & Promotions Monetization',
    summary: 'Monetization and strategy operator with experience designing pricing systems, growth cases, and technical product requirements across product, engineering, data science, sales, and executive teams. MBA + engineering background with strong fit for marketplace pricing, ads monetization, and cross-functional operating cadence.',
    competencies: ['Ads Monetization', 'Pricing Systems', 'Strategy & Operations', 'Marketplace Dynamics', 'Product Strategy', 'Business Cases', 'Revenue Analytics', 'Cross-functional Execution'],
    focus: 'Ads monetization, pricing frameworks, product strategy, marketplace operations, business cases, product/data/engineering partnership',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested usage, and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market motions with a 3-year roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'anthropic-product-manager-monetization',
    title: 'Anthropic - Product Manager, Monetization',
    summary: 'Product and monetization strategist with experience building pricing, consumption, AI workflow, and product-requirements work across technical and commercial teams. MBA + engineering background with hands-on analytics, customer discovery, roadmap definition, and executive storytelling for AI, SaaS, and data-driven growth.',
    competencies: ['Product Strategy', 'Monetization', 'Pricing & Packaging', 'AI Products', 'Growth Analytics', 'Customer Research', 'PRDs', 'Cross-functional Leadership'],
    focus: 'AI product monetization, pricing and packaging, usage-based billing, growth analytics, customer discovery, engineering collaboration',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested consumption, and designed offer price book.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market motions with a 3-year roadmap.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'hightouch-ai-operations-gtm',
    title: 'Hightouch - AI Operations, GTM',
    summary: 'AI and GTM operations strategist with experience identifying workflow automation opportunities, translating user needs into AI/product roadmaps, and building executive-ready operating plans. MBA + engineering background with hands-on analytics, PRD definition, prompt/LLM product work, and enablement across sales, marketing, product, and operations teams.',
    competencies: ['AI Operations', 'GTM Operations', 'Agentic Workflows', 'RevOps Strategy', 'Workflow Automation', 'AI Enablement', 'Product Requirements', 'Cross-functional Adoption'],
    focus: 'AI GTM workflows, agentic automation, RevOps, enablement, knowledge systems, customer/user discovery, product requirements',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market motions with a 3-year roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model and designing a new offer price book.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'doordash-sales-strategy-commerce-platform',
    title: 'DoorDash - Associate Manager, Sales Strategy & Operations, Commerce Platform',
    summary: 'GTM and sales strategy operator with experience building growth plans, sales motions, revenue analytics, and product-adjacent operating models across technical and commercial stakeholders. MBA + engineering background with strong fit for Commerce Platform strategy, analytics, and cross-functional execution.',
    competencies: ['Sales Strategy', 'GTM Operations', 'Commerce Platform', 'Revenue Analytics', 'Business Planning', 'Operating Models', 'Pricing Strategy', 'Cross-functional Execution'],
    focus: 'Sales strategy, GTM operating models, commerce platform growth, revenue analytics, cross-functional execution, pricing and product strategy',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and designed offer price book.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'zapier-gtm-ai-automation',
    title: 'Zapier - GTM, AI & Automation',
    summary: 'AI-fluent GTM and product strategy operator with experience turning ambiguous customer and workflow problems into automation roadmaps, executive recommendations, and revenue-growth motions. MBA + engineering background with hands-on work across AI product requirements, GTM redesign, pricing strategy, and cross-functional adoption.',
    competencies: ['AI GTM Strategy', 'Workflow Automation', 'Enterprise GTM', 'Technical Discovery', 'Sales Strategy', 'Product Requirements', 'Executive Communication', 'Cross-functional Adoption'],
    focus: 'AI automation, GTM playbook building, sales-led growth, technical customer discovery, workflow redesign, product and commercial strategy',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather workflow requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model and designing a new offer price book.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'prime-intellect-business-operations-lead',
    title: 'Prime Intellect - Business Operations Lead',
    summary: 'Business operations and AI strategy operator with experience building GTM systems, financial and operating analyses, product-adjacent roadmaps, dashboards, and executive-ready narratives. MBA + engineering background with hands-on work across AI/ML workflows, pricing, revenue strategy, operating cadence, and cross-functional execution.',
    competencies: ['Business Operations', 'AI Infrastructure Strategy', 'GTM Systems', 'Financial Modeling', 'Operating Cadence', 'Dashboards', 'Product Operations', 'Executive Communication'],
    focus: 'AI infrastructure operations, GTM and finance systems, operating cadence, dashboards, board/investor narratives, product and engineering partnership',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Quantified $5B-$7B in cost synergies for a large public-to-public media acquisition bid; established and modeled synergy levers across content generation, distribution, and corporate SG&A.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'ambience-healthcare-business-operations-lead',
    title: 'Ambience Healthcare - Business Operations Lead',
    summary: 'Business operations and product strategy operator with experience turning ambiguous growth, pricing, RevOps, and launch problems into measurable execution plans. MBA + engineering background with hands-on analytics, AI/product requirements, operating cadence design, and executive communication across GTM, product, finance, and technical teams.',
    competencies: ['Business Operations', 'Pricing Strategy', 'RevOps', 'Product Launches', 'AI Healthcare', 'Dashboards', 'Operating Cadence', 'Cross-functional Execution'],
    focus: 'AI healthcare operations, pricing and packaging, RevOps infrastructure, product launch playbooks, dashboards, stakeholder alignment',
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers, back-tested usage, and designed offer price book.',
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed enterprise and mid-market motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, support intensity, and execution capacity by segment.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, improving customer experience and reducing ~30% of inefficiencies from frequent tool switching.',
      'Crafted AI integration roadmap for a sales tech provider; interviewed 8 personas to gather requirements that led to 700+ AI use case infusions across user journeys.',
      'Created AI transformation strategy for a global industrial manufacturer; prioritized 60+ AI use cases with $100M+ projected value and designed C-suite execution roadmap.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
    ],
    amazon: [
      'Defined product requirements for a data storage abstraction service supporting ML researchers, training workflows, and large-scale data access patterns; proposed service model to reduce downtime by 300+ hours/week.',
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle management roadmap, including storage cleanup, retention logic, and deletion workflows; identified $1.1M/year in savings.',
      'Performed root cause analysis on storage instability and proposed solution to reduce model production time by 75% while improving reliability of ML experimentation workflows.',
    ],
    jsheldSections: [
      {
        title: 'Consultant (2020-2021)',
        bullets: [
          'Promoted from Project Controls Engineer to Consultant; built workflow for a 4-year, $213M rail yard project, reducing duration by 4 months and overhead costs by 10%.',
          'Facilitated multi-functional trade meetings to budget and ensure project deadlines were met, saving $100K/month while aligning owners, contractors, and technical teams.',
          'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights; halved average collection period through cross-division pay requisition process.',
        ],
      },
      {
        title: 'Project Controls Engineer (2018-2020)',
        bullets: [
          "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%, with analysis presented to the Governor.",
          'Maintained procurement schedule for an $84M project, helping client achieve a $5M incentive milestone and avoid $500K/day of delay damages.',
        ],
      },
    ],
  },
  {
    slug: 'trm-labs-strategic-finance-gtm',
    title: 'TRM Labs - Strategic Finance Manager, GTM',
    summary: 'Commercial strategy and GTM analytics professional with experience building revenue models, headcount-efficient growth plans, pricing strategy, and executive-ready narratives. MBA + engineering background with strong analytical modeling across CRM, finance, operations, and market benchmarks.',
    competencies: ['GTM Forecasting', 'ARR / Pipeline Analytics', 'Sales Capacity Modeling', 'Pricing & Packaging', 'Board Narratives', 'Revenue Operations', 'Strategic Finance', 'Executive Storytelling'],
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Delivered a 3x growth plan with ~50% less headcount for a $2B fintech firm; diagnosed sales model scalability gaps and designed separate enterprise and mid-market sales motions with a 3-year execution roadmap.',
      'Built integrated analysis across 3 years of CRM, financial, and operations data to evaluate opportunity conversion, seller coverage, and operational support intensity.',
      'Quantified $5B-$7B in cost synergies for a large public-to-public media acquisition bid; established and modeled synergy levers across content generation, distribution, and corporate SG&A.',
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business; benchmarked peers, back-tested consumption, and designed offer price book.',
      'Developed strategy for a Fortune 500 client to streamline a 400+ GTM tool portfolio into 6 portals, reducing ~30% of inefficiencies from frequent tool switching.',
    ],
    amazon: [
      "Reduced $1.1M/year storage spend by translating 30+ ML scientists' needs into an automated data-deletion roadmap.",
      'Eliminated 300+ hours/week of customer-team downtime via a proposed data-storage abstraction layer.',
    ],
    jsheld: [
      'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights.',
      'Halved client average collection period by implementing a streamlined cross-division pay requisition process.',
    ],
  },
  {
    slug: 'kin-pricing-product-manager',
    title: 'Kin Insurance - Sr. Insurance Product Manager',
    summary: 'Pricing, product, and analytics strategist with experience converting customer data, pricing research, and operating-model analysis into measurable margin and revenue impact. MBA + engineering background with strong fit for pricing, risk, segmentation, and executive decision support.',
    competencies: ['Pricing Strategy', 'Risk Analytics', 'Customer Segmentation', 'Product Strategy', 'Monetization', 'Executive Influence', 'Data-backed Roadmaps', 'Regulated Environments'],
    kpmgTitle: 'Sr Associate - GTM Strategy - Technology, Media & Telecommunications',
    kpmg: [
      'Drove $1.3M margin uplift and identified $16M in churn-risk revenue for a $60M IoT vendor through 10-year transaction/revenue analysis, k-means customer segmentation, and conjoint-based willingness-to-pay research for premium-service pricing.',
      'Identified $18M in incremental revenue by redesigning pricing strategy for a $500M CDN business, shifting to a consumption-based model; benchmarked peers and back-tested consumption.',
      'Redesigned a Fortune 500 cloud networking provider pricing strategy, shifting to a consumption-based model unlocking >25% revenue growth potential; validated impact through back-testing.',
      'Spearheaded LLM-based product matching engine for 300k+ SKUs, partnering with data and engineering teams to define PRD and technical requirements across Snowflake, BigQuery, Vertex AI, and REST APIs; enabled dynamic pricing guidance for high-margin upselling and reduced quote-matching cycles by ~1 month.',
      'Shaped feature-based pricing and GTM strategy for a global EdTech software vendor by uncovering purchasing behaviors and monetizable features through interviews and surveys.',
    ],
    amazon: [
      'Translated interviews with 30+ ML scientists and engineers into an automated data lifecycle roadmap; identified $1.1M/year in storage savings.',
      'Performed root cause analysis on storage instability; proposed solution to reduce model production time by 75%.',
    ],
    jsheld: [
      'Saved client $90M of damages in a high-profile lawsuit by developing technical and contractual insights.',
      "Led a team of 10 to analyze equipment data after Massachusetts's largest gas explosion; reduced client procurement cost by 20%.",
    ],
  },
];

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function li(items) {
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
  const jsheldMd = role.jsheldSections
    ? role.jsheldSections.map(section => `${section.title}\n${section.bullets.map(x => `- ${x}`).join('\n')}`).join('\n')
    : `Consultant / Project Controls Engineer\n${role.jsheld.map(x => `- ${x}`).join('\n')}`;
  return `# ${base.name}\n${base.contact}\n\n## Professional Summary\n${role.summary}\n\n## Core Competencies\n${role.competencies.join(' | ')}\n\n## Work Experience\n\n### KPMG, Seattle, WA | 2023-Present\n${role.kpmgTitle}\n${role.kpmg.map(x => `- ${x}`).join('\n')}\n\n### Amazon Devices - Alexa AI, Boston, MA | 2022\nSr Product Manager - Technical Intern - SAIF Data\n${role.amazon.map(x => `- ${x}`).join('\n')}\n\n### J.S. Held & Perry Associates LLC, Boston, MA | 2018-2021\n${jsheldMd}\n\n## Education\n${base.education.map(x => `- ${x}`).join('\n')}\n\n## Skills\n${base.skills}\n`;
}

function html(role) {
  const education = `
    <div class="edu-item">
      <div class="edu-header">
        <div class="edu-title">FOSTER SCHOOL OF BUSINESS, UNIVERSITY OF WASHINGTON</div>
        <div class="edu-year">Seattle, WA | June 2023</div>
      </div>
      <div class="edu-desc"><strong><em>Master of Business Administration - Management Science (STEM)</em></strong>; Dean's Merit Fellowship</div>
    </div>
    <div class="edu-item">
      <div class="edu-header">
        <div class="edu-title">BOSTON UNIVERSITY</div>
        <div class="edu-year">Boston, MA | May 2018</div>
      </div>
      <div class="edu-desc"><strong><em>Bachelor of Science, Mechanical Engineering</em></strong>; Minor in Computer Science; Magna Cum Laude; GPA: 3.72/4</div>
    </div>`;
  const experience = `
    <div class="job">
      <div class="job-header"><div><span class="job-company">KPMG</span><span class="job-location">Seattle, WA</span></div><div class="job-period">2023-Present</div></div>
      <div class="job-role">${esc(role.kpmgTitle)}</div>
      <ul>${li(role.kpmg)}</ul>
    </div>
    <div class="job">
      <div class="job-header"><div><span class="job-company">AMAZON DEVICES - ALEXA AI</span><span class="job-location">Boston, MA</span></div><div class="job-period">2022</div></div>
      <div class="job-role">Sr Product Manager - Technical Intern - SAIF Data</div>
      <ul>${li(role.amazon)}</ul>
    </div>
    <div class="job">
      <div class="job-header"><div><span class="job-company">J.S. HELD & PERRY ASSOCIATES LLC</span><span class="job-location">Boston, MA</span></div><div class="job-period">2018-2021</div></div>
      ${role.jsheldSections
        ? role.jsheldSections.map(section => `<div class="job-role">${esc(section.title)}</div>\n      <ul>${li(section.bullets)}</ul>`).join('\n      ')
        : `<div class="job-role">Consultant / Project Controls Engineer</div>\n      <ul>${li(role.jsheld)}</ul>`}
    </div>`;
  const skills = `<span class="skill-item"><span class="skill-category">Technology:</span> ${esc(base.skills)}</span>${role.focus ? `<span class="skill-item"><span class="skill-category">Focus:</span> ${esc(role.focus)}</span>` : ''}`;

  return replaceAll(template, {
    LANG: 'en',
    NAME: base.name,
    PHONE: '(857) 352-4577',
    EMAIL: 'sharma5555sahil@gmail.com',
    LINKEDIN_URL: 'https://linkedin.com/in/sahils57',
    LINKEDIN_DISPLAY: 'linkedin.com/in/sahils57',
    LOCATION: 'Seattle, WA',
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
  for (const role of roles) {
    const name = `sahil-sharma-${role.slug}-${runDate}`;
    const mdPath = resolve(outDir, `${name}.md`);
    const htmlPath = resolve(outDir, `${name}.html`);
    const pdfPath = resolve(outDir, `${name}.pdf`);
    writeFileSync(mdPath, md(role), 'utf8');
    writeFileSync(htmlPath, html(role), 'utf8');
    const page = await browser.newPage();
    await page.setContent(html(role), { waitUntil: 'networkidle' });
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
