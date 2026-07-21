import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SimpleCard } from "@/components/simple-card";
import { services } from "@/data/site";

export const metadata = {
  title: "Services",
  description: "Data Engineering, AI, BI, Cloud, Data Governance and Digital Transformation consulting services."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Data, AI and analytics services for enterprise outcomes."
        description="SDS designs and delivers the foundations, platforms, intelligence layers, and operating models required for high-confidence decisions."
      >
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-sds bg-navy px-6 py-4 font-bold text-white shadow-glow transition hover:bg-royal">
          Discuss a project <ArrowRight size={18} />
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
