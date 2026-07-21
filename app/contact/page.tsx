import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Contact",
  description: "Contact SAL Data Solutions to discuss data engineering, AI, analytics and digital transformation initiatives."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s build your next data platform."
        description="Tell us where your organization wants to go. SDS will help shape the path from data complexity to decision clarity."
      />
      <section className="section-pad bg-white dark:bg-[#071225]">
        <div className="container-sds grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-sds bg-navy p-8 text-white">
            <h2 className="font-heading text-2xl font-extrabold">Contact details</h2>
            <div className="mt-8 grid gap-5 text-white/[0.76]">
              <span className="flex gap-3"><Mail className="text-cyan" /> contact@saldatasolutions.com</span>
              <span className="flex gap-3"><Phone className="text-cyan" /> +1 000 000 0000</span>
              <span className="flex gap-3"><MapPin className="text-cyan" /> Global consulting delivery</span>
            </div>
          </div>
          <form className="grid gap-4 rounded-sds border border-mist bg-[#F7F9FC] p-6 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="Name" aria-label="Name" />
              <input className="rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="Work email" aria-label="Work email" />
            </div>
            <input className="rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="Company" aria-label="Company" />
            <textarea className="min-h-40 rounded-sds border border-mist bg-white px-4 py-3 outline-none focus:border-cyan dark:border-white/10 dark:bg-[#071225]" placeholder="What business problem should data solve?" aria-label="Message" />
            <button className="rounded-sds bg-navy px-6 py-4 font-bold text-white transition hover:bg-royal" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
