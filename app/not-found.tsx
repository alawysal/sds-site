import Link from "next/link";

export default function NotFound() {
  return (
    <section className="data-grid grid min-h-screen place-items-center px-5 pt-20">
      <div className="max-w-xl text-center">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-cyan">404</p>
        <h1 className="mt-4 font-heading text-5xl font-extrabold text-navy dark:text-white">Signal not found.</h1>
        <p className="mt-5 text-lg leading-8 text-graphite dark:text-mist">
          The page you are looking for may have moved, but the platform is still running.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-sds bg-navy px-6 py-3 font-bold text-white shadow-glow transition hover:bg-royal">
          Return Home
        </Link>
      </div>
    </section>
  );
}
