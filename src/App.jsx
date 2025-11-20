import { useEffect, useMemo, useState } from 'react'
import { ShoppingCart, Sparkles } from 'lucide-react'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [animal, setAnimal] = useState('')
  const [query, setQuery] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchProducts = async (opts = {}) => {
    setLoading(true)
    const params = new URLSearchParams()
    if (opts.animal) params.set('animal', opts.animal)
    if (opts.q) params.set('q', opts.q)
    const url = `${backend}/api/products${params.toString() ? `?${params.toString()}` : ''}`
    const res = await fetch(url)
    const data = await res.json()
    setItems(data.items || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts({})
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => fetchProducts({ animal, q: query }), 350)
    return () => clearTimeout(timeout)
  }, [animal, query])

  const headerBg = useMemo(() => ({
    background: 'linear-gradient(135deg, #0b0b0f, #110019)',
  }), [])

  return (
    <div className="min-h-screen" style={headerBg}>
      {/* Top bar */}
      <div className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5 text-fuchsia-400" />
            <span className="font-black tracking-tight">Zoolove Neon Bazaar</span>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-cyan-400 text-black font-extrabold shadow-[0_10px_30px_rgba(255,0,247,0.35)]">
            <ShoppingCart className="w-4 h-4" /> Koszyk
          </button>
        </div>
      </div>

      <Hero onSearch={setQuery} />
      <Categories active={animal} onSelect={setAnimal} />

      <div className="max-w-7xl mx-auto px-6 py-14">
        {loading ? (
          <div className="text-center text-white/70">Ładowanie barwnych cudów...</div>
        ) : items.length === 0 ? (
          <div className="text-center text-white/70">Brak produktów. Użyj przycisku testowego na stronie test, by zasilić bazę.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((it) => (
              <ProductCard key={it._id} item={it} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a href="/test" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">
            Przejdź do strony testowej
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 py-10 border-t border-white/10 text-center text-white/70">
        Stworzone z miłością do zwierzaków i neonów ✨
      </footer>
    </div>
  )
}

export default App
