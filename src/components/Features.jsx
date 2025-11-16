import { motion } from 'framer-motion'
import { MessageCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react'

const items = [
  {
    icon: MessageCircle,
    title: 'Conversational Avatars',
    desc: 'Natural back-and-forth with lip-sync and friendly gestures.'
  },
  {
    icon: Clock,
    title: 'Faster Hiring',
    desc: 'Screen 10x more candidates with automated first-round interviews.'
  },
  {
    icon: ShieldCheck,
    title: 'Bias-Aware',
    desc: 'Structured scoring and anonymized profiles reduce unconscious bias.'
  },
  {
    icon: Sparkles,
    title: 'Smooth & Minimal',
    desc: 'A black-and-white UI with subtle orange highlights and fluid motion.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why teams choose AvaTalk
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mb-4">
                <it.icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-white/70 mt-2">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
