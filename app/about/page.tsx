import { PageHero } from "@/components/page-hero";
import { processSteps, values } from "@/data/site";
import { SimpleCard } from "@/components/simple-card";

export const metadata = {
  title: "About",
  description: "Learn about SAL Data Solutions, a premium data engineering, AI and BI consulting company."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SDS"
        title="A senior consulting partner for organizations that depend on trusted data."
        description="SDS helps leadership teams transform complex data estates into governed platforms, AI capabilities and decision systems that perform in the real world."
      />
      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">Positioning</p>
            <h2 className="mt-4 font-heading text-5xl font-extrabold leading-[1.05] text-navy text-balance dark:text-white">
              We build the data foundations executives can actually trust.
            </h2>
          </div>
          <div className="grid gap-4">
            <div className="rounded-sds border border-mist bg-[#F7F9FC] p-8 dark:border-white/10 dark:bg-white/[0.06]">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">Mission</p>
              <h3 className="mt-4 font-heading text-3xl font-extrabold text-navy dark:text-white">Transform data into measurable business value.</h3>
              <p className="mt-4 leading-8 text-graphite dark:text-mist">
                We help organizations move from fragmented reporting and manual analysis to reliable data products, analytics, AI and operating insight.
              </p>
            </div>
            <div className="rounded-sds border border-mist bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">Vision</p>
              <h3 className="mt-4 font-heading text-3xl font-extrabold text-navy dark:text-white">Become a trusted data partner for ambitious enterprises.</h3>
              <p className="mt-4 leading-8 text-graphite dark:text-mist">
                SDS exists for teams that want data to be more than infrastructure: a durable source of speed, control and strategic advantage.
              </p>
            </div>
            <div className="rounded-sds bg-navy p-8 text-white shadow-premium">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">What Makes Us Different</p>
              <p className="mt-4 text-xl leading-9 text-white/[0.78]">
                We do not begin with a tool. We begin with the decision, the operating constraint and the business outcome, then engineer the data capability around it.
              </p>
            </div>
          </div>
        </div>
        <div className="container-sds mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <SimpleCard key={value.title} {...value} />
          ))}
        </div>
      </section>
      <section className="section-pad bg-[#F7F9FC] dark:bg-white/5">
        <div className="container-sds">
          <div className="max-w-3xl">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">How We Work</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-navy dark:text-white md:text-5xl">
              Structured enough for enterprise governance. Practical enough to ship.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-sds border border-mist bg-white p-6 dark:border-white/10 dark:bg-[#071225]">
                <span className="font-heading text-sm font-extrabold text-cyan">0{index + 1}</span>
                <h3 className="mt-5 font-heading text-xl font-extrabold text-navy dark:text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-graphite dark:text-mist">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
