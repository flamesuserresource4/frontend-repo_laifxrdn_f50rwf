import { motion } from 'framer-motion';
import { Users, ArrowRight, Phone } from 'lucide-react';

export default function FooterCTA({ onCtaClick }) {
  return (
    <div className="relative">
      <TeamSection />
      <CTASection onCtaClick={onCtaClick} />
    </div>
  );
}

function TeamSection() {
  const team = [
    { name: 'Ava', role: 'SEO Strategist' },
    { name: 'Miles', role: 'Tech Lead' },
    { name: 'Rin', role: 'Content Architect' },
    { name: 'Leo', role: 'Design Engineer' },
  ];

  return (
    <section id="team" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Meet the team</h2>
            <p className="mt-3 max-w-2xl text-white/70">A tight-knit team of builders and strategists who care deeply about outcomes.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {team.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 min-h-56"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-white/20 to-white/5 grid place-items-center">
                  <Users className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-white/70">{m.role}</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">Focused on impact, speed, and clarity. We collaborate closely with your team to make growth predictable.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onCtaClick }) {
  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold">Ready to unlock compound growth?</h3>
              <p className="mt-3 max-w-2xl text-white/70">We’ll audit your site and map a tailored strategy. No fluff — just actionable steps and measurable targets.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#cta" onClick={(e) => { e.preventDefault(); onCtaClick?.(e); }} className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-black font-medium hover:bg-white/90">
                <Phone className="h-4 w-4" /> Book a Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
