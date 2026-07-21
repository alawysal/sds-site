import { ArrowUpRight, BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { openRoles } from "@/data/site";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    heading: "Open roles",
    apply: "Apply now",
    closes: "Applications close",
    empty: "No public roles are currently listed. Please check back soon."
  },
  pt: {
    heading: "Vagas abertas",
    apply: "Candidatar-se",
    closes: "Candidaturas até",
    empty: "Não existem vagas publicadas neste momento. Volte em breve."
  },
  fr: {
    heading: "Postes ouverts",
    apply: "Postuler",
    closes: "Candidatures jusqu’au",
    empty: "Aucun poste n’est publié pour le moment. Revenez bientôt."
  }
} as const;

export function OpenRoles({ locale = "en" }: { locale?: Locale }) {
  const copy = labels[locale];
  const today = new Date().toISOString().slice(0, 10);
  const dateLocale = { en: "en-US", pt: "pt-PT", fr: "fr-FR" }[locale];
  const publishedRoles = openRoles.filter(
    (role) => role.isPublished && role.publicationEndDate >= today
  );

  return (
    <section className="section-pad bg-white dark:bg-[#071225]">
      <div className="container-sds">
        <h2 className="font-heading text-3xl font-extrabold text-navy dark:text-white">
          {copy.heading}
        </h2>

        {publishedRoles.length ? (
          <div className="mt-8 grid gap-5">
            {publishedRoles.map((role) => (
              <article
                key={`${role.title}-${role.location}`}
                className="rounded-sds border border-mist bg-[#F7F9FC] p-6 transition hover:border-cyan hover:shadow-glow sm:p-8 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-royal dark:text-cyan">
                      {role.department}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-extrabold text-navy dark:text-white">
                      {role.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-graphite dark:text-mist">
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={16} aria-hidden="true" /> {role.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <BriefcaseBusiness size={16} aria-hidden="true" /> {role.employmentType}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={16} aria-hidden="true" /> {copy.closes}{" "}
                        {new Intl.DateTimeFormat(dateLocale, {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          timeZone: "UTC"
                        }).format(new Date(`${role.publicationEndDate}T12:00:00Z`))}
                      </span>
                    </div>
                    <p className="mt-5 max-w-3xl leading-7 text-graphite dark:text-mist">
                      {role.description}
                    </p>
                  </div>
                  <a
                    href={role.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sds bg-navy px-6 py-4 font-bold text-white transition hover:bg-royal dark:bg-cyan dark:text-navy dark:hover:bg-white"
                  >
                    {copy.apply} <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 rounded-sds border border-mist bg-[#F7F9FC] p-8 leading-8 text-graphite dark:border-white/10 dark:bg-white/[0.06] dark:text-mist">
            {copy.empty}
          </p>
        )}
      </div>
    </section>
  );
}
