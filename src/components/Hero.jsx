import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero({ onLoaded, onCtaClick }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} onLoad={onLoaded} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0)_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0.85)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
          className="max-w-3xl"
        >
          <motion.div variants={textVariants} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            Modern SEO + Web Dev Studio
          </motion.div>

          <motion.h1 variants={textVariants} className="text-4xl md:text-6xl font-semibold tracking-tight">
            We design, build and rank websites that convert.
          </motion.h1>

          <motion.p variants={textVariants} className="mt-4 text-white/70 max-w-xl">
            High-performance sites, technical SEO, and content strategies that drive measurable growth. Crafted by engineers, refined by strategists.
          </motion.p>

          <motion.div variants={textVariants} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" onClick={onCtaClick} className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-black font-medium hover:bg-white/90">
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" onClick={onCtaClick} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10">
              <Rocket className="h-4 w-4 text-sky-400" /> Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
