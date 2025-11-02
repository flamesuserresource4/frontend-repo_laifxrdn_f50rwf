import { motion } from 'framer-motion';
import { Check, ExternalLink } from 'lucide-react';

const cases = [
  {
    title: 'SaaS Analytics Platform',
    result: '+212% organic traffic in 6 months',
    bullets: ['Technical SEO overhaul', 'Topical cluster content', 'Landing page rebuilds'],
    gradient: 'from-fuchsia-500/20 to-sky-500/20',
  },
  {
    title: 'DTC Wellness Brand',
    result: '3.4x conversions QoQ',
    bullets: ['CRO-focused redesign', 'Speed optimization', 'Email capture funnels'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'B2B IT Services',
    result: 'Page 1 for 18 new keywords',
    bullets: ['Schema & internal linking', 'Service page strategy', 'Reputation and trust signals'],
    gradient: 'from-violet-500/20 to-indigo-500/20',
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Case studies</h2>
            <p className="mt-3 max-w-2xl text-white/70">A glimpse at outcomes we’ve delivered across SaaS, eCommerce, and B2B services.</p>
          </div>
          <a href="#proof" className="text-sm text-white/70 hover:text-white">See more results ↓</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${c.gradient}`} />
              <div className="relative">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.result}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-white/80">
                      <Check className="mt-0.5 h-4 w-4 text-emerald-400" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> View breakdown
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProofSection />
    </section>
  );
}

function ProofSection() {
  const stats = [
    { label: 'Avg. Core Web Vitals', value: '95+' },
    { label: 'Keywords moved to Top 3', value: '120+' },
    { label: 'Client retention', value: '92%' },
    { label: 'Avg. conversion lift', value: '2.8x' },
  ];

  return (
    <section id="proof" className="relative mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-xl md:text-2xl font-semibold">Proof of results</h3>
            <p className="text-sm text-white/70">Data that demonstrates real growth</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center"
              >
                <div className="text-3xl font-semibold">{s.value}</div>
                <div className="mt-2 text-sm text-white/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
