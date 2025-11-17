import { motion } from 'framer-motion'

export default function Approach() {
  return (
    <section id="approach" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">An approach designed for clarity</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />Define the universe, constraints, and risk budget before writing code.</li>
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />Automate the mundane. Review the essential. Measure everything.</li>
              <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />Ship small, verify quickly, and iterate into conviction.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10" />
              <div className="relative grid grid-cols-3 gap-4 text-center">
                {['Research', 'Build', 'Observe', 'Refine', 'Automate', 'Repeat'].map((step) => (
                  <div key={step} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
                    <p className="text-sm font-medium text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
