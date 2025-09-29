import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What can I build with Imagine?',
    answer:
      'Imagine allows you to build real products, not just prototypes. You can launch internal tools, your next SaaS, personal websites, and anything else you can imagine. Each product comes with a cloud built in to ensure it not only looks good, but it actually works in the real world.',
  },
  {
    question: 'Do I need coding experience to use Imagine?',
    answer:
      'No coding experience is required. Imagine is designed to be accessible to everyone, from complete beginners to experienced developers. Simply describe what you want to build in natural language, and the AI handles the technical implementation. However, having some basic understanding of how applications work can help you communicate your ideas more effectively.',
  },
  {
    question: 'Is my data secure with Imagine?',
    answer:
      'Yes, Imagine has the highest security standards and is built with a security-first approach. We have built-in DDoS protection, compliance, user access permissions, encryption, abuse protection, and more features to keep your data safe.',
  },
  {
    question: 'Can I export my code and deploy it elsewhere?',
    answer:
      'This feature will be added soon, but for now, this is not possible.',
  },
  {
    question: 'How does Imagine generate production-ready code?',
    answer:
      "Imagine's AI agent architecture is designed to replicate workflows similar to how world-class product and engineering teams work. We use Anthropic models to generate code, ensuring high-quality, production-ready output. The generated code adheres to industry standards and best practices, ensuring it is functional, maintainable, and scalable.",
  },
  {
    question: 'Is there a free plan available?',
    answer:
      'Yes, Imagine offers a free plan perfect for personal projects and experimentation. The free tier includes generous limits that allow you to build and deploy real applications. For production use and larger projects, we offer Pro and Enterprise plans with additional features, higher limits, and priority support.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQ</h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#141414] border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
