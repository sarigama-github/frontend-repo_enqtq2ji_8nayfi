import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-24">
        <motion.h1
          className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Interview with an AI Avatar
          <span className="block text-white/70 text-xl sm:text-2xl mt-3 font-normal">Black & white. Minimal. Smooth.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A playful, friendly robot greets your candidates and conducts structured interviews with real-time analysis.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#demo" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Start a demo</a>
          <a href="#features" className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">Learn more</a>
        </motion.div>
      </div>
    </section>
  )
}
