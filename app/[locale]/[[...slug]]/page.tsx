import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { PageHero } from "@/components/page-hero";
import { OpenRoles } from "@/components/open-roles";
import { SimpleCard } from "@/components/simple-card";
import {
  dictionary,
  hrefFor,
  isLocale,
  localizedProcess,
  localizedServices,
  localizedSolutions,
  localizedValues,
  type Locale
} from "@/lib/i18n";

type LocalizedPageProps = {
  params: {
    locale: string;
    slug?: string[];
  };
};

const supportedSlugs = new Set(["about", "services", "solutions", "contact", "blog", "careers", "privacy", "terms"]);

export function generateStaticParams() {
  const locales: Locale[] = ["pt", "fr"];
  const slugs = [undefined, "about", "services", "solutions", "contact", "blog", "careers", "privacy", "terms"];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug: slug ? [slug] : undefined
    }))
  );
}

export default function LocalizedPage({ params }: LocalizedPageProps) {
  if (!isLocale(params.locale) || params.locale === "en") notFound();

  const locale = params.locale;
  const slug = params.slug?.[0];
  if (params.slug && params.slug.length > 1) notFound();
  if (!slug) return <HomePage locale={locale} />;
  if (!supportedSlugs.has(slug)) notFound();

  const copy = dictionary[locale];

  if (slug === "services") {
    const page = copy.pages.services;
    const services = localizedServices(locale);
    return (
      <>
        <PageHero eyebrow={page[0]} title={page[1]} description={page[2]}>
          <Link href={hrefFor(locale, "/contact")} className="inline-flex items-center gap-2 rounded-sds bg-white px-6 py-4 font-bold text-navy shadow-glow transition hover:bg-cyan">
            {copy.actions.getInTouch} <ArrowRight size={18} />
          </Link>
        </PageHero>
        <section className="section-pad bg-white dark:bg-[#071225]">
          <div className="container-sds grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <SimpleCard key={service.title} {...service} />
            ))}
          </div>
        </section>
      </>
    );
  }

  if (slug === "solutions") {
    const page = copy.pages.solutions;
    const solutions = localizedSolutions(locale);
    return (
      <>
        <PageHero eyebrow={page[0]} title={page[1]} description={page[2]} />
        <section className="section-pad bg-white dark:bg-[#071225]">
          <div className="container-sds grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <SimpleCard key={solution.title} {...solution} />
            ))}
          </div>
        </section>
      </>
    );
  }

  if (slug === "about") {
    const page = copy.pages.about;
    const values = localizedValues(locale);
    const steps = localizedProcess(locale);
    return (
      <>
        <PageHero eyebrow={page[0]} title={page[1]} description={page[2]} />
        <section className="section-pad bg-white dark:bg-[#071225]">
          <div className="container-sds grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <SimpleCard key={value.title} {...value} />
            ))}
          </div>
        </section>
        <section className="section-pad bg-[#F5F7FA] dark:bg-white/5">
          <div className="container-sds grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-sds border border-mist bg-white p-6 dark:border-white/10 dark:bg-[#071225]">
                <span className="font-heading text-sm font-extrabold text-cyan">0{index + 1}</span>
                <h2 className="mt-5 font-heading text-xl font-extrabold text-navy dark:text-white">{step.title}</h2>
                <p className="mt-3 leading-7 text-graphite dark:text-mist">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  if (slug === "contact") {
    const page = copy.pages.contact;
    return (
      <>
        <PageHero eyebrow={page[0]} title={page[1]} description={page[2]} />
        <section className="section-pad bg-white dark:bg-[#071225]">
          <div className="container-sds grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-sds bg-navy p-8 text-white">
              <h2 className="font-heading text-2xl font-extrabold">{copy.footer.contact}</h2>
              <div className="mt-8 grid gap-5 text-white/[0.76]">
                <span className="flex gap-3"><Mail className="text-cyan" /> contact@saldatasolutions.com</span>
                <span className="flex gap-3"><Phone className="text-cyan" /> +1 000 000 0000</span>
                <span className="flex gap-3"><MapPin className="text-cyan" /> {copy.footer.location}</span>
              </div>
            </div>
            <form className="grid gap-4 rounded-sds border border-mist bg-[#F7F9FC] p-6 dark:border-white/10 dark:bg-white/[0.06]">
              <input className="rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="Name" aria-label="Name" />
              <input className="rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="Email" aria-label="Email" />
              <textarea className="min-h-40 rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="Message" aria-label="Message" />
              <button className="rounded-sds bg-navy px-6 py-4 font-bold text-white transition hover:bg-royal" type="submit">{copy.nav.contact}</button>
            </form>
          </div>
        </section>
      </>
    );
  }

  if (slug === "careers") {
    const page = copy.pages.careers;
    return (
      <>
        <PageHero eyebrow={page[0]} title={page[1]} description={page[2]} />
        <OpenRoles locale={locale} />
      </>
    );
  }

  const page = copy.pages[slug as "blog" | "careers" | "privacy" | "terms"];
  return (
    <>
      <PageHero eyebrow={page[0]} title={page[1]} description={page[2]} />
      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds rounded-sds border border-mist bg-[#F7F9FC] p-8 text-lg leading-8 text-graphite dark:border-white/10 dark:bg-white/[0.06] dark:text-mist">
          <p>{page[2]}</p>
        </div>
      </section>
    </>
  );
}
