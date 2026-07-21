import { LucideIcon } from "lucide-react";

export function SimpleCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="h-full rounded-sds border border-mist/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan/70 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06]">
      <div className="grid h-11 w-11 place-items-center rounded-sds bg-navy text-white dark:bg-cyan dark:text-navy">
        <Icon size={22} />
      </div>
      <h2 className="mt-7 font-heading text-xl font-extrabold text-navy dark:text-white">{title}</h2>
      <p className="mt-3 leading-7 text-graphite dark:text-mist">{description}</p>
    </div>
  );
}
