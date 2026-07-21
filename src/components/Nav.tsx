import Image from "next/image";

const links = [
  { href: "#why", label: "Why It Matters" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#who-its-for", label: "Who It's For" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className="flex items-center">
          <Image
            src="/brand/primary-logo-blue.png"
            alt="My Health Passport"
            width={1083}
            height={402}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="rounded-full border border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            Login
          </a>
          <a
            href="#demo-form"
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-blue/30 transition hover:bg-brand-blue-dark"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
