import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Edge from './components/Edge'
import Approach from './components/Approach'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar />
      <main className="relative">
        <Hero />
        {/* Section divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
        <Story />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
        <Edge />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
        <Approach />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
        <Contact />
      </main>
      <footer className="mt-24 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} BlueArc Trading. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy</a>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
