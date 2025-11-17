import { motion } from 'framer-motion'
import { ShieldCheck, Gauge, LineChart } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Risk First',
    desc: 'Portfolio-level risk controls and pre-trade checks built into every decision.',
  },
  {
    icon: Gauge,
    title: 'Speed With Control',
    desc: 'Deterministic execution with measured latency and observable metrics.',
  },
  {
    icon: LineChart,
    title: 'Data As Leverage',
    desc: 'Event-driven research loop that compounds small edges over time.',
  },
]

export default function Edge() {
  return (
    <section id="edge" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">What sets us apart</h2>
          <p className="mt-4 text-slate-300 text-lg">A clean architecture, transparent process, and compounding iteration.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_10px_30px_-10px] shadow-blue-600/60 group-hover:scale-105 transition-transform">
                {<f.icon size={22} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-400">{f.desc}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-600/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
