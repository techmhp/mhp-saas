import { AdminIcon, CounsellorIcon, ParentIcon, TeacherIcon } from "./icons";

const personas = [
  {
    icon: AdminIcon,
    title: "School Admin",
    blurb: "Streamline operations and drive school excellence.",
    points: ["One Click Reports & dashboards", "School-wide wellbeing insights", "Alerts & notifications"],
    color: "text-brand-blue",
    dot: "bg-brand-blue",
    tint: "bg-brand-blue-tint",
  },
  {
    icon: TeacherIcon,
    title: "Teachers",
    blurb: "Empower educators with the tools they need to identify concerns early.",
    points: ["Student wellbeing monitoring", "Early support signals", "Classroom resources"],
    color: "text-brand-green",
    dot: "bg-brand-green",
    tint: "bg-brand-green-tint",
  },
  {
    icon: ParentIcon,
    title: "Parents",
    blurb: "Strengthen the partnership between home and school.",
    points: ["Parent communication", "Awareness resources", "Wellness updates"],
    color: "text-brand-orange",
    dot: "bg-brand-orange",
    tint: "bg-brand-orange-tint",
  },
  {
    icon: CounsellorIcon,
    title: "Counsellor & Others",
    blurb: "Specialized support for guidance, care & wellbeing.",
    points: ["Individual student support", "Career guidance & resources", "Intervention planning"],
    color: "text-brand-purple",
    dot: "bg-brand-purple",
    tint: "bg-brand-purple-tint",
  },
];

export function Personas() {
  return (
    <section id="who-its-for" className="bg-brand-blue-tint/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Ready to build a healthier, smarter,{" "}
            <span className="text-brand-blue">future-ready school?</span>
          </h2>
          <p className="mt-4 text-navy/70">
            One Platform. Every individual connected. With My Health Passport.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map(({ icon: Icon, title, blurb, points, color, dot, tint }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tint} ${color}`}>
                <Icon />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-1 text-sm text-navy/60">{blurb}</p>
              <ul className="mt-4 space-y-1.5">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-navy/75">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
