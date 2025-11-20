import { motion } from 'framer-motion'
import { PawPrint, Search, Star, ShoppingBag } from 'lucide-react'

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_10%,#ff00f7_0%,transparent_30%),radial-gradient(circle_at_80%_0%,#00f0ff_0%,transparent_30%),radial-gradient(circle_at_50%_100%,#FFD700_0%,transparent_35%)]"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-2 h-2 rounded-full mix-blend-screen"
            style={{
              background: i % 3 === 0 ? '#ff00f7' : i % 3 === 1 ? '#00f0ff' : '#FFD700',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur text-white border border-white/20 mb-6">
            <PawPrint className="w-4 h-4" />
            <span className="text-sm tracking-wide">Najbardziej ekstrawagancki sklep dla zwierząt</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,0,247,0.35)]">
            Zoolove Neon Bazaar
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Futrzane gadżety, świecące obroże, pałace dla rybek i wszystko co błyszczy. Kolorowo, radośnie i odjazdowo!
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex items-center bg-white/90 rounded-full shadow-xl overflow-hidden">
              <Search className="w-5 h-5 text-fuchsia-600 ml-3" />
              <input
                onChange={(e) => onSearch?.(e.target.value)}
                placeholder="Szukaj neonowych skarbów..."
                className="px-4 py-3 w-64 md:w-96 bg-transparent focus:outline-none placeholder:text-pink-400 text-fuchsia-700"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black font-extrabold shadow-[0_10px_30px_rgba(255,0,247,0.35)] hover:scale-105 transition">
              <ShoppingBag className="w-5 h-5" />
              Przeglądaj hity
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 text-white/90">
            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-300"/> 4.9/5</div>
            <div>Ekspresowa dostawa</div>
            <div>Zwierzo-przyjazne materiały</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
