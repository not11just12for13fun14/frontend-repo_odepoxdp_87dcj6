import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 backdrop-blur p-8 md:p-12 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Let’s talk</h2>
              <p className="mt-4 text-slate-300">Whether you’re exploring partnership, careers, or just curious about how we work, we’re happy to connect.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800/80 p-4 bg-slate-900/60">
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:hello@bluearc.example" className="text-slate-100 hover:text-blue-400">hello@bluearc.example</a>
                </div>
                <div className="rounded-xl border border-slate-800/80 p-4 bg-slate-900/60">
                  <p className="text-sm text-slate-400">Careers</p>
                  <a href="#" className="text-slate-100 hover:text-blue-400">View openings</a>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" placeholder="Tell us a bit about your goals" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow-[0_10px_40px_-10px] shadow-blue-600/60 hover:bg-blue-500 transition-colors">Send message</motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
