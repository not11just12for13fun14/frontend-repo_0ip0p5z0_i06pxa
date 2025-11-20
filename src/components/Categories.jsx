import { motion } from 'framer-motion'

const categories = [
  { key: 'dogs', label: 'Psy', emoji: '🐶' },
  { key: 'cats', label: 'Koty', emoji: '🐱' },
  { key: 'fish', label: 'Rybki', emoji: '🐠' },
  { key: 'birds', label: 'Ptaki', emoji: '🦜' },
  { key: 'small-pets', label: 'Gryzonie', emoji: '🐹' },
]

export default function Categories({ active, onSelect }) {
  return (
    <div className="relative -mt-12 z-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {categories.map((c, i) => (
          <motion.button
            key={c.key}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect?.(c.key)}
            className={`rounded-2xl px-4 py-3 text-center font-extrabold shadow-lg border ${active === c.key ? 'bg-black text-white border-white/20' : 'bg-white text-fuchsia-700 border-black/5'} `}
            style={{ backgroundImage: active === c.key ? 'linear-gradient(135deg,#ff00f7,#00f0ff)' : 'linear-gradient(135deg,#ffffff,#fff7fb)' }}
          >
            <div className="text-2xl">{c.emoji}</div>
            <div className="text-sm mt-1">{c.label}</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
