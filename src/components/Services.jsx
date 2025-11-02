import { motion } from 'framer-motion';
import { Code, Search, Shield, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Technical + On-Page SEO',
    desc: 'Audits, site architecture, Core Web Vitals, schema, internal linking, and content optimization to outrank competitors and sustain growth.',
    hue: 'from-emerald-400 to-sky-400',
  },
  {
    icon: Code,
    title: 'Modern Web Development',
    desc: 'Lightning-fast, responsive websites using the latest React stack. Accessibility, performance budgets, and analytics baked in from day one.',
    hue: 'from-fuchsia-400 to-pink-400',
  },
  {
    icon: TrendingUp,
    title: 'Content & Growth Strategy',
    desc: 'Keyword research, topical maps, information architecture, and CRO that aligns with your funnel and business goals.',
    hue: 'from-amber-300 to-orange-400',
  },
  {
    icon: Shield,
    title: 'Site Health & Security',
    desc: 'Monitoring, backups, secure deployments, and ongoing maintenance to keep your site resilient and trustworthy.',
    hue: 'from-cyan-300 to-blue-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/40 blur-3xl" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Services engineered for results</h2>
            <p className="mt-3 max-w-2xl text-white/70">A holistic approach that blends development excellence with proven SEO frameworks to move the needle where it matters.</p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur min-h-72 md:min-h-80"
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.hue}`}>
                <s.icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-70" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
