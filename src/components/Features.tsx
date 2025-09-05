'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-Time Trading',
    description: 'Execute trades instantly with live market data and lightning-fast order execution.',
    icon: BoltIcon,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Advanced Charting',
    description: 'Professional-grade charts with technical indicators, candlesticks, and analysis tools.',
    icon: ChartBarIcon,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Portfolio Analytics',
    description: 'Comprehensive portfolio tracking with performance metrics and risk analysis.',
    icon: CurrencyDollarIcon,
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Global Markets',
    description: 'Access to NYSE, NASDAQ, and international stock markets around the world.',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-violet-500'
  },
  {
    name: '24/7 Monitoring',
    description: 'Round-the-clock market monitoring with alerts and notifications.',
    icon: ClockIcon,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    name: 'Secure Trading',
    description: 'Bank-level security with encrypted transactions and secure account management.',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-pink-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Trading Tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to trade stocks professionally. Advanced tools, 
            real-time data, and secure trading infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}