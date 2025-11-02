import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import FooterCTA from './components/FooterCTA.jsx';

function App() {
  const [loaded, setLoaded] = useState(false);

  // Smooth anchor scrolling for in-page links
  const handleSmoothScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Fallback: ensure loader disappears after 2.2s even if onLoad doesn't fire
    const t = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400 animate-pulse blur-[1px]" />
              <motion.div
                className="absolute inset-0 grid place-items-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'linear' }}
              >
                <div className="h-16 w-16 rounded-xl bg-black" />
              </motion.div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
                <motion.p
                  className="text-sm tracking-widest text-white/70"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Initializing experience…
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md/80">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" onClick={handleSmoothScroll} className="flex items-center gap-3">
            <span className="h-6 w-6 rounded-md bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400" />
            <span className="font-semibold tracking-tight">FluxSEO Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" onClick={handleSmoothScroll} className="hover:text-white">Services</a>
            <a href="#cases" onClick={handleSmoothScroll} className="hover:text-white">Case Studies</a>
            <a href="#proof" onClick={handleSmoothScroll} className="hover:text-white">Proof</a>
            <a href="#team" onClick={handleSmoothScroll} className="hover:text-white">Team</a>
            <a href="#cta" onClick={handleSmoothScroll} className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90">Book a Call</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero onLoaded={() => setLoaded(true)} onCtaClick={handleSmoothScroll} />
        <Services />
        <CaseStudies />
        <FooterCTA onCtaClick={handleSmoothScroll} />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} FluxSEO Studio. All rights reserved.</p>
          <p>Built with care — performance-first, SEO-forward.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
