import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Edge from './components/Edge'
import Approach from './components/Approach'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Edge />
        <Approach />
        <Contact />
      </main>
      <footer className="mt-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} BlueArc Trading. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-slate-500 hover:text-blue-700">Privacy</a>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a href="#" className="text-slate-500 hover:text-blue-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
