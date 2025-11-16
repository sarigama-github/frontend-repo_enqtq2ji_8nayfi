import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <footer className="bg-black/95 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} AvaTalk — Black & white, smooth, and friendly.
        </div>
      </footer>
    </div>
  )
}

export default App
