import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of Use" description="Terms for using the SAL Data Solutions website." />
      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds max-w-3xl text-lg leading-8 text-graphite dark:text-mist">
          <p>This website is provided for general informational purposes. Content does not create a consulting agreement or professional engagement.</p>
          <p className="mt-6">Production terms should be reviewed with legal counsel and adapted to the company&apos;s operating jurisdiction.</p>
        </div>
      </section>
    </>
  );
}
