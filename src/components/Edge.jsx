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
    <section id="edge" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What sets us apart</h2>
          <p className="mt-4 text-slate-600 text-lg">A clean architecture, transparent process, and compounding iteration.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm">
                {<f.icon size={22} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
