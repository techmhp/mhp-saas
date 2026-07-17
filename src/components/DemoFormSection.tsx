import { LeadForm } from "./LeadForm";

export function DemoFormSection() {
  return (
    <section id="demo-form" className="relative overflow-hidden bg-navy py-20">
      <div
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="text-white">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Ready to build a healthier, smarter, future-ready school?
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            One Platform. Every Individual Connected. Tell us a little about your
            school and our team will get in touch to set up a walkthrough.
          </p>
          <ul className="mt-8 space-y-3 text-white/80">
            <li>✓ No-commitment discovery call</li>
            <li>✓ Custom rollout plan for your school</li>
            <li>✓ Response within 1 business day</li>
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
