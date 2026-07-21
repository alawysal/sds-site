"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/language-switcher";
import { dictionary, hrefFor, localeFromPathname } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = dictionary[locale];
  const navItems = [
    { label: copy.nav.services, href: "/services" },
    { label: copy.nav.solutions, href: "/solutions" },
    { label: copy.nav.about, href: "/about" },
    { label: copy.nav.careers, href: "/careers" },
    { label: copy.nav.contact, href: "/contact" }
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b bg-white shadow-sm transition-all dark:bg-[#071225]", scrolled ? "border-mist/80 dark:border-white/10" : "border-mist/60 dark:border-white/10")}>
      <div className="container-sds flex h-20 items-center justify-between">
        <Link href={hrefFor(locale, "/")} aria-label="SAL Data Solutions home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={hrefFor(locale, item.href)} className="text-sm font-semibold text-graphite transition hover:text-royal dark:text-mist dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-sds border border-mist bg-white text-navy transition hover:border-cyan dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Toggle color mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href={hrefFor(locale, "/contact")} className="rounded-sds bg-navy px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-royal">
            {copy.nav.cta}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-sds border border-mist bg-white text-navy lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
          aria-label="Open menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-mist bg-white/[0.96] backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#071225]/[0.96]">
          <div className="container-sds grid gap-2 py-5">
            <LanguageSwitcher />
            {navItems.map((item) => (
              <Link key={item.href} href={hrefFor(locale, item.href)} onClick={() => setOpen(false)} className="rounded-sds px-3 py-3 font-semibold text-navy hover:bg-mist/60 dark:text-white dark:hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
