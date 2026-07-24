"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { dictionary, hrefFor, localeFromPathname, localizedServices, localizedSolutions } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = dictionary[locale];
  const services = localizedServices(locale);
  const solutions = localizedSolutions(locale);

  return (
    <footer className="bg-navy text-white">
      <div className="container-sds grid gap-12 py-16 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Logo className="[&_*]:text-white" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/[0.72]">
            {copy.footer.description}
          </p>
          <div className="mt-8 flex gap-3">
            <a className="grid h-10 w-10 place-items-center rounded-sds border border-white/15 text-white transition hover:border-cyan hover:text-cyan" href="https://www.linkedin.com" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-sds border border-white/15 text-white transition hover:border-cyan hover:text-cyan" href="mailto:contact@saldatasolutions.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))]">
          <div className="min-w-0">
            <h2 className="font-heading text-sm font-bold">{copy.footer.company}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/[0.68]">
              <Link href={hrefFor(locale, "/about")}>{copy.nav.about}</Link>
              <Link href={hrefFor(locale, "/careers")}>{copy.nav.careers}</Link>
              <Link href={hrefFor(locale, "/blog")}>Blog</Link>
              <Link href={hrefFor(locale, "/privacy")}>{copy.footer.privacy}</Link>
              <Link href={hrefFor(locale, "/terms")}>{copy.footer.terms}</Link>
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="font-heading text-sm font-bold">{copy.footer.services}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/[0.68]">
              {services.slice(0, 5).map((item) => (
                <Link key={item.title} href={hrefFor(locale, "/services")}>{item.title}</Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="font-heading text-sm font-bold">{copy.footer.solutions}</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/[0.68]">
              {solutions.slice(0, 5).map((item) => (
                <Link key={item.title} href={hrefFor(locale, "/solutions")}>{item.title}</Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="font-heading text-sm font-bold">{copy.footer.contact}</h2>
            <div className="mt-4 grid gap-4 text-sm text-white/[0.68]">
              <span className="flex items-start gap-3"><Mail size={16} className="shrink-0" /> <span className="min-w-0 break-all">contact@saldatasolutions.com</span></span>
              <span className="flex items-start gap-3"><Phone size={16} className="shrink-0" /> <span className="min-w-0 break-words">+1 000 000 0000</span></span>
              <span className="flex items-start gap-3"><MapPin size={16} className="shrink-0" /> <span className="min-w-0 break-words">{copy.footer.location}</span></span>
            </div>
            <form className="mt-6 flex overflow-hidden rounded-sds border border-white/15 bg-white/[0.08]">
              <input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/42" placeholder="Email" aria-label="Newsletter email" />
              <button className="bg-cyan px-4 text-sm font-bold text-navy" type="submit">{copy.footer.newsletter}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-sds flex flex-col justify-between gap-3 text-xs text-white/55 sm:flex-row">
          <span>{copy.footer.copyright}</span>
          <span>{copy.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
