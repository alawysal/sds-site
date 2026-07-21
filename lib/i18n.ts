import { industries, processSteps, services, solutions, values } from "@/data/site";

export const locales = ["en", "pt", "fr"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  fr: "FR"
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "pt" || value === "fr";
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLocale(first) ? first : "en";
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (isLocale(parts[0])) parts.shift();
  return `/${parts.join("/")}`.replace(/\/$/, "") || "/";
}

export function localizedPath(pathname: string, locale: Locale) {
  const path = stripLocale(pathname);
  if (locale === "en") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function hrefFor(locale: Locale, href: string) {
  if (locale === "en") return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

const serviceText = {
  en: services.map(({ title, description }) => ({ title, description })),
  pt: [
    ["Engenharia de Dados", "Pipelines confiáveis, fundações lakehouse e produtos de dados criados para escala empresarial."],
    ["Desenvolvimento ETL", "Extração, transformação e orquestração modernas para reduzir trabalho manual."],
    ["Data Warehousing", "Armazéns de dados modelados e governados para relatórios e análises confiáveis."],
    ["Business Intelligence", "Dashboards executivos que conectam desempenho, risco e crescimento."],
    ["Inteligência Artificial", "Sistemas de IA práticos para automatizar decisões, descoberta de insights e trabalho do conhecimento."],
    ["Machine Learning", "Modelos preditivos e operações de ML que saem do protótipo para produção."],
    ["Plataformas Cloud Data", "Azure, AWS, Databricks, Snowflake e arquiteturas híbridas alinhadas ao negócio."],
    ["Big Data", "Processamento distribuído com Spark, Kafka e padrões resilientes de plataforma."],
    ["Analytics", "Análises profundas que transformam dados operacionais em estratégia, eficiência e resultados."],
    ["Governança de Dados", "Propriedade, linhagem, acesso, qualidade e padrões para dados confiáveis."],
    ["Qualidade de Dados", "Monitoramento, validação e correção para informação empresarial confiável."],
    ["Transformação Digital", "Roadmaps e programas de entrega para modernizar o uso de dados."],
    ["Consultoria", "Assessoria sénior em arquitetura, entrega, adoção e modelos operacionais."]
  ].map(([title, description]) => ({ title, description })),
  fr: [
    ["Ingénierie des Données", "Pipelines fiables, fondations lakehouse et produits data conçus pour l'échelle entreprise."],
    ["Développement ETL", "Extraction, transformation et orchestration modernes pour réduire le travail manuel."],
    ["Entrepôts de Données", "Data warehouses modélisés et gouvernés pour un reporting et des analyses fiables."],
    ["Business Intelligence", "Tableaux de bord exécutifs reliant performance, risque et croissance."],
    ["Intelligence Artificielle", "Systèmes d'IA pratiques pour automatiser les décisions, les insights et le travail du savoir."],
    ["Machine Learning", "Modèles prédictifs et opérations ML du prototype à la production."],
    ["Plateformes Data Cloud", "Azure, AWS, Databricks, Snowflake et architectures hybrides alignées métier."],
    ["Big Data", "Traitement distribué avec Spark, Kafka et architectures de plateforme résilientes."],
    ["Analytics", "Analyses approfondies transformant les données opérationnelles en stratégie et résultats."],
    ["Gouvernance des Données", "Propriété, lignage, accès, qualité et standards pour des données fiables."],
    ["Qualité des Données", "Surveillance, validation et remédiation pour une information d'entreprise fiable."],
    ["Transformation Digitale", "Feuilles de route et programmes pour moderniser l'usage des données."],
    ["Conseil", "Conseil senior en architecture, livraison, adoption et modèles opérationnels."]
  ].map(([title, description]) => ({ title, description }))
} satisfies Record<Locale, Array<{ title: string; description: string }>>;

const solutionText = {
  en: solutions.map(({ title, description }) => ({ title, description })),
  pt: [
    ["Dashboards Executivos", "Visibilidade de desempenho para direção, operações, finanças, clientes e risco."],
    ["Analytics Preditivo", "Preveja procura, churn, capacidade e resultados antes que se tornem urgentes."],
    ["Analytics de Clientes", "Compreenda comportamento, valor, segmentação e próximas melhores ações."],
    ["Deteção de Fraude", "Deteção de anomalias e workflows de inteligência para risco financeiro e operacional."],
    ["Analytics de Rede", "Observabilidade telecom para uso, disponibilidade, qualidade e planeamento de investimento."],
    ["Pipelines de Dados", "Ingestão e processamento automatizados para manter decisões críticas atualizadas."],
    ["Migração Cloud", "Migre plataformas de dados para fundações cloud modernas com controlo e continuidade."],
    ["Assistentes de IA", "Assistentes empresariais baseados em conhecimento, processos e analytics governados."]
  ].map(([title, description]) => ({ title, description })),
  fr: [
    ["Tableaux de Bord Exécutifs", "Visibilité de direction sur opérations, finance, clients et risque."],
    ["Analyse Prédictive", "Anticipez demande, churn, capacité et résultats avant qu'ils ne deviennent urgents."],
    ["Analyse Client", "Comprenez comportement, valeur, segmentation et prochaines meilleures actions."],
    ["Détection de Fraude", "Détection d'anomalies et workflows d'intelligence pour les risques financiers et opérationnels."],
    ["Analyse Réseau", "Observabilité télécom pour usage, disponibilité, qualité et planification d'investissement."],
    ["Pipelines de Données", "Ingestion et traitement automatisés pour maintenir les décisions critiques à jour."],
    ["Migration Cloud", "Migrez les plateformes data vers des fondations cloud modernes avec contrôle et continuité."],
    ["Assistants IA", "Assistants d'entreprise fondés sur connaissances, processus et analytics gouvernés."]
  ].map(([title, description]) => ({ title, description }))
} satisfies Record<Locale, Array<{ title: string; description: string }>>;

const industryText = {
  en: industries.map(({ title }) => title),
  pt: ["Telecomunicações", "Banca", "Governo", "Saúde", "Retalho", "Logística", "ONGs"],
  fr: ["Télécommunications", "Banque", "Gouvernement", "Santé", "Retail", "Logistique", "ONG"]
};

const valueText = {
  en: values.map(({ title, description }) => ({ title, description })),
  pt: [
    ["Negócio Primeiro", "Cada decisão de plataforma começa pela decisão que ajuda os líderes a tomar."],
    ["Excelência de Engenharia", "Construímos fundações duráveis, não demonstrações frágeis."],
    ["Confiança desde o Desenho", "Governança, qualidade, privacidade e segurança integradas desde o primeiro dia."],
    ["Impacto Mensurável", "O nosso trabalho é medido por clareza, adoção, eficiência e crescimento."]
  ].map(([title, description]) => ({ title, description })),
  fr: [
    ["Business First", "Chaque décision de plateforme commence par la décision qu'elle aide les dirigeants à prendre."],
    ["Excellence d'Ingénierie", "Nous construisons des fondations durables, pas des démonstrations fragiles."],
    ["Confiance dès la Conception", "Gouvernance, qualité, confidentialité et sécurité intégrées dès le premier jour."],
    ["Impact Mesurable", "Notre travail se mesure par clarté, adoption, efficacité et croissance."]
  ].map(([title, description]) => ({ title, description }))
} satisfies Record<Locale, Array<{ title: string; description: string }>>;

const processText = {
  en: processSteps.map(({ title, description }) => ({ title, description })),
  pt: [
    ["Descoberta", "Clarificar resultados de negócio, sistemas, restrições e métricas de sucesso."],
    ["Arquitetura", "Desenhar uma plataforma preparada para o futuro com os controlos certos."],
    ["Implementação", "Construir pipelines, modelos, dashboards e componentes de IA."],
    ["Testes", "Validar qualidade, desempenho, segurança e prontidão de adoção."],
    ["Deploy", "Lançar com handover claro, monitorização e ritmo operacional."],
    ["Suporte", "Melhorar continuamente com aconselhamento, otimização e capacitação."]
  ].map(([title, description]) => ({ title, description })),
  fr: [
    ["Découverte", "Clarifier résultats métier, systèmes, contraintes et indicateurs de succès."],
    ["Architecture", "Concevoir une plateforme prête pour l'avenir avec les bons contrôles."],
    ["Implémentation", "Construire pipelines, modèles, dashboards et composants IA."],
    ["Tests", "Valider qualité, performance, sécurité et préparation à l'adoption."],
    ["Déploiement", "Lancer avec transfert clair, monitoring et rythme opérationnel."],
    ["Support", "Améliorer continuellement par conseil, optimisation et enablement."]
  ].map(([title, description]) => ({ title, description }))
} satisfies Record<Locale, Array<{ title: string; description: string }>>;

export const dictionary = {
  en: {
    name: "English",
    nav: { services: "Services", solutions: "Solutions", about: "About", careers: "Careers", contact: "Contact", cta: "Get in Touch" },
    actions: { getInTouch: "Get in Touch", exploreServices: "Explore Services", learnMore: "Learn more", startConversation: "Start a Conversation" },
    footer: {
      company: "Company",
      services: "Services",
      solutions: "Solutions",
      contact: "Contact",
      newsletter: "Join",
      location: "Global consulting delivery",
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "Copyright 2026 SAL Data Solutions. All rights reserved.",
      description: "SAL Data Solutions helps organizations transform raw data into enterprise decisions through engineering, analytics, AI, cloud, and governance."
    },
    home: {
      badge: "Premium data, AI and analytics consulting",
      headline: "Transforming complex data into executive decisions.",
      subtitle: "SAL Data Solutions helps enterprises design, engineer and govern the data platforms that power analytics, AI and business transformation.",
      proof: ["Data platforms", "AI adoption", "Decision intelligence"],
      decisionLayer: "Decision layer",
      visualEyebrow: "SDS Operating Model",
      visualTitle: "From raw systems to governed intelligence.",
      stats: [["99.9%", "Pipeline reliability"], ["360", "Executive visibility"], ["AI", "Practical automation"]],
      trusted: "Trusted architecture for high-stakes sectors",
      what: {
        eyebrow: "What SDS Does",
        title: "We turn data estates into decision systems.",
        description: "We do not sell software. We solve business problems by designing the engineering, governance, analytics and AI capabilities your organization needs to move faster with control."
      },
      services: {
        eyebrow: "Services",
        title: "Enterprise data capability, delivered end to end.",
        description: "From core data engineering through AI adoption, SDS delivers the connected disciplines needed for durable business outcomes."
      },
      solutions: {
        eyebrow: "Solutions",
        title: "Business problems, translated into data solutions.",
        description: "Reusable solution patterns accelerate delivery while staying aligned to the operating model, data risk and decision flow."
      },
      why: {
        eyebrow: "Why SDS",
        title: "Senior delivery for enterprise-level data programs.",
        description: "We combine strategy, architecture, implementation and enablement so your platform becomes a business capability, not just a technical project.",
        bullets: ["Outcome-led architecture", "Governed data products", "Cloud and AI implementation discipline"]
      },
      industries: {
        eyebrow: "Industries",
        title: "Built for critical industries and complex operations.",
        description: "SDS partners with organizations where data quality, reliability, security and speed directly affect performance."
      },
      tech: {
        eyebrow: "Technologies",
        title: "Modern data stack fluency.",
        description: "We select platforms for the business problem, then engineer them with the controls enterprises expect."
      },
      process: {
        eyebrow: "Our Process",
        title: "A controlled path from ambiguity to production.",
        description: "The process is designed for executive confidence and engineering accountability."
      },
      cta: {
        eyebrow: "Call to Action",
        title: "Let's build your next data platform.",
        description: "Bring SDS into your next strategic initiative and move from scattered data to confident decisions."
      }
    },
    pages: {
      about: ["About SDS", "A senior consulting partner for organizations that depend on trusted data.", "SDS helps leadership teams transform complex data estates into governed platforms, AI capabilities and decision systems that perform in the real world."],
      services: ["Services", "Data, AI and analytics services for enterprise outcomes.", "SDS designs and delivers the foundations, platforms, intelligence layers, and operating models required for high-confidence decisions."],
      solutions: ["Solutions", "Reusable accelerators for complex decision environments.", "Our solution patterns help teams move faster while preserving the governance, architecture, and adoption discipline enterprise work requires."],
      contact: ["Contact", "Let's build your next data platform.", "Tell us where your organization wants to go. SDS will help shape the path from data complexity to decision clarity."],
      blog: ["Insights", "Thinking for data-driven leaders.", "A publication structure for future SDS articles, case notes, and executive perspectives."],
      careers: ["Careers", "Join a team building serious data capability.", "SDS looks for engineers, analysts, architects, and consultants who care about craft, clarity, and business impact."],
      privacy: ["Privacy", "Privacy Policy", "A clear privacy foundation for visitors, prospects, and partners."],
      terms: ["Terms", "Terms of Use", "Terms for using the SAL Data Solutions website."]
    }
  },
  pt: {
    name: "Português",
    nav: { services: "Serviços", solutions: "Soluções", about: "Sobre", careers: "Carreiras", contact: "Contacto", cta: "Fale Connosco" },
    actions: { getInTouch: "Fale Connosco", exploreServices: "Ver Serviços", learnMore: "Saber mais", startConversation: "Iniciar Conversa" },
    footer: {
      company: "Empresa",
      services: "Serviços",
      solutions: "Soluções",
      contact: "Contacto",
      newsletter: "Entrar",
      location: "Entrega global de consultoria",
      privacy: "Política de Privacidade",
      terms: "Termos",
      copyright: "Copyright 2026 SAL Data Solutions. Todos os direitos reservados.",
      description: "A SAL Data Solutions ajuda organizações a transformar dados brutos em decisões empresariais através de engenharia, analytics, IA, cloud e governança."
    },
    home: {
      badge: "Consultoria premium em dados, IA e analytics",
      headline: "Transformamos dados complexos em decisões executivas.",
      subtitle: "A SAL Data Solutions ajuda empresas a desenhar, construir e governar plataformas de dados que impulsionam analytics, IA e transformação do negócio.",
      proof: ["Plataformas de dados", "Adoção de IA", "Inteligência decisória"],
      decisionLayer: "Camada decisória",
      visualEyebrow: "Modelo Operacional SDS",
      visualTitle: "De sistemas brutos a inteligência governada.",
      stats: [["99.9%", "Confiabilidade de pipelines"], ["360", "Visibilidade executiva"], ["IA", "Automação prática"]],
      trusted: "Arquitetura confiável para setores críticos",
      what: {
        eyebrow: "O Que a SDS Faz",
        title: "Transformamos ecossistemas de dados em sistemas de decisão.",
        description: "Não vendemos software. Resolvemos problemas de negócio desenhando a engenharia, governança, analytics e IA que a sua organização precisa para avançar mais rápido com controlo."
      },
      services: {
        eyebrow: "Serviços",
        title: "Capacidade de dados empresarial, entregue de ponta a ponta.",
        description: "Da engenharia de dados à adoção de IA, a SDS entrega as disciplinas conectadas necessárias para resultados duráveis."
      },
      solutions: {
        eyebrow: "Soluções",
        title: "Problemas de negócio traduzidos em soluções de dados.",
        description: "Padrões reutilizáveis aceleram a entrega sem perder alinhamento com operação, risco de dados e fluxo decisório."
      },
      why: {
        eyebrow: "Porquê SDS",
        title: "Entrega sénior para programas de dados empresariais.",
        description: "Combinamos estratégia, arquitetura, implementação e capacitação para que a sua plataforma se torne uma capacidade de negócio.",
        bullets: ["Arquitetura orientada a resultados", "Produtos de dados governados", "Disciplina de cloud e IA"]
      },
      industries: {
        eyebrow: "Indústrias",
        title: "Criado para setores críticos e operações complexas.",
        description: "A SDS trabalha com organizações onde qualidade, confiabilidade, segurança e velocidade dos dados afetam diretamente o desempenho."
      },
      tech: {
        eyebrow: "Tecnologias",
        title: "Fluência no stack moderno de dados.",
        description: "Selecionamos plataformas para o problema de negócio e implementamos com os controlos que empresas exigem."
      },
      process: {
        eyebrow: "Processo",
        title: "Um caminho controlado da ambiguidade à produção.",
        description: "O processo foi desenhado para confiança executiva e responsabilidade de engenharia."
      },
      cta: {
        eyebrow: "Chamada para Ação",
        title: "Vamos construir a sua próxima plataforma de dados.",
        description: "Traga a SDS para a sua próxima iniciativa estratégica e avance de dados dispersos para decisões confiantes."
      }
    },
    pages: {
      about: ["Sobre a SDS", "Um parceiro sénior para organizações que dependem de dados confiáveis.", "A SDS ajuda equipas de liderança a transformar ecossistemas complexos em plataformas governadas, capacidades de IA e sistemas de decisão."],
      services: ["Serviços", "Serviços de dados, IA e analytics para resultados empresariais.", "A SDS desenha e entrega fundações, plataformas, camadas de inteligência e modelos operacionais para decisões confiantes."],
      solutions: ["Soluções", "Aceleradores reutilizáveis para ambientes decisórios complexos.", "Os nossos padrões ajudam equipas a avançar mais rápido mantendo governança, arquitetura e adoção."],
      contact: ["Contacto", "Vamos construir a sua próxima plataforma de dados.", "Diga-nos onde a sua organização quer chegar. A SDS ajuda a transformar complexidade em clareza decisória."],
      blog: ["Insights", "Pensamento para líderes orientados por dados.", "Estrutura para futuros artigos, notas de caso e perspetivas executivas da SDS."],
      careers: ["Carreiras", "Junte-se a uma equipa que constrói capacidade séria de dados.", "A SDS procura engenheiros, analistas, arquitetos e consultores focados em impacto."],
      privacy: ["Privacidade", "Política de Privacidade", "Uma base clara de privacidade para visitantes, potenciais clientes e parceiros."],
      terms: ["Termos", "Termos de Uso", "Termos para utilização do website da SAL Data Solutions."]
    }
  },
  fr: {
    name: "Français",
    nav: { services: "Services", solutions: "Solutions", about: "À propos", careers: "Carrières", contact: "Contact", cta: "Nous Contacter" },
    actions: { getInTouch: "Nous Contacter", exploreServices: "Voir les Services", learnMore: "En savoir plus", startConversation: "Démarrer l'Échange" },
    footer: {
      company: "Entreprise",
      services: "Services",
      solutions: "Solutions",
      contact: "Contact",
      newsletter: "Rejoindre",
      location: "Conseil livré à l'échelle globale",
      privacy: "Politique de Confidentialité",
      terms: "Conditions",
      copyright: "Copyright 2026 SAL Data Solutions. Tous droits réservés.",
      description: "SAL Data Solutions aide les organisations à transformer les données brutes en décisions d'entreprise grâce à l'ingénierie, l'analytics, l'IA, le cloud et la gouvernance."
    },
    home: {
      badge: "Conseil premium en data, IA et analytics",
      headline: "Transformer les données complexes en décisions exécutives.",
      subtitle: "SAL Data Solutions aide les entreprises à concevoir, construire et gouverner les plateformes data qui alimentent analytics, IA et transformation métier.",
      proof: ["Plateformes data", "Adoption IA", "Intelligence décisionnelle"],
      decisionLayer: "Couche décisionnelle",
      visualEyebrow: "Modèle Opérationnel SDS",
      visualTitle: "Des systèmes bruts à l'intelligence gouvernée.",
      stats: [["99.9%", "Fiabilité des pipelines"], ["360", "Visibilité exécutive"], ["IA", "Automatisation pratique"]],
      trusted: "Architecture fiable pour secteurs critiques",
      what: {
        eyebrow: "Ce Que Fait SDS",
        title: "Nous transformons les patrimoines data en systèmes de décision.",
        description: "Nous ne vendons pas de logiciel. Nous résolvons des problèmes métier en concevant l'ingénierie, la gouvernance, l'analytics et l'IA nécessaires pour avancer plus vite avec contrôle."
      },
      services: {
        eyebrow: "Services",
        title: "Capacité data entreprise, livrée de bout en bout.",
        description: "De l'ingénierie data à l'adoption IA, SDS livre les disciplines connectées nécessaires à des résultats durables."
      },
      solutions: {
        eyebrow: "Solutions",
        title: "Des problèmes métier traduits en solutions data.",
        description: "Des modèles réutilisables accélèrent la livraison tout en restant alignés au modèle opérationnel et au risque data."
      },
      why: {
        eyebrow: "Pourquoi SDS",
        title: "Livraison senior pour programmes data d'entreprise.",
        description: "Nous combinons stratégie, architecture, implémentation et enablement pour faire de votre plateforme une capacité métier.",
        bullets: ["Architecture orientée résultats", "Produits data gouvernés", "Discipline cloud et IA"]
      },
      industries: {
        eyebrow: "Industries",
        title: "Conçu pour les secteurs critiques et opérations complexes.",
        description: "SDS accompagne les organisations où qualité, fiabilité, sécurité et rapidité des données influencent directement la performance."
      },
      tech: {
        eyebrow: "Technologies",
        title: "Maîtrise du stack data moderne.",
        description: "Nous sélectionnons les plateformes selon le problème métier puis les ingénierons avec les contrôles attendus."
      },
      process: {
        eyebrow: "Processus",
        title: "Un chemin contrôlé de l'ambiguïté à la production.",
        description: "Le processus est conçu pour la confiance exécutive et la responsabilité d'ingénierie."
      },
      cta: {
        eyebrow: "Appel à l'Action",
        title: "Construisons votre prochaine plateforme data.",
        description: "Intégrez SDS à votre prochaine initiative stratégique et passez de données dispersées à des décisions confiantes."
      }
    },
    pages: {
      about: ["À propos de SDS", "Un partenaire senior pour les organisations qui dépendent de données fiables.", "SDS aide les équipes dirigeantes à transformer des patrimoines data complexes en plateformes gouvernées, capacités IA et systèmes décisionnels."],
      services: ["Services", "Services data, IA et analytics pour résultats d'entreprise.", "SDS conçoit et livre les fondations, plateformes, couches d'intelligence et modèles opérationnels nécessaires aux décisions fiables."],
      solutions: ["Solutions", "Accélérateurs réutilisables pour environnements décisionnels complexes.", "Nos modèles aident les équipes à avancer plus vite tout en préservant gouvernance, architecture et adoption."],
      contact: ["Contact", "Construisons votre prochaine plateforme data.", "Dites-nous où votre organisation veut aller. SDS aide à transformer la complexité data en clarté décisionnelle."],
      blog: ["Insights", "Réflexions pour dirigeants orientés data.", "Structure pour futurs articles SDS, notes de cas et perspectives exécutives."],
      careers: ["Carrières", "Rejoignez une équipe qui construit une vraie capacité data.", "SDS recherche ingénieurs, analystes, architectes et consultants attachés à l'impact."],
      privacy: ["Confidentialité", "Politique de Confidentialité", "Une base claire de confidentialité pour visiteurs, prospects et partenaires."],
      terms: ["Conditions", "Conditions d'Utilisation", "Conditions d'utilisation du site SAL Data Solutions."]
    }
  }
} as const;

export function localizedServices(locale: Locale) {
  return services.map((service, index) => ({ ...service, ...serviceText[locale][index] }));
}

export function localizedSolutions(locale: Locale) {
  return solutions.map((solution, index) => ({ ...solution, ...solutionText[locale][index] }));
}

export function localizedIndustries(locale: Locale) {
  return industries.map((industry, index) => ({ ...industry, title: industryText[locale][index] }));
}

export function localizedValues(locale: Locale) {
  return values.map((value, index) => ({ ...value, ...valueText[locale][index] }));
}

export function localizedProcess(locale: Locale) {
  return processSteps.map((step, index) => ({ ...step, ...processText[locale][index] }));
}
