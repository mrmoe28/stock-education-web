'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: '1',
    title: 'Take the Assessment',
    description: 'Answer 5 simple questions to help us understand your starting point and create a personalized learning path.',
    icon: '📊'
  },
  {
    step: '2', 
    title: 'Learn the Basics',
    description: 'Complete bite-sized lessons covering stocks, charts, risk management, and market psychology.',
    icon: '🎓'
  },
  {
    step: '3',
    title: 'Practice Trading',
    description: 'Use your virtual $10,000 to practice buying and selling stocks with real market data.',
    icon: '💰'
  },
  {
    step: '4',
    title: 'Get Recommendations',
    description: 'Receive AI-powered buy/sell suggestions with confidence ratings and clear explanations.',
    icon: '🤖'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Stock Buddy
            </span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started on your investing journey in just four simple steps
          </p>
        </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {step.step}
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'text-left' : 'lg:text-right'}>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
            Ready to Start Learning? 🚀
          </div>
        </motion.div>
      </div>
    </section>
  )
}