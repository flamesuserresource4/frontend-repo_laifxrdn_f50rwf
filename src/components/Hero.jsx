import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero({ onLoaded, onCtaClick }) {
  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden" aria-label="Hero">
      {/* 3D scene without mouse-reactive tilt */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} onLoad={onLoaded} />
      </div>

      {/* Gradient overlay should not block interaction with the 3D scene */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0)_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-32">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
          className="max-w-3xl"
        >
          <motion.div variants={textVariants} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            Interactive SEO + Web Dev Studio
          </motion.div>

          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Futuristic websites that rank and convert.
          </motion.h1>

          <motion.p variants={textVariants} className="mt-5 text-white/70 max-w-2xl text-lg">
            We blend modern engineering with search strategy to build digital experiences that feel alive and deliver compounding growth.
          </motion.p>

          <motion.div variants={textVariants} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#cta" onClick={onCtaClick} className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-black font-medium hover:bg-white/90">
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" onClick={onCtaClick} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-white hover:bg-white/10">
              <Rocket className="h-4 w-4 text-sky-400" /> Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
