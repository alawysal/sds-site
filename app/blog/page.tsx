import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Blog",
  description: "Insights on data engineering, analytics, AI, governance and enterprise transformation."
};

const posts = [
  "Designing a Data Platform for Executive Decision Velocity",
  "Why Data Quality Is a Business Operating Model",
  "From Dashboards to AI Assistants: The Next Analytics Layer"
];

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Thinking for data-driven leaders." description="A publication structure for future SDS articles, case notes, and executive perspectives." />
      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post} className="rounded-sds border border-mist bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-sm font-bold text-cyan">Insight</p>
              <h2 className="mt-4 font-heading text-2xl font-extrabold text-navy dark:text-white">{post}</h2>
              <p className="mt-4 leading-7 text-graphite dark:text-mist">Coming soon.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
