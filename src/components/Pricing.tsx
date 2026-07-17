import { CheckIcon } from "./icons";
import { PlanCta } from "./PlanCta";

const platformFeatures = [
  "Teachers Training",
  "Parent Sensitisation Programme",
  "Annual Wellness Report",
  "Co-curricular Activity Documentation",
  "Career Guidance Documentation",
  "Wellness Activity Calendar",
  "Centralised Wellbeing Records",
  "Student Awareness Programs",
];

const plusFeatures = [
  "Everything in Student Wellness Platform",
  "Student Counselling",
  "Behavioural & Psychological Assessments",
  "Teacher Consultations",
  "Classroom Observations",
  "Parent Guidance Sessions",
  "Referral Support for Advanced Cases",
  "Ongoing Wellbeing Programme Oversight",
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="pricing-heading" className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Two Ways Schools Can Build{" "}
          <span className="text-brand-blue">A Stronger Wellness Ecosystem.</span>
        </h2>
        <p className="mt-4 text-navy/70">
          My Health Passport offers a flexible solution that grows with your school.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Wellness Platform */}
        <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
          <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-tint text-xl">
            💻
          </div>
          <h3 className="font-serif text-2xl font-semibold text-navy">
            MHP Student Wellness Platform
          </h3>
          <p className="mt-2 text-sm font-semibold text-navy/80">
            A structured digital platform for managing school wellbeing.
          </p>
          <p className="mt-1 text-sm text-navy/60">
            Designed to help schools plan, document and monitor student wellbeing
            initiatives through one secure, connected platform.
          </p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-navy/50">
            What it provides
          </p>
          <ul className="mt-3 space-y-2.5">
            {platformFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-brand-blue/20 px-6 py-4 text-center">
            <span className="font-serif text-3xl font-semibold text-navy">₹9,999</span>
            <span className="text-navy/60"> / Month / School</span>
          </div>
          <p className="mt-3 text-center text-sm text-navy/60">
            Ideal for schools looking to build and document their wellness programme
            independently.
          </p>

          <PlanCta
            plan="MHP Student Wellness Platform"
            className="mt-6 rounded-full bg-brand-blue-tint px-6 py-3 text-center text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            Get This Plan
          </PlanCta>
        </div>

        {/* Wellness Plus */}
        <div className="relative flex flex-col rounded-3xl bg-navy p-8 text-white shadow-xl ring-1 ring-black/5">
          <span className="absolute -top-3 right-8 rounded-full bg-brand-green px-4 py-1 text-xs font-semibold text-white">
            Most Comprehensive
          </span>
          <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
            🧑‍⚕️
          </div>
          <h3 className="font-serif text-2xl font-semibold">MHP Student Wellness Plus</h3>
          <p className="mt-2 text-sm font-semibold text-white/90">
            With professional psychological support from Licensed Psychologists.
          </p>
          <p className="mt-1 text-sm text-white/60">
            A comprehensive wellbeing solution that combines digital wellbeing
            management with expert-led psychological services for students,
            teachers and parents.
          </p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-white/50">
            What it provides
          </p>
          <ul className="mt-3 space-y-2.5">
            {plusFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-white/10 px-6 py-4 text-center">
            <span className="inline-block rounded-full bg-brand-green px-3 py-1 text-xs font-semibold">
              10 visits / month
            </span>
            <p className="mt-2 text-xs text-white/60">
              Psychologist Services — ₹30,000 · Platform Subscription — ₹9,999
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold">
              ₹39,999<span className="text-base font-sans font-normal text-white/60"> / Month / School</span>
            </p>
          </div>
          <p className="mt-3 text-center text-sm text-white/60">
            Ideal for schools looking for professional wellbeing support.
          </p>

          <PlanCta
            plan="MHP Student Wellness Plus"
            className="mt-6 rounded-full bg-brand-green px-6 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
          >
            Get This Plan
          </PlanCta>
        </div>
      </div>

      <p className="mt-10 text-center text-navy/70">
        Flexible solutions. Professional support. One connected wellbeing ecosystem
        for your entire school community.
      </p>
    </section>
  );
}
