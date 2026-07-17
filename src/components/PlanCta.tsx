"use client";

export const PLAN_SELECT_EVENT = "mhp:plan-select";

export function PlanCta({
  plan,
  className,
  children,
}: {
  plan: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#demo-form"
      className={className}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(PLAN_SELECT_EVENT, { detail: plan }));
      }}
    >
      {children}
    </a>
  );
}
