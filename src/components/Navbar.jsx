import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700" />
            <span className="text-lg font-semibold tracking-tight text-slate-800">BlueArc Trading</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-slate-600 hover:text-blue-700 transition-colors">Our Story</a>
            <a href="#edge" className="text-slate-600 hover:text-blue-700 transition-colors">Our Edge</a>
            <a href="#approach" className="text-slate-600 hover:text-blue-700 transition-colors">Approach</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-700 transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">Get in touch</a>
          </nav>

          <button className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#story" className="block text-slate-700">Our Story</a>
            <a onClick={() => setOpen(false)} href="#edge" className="block text-slate-700">Our Edge</a>
            <a onClick={() => setOpen(false)} href="#approach" className="block text-slate-700">Approach</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block text-slate-700">Contact</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
