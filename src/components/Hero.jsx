import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Dark gradient overlays for high contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30" style={{
        background: 'radial-gradient(600px 300px at 20% 20%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(600px 300px at 80% 40%, rgba(59,130,246,0.25), transparent 60%)'
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Live markets. Real discipline.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Precision‑driven trading, engineered for the dark.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-slate-300"
          >
            We combine disciplined strategy with modern infrastructure to deliver consistent execution across markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#story" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow-[0_10px_40px_-10px] shadow-blue-600/60 hover:bg-blue-500 transition-colors">Read our story</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-blue-500/40 text-blue-300 px-5 py-3 text-sm font-medium hover:bg-blue-500/10 transition-colors">Talk to us</a>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
