import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">A story about focus</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Founded by operators, we started with a simple principle: do fewer things, exceptionally well. That focus has guided our path from the first line of code to the thousands of orders we route each day.
          </p>
          <p className="mt-6 text-slate-600">
            Our team blends market experience with engineering discipline. We build systematic processes, test relentlessly, and let the data guide our conviction.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Discipline', text: 'Frameworks for decision-making. No hero trades. No noise.' },
            { title: 'Infrastructure', text: 'Low-latency, observable, and designed for resilience.' },
            { title: 'Alignment', text: 'Incentives that reward long-term compounding over short-term spikes.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
