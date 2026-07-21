"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { Counter, Reveal } from "@/components/motion";
import { stats, technologies } from "@/data/site";
import {
  dictionary,
  hrefFor,
  localizedIndustries,
  localizedProcess,
  localizedServices,
  localizedSolutions,
  localizedValues,
  type Locale
} from "@/lib/i18n";

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
  inverse?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-heading text-[11px] font-extrabold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>
      <h2 className={inverse ? "mt-4 font-heading text-4xl font-extrabold leading-[1.07] text-white text-balance md:text-5xl" : "mt-4 font-heading text-4xl font-extrabold leading-[1.07] text-navy text-balance dark:text-white md:text-5xl"}>
        {title}
      </h2>
      <p className={inverse ? "mt-5 text-lg leading-8 text-white/70" : "mt-5 text-lg leading-8 text-graphite dark:text-mist"}>
        {description}
      </p>
    </Reveal>
  );
}

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  const copy = dictionary[locale];
  const services = localizedServices(locale);
  const solutions = localizedSolutions(locale);
  const industries = localizedIndustries(locale);
  const values = localizedValues(locale);
  const processSteps = localizedProcess(locale);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#F8FAFD] pt-24 dark:bg-[#071225]">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F8FC_72%,rgba(244,248,252,0)_100%)] dark:bg-[linear-gradient(180deg,#071225_0%,#0B1D3C_72%,rgba(7,18,37,0)_100%)]" />
        <div className="absolute right-[-16%] top-20 -z-10 h-[540px] w-[540px] rounded-full bg-cyan/[0.12] blur-3xl" />
        <div className="container-sds grid min-h-[720px] items-center gap-9 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-sm font-bold text-graphite shadow-sm dark:border-white/10 dark:bg-white/[0.08] dark:text-mist">
              <Sparkles size={16} className="text-cyan" />
              {copy.home.badge}
            </div>
            <h1 className="mt-6 max-w-4xl font-heading text-[46px] font-extrabold leading-[0.98] text-navy text-balance dark:text-white sm:text-5xl md:text-6xl xl:text-7xl">
              {copy.home.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-graphite dark:text-mist">
              {copy.home.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={hrefFor(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-sds bg-navy px-6 py-4 font-bold text-white shadow-glow transition hover:bg-royal">
                {copy.actions.getInTouch} <ArrowRight size={18} />
              </Link>
              <Link href={hrefFor(locale, "/services")} className="inline-flex items-center justify-center gap-2 rounded-sds border border-mist bg-white px-6 py-4 font-bold text-navy shadow-sm transition hover:border-cyan dark:border-white/10 dark:bg-white/[0.08] dark:text-white">
                {copy.actions.exploreServices} <ChevronRight size={18} />
              </Link>
            </div>
            <div className="mt-8 hidden max-w-2xl gap-3 md:grid md:grid-cols-3">
              {copy.home.proof.map((item) => (
                <div key={item} className="rounded-sds border border-mist bg-white px-4 py-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                  <CircleDot className="mb-4 text-cyan" size={18} />
                  <p className="text-sm font-extrabold text-navy dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative">
              <div className="absolute -left-4 top-10 z-10 hidden rounded-sds border border-mist bg-white p-5 shadow-premium md:block dark:border-white/10 dark:bg-navy">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-graphite/60 dark:text-mist">{copy.home.decisionLayer}</p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="font-heading text-4xl font-extrabold text-navy dark:text-white">3.4x</span>
                  <TrendingUp className="mb-2 text-cyan" size={24} />
                </div>
              </div>
              <div className="overflow-hidden rounded-sds border border-mist bg-white shadow-premium dark:border-white/10 dark:bg-white/[0.06]">
                <div className="relative aspect-[16/9] lg:aspect-[4/3]">
                  <Image
                    src="/images/sds-enterprise-data-hero.png"
                    alt="Enterprise leaders using data and AI to make strategic decisions"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,29,60,0)_48%,rgba(11,29,60,0.82)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">{copy.home.visualEyebrow}</p>
                    <p className="mt-2 max-w-md font-heading text-2xl font-extrabold">{copy.home.visualTitle}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {copy.home.stats.map(([value, label]) => (
                  <div key={label} className="rounded-sds bg-navy p-4 text-white shadow-sm">
                    <p className="font-heading text-2xl font-extrabold">{value}</p>
                    <p className="mt-1 text-xs font-semibold text-white/[0.62]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-mist bg-white py-8 dark:border-white/10 dark:bg-[#071225]">
        <div className="container-sds flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-graphite/60 dark:text-mist">{copy.home.trusted}</p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-extrabold text-navy/70 dark:text-white/70">
            {industries.map((item) => (
              <span key={item.title}>{item.title}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow={copy.home.what.eyebrow}
            title={copy.home.what.title}
            description={copy.home.what.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-sds border border-mist bg-[#F8FAFD] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06]">
                    <div className="grid h-11 w-11 place-items-center rounded-sds bg-navy text-white">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-7 font-heading text-xl font-extrabold text-navy dark:text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-graphite dark:text-mist">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F7FA] dark:bg-white/5" id="services">
        <div className="container-sds">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
            <SectionHeader
              align="left"
              eyebrow={copy.home.services.eyebrow}
              title={copy.home.services.title}
              description={copy.home.services.description}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {services.slice(0, 6).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group rounded-sds border border-mist bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan hover:shadow-premium dark:border-white/10 dark:bg-[#071225]">
                    <div className="flex items-start justify-between gap-4">
                      <Icon className="text-royal dark:text-cyan" size={26} />
                      <ArrowRight className="text-graphite/28 transition group-hover:translate-x-1 group-hover:text-cyan" size={19} />
                    </div>
                    <h3 className="mt-7 font-heading text-xl font-extrabold text-navy dark:text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-graphite dark:text-mist">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.slice(6).map((item) => (
              <Link key={item.title} href={hrefFor(locale, "/services")} className="rounded-full border border-mist bg-white px-5 py-3 text-sm font-extrabold text-navy shadow-sm transition hover:border-cyan dark:border-white/10 dark:bg-[#071225] dark:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds">
          <SectionHeader eyebrow={copy.home.solutions.eyebrow} title={copy.home.solutions.title} description={copy.home.solutions.description} />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-sds border border-mist bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06]">
                  <Icon className="text-cyan" size={26} />
                  <h3 className="mt-6 font-heading text-xl font-extrabold text-navy dark:text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-graphite dark:text-mist">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 dark-data-grid opacity-25" />
        <div className="absolute left-[-12%] top-[-20%] h-[420px] w-[420px] rounded-full bg-cyan/[0.14] blur-3xl" />
        <div className="container-sds relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              inverse
              eyebrow={copy.home.why.eyebrow}
              title={copy.home.why.title}
              description={copy.home.why.description}
            />
            <div className="mt-8 grid gap-3">
              {copy.home.why.bullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-bold text-white">
                  <CheckCircle2 className="text-cyan" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-sds border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
                <p className="font-heading text-5xl font-extrabold text-white"><Counter value={stat.value} suffix={stat.suffix} /></p>
                <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white/[0.58]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F7FA] dark:bg-white/5">
        <div className="container-sds">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeader
              align="left"
              eyebrow={copy.home.industries.eyebrow}
              title={copy.home.industries.title}
              description={copy.home.industries.description}
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-sds border border-mist bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#071225]">
                    <Icon className="text-royal dark:text-cyan" size={24} />
                    <p className="mt-6 text-sm font-extrabold text-navy dark:text-white">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds">
          <SectionHeader eyebrow={copy.home.tech.eyebrow} title={copy.home.tech.title} description={copy.home.tech.description} />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((item) => (
              <span key={item} className="rounded-sds border border-mist bg-white px-5 py-3 text-sm font-extrabold text-navy shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F5F7FA] dark:bg-white/5">
        <div className="container-sds">
          <SectionHeader eyebrow={copy.home.process.eyebrow} title={copy.home.process.title} description={copy.home.process.description} />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-sds border border-mist bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#071225]">
                <span className="font-heading text-sm font-extrabold text-cyan">0{index + 1}</span>
                <h3 className="mt-5 font-heading text-xl font-extrabold text-navy dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite dark:text-mist">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 dark:bg-[#071225]">
        <div className="container-sds relative overflow-hidden rounded-sds bg-navy p-8 text-white shadow-premium md:p-12">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(33,166,226,0.28),transparent_60%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">{copy.home.cta.eyebrow}</p>
              <h2 className="mt-4 font-heading text-4xl font-extrabold text-balance">{copy.home.cta.title}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/[0.72]">
                {copy.home.cta.description}
              </p>
            </div>
            <Link href={hrefFor(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-sds bg-white px-6 py-4 font-bold text-navy transition hover:bg-cyan">
              {copy.actions.startConversation} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
