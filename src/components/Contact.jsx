import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-8 md:p-12 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Let’s talk</h2>
              <p className="mt-4 text-slate-600">Whether you’re exploring partnership, careers, or just curious about how we work, we’re happy to connect.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Email</p>
                  <a href="mailto:hello@bluearc.example" className="text-slate-800 hover:text-blue-700">hello@bluearc.example</a>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Careers</p>
                  <a href="#" className="text-slate-800 hover:text-blue-700">View openings</a>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Tell us a bit about your goals" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">Send message</motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
