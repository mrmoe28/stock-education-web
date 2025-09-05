'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '$2.5B+', label: 'Trading Volume Daily' },
  { number: '100K+', label: 'Active Traders' },
  { number: '99.9%', label: 'Platform Uptime' },
  { number: '5,000+', label: 'Global Stocks Available' }
]

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Professional Traders
          </h2>
          <p className="text-xl text-green-100">
            Join thousands of investors trading with our platform every day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-green-100 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start trading?
            </h3>
            <p className="text-green-100 mb-6">
              Get access to real-time market data, advanced analytics, and professional trading tools.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Open Trading Account
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}