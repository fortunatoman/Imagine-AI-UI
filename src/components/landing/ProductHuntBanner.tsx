import { motion } from 'motion/react'

export function ProductHuntBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-[#fd4584]/10 via-[#fd4584]/5 to-transparent border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
        <span className="text-sm text-white/70">Launching on</span>
        <a
          href="https://apwr.dev/imagine-ph-website"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#DA552F"
            />
            <path
              d="M22.5 20H17.5V14H22.5C24.1569 14 25.5 15.3431 25.5 17C25.5 18.6569 24.1569 20 22.5 20Z"
              fill="white"
            />
            <path
              d="M17.5 22V26H15V14H22.5C25.2614 14 27.5 16.2386 27.5 19C27.5 21.7614 25.2614 24 22.5 24H17.5V22ZM17.5 22H22.5C23.6046 22 24.5 21.1046 24.5 20C24.5 18.8954 23.6046 18 22.5 18H17.5V22Z"
              fill="white"
            />
          </svg>
          <span className="text-sm font-medium text-white">Product Hunt</span>
        </a>
      </div>
    </motion.div>
  )
}
