import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Target, Server } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Story() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section id="story" className="relative py-28">
      {/* section background */}
      <div className="absolute inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(600px 300px at 10% 0%, rgba(30,64,175,0.45), transparent 60%), radial-gradient(600px 300px at 90% 30%, rgba(29,78,216,0.35), transparent 60%)'
        }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">A story about focus</h2>
          <p className="mt-4 text-slate-300 text-lg">
            Founded by operators, we started with a simple principle: do fewer things, exceptionally well. That focus has guided our path from the first line of code to the thousands of orders we route each day.
          </p>
          <p className="mt-6 text-slate-400">
            Our team blends market experience with engineering discipline. We build systematic processes, test relentlessly, and let the data guide our conviction.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Discipline', text: 'Frameworks for decision-making. No hero trades. No noise.', icon: Target },
            { title: 'Infrastructure', text: 'Low-latency, observable, and designed for resilience.', icon: Server },
            { title: 'Alignment', text: 'Incentives that reward long-term compounding over short-term spikes.', icon: BookOpen },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_10px_30px_-10px] shadow-blue-600/60">
                {<item.icon size={22} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-400">{item.text}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-600/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
