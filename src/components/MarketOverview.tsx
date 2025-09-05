'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'

// Mock real-time stock data (in production, this would come from a real API)
const topStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.34, changePercent: 1.35 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.85, change: -5.21, changePercent: -1.36 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 1.87, changePercent: 1.33 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 144.23, change: 0.45, changePercent: 0.31 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.87, change: -12.45, changePercent: -4.77 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 875.28, change: 24.12, changePercent: 2.84 },
]

const marketIndices = [
  { name: 'S&P 500', value: 4756.50, change: 23.45, changePercent: 0.49 },
  { name: 'Dow Jones', value: 37863.20, change: -45.23, changePercent: -0.12 },
  { name: 'NASDAQ', value: 14834.75, change: 87.34, changePercent: 0.59 },
]

export default function MarketOverview() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setCurrentTime(new Date())
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Market Data
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Real-time stock prices and market indices
          </p>
          <div className="text-sm text-gray-500">
            {isClient && currentTime ? `Last updated: ${currentTime.toLocaleTimeString()}` : 'Loading...'}
          </div>
        </motion.div>

        {/* Market Indices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {marketIndices.map((index, i) => (
            <div key={index.name} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{index.name}</h3>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {index.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className={`flex items-center text-sm font-medium ${
                index.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {index.change >= 0 ? (
                  <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                )}
                {index.change >= 0 ? '+' : ''}${index.change.toFixed(2)} ({index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%)
              </div>
            </div>
          ))}
        </motion.div>

        {/* Top Stocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Most Active Stocks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStocks.map((stock, index) => (
              <motion.div
                key={stock.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{stock.symbol}</h4>
                    <p className="text-sm text-gray-600">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">
                      ${stock.price.toFixed(2)}
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center justify-between text-sm font-medium ${
                  stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <div className="flex items-center">
                    {stock.change >= 0 ? (
                      <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                    )}
                    {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}
                  </div>
                  <div>
                    {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-md transition-all duration-200 transform hover:scale-105">
                    Trade {stock.symbol}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}