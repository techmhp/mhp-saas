const problems = [
  {
    title: "Anxiety and Exam Stress",
    description:
      "Pressure to perform, fear of failure and constant comparison impact confidence.",
    color: "text-brand-pink",
    bar: "bg-brand-pink",
    ring: "ring-brand-pink/15",
  },
  {
    title: "Behavioural Changes",
    description:
      "Withdrawal, anger, irritability or sudden changes often go unnoticed.",
    color: "text-brand-green",
    bar: "bg-brand-green",
    ring: "ring-brand-green/15",
  },
  {
    title: "Self-harm Warning Signs",
    description: "Early signs are often missed until it's too late.",
    color: "text-brand-orange",
    bar: "bg-brand-orange",
    ring: "ring-brand-orange/15",
  },
  {
    title: "Teacher Burnout",
    description:
      "High workloads and stress impact teacher well-being and classroom energy.",
    color: "text-brand-purple",
    bar: "bg-brand-purple",
    ring: "ring-brand-purple/15",
  },
];

export function ProblemSection() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Schools face many challenges{" "}
          <span className="text-brand-blue">beyond academics.</span>
        </h2>
        <p className="mt-4 text-navy/70">
          Today&apos;s students navigate pressures that affect their well-being,
          learning and growth.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {problems.map((p) => (
          <div
            key={p.title}
            className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ${p.ring} transition hover:shadow-md`}
          >
            <h3 className={`font-serif text-xl font-semibold ${p.color}`}>{p.title}</h3>
            <div className={`mt-2 mb-3 h-0.5 w-10 ${p.bar}`} />
            <p className="text-navy/70">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
