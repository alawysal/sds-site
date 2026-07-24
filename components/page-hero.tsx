import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  proofItems = ["Strategy aligned", "Architecture ready", "Delivery governed"],
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  proofItems?: readonly string[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-32 text-white">
      <div className="absolute inset-0 -z-10 dark-data-grid opacity-45" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_center,rgba(33,166,226,0.22),transparent_58%)]" />
      <div className="container-sds grid gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.06] text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/[0.72]">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <div className="hidden rounded-sds border border-white/10 bg-white/[0.06] p-6 backdrop-blur md:block">
          <div className="grid gap-3">
            {proofItems.map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-white/10 py-3 text-sm font-semibold text-white/[0.78] last:border-0">
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-cyan" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
