import { useState } from 'react'
import {
  Monitor, BarChart3, GraduationCap,
  Users, FileCheck, Activity, ArrowRight,
  Shield, Download, LogIn, ChevronDown,
  Scale, BookMarked, ExternalLink,
} from 'lucide-react'

const MAIN = 'https://myhealthpassport-demo.netlify.app'

const C = {
  brand:    { hex: '#006FFF', bg: '#EEF5FF', border: '#006FFF25' },
  lavender: { hex: '#9B7FE8', bg: '#F3EEFF', border: '#9B7FE825' },
  mint:     { hex: '#28C393', bg: '#E8FAF5', border: '#28C39325' },
  sunshine: { hex: '#F59E0B', bg: '#FFFBEB', border: '#F59E0B25' },
  coral:    { hex: '#FF6B6B', bg: '#FFF0F0', border: '#FF6B6B25' },
}

const directives = [
  { code: 'D1', title: 'Staff Training',         desc: 'All staff complete the 12-session Capacity Building Programme — Psychological First Aid, warning signs, referral pathways.', c: C.brand },
  { code: 'D2', title: 'Parent Sensitisation',   desc: 'Structured parent awareness sessions tracked session-by-session — caregiver wellbeing, recognising signs in children.', c: C.lavender },
  { code: 'D3', title: 'Annual Wellness Report',  desc: 'Auto-generated PDF covering all 5 directives, training completion, interventions, and referrals. One click — ready to submit.', c: C.mint },
  { code: 'D4', title: 'Co-curricular Tracking', desc: 'Sports, arts & personality development events logged automatically. Participation tracked per student.', c: C.sunshine },
  { code: 'D5', title: 'Career Counselling',      desc: 'Structured career guidance by qualified staff — logged, tracked, and included in the annual wellness report.', c: C.coral },
]

const steps = [
  { num: '01', title: 'MHP sets you up',            desc: 'We configure your platform in 2–3 days — student roster, staff accounts, grade structure. Nothing for your IT team to do.', c: C.brand },
  { num: '02', title: 'Your staff get trained',     desc: 'Our team runs live sessions with your admin, counsellors, and teachers on the platform and the CBP programme.', c: C.lavender },
  { num: '03', title: 'Platform tracks everything', desc: 'Sessions logged automatically. Non-compliance alerts surfaced in real time. Admin sees progress across all directives.', c: C.mint },
  { num: '04', title: 'Annual report — one click',  desc: 'At year-end, the full CBSE-compliant Wellness Report is auto-generated. PDF or CSV, ready to submit to CBSE.', c: C.sunshine },
]

const audience = [
  {
    who: 'Teachers & Staff',
    icon: GraduationCap,
    c: C.brand,
    summary: '12-session Capacity Building Programme + real-time student risk alerts',
    items: [
      'Complete the 12-session Capacity Building Programme at their own pace',
      'Learn Psychological First Aid & how to identify warning signs in students',
      'Understand referral mechanisms — when and how to escalate a concern',
      'Get trained on self-harm response and trauma-informed teaching',
      'Receive instant alerts when a student is flagged as at-risk',
      'Track their own training progress on the dashboard',
      'Access session materials and resources anytime, any device',
    ],
    topics: [
      'Psychological First Aid',
      'Identifying Warning Signs in Students',
      'Understanding Self-Harm & Safe Response',
      'Referral Mechanisms & When to Escalate',
      'Mental Health Literacy for Educators',
      'Creating a Supportive Classroom Environment',
      'Stress & Burnout — Teacher Wellbeing',
      'Communicating with Parents on Mental Health',
      'Recognising Anxiety & Depression in Adolescents',
      'Trauma-Informed Teaching Practices',
      'Legal & Ethical Responsibilities of Educators',
      'Building a School-Wide Safety Culture',
    ],
  },
  {
    who: 'Parents',
    icon: Users,
    c: C.sunshine,
    summary: '12-session awareness programme + direct communication loop with school',
    items: [
      'Attend structured 12-session parent sensitisation programme',
      'Learn to recognise mental health warning signs in their child',
      'Understand how to talk to children about mental health and stress',
      'Get guidance on digital safety, screen habits, and academic pressure',
      'Receive updates on their child\'s wellness programme progress',
      'Connect with the school counsellor through a structured referral pathway',
      'Access resources on caregiver wellbeing and burnout prevention',
    ],
    topics: [
      'Understanding Adolescent Mental Health',
      'Recognising Warning Signs in Your Child',
      'How to Talk to Your Child About Mental Health',
      'Digital Safety & Healthy Screen Habits',
      'Managing Academic Pressure at Home',
      'Building Resilience in Children',
      'Sleep, Nutrition & Physical Wellbeing',
      'When to Seek Professional Help',
      'Supporting a Child Undergoing Therapy',
      'Caregiver Burnout & Self-Care for Parents',
      'Substance Awareness & Peer Pressure',
      'Creating a Safe & Open Home Environment',
    ],
  },
  {
    who: 'Students',
    icon: Activity,
    c: C.mint,
    summary: '12-session wellness curriculum delivered by trained school staff',
    items: [
      'Go through the 12-session structured student wellness curriculum',
      'Build emotional awareness and stress management skills',
      'Learn about healthy relationships, peer pressure, and boundaries',
      'Receive guidance on digital wellbeing and screen balance',
      'Understand self-harm awareness and how to seek help',
      'Develop resilience, goal-setting, and life skills',
      'Benefit from co-curricular and career counselling sessions',
    ],
    topics: [
      'Orientation: What Is Mental Health?',
      'Emotional Awareness & Identifying Feelings',
      'Managing Stress & Exam Anxiety',
      'Healthy Relationships & Peer Boundaries',
      'Dealing with Academic Pressure',
      'Understanding Bullying & Cyberbullying',
      'Digital Wellbeing & Screen Balance',
      'Self-Harm Awareness & Help-Seeking',
      'Building Resilience & a Growth Mindset',
      'Career Anxiety & Planning for the Future',
      'Substance Awareness & Saying No',
      'Life Skills, Goal-Setting & Moving Forward',
    ],
  },
]

export default function SaaSPage() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(160deg, #EBF3FF 0%, #F8FAFC 60%, #EEF5FF 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* Logo + Visit */}
          <div className="flex items-center justify-between mb-10">
            <img
              src="/logo.png"
              alt="My Health Passport"
              style={{ height: '72px', mixBlendMode: 'multiply' as const }}
            />
            <a href={MAIN} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold no-underline transition-colors"
              style={{ color: C.brand.hex }}>
              Visit Main Site →
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-5 uppercase tracking-widest"
                style={{ background: C.brand.bg, color: C.brand.hex }}>
                <Monitor className="w-3.5 h-3.5" /> CBSE Mental Health Compliance Platform
              </div>

              <h1 className="text-4xl sm:text-5xl font-900 leading-tight mb-5 text-slate-dark">
                All 5 CBSE Directives.<br />
                <span style={{ color: C.brand.hex }}>One Dashboard.</span>
              </h1>

              <p className="text-base text-slate-medium mb-7 max-w-lg leading-relaxed">
                MHP SaaS tracks staff training, student programmes, parent sessions,
                and annual reporting — so your school stays compliant without manual effort.
              </p>

              {/* Trust stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { num: '5',        label: 'Directives covered',    c: C.brand },
                  { num: '12',       label: 'Sessions per programme', c: C.lavender },
                  { num: '1-click',  label: 'Annual CBSE Report',    c: C.mint },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-2xl px-4 py-3 border"
                    style={{ background: s.c.bg, borderColor: s.c.border }}>
                    <span className="text-xl font-900 leading-none" style={{ color: s.c.hex }}>{s.num}</span>
                    <span className="text-xs font-semibold text-slate-medium leading-tight max-w-[80px]">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`${MAIN}/dashboard/saas`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-bold text-sm no-underline transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: C.brand.hex }}>
                  <Monitor className="w-4 h-4" /> Launch Live Demo
                </a>
                <a href={`${MAIN}/login`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm no-underline transition-all hover:-translate-y-0.5 border"
                  style={{ background: 'white', color: C.brand.hex, borderColor: C.brand.border }}>
                  <LogIn className="w-4 h-4" /> School Login
                </a>
              </div>
            </div>

            {/* Right — price card */}
            <div className="w-full lg:w-[390px] rounded-3xl overflow-hidden flex-shrink-0 bg-white"
              style={{ boxShadow: '0 24px 60px -8px rgba(0,111,255,0.18), 0 0 0 1px rgba(0,111,255,0.1)' }}>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0046CC 0%, #006FFF 100%)' }}>
                <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.07)' }} />
                <div className="absolute -bottom-8 -left-4 w-28 h-28 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.07)' }} />

                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.22em] mb-3 relative">Monthly License</p>
                <p className="text-6xl font-900 tracking-tight leading-none relative">₹4,999</p>
                <p className="text-white/55 text-sm mt-2 mb-5 relative">per school · per month</p>

                <div className="flex gap-2 relative">
                  <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold border border-white/20"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#86EFAC' }} />
                    100% Online
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold border border-white/20"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <Shield className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.8)' }} />
                    CBSE Compliant
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="px-7 py-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                  Everything included
                </p>
                <div className="space-y-3">
                  {[
                    { text: 'All 5 CBSE compliance directives',  c: C.brand },
                    { text: 'Live compliance dashboard',          c: C.brand },
                    { text: 'Staff Capacity Building Programme',  c: C.lavender },
                    { text: 'Onboarding & staff training',        c: C.lavender },
                    { text: 'Student wellness tracking',          c: C.mint },
                    { text: 'Auto-generated Annual Report',       c: C.mint },
                    { text: 'Parent session tracking',            c: C.sunshine },
                    { text: '24 / 7 access · any device',         c: C.coral },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.c.hex }} />
                      <span className="text-sm font-medium text-slate-dark">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <div className="h-px mb-5 bg-slate-100" />
                <a href={`${MAIN}/dashboard/saas`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full font-bold py-4 rounded-2xl no-underline text-white transition-all hover:opacity-90 hover:-translate-y-0.5 text-sm"
                  style={{ background: 'linear-gradient(135deg, #006FFF 0%, #0046CC 100%)', boxShadow: '0 6px 20px -4px rgba(0,111,255,0.45)' }}>
                  <Monitor className="w-4 h-4" /> Launch Live Demo
                </a>
                <p className="text-center text-xs mt-3" style={{ color: '#94A3B8' }}>
                  MHP-led setup & training included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legal Mandate ── */}
      <section className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-4"
              style={{ background: C.coral.bg, color: C.coral.hex }}>
              <Scale className="w-4 h-4" /> Legal Mandate
            </div>
            <h2 className="text-3xl sm:text-4xl font-900 text-slate-dark mb-4">
              Not Optional — Required by Law
            </h2>
            <p className="text-slate-medium max-w-2xl mx-auto">
              School mental health compliance is mandated by both the Supreme Court of India and CBSE.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden border shadow-md border-slate-100">
              <div className="px-6 py-4 text-white" style={{ background: C.brand.hex }}>
                <div className="flex items-center gap-2 mb-1">
                  <BookMarked className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">CBSE Circular</span>
                </div>
                <h3 className="font-900 text-lg">5 Mandatory Wellness Directives</h3>
              </div>
              <div className="px-6 py-5 bg-white">
                <p className="text-sm text-slate-medium leading-relaxed mb-4">
                  CBSE has issued a comprehensive circular mandating all affiliated schools to implement five wellness directives — covering staff training, parent engagement, student programmes, co-curricular activities, and career counselling.
                </p>
                <a href={`${MAIN}/cbse-circular`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold no-underline transition-colors"
                  style={{ color: C.brand.hex }}>
                  Read the full circular <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border shadow-md border-slate-100">
              <div className="px-6 py-4 text-white" style={{ background: C.lavender.hex }}>
                <div className="flex items-center gap-2 mb-1">
                  <Scale className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Supreme Court Judgement</span>
                </div>
                <h3 className="font-900 text-lg">Structured Mental Health Support</h3>
              </div>
              <div className="px-6 py-5 bg-white">
                <p className="text-sm text-slate-medium leading-relaxed mb-4">
                  The Supreme Court of India has ruled that schools must provide structured mental health support — creating a legal obligation, not just an aspiration. Non-compliance is a real institutional risk.
                </p>
                <a href={`${MAIN}/guidelines`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold no-underline transition-colors"
                  style={{ color: C.lavender.hex }}>
                  Read the guidelines <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Directives ── */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-4"
              style={{ background: C.brand.bg, color: C.brand.hex }}>
              <Shield className="w-4 h-4" /> What the Platform Covers
            </div>
            <h2 className="text-3xl sm:text-4xl font-900 text-slate-dark mb-3">
              5 Directives. All Tracked. All Reported.
            </h2>
            <p className="text-slate-medium max-w-xl mx-auto">
              Every CBSE-mandated wellness directive is tracked in real time and included in the annual report automatically.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {directives.map((d, i) => (
              <div key={i} className="rounded-2xl p-6 border flex flex-col gap-3"
                style={{ background: d.c.bg, borderColor: d.c.border }}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-900 rounded-full px-3 py-1 text-white"
                    style={{ background: d.c.hex }}>{d.code}</span>
                  <h3 className="font-bold text-slate-dark text-sm">{d.title}</h3>
                </div>
                <p className="text-xs text-slate-medium leading-relaxed">{d.desc}</p>
              </div>
            ))}

            {/* 6th card — modules */}
            <div className="rounded-2xl p-6 border border-slate-100 bg-white flex flex-col gap-3 shadow-sm">
              <h3 className="font-bold text-slate-dark text-sm mb-1">Also included</h3>
              {[
                { icon: BarChart3,     label: 'Compliance Overview',    c: C.brand },
                { icon: GraduationCap, label: 'Staff Training Tracker', c: C.lavender },
                { icon: Users,         label: 'Parent Session Logs',    c: C.sunshine },
                { icon: Activity,      label: 'Co-curricular Events',   c: C.coral },
                { icon: FileCheck,     label: 'Auto Wellness Report',   c: C.mint },
              ].map((m, j) => (
                <div key={j} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: m.c.bg }}>
                    <m.icon className="w-3.5 h-3.5" style={{ color: m.c.hex }} />
                  </div>
                  <span className="text-xs text-slate-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-4"
              style={{ background: C.lavender.bg, color: C.lavender.hex }}>
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-900 text-slate-dark">
              From sign-up to compliant — in days
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <span className="text-3xl font-900 mb-4 block" style={{ color: s.c.hex + '40' }}>{s.num}</span>
                <h3 className="font-bold text-slate-dark mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-slate-medium leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Gets What ── */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-4"
              style={{ background: C.mint.bg, color: C.mint.hex }}>
              <Users className="w-4 h-4" /> Who Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl font-900 text-slate-dark mb-3">
              What Everyone Gets
            </h2>
            <p className="text-slate-medium max-w-xl mx-auto">
              The platform delivers structured programmes to every stakeholder in your school's wellness ecosystem.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {audience.map((a, i) => (
              <div key={i} className="rounded-2xl border overflow-hidden shadow-sm"
                style={{ borderColor: open === i ? a.c.hex : '#E2E8F0' }}>
                {/* Header */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors"
                  style={{ background: open === i ? a.c.bg : 'white' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: open === i ? 'white' : a.c.bg }}>
                    <a.icon className="w-5 h-5" style={{ color: a.c.hex }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-dark text-base">{a.who}</p>
                    <p className="text-xs text-slate-medium mt-0.5">{a.summary}</p>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{
                      color: a.c.hex,
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                {/* Body */}
                {open === i && (
                  <div className="px-6 pb-6 pt-5 bg-white border-t" style={{ borderColor: a.c.hex + '25' }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: a.c.hex }}>
                      12 Session Programme
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {a.topics.map((t, j) => (
                        <div key={j} className="flex items-center gap-3 rounded-xl px-4 py-2.5 border"
                          style={{ background: a.c.bg, borderColor: a.c.border }}>
                          <span className="text-[10px] font-900 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                            style={{ background: a.c.hex }}>
                            {j + 1}
                          </span>
                          <span className="text-xs font-medium text-slate-dark leading-snug">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 text-center">
          <h2 className="text-3xl sm:text-4xl font-900 text-slate-dark mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-slate-medium mb-8 max-w-md mx-auto">
            Launch the live demo and explore the dashboard yourself — or reach out and we'll walk you through it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`${MAIN}/dashboard/saas`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-bold text-base no-underline transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: C.brand.hex }}>
              <Monitor className="w-5 h-5" /> Launch Live Demo
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=rohit@myhealthpassport.in" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base no-underline transition-all border hover:-translate-y-0.5"
              style={{ color: C.brand.hex, borderColor: C.brand.border, background: C.brand.bg }}>
              <Download className="w-5 h-5" /> Get in Touch
            </a>
          </div>
          <p className="text-xs text-slate-medium mt-6">
            ₹4,999 / month · MHP-led setup & training included · CBSE compliant
          </p>
        </div>
      </section>

    </div>
  )
}
