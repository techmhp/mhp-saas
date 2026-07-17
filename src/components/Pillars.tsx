import { HeartChildIcon, InsightsIcon, SchoolIcon, SupportIcon } from "./icons";

const pillars = [
  {
    icon: SchoolIcon,
    title: "Built For Schools",
    color: "text-brand-blue",
    tint: "bg-brand-blue-tint",
  },
  {
    icon: HeartChildIcon,
    title: "Whole-Child Approach",
    color: "text-brand-green",
    tint: "bg-brand-green-tint",
  },
  {
    icon: InsightsIcon,
    title: "Meaningful Insights",
    color: "text-navy",
    tint: "bg-brand-blue-tint",
  },
  {
    icon: SupportIcon,
    title: "Expert-Backed Support",
    color: "text-brand-orange",
    tint: "bg-brand-orange-tint",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h3 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
          A Platform Built for <span className="text-brand-blue">Student Wellbeing.</span>
        </h3>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {pillars.map(({ icon: Icon, title, color, tint }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${tint} ${color}`}>
                <Icon />
              </div>
              <p className="text-sm font-semibold text-navy">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
