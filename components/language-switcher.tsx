"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
import { localeFromPathname, localeLabels, locales, localizedPath } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  return (
    <div className="flex items-center gap-1 rounded-sds border border-mist bg-white p-1 text-xs font-extrabold text-navy dark:border-white/10 dark:bg-white/5 dark:text-white" aria-label="Language selector">
      <Globe2 size={15} className="mx-1 text-cyan" />
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localizedPath(pathname, locale)}
          className={locale === current ? "rounded-[6px] bg-navy px-2.5 py-2 text-white dark:bg-cyan dark:text-navy" : "rounded-[6px] px-2.5 py-2 text-graphite transition hover:bg-mist/70 dark:text-mist dark:hover:bg-white/10"}
          hrefLang={locale}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
