import { motion } from 'motion/react'
import { User, Database, HardDrive, Bell, Users, Globe } from 'lucide-react'

export function Features() {
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
            Everything you need to build a real product
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Auth Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#fd4584]/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-[#fd4584]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Auth</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Authenticate users securely with multiple login methods like
              Email/Password, SMS, OAuth, Anonymous, and Magic URLs.
            </p>
            {/* Auth Form Preview */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 space-y-3">
              <div>
                <label className="text-xs text-white/40 mb-1 block">
                  Email
                </label>
                <div className="h-9 bg-white/5 rounded-lg border border-white/10" />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1 block">
                  Create Password
                </label>
                <div className="h-9 bg-white/5 rounded-lg border border-white/10" />
              </div>
              <button className="w-full h-9 bg-[#fd4584] text-white text-sm font-medium rounded-lg">
                Sign up
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">or sign up with</span>
                <div className="w-6 h-6 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#fff"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#fff"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#fff"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-white/60">Google</span>
              </div>
            </div>
          </motion.div>

          {/* Databases Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Databases</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Scalable and robust databases backed by your favorite
              technologies.
            </p>
            {/* Database Preview */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 space-y-4">
              <div>
                <h4 className="text-xs font-medium text-white/60 mb-2">
                  Products
                </h4>
                <div className="space-y-1">
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-white/40 border-b border-white/5 pb-1">
                    <span>ID</span>
                    <span>Category</span>
                    <span>Department</span>
                  </div>
                  {['Sweaters', 'Pants', 'T-shirts', 'Shoes'].map((item, i) => (
                    <div
                      key={item}
                      className="grid grid-cols-3 gap-2 text-[10px] text-white/60"
                    >
                      <span className="text-white/40">{`${3397 + i * 1000}...`}</span>
                      <span>{item}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Storage Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <HardDrive className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Storage</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Securely store files with advanced compression, encryption and
              image transformations.
            </p>
            {/* Storage Preview */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Notifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-[10px] font-medium text-[#fd4584] bg-[#fd4584]/10 rounded-full">
                Coming soon
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Notifications
              </h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Send real-time updates and alerts to users through email or SMS.
            </p>
            {/* Notification Preview */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#fd4584]/20 rounded-full flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4 text-[#fd4584]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    New security measures
                  </h4>
                  <p className="text-xs text-white/40 mt-1">
                    Check out our latest security updates to protect your
                    account!
                  </p>
                  <span className="text-[10px] text-white/30 mt-2 block">
                    11:12
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Realtime Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-[10px] font-medium text-[#fd4584] bg-[#fd4584]/10 rounded-full">
                Coming soon
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Realtime</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Build collaborative, dynamic experiences that update instantly for
              every user.
            </p>
            {/* Realtime Preview */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2">
                {['Aditya', 'Emma', 'Walter'].map((name, i) => (
                  <div key={name} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white ${i === 0
                          ? 'bg-blue-500'
                          : i === 1
                            ? 'bg-green-500'
                            : 'bg-orange-500'
                        }`}
                    >
                      {name[0]}
                    </div>
                    <span className="text-xs text-white/60">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hosting Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Hosting</h3>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Host and maintain your website domains and frontend code.
              Integrated with all Appwrite products.
            </p>
            {/* Hosting Preview */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-white/60">
                    myapp.imagine.dev
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-[10px] text-white/40 bg-white/5 rounded">
                    Change domain
                  </button>
                  <button className="px-2 py-1 text-[10px] text-white bg-[#fd4584] rounded">
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            It's in your imagination. Now build it.
          </h3>
          <a
            href="https://imagine-ai.omsharma.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#fd4584] to-[#fd4584] rounded-lg hover:opacity-90 transition-opacity"
          >
            Start now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
