import { useState } from 'react'
import { motion } from 'motion/react'

const categories = ['All', 'Dashboards', 'Landing Pages', 'Games', 'Tools']

const templates = [
  {
    title: 'Modern CRM Dashboard',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/695edcb700356a24edc3-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-695edcb700356a24edc3',
    category: 'Dashboards',
  },
  {
    title: 'Simple Crypto Tracker',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/69418ee500349df29ca5-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-69418ee500349df29ca5',
    category: 'Dashboards',
  },
  {
    title: 'Linear Clone',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/69408e3f001bb0a10d67-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-69408e3f001bb0a10d67',
    category: 'Tools',
  },
  {
    title: 'Expense Management Platform',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/69386afe001bcf747ee4-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-69386afe001bcf747ee4',
    category: 'Dashboards',
  },
  {
    title: 'Appointment Booking System',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/69383a36001b42e30992-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-69383a36001b42e30992',
    category: 'Tools',
  },
  {
    title: '2.5D Farming Game',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/696b426000092b28e18e-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-696b426000092b28e18e',
    category: 'Games',
  },
  {
    title: 'Minimalistic Checkers',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/696b42cc003aed22b981-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-696b42cc003aed22b981',
    category: 'Games',
  },
  {
    title: 'Habit Tracker',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/696b4318003785ca2a5e-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/template-fra-696b4318003785ca2a5e',
    category: 'Tools',
  },
  {
    title: 'Realtor Client Management SaaS',
    image:
      'https://gu3eovmxc6ankafd.public.blob.vercel-storage.com/thumbnails/693601f4002fec9f9912-latest.webp',
    href: 'https://imagine-ai.omsharma.xyz/console/template/693601f4002fec9f9912',
    category: 'Dashboards',
  },
]

export function TemplateGallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTemplates =
    activeCategory === 'All'
      ? templates
      : templates.filter((t) => t.category === activeCategory)

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What did you always want to build?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Whether it's a portfolio, a startup MVP, or an internal tool, if you
            can imagine it, you can build it - no setup, no ceiling.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${activeCategory === category
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Template Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredTemplates.map((template, index) => (
            <motion.a
              key={template.title}
              href={template.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-[#141414] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium group-hover:text-[#fd4584] transition-colors">
                  {template.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Browse All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://imagine-ai.omsharma.xyz/console"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
          >
            Browse all
          </a>
        </motion.div>
      </div>
    </section>
  )
}
