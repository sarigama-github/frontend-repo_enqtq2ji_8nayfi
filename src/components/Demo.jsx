import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function Demo() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [email, setEmail] = useState('jordan@example.com')
  const [title, setTitle] = useState('Frontend Engineer Screen')
  const [creating, setCreating] = useState(false)
  const [interviews, setInterviews] = useState([])

  const fetchInterviews = async () => {
    const res = await fetch(`${baseUrl}/api/interviews?candidate_email=${encodeURIComponent(email)}`)
    const data = await res.json()
    setInterviews(data)
  }

  useEffect(() => {
    fetchInterviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createInterview = async () => {
    setCreating(true)
    try {
      const res = await fetch(`${baseUrl}/api/interviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, candidate_email: email, questions: [
          'Tell me about yourself',
          'What was a challenging bug you fixed recently?',
          'How do you approach code reviews?'
        ] })
      })
      if (!res.ok) throw new Error('Failed to create interview')
      await res.json()
      await fetchInterviews()
    } catch (e) {
      console.error(e)
      alert('Could not create interview. Check backend connection.')
    } finally {
      setCreating(false)
    }
  }

  return (
    <section id="demo" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Try the demo
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium">Create an interview</h3>
            <p className="text-white/70 text-sm mt-1">This calls the backend API and stores data in the database.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-white/70">Candidate email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md bg-black border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <div>
                <label className="text-sm text-white/70">Interview title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full rounded-md bg-black border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" />
              </div>
              <button onClick={createInterview} disabled={creating} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 disabled:opacity-60">
                {creating && <Loader2 className="h-4 w-4 animate-spin" />} Create
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium">Recent interviews</h3>
            <p className="text-white/70 text-sm mt-1">Loaded via GET /api/interviews</p>
            <div className="mt-4 space-y-3">
              {interviews.length === 0 ? (
                <p className="text-white/60">No interviews yet. Create one to get started.</p>
              ) : (
                interviews.map((iv) => (
                  <div key={iv.id} className="rounded-lg border border-white/10 bg-black/40 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{iv.title}</p>
                        <p className="text-xs text-white/60">{iv.candidate_email}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-white text-black">{iv.status}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
