import { Menu, Bot, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
            <Bot className="h-5 w-5 text-black" />
          </div>
          <span className="font-semibold tracking-tight">AvaTalk</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#demo" className="hover:text-white transition">Demo</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <motion.a
          href="#demo"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Sparkles className="h-4 w-4" /> Try the demo
        </motion.a>

        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
