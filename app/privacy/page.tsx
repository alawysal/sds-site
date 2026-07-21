import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" description="A clear privacy foundation for visitors, prospects, and partners." />
      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds max-w-3xl text-lg leading-8 text-graphite dark:text-mist">
          <p>SAL Data Solutions respects privacy and handles personal information responsibly. This page should be reviewed with legal counsel before production launch.</p>
          <p className="mt-6">We may collect contact details submitted through forms, business communication records, and website analytics used to improve the site experience.</p>
        </div>
      </section>
    </>
  );
}
