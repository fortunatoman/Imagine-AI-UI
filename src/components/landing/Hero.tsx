import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const placeholderTexts = [
  'A real estate listing website...',
  'A project management tool...',
  'A personal portfolio...',
  'An e-commerce dashboard...',
]

const suggestionChips = [
  'Linear clone',
  'Notion clone',
  'Portfolio website',
  'Financial dashboard',
]

const cloudFeatures = [
  { label: 'Auth', href: 'https://appwrite.io/products/auth' },
  { label: 'Databases', href: 'https://appwrite.io/docs/products/databases' },
  { label: 'Storage', href: 'https://appwrite.io/products/storage' },
  { label: 'Messaging', href: 'https://appwrite.io/products/messaging' },
  { label: 'Hosting', href: 'https://appwrite.io/products/sites' },
]

export function Hero() {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#fd4584]/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
        >
          Build something{' '}
          <span className="bg-gradient-to-r from-[#fd4584] to-[#fd4584] bg-clip-text text-transparent">
            real
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
        >
          Turn your ideas into functional products by chatting with the most
          complete AI builder ever made.
        </motion.p>

        {/* Input Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="relative bg-[#141414] border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholderTexts[currentPlaceholder]}
                className="flex-1 bg-transparent px-4 py-4 text-white placeholder-white/40 focus:outline-none text-base sm:text-lg"
              />
              <button className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#fd4584] to-[#fd4584] rounded-xl hover:opacity-90 transition-opacity shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1">
              {suggestionChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setInputValue(chip)}
                  className="px-3 py-1.5 text-xs sm:text-sm text-white/50 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Cloud Features */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-white/40">
              With the built-in Cloud
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {cloudFeatures.map((feature, index) => (
                <span key={feature.label} className="flex items-center">
                  <a
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#fd4584] hover:text-[#fd4584]/80 transition-colors"
                  >
                    {feature.label}
                  </a>
                  {index < cloudFeatures.length - 1 && (
                    <span className="text-white/20 mx-1">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
