import { PageHero } from "@/components/page-hero";
import { SimpleCard } from "@/components/simple-card";
import { solutions } from "@/data/site";

export const metadata = {
  title: "Solutions",
  description: "Decision intelligence solutions including dashboards, predictive analytics, fraud detection, cloud migration and AI assistants."
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Reusable accelerators for complex decision environments."
        description="Our solution patterns help teams move faster while preserving the governance, architecture, and adoption discipline enterprise work requires."
      />
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
