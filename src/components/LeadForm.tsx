"use client";

import { useEffect, useState } from "react";
import { PLAN_SELECT_EVENT } from "./PlanCta";

const PLAN_OPTIONS = [
  "Not sure yet",
  "MHP Student Wellness Platform",
  "MHP Student Wellness Plus",
];

type FormState = {
  schoolName: string;
  contactName: string;
  designation: string;
  phone: string;
  email: string;
  city: string;
  studentCount: string;
  plan: string;
  message: string;
};

const initialState: FormState = {
  schoolName: "",
  contactName: "",
  designation: "",
  phone: "",
  email: "",
  city: "",
  studentCount: "",
  plan: PLAN_OPTIONS[0],
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.schoolName.trim()) errors.schoolName = "School name is required.";
  if (!values.contactName.trim()) errors.contactName = "Contact name is required.";

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(values.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export function LeadForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const onPlanSelect = (e: Event) => {
      const plan = (e as CustomEvent<string>).detail;
      setValues((v) => ({ ...v, plan }));
    };
    window.addEventListener(PLAN_SELECT_EVENT, onPlanSelect);
    return () => window.removeEventListener(PLAN_SELECT_EVENT, onPlanSelect);
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // No backend wired yet — simulated round trip so the UI can be reviewed end to end.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-lg ring-1 ring-black/5">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-tint text-3xl">
          ✅
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-navy">
          Thank you, {values.contactName.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-navy/70">
          We&apos;ve received your request for {values.schoolName}. Our team will
          reach out within 1 business day to schedule your demo.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setStatus("idle");
          }}
          className="mt-6 rounded-full bg-brand-blue-tint px-6 py-2.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="School Name" error={errors.schoolName} className="sm:col-span-2">
          <input
            type="text"
            value={values.schoolName}
            onChange={(e) => update("schoolName", e.target.value)}
            placeholder="e.g. Sunrise Public School"
            className={inputClass(!!errors.schoolName)}
          />
        </Field>

        <Field label="Your Name" error={errors.contactName}>
          <input
            type="text"
            value={values.contactName}
            onChange={(e) => update("contactName", e.target.value)}
            placeholder="Full name"
            className={inputClass(!!errors.contactName)}
          />
        </Field>

        <Field label="Designation" error={errors.designation}>
          <input
            type="text"
            value={values.designation}
            onChange={(e) => update("designation", e.target.value)}
            placeholder="e.g. Principal, Admin"
            className={inputClass(false)}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={inputClass(!!errors.phone)}
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@school.edu"
            className={inputClass(!!errors.email)}
          />
        </Field>

        <Field label="City" error={undefined}>
          <input
            type="text"
            value={values.city}
            onChange={(e) => update("city", e.target.value)}
            placeholder="e.g. Hyderabad"
            className={inputClass(false)}
          />
        </Field>

        <Field label="Number of Students" error={undefined}>
          <input
            type="number"
            min={0}
            value={values.studentCount}
            onChange={(e) => update("studentCount", e.target.value)}
            placeholder="Approx. strength"
            className={inputClass(false)}
          />
        </Field>

        <Field label="Interested Plan" error={undefined} className="sm:col-span-2">
          <select
            value={values.plan}
            onChange={(e) => update("plan", e.target.value)}
            className={inputClass(false)}
          >
            {PLAN_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Anything else we should know?" error={undefined} className="sm:col-span-2">
          <textarea
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            placeholder="Optional message"
            className={inputClass(false)}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 w-full rounded-full bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Request a Demo"}
      </button>
      <p className="mt-3 text-center text-xs text-navy/50">
        By submitting, you agree to be contacted by My Health Passport about your
        request.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-2.5 text-sm text-navy placeholder:text-navy/35 outline-none transition focus:ring-2 ${
    hasError
      ? "border-brand-pink/60 focus:border-brand-pink focus:ring-brand-pink/20"
      : "border-black/10 focus:border-brand-blue focus:ring-brand-blue/20"
  }`;
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-navy/80">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-brand-pink">{error}</span>}
    </label>
  );
}
