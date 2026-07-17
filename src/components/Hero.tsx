import Image from "next/image";
import { PhoneIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy shadow-sm ring-1 ring-black/5">
              🏛️ Aligned with CBSE NEP Framework
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy shadow-sm ring-1 ring-black/5">
              🏫 Trusted by Schools across India
            </span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Healthy Students.
            <br />
            Smarter Schools.
            <br />
            <span className="text-brand-blue">Brighter Futures.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/75">
            My Health Passport is a complete school health, wellbeing &amp; support
            platform that helps schools nurture every child —{" "}
            <span className="font-semibold text-brand-blue">mind, body and beyond.</span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo-form"
              className="rounded-full bg-brand-blue px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-blue-dark"
            >
              Request a Demo
            </a>
            <a
              href="tel:+917793925151"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-navy ring-1 ring-black/10 transition hover:ring-brand-blue/40"
            >
              <PhoneIcon className="h-5 w-5 text-brand-blue" />
              +91 77939 25151
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-[2rem] bg-white p-8 pt-0 shadow-xl shadow-brand-blue/10 ring-1 ring-black/5">
            <div className="mx-auto -mt-12 h-28 w-28 overflow-hidden rounded-full shadow-lg shadow-brand-blue/30 ring-[6px] ring-white">
              <Image
                src="/brand/emblem-blue-bg.png"
                alt="My Health Passport"
                width={669}
                height={672}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl bg-brand-blue-tint px-5 py-4 text-center">
              <p className="font-serif text-lg font-semibold text-navy">
                &ldquo;Healthier Child is a Happier One.&rdquo;
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-brand-green-tint px-3 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-brand-green">
                  Students supported
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-navy">Mind &amp; Body</dd>
              </div>
              <div className="rounded-xl bg-brand-orange-tint px-3 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-brand-orange">
                  Everyone connected
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-navy">One Platform</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
