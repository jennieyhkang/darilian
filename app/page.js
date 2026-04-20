"use client";

import { useState } from "react";

const COUNTRIES = [
  "South Korea",
  "Taiwan",
  "India",
  "China",
  "Hong Kong",
  "Vietnam",
  "United States",
  "Other",
];

export default function Home() {
  const [status, setStatus] = useState("idle");
  const [role, setRole] = useState("engineer");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xpqkppez", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setRole("engineer");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Language Toggle */}
      <div style={{
        position: "fixed",
        top: 20,
        right: 24,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 40,
        padding: 3,
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}>
        <a href="/" style={{
          padding: "6px 16px",
          borderRadius: 40,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.02em",
          textDecoration: "none",
          background: "#0f172a",
          color: "#ffffff",
        }}>EN</a>
        <a href="/ko" style={{
          padding: "6px 16px",
          borderRadius: 40,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.02em",
          textDecoration: "none",
          color: "#94a3b8",
          background: "transparent",
        }}>KO</a>
      </div>

      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="font-semibold text-lg tracking-tight">Darilian</div>
          <a href="#waitlist" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Join waitlist →
          </a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-700 bg-emerald-50 rounded-full px-3 py-1 mb-6">
          Launching 2026 · Join the waitlist
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          Connecting Asia-Pacific&apos;s best engineers to US companies.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Fully remote. No visa required. A managed staffing platform built for both sides of the market.
        </p>
        <div className="mt-10">
          <a href="#waitlist" className="inline-block bg-slate-900 text-white font-medium px-8 py-4 rounded-lg hover:bg-slate-800 transition">
            Join the waitlist
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          🇰🇷 South Korea · 🇹🇼 Taiwan · 🇮🇳 India · 🇨🇳 China · 🇭🇰 Hong Kong · 🇻🇳 Vietnam
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            The talent gap is real — and growing.
          </h2>
          <p className="text-slate-600 text-center mt-4 max-w-2xl mx-auto">
            Two painful problems exist simultaneously — and no platform solves both.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">US Companies</div>
              <h3 className="text-2xl font-bold mb-3">Can&apos;t find enough engineers</h3>
              <p className="text-slate-600 leading-relaxed">
                Hundreds of thousands of tech roles go unfilled every year. Hiring pipelines are exhausted. Visa backlogs block international talent from relocating.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="text-xs font-semibold tracking-widest uppercase text-emerald-700 mb-3">Asia-Pacific Engineers</div>
              <h3 className="text-2xl font-bold mb-3">Can&apos;t access US opportunities</h3>
              <p className="text-slate-600 leading-relaxed">
                Millions of highly skilled engineers across Asia-Pacific have no clear path to work for top US companies remotely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center max-w-3xl mx-auto">
            A fully managed remote staffing platform.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {[
              { label: "Engineer applies", tone: "bg-emerald-600" },
              { label: "Darilian vets & matches", tone: "bg-blue-600" },
              { label: "US company reviews & hires", tone: "bg-slate-900" },
              { label: "Remote work begins — no visa", tone: "bg-amber-600" },
            ].map((step, i) => (
              <div key={i} className={`${step.tone} text-white rounded-lg p-5 text-center font-medium text-sm md:text-base`}>
                {step.label}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6">
              <div className="text-emerald-600 text-2xl mb-3">✦</div>
              <h3 className="font-bold text-lg mb-2">Managed staffing</h3>
              <p className="text-slate-600 leading-relaxed">
                We source, vet, and place — handling every step from screening to payroll and Employer of Record compliance.
              </p>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-2xl mb-3">✦</div>
              <h3 className="font-bold text-lg mb-2">Deep vetting</h3>
              <p className="text-slate-600 leading-relaxed">
                Tech assessment, English proficiency, and async communication score — before any candidate reaches an employer.
              </p>
            </div>
            <div className="p-6">
              <div className="text-amber-600 text-2xl mb-3">✦</div>
              <h3 className="font-bold text-lg mb-2">Remote-first</h3>
              <p className="text-slate-600 leading-relaxed">
                100% remote. No visa required. Full local labor law compliance via Employer of Record across six countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            Built for both sides of the market.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-emerald-600 text-white font-semibold text-sm tracking-widest uppercase px-6 py-3 text-center">For Engineers</div>
              <ul className="p-8 space-y-3 text-slate-700">
                {[
                  "Free profile creation & verification",
                  "Career advisor assigned on acceptance",
                  "Matched to roles — no cold applications",
                  "Interview prep & salary negotiation support",
                  "Contract, payroll & benefits handled for you",
                  "Keep 100% of your salary — employer pays our fee",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-blue-600 text-white font-semibold text-sm tracking-widest uppercase px-6 py-3 text-center">For Employers</div>
              <ul className="p-8 space-y-3 text-slate-700">
                {[
                  "Post roles, receive curated shortlist in 5 days",
                  "Candidate profiles with tech + English scores",
                  "Pipeline tools to track every hiring stage",
                  "Timezone & async compatibility matched",
                  "Full Employer of Record — payroll, compliance, benefits",
                  "90-day replacement guarantee on every hire",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3"><span className="text-blue-600 font-bold">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join the waitlist</h2>
            <p className="text-slate-600 mt-4">Be the first to know when we launch. We&apos;ll reach out with early access.</p>
          </div>

          {status === "success" ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-bold text-lg mb-2">You&apos;re on the list.</h3>
              <p className="text-slate-600">Thanks for signing up. We&apos;ll be in touch soon at the email you provided.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input type="text" name="name" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">I&apos;m a...</label>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent">
                  <option value="engineer">Engineer looking for US roles</option>
                  <option value="employer">Employer / Hiring Manager (US company)</option>
                </select>
              </div>
              {role === "engineer" && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                  <select name="country" required defaultValue="" className="w-full rounded-lg border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent">
                    <option value="" disabled>Select your country</option>
                    {COUNTRIES.map((c) => (<option key={c} value={c}>{c}</option>))}
                  </select>
                </div>
              )}
              {role === "employer" && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                  <input type="text" name="company" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="Your company name" />
                </div>
              )}
              <button type="submit" disabled={status === "submitting"} className="w-full bg-slate-900 text-white font-medium px-6 py-4 rounded-lg hover:bg-slate-800 transition disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "submitting" ? "Submitting..." : "Join waitlist"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-600 text-center">Something went wrong. Please try again, or email hello@darilian.com.</p>
              )}
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-100 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Darilian. All rights reserved.</div>
          <a href="mailto:hello@darilian.com" className="hover:text-slate-900">hello@darilian.com</a>
        </div>
      </footer>
    </main>
  );
}
