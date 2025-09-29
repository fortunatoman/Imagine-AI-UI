import { motion } from 'motion/react'
import {
  Shield,
  Lock,
  AlertTriangle,
  Database,
  FileCheck,
  CheckCircle,
} from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'DDoS',
    description:
      'Automatically detect and mitigate Distributed Denial-of-Service (DDoS) attacks.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Lock,
    title: 'Encryption',
    description: 'Built-in data encryption both in rest and in transit.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: AlertTriangle,
    title: 'Abuse protection',
    description: 'Protect your APIs from abuse with built-in protection.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Database,
    title: 'Data migrations',
    description:
      'Easily transfer data from 3rd parties or between Cloud and self-hosted.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: FileCheck,
    title: 'GDPR',
    description:
      'Safeguard user data and privacy with provided GDPR regulations.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: CheckCircle,
    title: 'SOC-2',
    description: 'Ensure the highest level of security and privacy protection.',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Shield,
    title: 'HIPAA',
    description: 'Protect sensitive user health data.',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Shield,
    title: 'CCPA',
    description: 'Protect sensitive user health data.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
]

export function Security() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#fd4584]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Safely scale with built-in security and compliance
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-3xl mx-auto">
            With a security-first approach, we ensure your products and users
            are safe by default, making it easy for you to adhere to strict
            safety policies.
          </p>
        </motion.div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#141414] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors group"
            >
              <div
                className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#fd4584] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
