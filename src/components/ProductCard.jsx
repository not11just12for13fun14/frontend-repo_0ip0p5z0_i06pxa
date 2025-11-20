import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'

export default function ProductCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl p-4 bg-white/90 backdrop-blur border border-black/5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition overflow-hidden"
    >
      <div className="relative">
        <img src={item.image_url} alt={item.title} className="h-48 w-full object-cover rounded-xl" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black shadow">
            {item.category}
          </span>
        </div>
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="w-4 h-4 text-pink-500" />
        </button>
      </div>

      <div className="mt-3">
        <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-amber-500 to-cyan-500">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span className="text-sm font-semibold">{item.rating ?? 4.5}</span>
        </div>
        <div className="font-black text-fuchsia-700 text-lg">{item.price.toFixed(2)} zł</div>
      </div>

      {item.colors && item.colors.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {item.colors.map((c, i) => (
            <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-black/5 text-fuchsia-700 border border-fuchsia-200">
              {c}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
