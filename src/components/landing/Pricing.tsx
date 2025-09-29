import { useState } from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'For personal passion projects and non-commercial use',
    features: [
      '5 credits / day',
      '5GB bandwidth',
      '2GB storage',
      'Community support',
    ],
    cta: 'Start building',
    href: 'https://imagine-ai.omsharma.xyz/console',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$25',
    period: 'per month',
    description: 'For pro teams and production projects that need to scale',
    features: [
      '100 credits / month',
      '1TB bandwidth',
      '100GB storage',
      'Email support',
    ],
    cta: 'Start building',
    href: 'https://imagine-ai.omsharma.xyz/console',
    highlighted: true,
    hasSlider: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with custom requirements',
    features: [
      'Custom bandwidth',
      'Unlimited projects',
      'Priority support',
      'Custom SLA',
    ],
    cta: 'Contact us',
    href: '/enterprise',
    highlighted: false,
  },
]

export function Pricing() {
  const [credits, setCredits] = useState(100)

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Pick a plan, start building
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Choose the plan that fits your needs. Start free and scale as you
            grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-[#141414] border rounded-2xl p-6 ${plan.highlighted
                  ? 'border-[#fd4584]/50 shadow-lg shadow-[#fd4584]/10'
                  : 'border-white/10'
                }`}
            >
              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-white/50 ml-2">{plan.period}</span>
                )}
              </div>

              {/* Credits Slider for Pro */}
              {plan.hasSlider && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/50">Credits / month</span>
                    <span className="text-white font-medium">{credits}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    value={credits}
                    onChange={(e) => setCredits(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fd4584]"
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-white/50 mb-6">{plan.description}</p>

              {/* CTA Button */}
              <a
                href={plan.href}
                target={plan.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  plan.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className={`block w-full py-3 text-center text-sm font-medium rounded-lg transition-all ${plan.highlighted
                    ? 'bg-gradient-to-r from-[#fd4584] to-[#fd4584] text-white hover:opacity-90'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <Check className="w-4 h-4 text-[#fd4584] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View Full Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="/pricing"
            className="text-sm text-[#fd4584] hover:text-[#fd4584]/80 transition-colors"
          >
            View full pricing details →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
