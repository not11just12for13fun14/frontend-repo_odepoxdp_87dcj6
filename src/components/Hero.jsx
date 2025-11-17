import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Precision-driven trading, built on clarity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600"
          >
            We combine disciplined strategy with modern infrastructure to deliver consistent execution across markets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#story" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">Read our story</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-blue-200 text-blue-700 px-5 py-3 text-sm font-medium hover:bg-blue-50 transition-colors">Talk to us</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
